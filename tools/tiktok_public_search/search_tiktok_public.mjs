import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { chromium } from 'playwright'

const USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'

function argValue(name, fallback) {
  const index = process.argv.indexOf(name)
  if (index === -1 || index + 1 >= process.argv.length) return fallback
  return process.argv[index + 1]
}

function parseList(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function parseMetric(value) {
  if (typeof value === 'number') return Math.max(0, Math.round(value))
  if (typeof value !== 'string') return 0
  const normalized = value.replace(/,/g, '').trim().toUpperCase()
  const parsed = Number.parseFloat(normalized)
  if (!Number.isFinite(parsed)) return 0
  if (normalized.endsWith('M')) return Math.round(parsed * 1_000_000)
  if (normalized.endsWith('K')) return Math.round(parsed * 1_000)
  return Math.round(parsed)
}

function videoCreatedAt(videoId) {
  try {
    const seconds = Number(BigInt(videoId) >> 32n)
    if (!Number.isFinite(seconds) || seconds <= 0) return null
    return new Date(seconds * 1000)
  } catch {
    return null
  }
}

function compactTerm(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '')
}

function slugTerm(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

function scoreItem(item) {
  return Math.round(
    item.commentCount * 10 +
      item.shareCount * 8 +
      item.collectCount * 4 +
      item.likeCount * 0.5 +
      item.viewCount * 0.02
  )
}

function classifyCaption(caption) {
  const text = caption.toLowerCase()
  const labels = []
  if (/cute|adorable|sweet|baby|puppy|kitten|fluffy|tiny/.test(text)) labels.push('cute')
  if (/stubborn|attitude|sassy|dramatic|refuse|angry|mad|tantrum|argu|talking|side eye|sideeye/.test(text)) {
    labels.push('stubborn_or_sassy')
  }
  if (/eat|food|hungry|treat|snack|dinner|breakfast|feeder|meal/.test(text)) labels.push('food_or_eating')
  if (/reaction|surprise|unexpected|wait for it|caught|first time|does anyone|why/.test(text)) labels.push('surprise_or_reaction')
  if (/clean|groom|bath|hair|fur|shed|vacuum|litter|odor/.test(text)) labels.push('care_or_cleaning')
  return labels.length ? labels : ['unclear']
}

function walkItems(node, provider, term, out = []) {
  if (!node || typeof node !== 'object') return out
  if (Array.isArray(node)) {
    for (const child of node) walkItems(child, provider, term, out)
    return out
  }

  const videoId = node.id ?? node.itemId ?? node.aweme_id
  const author = node.author ?? node.authorInfo ?? node.author_info
  const stats = node.stats ?? node.statistics ?? node.statsV2

  if (typeof videoId === 'string' && /^\d{18,22}$/.test(videoId) && stats) {
    const creatorHandle = String(author?.uniqueId ?? author?.unique_id ?? author?.nickname ?? 'creator').trim()
    const caption = String(node.desc ?? node.description ?? node.title ?? '').trim()
    const createdAt = videoCreatedAt(videoId)
    const item = {
      term,
      provider,
      videoId,
      createdAt: createdAt?.toISOString() ?? null,
      creatorHandle,
      videoUrl: `https://www.tiktok.com/@${creatorHandle}/video/${videoId}`,
      caption,
      viewCount: parseMetric(stats.playCount ?? stats.play_count),
      likeCount: parseMetric(stats.diggCount ?? stats.digg_count),
      commentCount: parseMetric(stats.commentCount ?? stats.comment_count),
      shareCount: parseMetric(stats.shareCount ?? stats.share_count),
      collectCount: parseMetric(stats.collectCount ?? stats.collect_count)
    }
    item.petShapeLabels = classifyCaption(item.caption)
    item.petInterestScore = scoreItem(item)
    out.push(item)
  }

  for (const child of Object.values(node)) walkItems(child, provider, term, out)
  return out
}

async function scrapeRoute(context, route, term) {
  const page = await context.newPage()
  const candidates = []
  const responseTasks = []

  page.on('response', (response) => {
    const url = response.url()
    if (!/\/api\/(challenge\/item_list|seo\/kap\/video_list|preload\/item_list|recommend\/item_list)/.test(url)) return
    responseTasks.push(
      response
        .json()
        .then((payload) => candidates.push(...walkItems(payload, route.provider, term)))
        .catch(() => undefined)
    )
  })

  try {
    await page.goto(route.url, { waitUntil: 'domcontentloaded', timeout: 60_000 })
    for (let index = 0; index < 3; index += 1) {
      await page.waitForTimeout(2_000)
      await page.mouse.wheel(0, 1600).catch(() => undefined)
    }
    await Promise.allSettled(responseTasks)
  } finally {
    await page.close().catch(() => undefined)
  }

  return candidates
}

async function launchResearchContext(profileDir) {
  const options = {
    headless: true,
    ignoreHTTPSErrors: true,
    viewport: { width: 390, height: 844 },
    userAgent: USER_AGENT
  }

  try {
    return await chromium.launchPersistentContext(profileDir, options)
  } catch (error) {
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    if (!existsSync(chromePath)) throw error
    console.warn(`Bundled Chromium launch failed; trying Google Chrome fallback: ${error.message}`)
    return chromium.launchPersistentContext(profileDir, { ...options, executablePath: chromePath })
  }
}

async function main() {
  const terms = parseList(
    argValue(
      '--terms',
      'dogreaction,catreaction,dogmom,catsoftiktok,dogsoftiktok,petparent,puppytiktok,petsoftiktok,petgadgets,doggrooming'
    )
  )
  const outDir = path.resolve(argValue('--out-dir', 'knowledge_base/tool_runs/tiktok_public_search/latest'))
  const days = Number.parseInt(argValue('--days', '45'), 10)
  const max = Number.parseInt(argValue('--max', '80'), 10)

  mkdirSync(outDir, { recursive: true })
  const profileDir = mkdtempSync(path.join(tmpdir(), 'tk-video-pet-search-'))
  const context = await launchResearchContext(profileDir)
  const all = []
  const warnings = []

  try {
    for (const term of terms) {
      const routes = [
        { provider: 'tag', url: `https://www.tiktok.com/tag/${encodeURIComponent(compactTerm(term))}` },
        { provider: 'discover', url: `https://www.tiktok.com/discover/${encodeURIComponent(slugTerm(term))}` }
      ]
      for (const route of routes) {
        try {
          const candidates = await scrapeRoute(context, route, term)
          all.push(...candidates)
          console.log(`${term}/${route.provider}: ${candidates.length}`)
        } catch (error) {
          const message = `${term}/${route.provider} failed: ${error.message}`
          warnings.push(message)
          console.warn(message)
        }
      }
    }
  } finally {
    await context.close().catch(() => undefined)
    rmSync(profileDir, { recursive: true, force: true })
  }

  const cutoff = Date.now() - days * 86_400_000
  const deduped = new Map()
  for (const item of all) {
    const createdTime = item.createdAt ? Date.parse(item.createdAt) : 0
    if (createdTime && createdTime < cutoff) continue
    const existing = deduped.get(item.videoId)
    if (!existing || item.petInterestScore > existing.petInterestScore) deduped.set(item.videoId, item)
  }

  const ranked = [...deduped.values()].sort((left, right) => right.petInterestScore - left.petInterestScore)
  const payload = {
    generatedAt: new Date().toISOString(),
    days,
    terms,
    warnings,
    scoring: 'petInterestScore = comments*10 + shares*8 + collects*4 + likes*0.5 + views*0.02. Public proxy only.',
    candidates: ranked.slice(0, max)
  }

  writeFileSync(path.join(outDir, 'pet_public_search_candidates.json'), JSON.stringify(payload, null, 2))
  writeFileSync(
    path.join(outDir, 'top_links.tsv'),
    ranked
      .slice(0, max)
      .map((item) =>
        [
          item.petInterestScore,
          item.term,
          item.petShapeLabels.join(','),
          item.viewCount,
          item.likeCount,
          item.commentCount,
          item.shareCount,
          item.collectCount,
          item.videoUrl,
          item.caption.replace(/\s+/g, ' ').slice(0, 260)
        ].join('\t')
      )
      .join('\n')
  )
  console.log(path.join(outDir, 'pet_public_search_candidates.json'))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
