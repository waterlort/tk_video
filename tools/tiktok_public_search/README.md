# TikTok public search adapter

This adapter was extracted from `/Users/airlort/Documents/工具` for the `tk_video` project.

It now uses this repository's local Playwright dependency and searches public TikTok mobile tag/discover pages for candidate videos. It does not require copying the whole Electron app into this project.

## Setup

```bash
npm install
npm run playwright:install
```

## Command

```bash
npm run search:tiktok -- \
  --terms "dogreaction,catreaction,dogmom,catsoftiktok,dogsoftiktok,petparent,puppytiktok,petsoftiktok,petgadgets,doggrooming" \
  --days 45 \
  --max 80 \
  --out-dir "knowledge_base/tool_runs/tiktok_public_search/<run_name>"
```

## Output

- `pet_public_search_candidates.json`
- `top_links.tsv`

## Boundaries

- Metrics are public proxies, not true follower or purchase attribution.
- Captions and metadata are not enough to prove the first 3 seconds or visual hook. Top candidates still need manual viewing or screenshots.
- TikTok pages may return off-topic candidates from noisy tag/discover feeds. Keep noisy results as hook-mechanic learning, not niche evidence.
