# US pet commerce-adjacent evidence round 03 case packet

## Batch metadata

- Batch ID: `case_batch_us_pet_2026_05_10_round_03_commerce`
- Issue: `ULT-107`
- Date collected: 2026-05-10
- Region/language target: United States / English-facing
- Collector: TK Case Librarian
- Collection type: public TikTok Creative Center Top Ads snapshots, secondary article video reports, and TikTok Shop manual-snapshot queue rows
- Objective: collect product/commerce-adjacent pet examples only after separating content-first videos from hard-sell ads.
- Target surfaces: grooming, odor control, enrichment toys, pet cameras, washable blankets/beds, training/safety products.
- Source references:
  - `trends/us_pet_trend_radar_2026-05-10_round_01.md`
  - `case_library/2026-05-10_us_pet_round_02_case_packet.md`
  - `playbooks/pet_vertical_seed_2026-05-10.md`
  - `playbooks/visual_identity_lock_protocol_2026-05-10.md`
  - TikTok Creative Center Top Ads pages listed in the case records.
  - Newsweek and AOL secondary reports listed in the case records.
  - TikTok Shop product-category surfaces for pet cameras and waterproof dog blankets.
- Use boundary: evidence intake, case scouting, and manual-snapshot prioritization only.
- Do not use as: durable taxonomy update, relation-claim promotion, conversion claim, product recommendation, or proof that any pet product format will perform.

## Evidence completeness audit

- Evidence completeness score: 0.66 overall.
- Completed/usable case records: 12 video-backed records plus 2 shop/product-surface manual snapshot rows.
- High-confidence fields: source URL, collection date, product surface, source type, public ad metrics where exposed, broad CTA/conversion path, and whether the source is hard-sell or content-first.
- Medium-confidence fields: hook type, first-three-second intent, script structure, filming method, editing rhythm, and product bridge. These are interpreted from Creative Center captions, article summaries, or visible page snippets when direct playback was not reliable.
- Low-confidence or missing fields: exact organic post date for most Top Ads, raw organic views for most ads, full first 3 seconds, full shot sequence, comment text for most TikTok sources, shares/saves for non-ad sources, retention, follower gain, profile visits, clicks, DMs, orders, and verified purchase conversion.
- Main caveat: TikTok Creative Center Top Ads are commercial examples, not proof of organic content behavior. They expose engagement metrics and captions but do not reliably expose comment quality or full playback in this pass.
- Manual follow-up required: pet camera and waterproof/washable blanket rows need authorized TikTok video snapshots before they can become completed case records.

## Source-field clarity check

| Case ID | Surface | Source clarity | Video/detail clarity | Metrics clarity | Comment/source-intent clarity | Current use |
| --- | --- | --- | --- | --- | --- | --- |
| `case_2026_05_10_petcommerce_001` | grooming | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | hard-sell control |
| `case_2026_05_10_petcommerce_002` | grooming | secondary TikTok report | medium-high | views/likes/comments exposed in article | some comment theme reported | content-first counterexample |
| `case_2026_05_10_petcommerce_003` | odor control | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | high-heat hard-sell control |
| `case_2026_05_10_petcommerce_004` | odor control | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | UGC-style ad / routine bridge |
| `case_2026_05_10_petcommerce_005` | odor control | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | utility-demo ad |
| `case_2026_05_10_petcommerce_006` | enrichment toy | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | product-first toy demo |
| `case_2026_05_10_petcommerce_007` | enrichment | secondary TikTok report | medium | source metrics unknown | product intent absent | content-first no-product control |
| `case_2026_05_10_petcommerce_008` | pet camera | secondary TikTok report | medium-high | views/likes/comments exposed in article | light emotional comments reported | content-first product-adjacent case |
| `case_2026_05_10_petcommerce_009` | pet camera | TikTok Shop surface | low for video | shop sales/rating exposed | source intent implied by shop only | manual snapshot row |
| `case_2026_05_10_petcommerce_010` | washable bed | direct Creative Center Top Ad | medium | likes/comments/shares exposed | reply-to-comment bridge | deal/bed ad case |
| `case_2026_05_10_petcommerce_011` | blanket/bed | TikTok Shop surface | low for video | shop sales/rating exposed | source intent implied by shop only | manual snapshot row |
| `case_2026_05_10_petcommerce_012` | heat safety | direct Creative Center Top Ad | medium | likes/comments/shares exposed | reply-to-comment bridge | product answer case |
| `case_2026_05_10_petcommerce_013` | safety/training | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | safety-claim caution case |
| `case_2026_05_10_petcommerce_014` | paw safety | direct Creative Center Top Ad | medium | likes/comments/shares exposed | unknown | low-heat safety control |

## Candidate patterns

- Product-first ads can still produce strong Creative Center heat, but they are weak evidence for community trust because comment quality and intent are mostly hidden.
- The strongest content-first bridge appears when the product is implied by a pet behavior, owner problem, or reply-to-comment demand before the item is named.
- Reply-to-comment ads are the clearest visible conversion bridge in this pass because they make prior source/product intent part of the hook.
- Pet camera content has a natural attention-first structure: the viewer watches pet behavior or owner surprise before the camera becomes the product bridge.
- Washable bed/blanket and odor-control products are commerce-rich but can slip into hard-sell quickly. They need routine, mess, or relief proof before product mention.
- Training/safety products need extra caution. Claims about overheating, containment, paw protection, GPS fences, or behavior training should avoid absolute safety promises.
- Shop category pages show demand and product inventory, not video creative. Use them to queue manual snapshots, not as completed case evidence.

## Candidate claims for TK Knowledge Classifier

- `candidate_claim_petcommerce_2026_05_10_001`: In pet commerce-adjacent content, a visible pet problem or behavior before product mention may preserve attention better than opening on the item itself.
- `candidate_claim_petcommerce_2026_05_10_002`: Reply-to-comment framing is a strong candidate bridge for pet products because it turns source/product questions into the first hook.
- `candidate_claim_petcommerce_2026_05_10_003`: Pet camera videos may work best as content-first evidence because the camera is justified by surprising or emotional footage rather than by product features.
- `candidate_claim_petcommerce_2026_05_10_004`: Odor-control and washable-home products need visual proof of mess, smell relief, cleaning ease, or owner routine before they can avoid hard-sell fatigue.
- `candidate_claim_petcommerce_2026_05_10_005`: Pet safety product claims should be classified separately from ordinary product utility because they carry higher trust, health, and liability risk.

## Counterexamples and caveats

- `case_2026_05_10_petcommerce_003` weakens any simple rule that product-first openings cannot get heat: the Tidy Cats ad is overtly product-first yet has high exposed likes on Creative Center.
- `case_2026_05_10_petcommerce_001`, `013`, and `014` show that lower-comment hard-sell or safety ads can still appear in Top Ads, so CTR/Creative Center inclusion is not the same as discussion quality.
- `case_2026_05_10_petcommerce_007` shows that useful pet-owner attention can be earned without a product bridge. This is a control for enrichment content that should not be forced into commerce too early.
- Shop-only rows are demand/context evidence, not completed video cases. Do not infer first 3 seconds, comment quality, or creator trust from shop listing data.
- Secondary article reports can expose story and public metrics, but they are not a substitute for authorized source snapshots when exact comments, first frame, and edit rhythm matter.

## Recommended next test

Run a small comparison set with clearly separated roles:

- Content-first product bridge: grooming relief, pet camera surprise, enrichment toy routine, washable blanket/bed mess relief.
- Hard-sell control: product in first second for grooming, odor control, bed/blanket, and safety.
- Comment bridge variant: reply-to-comment or "where did you get it" framing for one bed/blanket and one cooling/safety item.
- Non-product control: one enrichment or training tip with no product mention.

Primary readout should compare comment/source intent, saves, retention to product reveal, profile/shop clicks if available, and negative trust comments. Do not generate scripts or video prompts from this packet; use it only to choose what to snapshot or test.

## Case records

### case_2026_05_10_petcommerce_001

#### Identity

- Case ID: `case_2026_05_10_petcommerce_001`
- Source type: ad / hard-sell control
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7189738294900637698/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: Doggiez Pet Comb / grooming product
- Collector: TK Case Librarian

#### Classification

- Content category: pet grooming / shedding control
- Audience motive: reduce grooming friction and pet hair cleanup
- Viewer tension or curiosity gap: whether a simple comb can remove enough hair to justify purchase
- Hook type: product demonstration / direct product promise
- Attention before product mention: no; product is the subject immediately.
- First 3 seconds: unknown exact frame; caption and page framing indicate product-first setup.
- Script structure: product shown -> grooming benefit -> purchase CTA.
- Filming method: product demo, likely close-up grooming footage; exact shots unknown.
- Editing rhythm: unknown; likely direct demo.
- Music/audio role: unknown.
- Conversion path: "Get it now" CTA through ad/shop path.
- Product/affiliate fit: high, but hard-sell.

#### Creative details

- First frame: unknown.
- On-screen text/caption: product-name and CTA oriented.
- Voiceover/caption: caption is short and product-forward.
- Shot sequence: unknown.
- Visual proof: implied grooming tool use; not verified in playback.
- CTA: direct buy CTA.
- Comments/discussion signals: 49 comments exposed; comment content unknown.
- Heat signals: 2K likes, 49 comments, 14 shares, CTR Top 1 percent, conversion Top 26 percent, 6-second view rate Top 15 percent.

#### Metrics

- Views: unknown.
- Likes: 2K.
- Comments: 49.
- Shares: 14.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 15 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: direct grooming-product demo can function as a hard-sell control for content-first tests.
- Supporting claims: none durable; candidate input for `candidate_claim_petcommerce_2026_05_10_001`.
- Counterexample to: "all pet product videos need narrative before the item."
- Risks: low community signal; product-first fatigue; pet comfort and grooming safety not visible.
- Confidence: medium-low.
- Next test idea: compare the same grooming utility against a first-second pet discomfort or shedding-mess hook.

### case_2026_05_10_petcommerce_002

#### Identity

- Case ID: `case_2026_05_10_petcommerce_002`
- Source type: viral reference / secondary TikTok report
- Source URL or local file: https://www.newsweek.com/video-dog-home-grooming-fail-internet-hysterics-1911106
- Date collected: 2026-05-10
- Source/post date: TikTok video posted 2024-06-03; article published 2024-06-11
- Region/language: United States / English-facing
- Account/niche: `@peteyandpenny`; pet comedy / home grooming
- Collector: TK Case Librarian

#### Classification

- Content category: grooming / pet comedy / failed test
- Audience motive: recognition of owner mistake, funny pet transformation, grooming anxiety relief
- Viewer tension or curiosity gap: how badly a home haircut can go
- Hook type: reveal / failure payoff
- Attention before product mention: yes; no product mention is central in the reported frame.
- First 3 seconds: exact source frame unknown; article describes a grooming-fail reveal.
- Script structure: setup of home grooming -> visual reveal -> audience reaction/comments.
- Filming method: owner-shot pet footage.
- Editing rhythm: likely short reveal/comedy beat; exact rhythm unknown.
- Music/audio role: unknown.
- Conversion path: no direct CTA; product bridge could be grooming tools, clippers, or professional grooming only if added later.
- Product/affiliate fit: medium, but only after attention is earned.

#### Creative details

- First frame: unknown from source article.
- On-screen text/caption: original caption not fully relied on here; article reports home-grooming context.
- Voiceover/caption: unknown.
- Shot sequence: dog grooming result shown to trigger reaction.
- Visual proof: visual transformation/fail is the evidence.
- CTA: none observed.
- Comments/discussion signals: article reports viewers joked and reacted to the result; raw comment text not fully captured.
- Heat signals: 4.6M views, 825.3K likes, 2,914 comments reported by article.

#### Metrics

- Views: 4.6M.
- Likes: 825.3K.
- Comments: 2,914.
- Shares: unknown.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: unknown.

#### Knowledge value

- Repeatable pattern: grooming content earns attention through transformation/fail before any product bridge.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_001`.
- Counterexample to: product-first grooming demos are the only grooming commerce path.
- Risks: do not stage unsafe grooming; avoid mocking distressed pets; no product claim without proof.
- Confidence: medium.
- Next test idea: capture grooming examples where comments ask what tool, salon, or brush was used.

### case_2026_05_10_petcommerce_003

#### Identity

- Case ID: `case_2026_05_10_petcommerce_003`
- Source type: ad / hard-sell control
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7215268408854085633/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: Tidy Cats / cat litter odor-control product
- Collector: TK Case Librarian

#### Classification

- Content category: odor control / cat litter
- Audience motive: reduce litter-box smell and mess
- Viewer tension or curiosity gap: whether lightweight litter can still control odor
- Hook type: product promise / category comparison
- Attention before product mention: no; brand and product are immediate.
- First 3 seconds: unknown exact frame; caption opens on product/brand promise.
- Script structure: product claim -> benefit proof or demonstration -> shop CTA.
- Filming method: product/ad demo; exact footage unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: shop/ad CTA.
- Product/affiliate fit: high, hard-sell.

#### Creative details

- First frame: unknown.
- On-screen text/caption: lightweight litter and odor-control benefit.
- Voiceover/caption: product promise.
- Shot sequence: unknown.
- Visual proof: likely product/litter usage; not verified.
- CTA: direct purchase path.
- Comments/discussion signals: 150 comments exposed; raw intent unknown.
- Heat signals: 190K likes, 150 comments, 644 shares, CTR Top 1 percent, conversion Top 6 percent, 6-second view rate Top 29 percent.

#### Metrics

- Views: unknown.
- Likes: 190K.
- Comments: 150.
- Shares: 644.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 29 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: a clear odor-control promise can still produce high ad heat even when product-first.
- Supporting claims: caveat for `candidate_claim_petcommerce_2026_05_10_004`.
- Counterexample to: "content-first is always necessary for pet utility ads."
- Risks: odor claims need substantiation; comments may include skepticism that is not visible here.
- Confidence: medium-low.
- Next test idea: compare brand/product-first odor claims against a litter-box routine or smell-relief reveal.

### case_2026_05_10_petcommerce_004

#### Identity

- Case ID: `case_2026_05_10_petcommerce_004`
- Source type: ad / UGC-style product bridge
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7276546001073225729/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: PrettyLitter / cat litter and cat-health-adjacent product
- Collector: TK Case Librarian

#### Classification

- Content category: odor control / litter routine / cat-owner identity
- Audience motive: cat-care utility, easier cleaning, possible health curiosity
- Viewer tension or curiosity gap: which cat or litter routine choice fits the viewer
- Hook type: game-like selection / "choose your player"
- Attention before product mention: partial; the opening can frame cat/routine choice before the product promise, but brand/product is still central.
- First 3 seconds: unknown exact frame; caption suggests a choice format rather than pure product naming.
- Script structure: playful hook -> product/routine reveal -> shop CTA.
- Filming method: UGC-style cat/litter demo; exact shots unknown.
- Editing rhythm: likely list/selection pacing.
- Music/audio role: unknown.
- Conversion path: ad/shop CTA.
- Product/affiliate fit: high.

#### Creative details

- First frame: unknown.
- On-screen text/caption: playful selection language tied to PrettyLitter.
- Voiceover/caption: cat-owner choice framing.
- Shot sequence: unknown.
- Visual proof: likely litter/cat routine, not verified.
- CTA: ad/shop path.
- Comments/discussion signals: 10 comments exposed; raw content unknown.
- Heat signals: 169K likes, 10 comments, 5 shares, CTR Top 1 percent, conversion Top 6 percent, 6-second view rate Top 31 percent.

#### Metrics

- Views: unknown.
- Likes: 169K.
- Comments: 10.
- Shares: 5.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 31 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: playful cat-owner format can soften an odor/litter product pitch.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_004`.
- Counterexample to: none; mainly a bridge case.
- Risks: health-adjacent litter claims need caution; low exposed comments limit confidence.
- Confidence: medium-low.
- Next test idea: test cat routine framing with no health claim and measure whether comments ask about litter source.

### case_2026_05_10_petcommerce_005

#### Identity

- Case ID: `case_2026_05_10_petcommerce_005`
- Source type: ad / utility demo
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7574844056007983111/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: PetPivot Self-Cleaning Litter Box / cat cleaning utility
- Collector: TK Case Librarian

#### Classification

- Content category: odor control / litter-box automation
- Audience motive: avoid scooping, reduce smell, simplify cat care
- Viewer tension or curiosity gap: whether a self-cleaning litter box actually solves the disliked chore
- Hook type: problem relief / task elimination
- Attention before product mention: partial; the problem of scooping can lead, but the product is central.
- First 3 seconds: unknown exact frame.
- Script structure: disliked chore -> automated product -> relief/CTA.
- Filming method: product demo; likely appliance/litter-box shots.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: ad/shop path.
- Product/affiliate fit: high.

#### Creative details

- First frame: unknown.
- On-screen text/caption: "never scoop litter" style promise.
- Voiceover/caption: chore-removal benefit.
- Shot sequence: unknown.
- Visual proof: likely automated litter-box action; not verified.
- CTA: direct shop/ad path.
- Comments/discussion signals: 0 comments exposed; no discussion signal.
- Heat signals: 5.6K likes, 0 comments, 0 shares, CTR Top 1 percent, conversion Top 1 percent, 6-second view rate Top 1 percent.

#### Metrics

- Views: unknown.
- Likes: 5.6K.
- Comments: 0.
- Shares: 0.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 1 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: strong chore-removal claims can register high ad efficiency even with no visible discussion.
- Supporting claims: caveat for `candidate_claim_petcommerce_2026_05_10_004`.
- Counterexample to: "comment activity is required for product performance."
- Risks: automatic litter boxes raise safety and reliability concerns; claims need verification and cautious language.
- Confidence: medium-low.
- Next test idea: collect comments from organic automatic-litter videos to separate genuine owner trust from pure ad efficiency.

### case_2026_05_10_petcommerce_006

#### Identity

- Case ID: `case_2026_05_10_petcommerce_006`
- Source type: ad / product demo
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7148872885531443201/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: Wild One / pet toys and accessories
- Collector: TK Case Librarian

#### Classification

- Content category: enrichment toy / dog play
- Audience motive: entertain dog, reduce boredom, find a giftable toy
- Viewer tension or curiosity gap: what toy should the dog try next
- Hook type: question/list prompt
- Attention before product mention: partial; caption asks what to try, but product is named early.
- First 3 seconds: unknown exact frame.
- Script structure: toy prompt -> product play/demo -> CTA.
- Filming method: toy/product demo with dog involvement, exact shots unknown.
- Editing rhythm: likely short demo loop.
- Music/audio role: unknown.
- Conversion path: ad/shop path.
- Product/affiliate fit: high.

#### Creative details

- First frame: unknown.
- On-screen text/caption: question plus product name.
- Voiceover/caption: prompt around trying a toy.
- Shot sequence: unknown.
- Visual proof: likely dog interacting with toy; not verified.
- CTA: direct purchase path.
- Comments/discussion signals: 25 comments exposed; raw product/source intent unknown.
- Heat signals: 13K likes, 25 comments, 39 shares, CTR Top 1 percent, conversion Top 35 percent, 6-second view rate Top 21 percent.

#### Metrics

- Views: unknown.
- Likes: 13K.
- Comments: 25.
- Shares: 39.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 21 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: enrichment toy ads can use a "what should we try" prompt, but visible product-source comments were not available.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_001`.
- Counterexample to: none.
- Risks: low visible discussion; no proof the dog remains engaged after novelty.
- Confidence: medium-low.
- Next test idea: collect organic toy demos where comments ask for the toy link, durability, size, or dog-breed fit.

### case_2026_05_10_petcommerce_007

#### Identity

- Case ID: `case_2026_05_10_petcommerce_007`
- Source type: viral reference / secondary TikTok report / non-product control
- Source URL or local file: https://www.aol.com/news/dog-trainer-shares-simple-activity-220000659.html
- Date collected: 2026-05-10
- Source/post date: source TikTok reported as 2026-01-13; article published 2026-01-23
- Region/language: United States / English-facing
- Account/niche: Tom Davis / dog training and enrichment education
- Collector: TK Case Librarian

#### Classification

- Content category: enrichment / training education
- Audience motive: help a dog burn energy and stay mentally engaged
- Viewer tension or curiosity gap: a simple activity that can tire a dog without buying a new item
- Hook type: trainer advice / practical tip
- Attention before product mention: yes; product mention is absent or not central.
- First 3 seconds: unknown exact frame; article frames trainer-led activity.
- Script structure: trainer claim -> demonstration/activity -> explanation of benefit.
- Filming method: educator/trainer demo, exact shots unknown.
- Editing rhythm: instructional.
- Music/audio role: unknown.
- Conversion path: no direct product path observed; potential indirect authority/follow path.
- Product/affiliate fit: low direct fit, useful as a non-product enrichment control.

#### Creative details

- First frame: unknown.
- On-screen text/caption: unknown.
- Voiceover/caption: trainer explanation.
- Shot sequence: unknown.
- Visual proof: activity demonstration.
- CTA: unknown.
- Comments/discussion signals: article comments are not TikTok comments; source comment signal unknown.
- Heat signals: unknown from accessible source.

#### Metrics

- Views: unknown.
- Likes: unknown.
- Comments: unknown.
- Shares: unknown.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: unknown.

#### Knowledge value

- Repeatable pattern: enrichment education can earn attention through practical owner relief without commerce.
- Supporting claims: caveat for `candidate_claim_petcommerce_2026_05_10_001`.
- Counterexample to: every enrichment video should immediately bridge to a product.
- Risks: no direct metrics captured; secondary source only.
- Confidence: low-medium.
- Next test idea: pair one no-product enrichment tip against one toy-led enrichment demo and compare saves plus product/source comments.

### case_2026_05_10_petcommerce_008

#### Identity

- Case ID: `case_2026_05_10_petcommerce_008`
- Source type: viral reference / secondary TikTok report
- Source URL or local file: https://www.newsweek.com/owner-pet-camera-golden-retriever-puppy-dog-tiktok-2075129
- Date collected: 2026-05-10
- Source/post date: article published 2025-05-22
- Region/language: United States / English-facing
- Account/niche: `@reaganhusick`; dog-owner life / pet camera moment
- Collector: TK Case Librarian

#### Classification

- Content category: pet camera / emotional or funny pet surveillance moment
- Audience motive: see what pets do when owners are away; emotional bonding; puppy cuteness
- Viewer tension or curiosity gap: what the owner discovered after checking the camera
- Hook type: surveillance reveal / owner surprise
- Attention before product mention: yes; pet behavior drives attention before the camera becomes a product bridge.
- First 3 seconds: exact source frame unknown; article reports a pet-camera discovery.
- Script structure: owner checks camera -> pet behavior reveal -> audience emotional reaction.
- Filming method: pet-camera footage or owner recording of camera feed, exact method unknown.
- Editing rhythm: likely reveal/short reaction format.
- Music/audio role: unknown.
- Conversion path: none observed; product bridge could be camera brand/model questions if comments ask.
- Product/affiliate fit: medium-high, but trust depends on real footage.

#### Creative details

- First frame: unknown.
- On-screen text/caption: unknown.
- Voiceover/caption: owner context via caption/report.
- Shot sequence: camera footage reveal.
- Visual proof: pet-camera clip itself is the proof.
- CTA: none observed.
- Comments/discussion signals: 250 comments reported by article; comments included emotional reaction but product/source intent was not confirmed.
- Heat signals: more than 954K views and 150.5K likes reported by article.

#### Metrics

- Views: 954K+.
- Likes: 150.5K.
- Comments: 250.
- Shares: unknown.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: unknown.

#### Knowledge value

- Repeatable pattern: pet camera products can be introduced after a story-worthy captured moment instead of before it.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_003`.
- Counterexample to: pet-camera content needs feature-led selling first.
- Risks: privacy/context concerns; avoid staging distress; source camera brand unknown.
- Confidence: medium.
- Next test idea: collect direct TikTok pet-camera examples and classify whether comments ask about the camera or only react to the pet.

### case_2026_05_10_petcommerce_009

#### Identity

- Case ID: `case_2026_05_10_petcommerce_009`
- Source type: TikTok Shop product-surface manual snapshot row
- Source URL or local file: https://shop.tiktok.com/us/k/pet-cameras
- Date collected: 2026-05-10
- Source/post date: unknown; page search snippets were current around May 2026
- Region/language: United States / English-facing
- Account/niche: TikTok Shop pet cameras category / Furbo and related listings
- Collector: TK Case Librarian

#### Classification

- Content category: pet camera / shop demand surface
- Audience motive: monitor pets remotely, talk to pets, treat dispensing, home reassurance
- Viewer tension or curiosity gap: unknown at video level.
- Hook type: unknown.
- Attention before product mention: unknown; no completed video observed.
- First 3 seconds: unknown.
- Script structure: unknown.
- Filming method: unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: TikTok Shop listing/category path.
- Product/affiliate fit: high, but evidence is product-surface only.

#### Creative details

- First frame: unknown.
- On-screen text/caption: unknown.
- Voiceover/caption: unknown.
- Shot sequence: unknown.
- Visual proof: shop listings expose product claims, not creative proof.
- CTA: shop/listing purchase path.
- Comments/discussion signals: product reviews/ratings may exist; TikTok video comments not captured.
- Heat signals: snippets showed Furbo pet-camera listing surfaces with ratings/sold counts, but no video performance metrics.

#### Metrics

- Views: unknown.
- Likes: unknown.
- Comments: unknown.
- Shares: unknown.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: unknown.

#### Knowledge value

- Repeatable pattern: pet cameras are commercially present on TikTok Shop, but this does not prove a video pattern.
- Supporting claims: manual input for `candidate_claim_petcommerce_2026_05_10_003`.
- Counterexample to: none; not a completed video case.
- Risks: shop pages may include product-generated copy and do not expose creative context.
- Confidence: low.
- Next test idea: capture 3-5 actual pet-camera TikTok videos with first frame, comments, and whether product/source questions appear.

### case_2026_05_10_petcommerce_010

#### Identity

- Case ID: `case_2026_05_10_petcommerce_010`
- Source type: ad / reply-to-comment product bridge
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7527059804369305607/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: Yiruka Pets / large dog bed
- Collector: TK Case Librarian

#### Classification

- Content category: washable blankets/beds / comfort product
- Audience motive: large comfortable bed, deal discovery, pet comfort
- Viewer tension or curiosity gap: whether a large bed can be found for about $40
- Hook type: reply-to-comment / deal reveal
- Attention before product mention: partial; source intent appears first through reply-to-comment, but the product/deal is central.
- First 3 seconds: unknown exact frame; caption indicates reply-to-comment setup.
- Script structure: audience request/comment -> price/product reveal -> shop CTA.
- Filming method: product demo/showcase, exact shots unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: reply-to-comment bridge into ad/shop path.
- Product/affiliate fit: high.

#### Creative details

- First frame: unknown.
- On-screen text/caption: reply-to-comment plus price/product hook.
- Voiceover/caption: deal and size framing.
- Shot sequence: unknown.
- Visual proof: likely dog bed scale/comfort demonstration; not verified.
- CTA: direct shop/ad path.
- Comments/discussion signals: 22 comments exposed; the reply-to-comment format implies prior product/source intent, but raw comments unknown.
- Heat signals: 626 likes, 22 comments, 71 shares, CTR Top 1 percent, conversion Top 6 percent, 6-second view rate Top 12 percent.

#### Metrics

- Views: unknown.
- Likes: 626.
- Comments: 22.
- Shares: 71.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 12 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: reply-to-comment plus specific price can bridge from source intent to product pitch.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_002`, `candidate_claim_petcommerce_2026_05_10_004`.
- Counterexample to: none.
- Risks: price-first hooks can age quickly; washable/comfort claims need actual use proof.
- Confidence: medium-low.
- Next test idea: compare bed/blanket videos using reply-to-comment framing versus ordinary product showcase.

### case_2026_05_10_petcommerce_011

#### Identity

- Case ID: `case_2026_05_10_petcommerce_011`
- Source type: TikTok Shop product-surface manual snapshot row
- Source URL or local file: https://shop.tiktok.com/us/k/waterproof-dog-blanket
- Date collected: 2026-05-10
- Source/post date: unknown; page search snippets were current around May 2026
- Region/language: United States / English-facing
- Account/niche: TikTok Shop waterproof dog blanket category / Lesure, PetAmi, and related listings
- Collector: TK Case Librarian

#### Classification

- Content category: washable blankets/beds / home protection
- Audience motive: protect couch/bed/car, reduce washing burden, manage shedding or accidents
- Viewer tension or curiosity gap: unknown at video level.
- Hook type: unknown.
- Attention before product mention: unknown; no completed video observed.
- First 3 seconds: unknown.
- Script structure: unknown.
- Filming method: unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: TikTok Shop listing/category path.
- Product/affiliate fit: high, but evidence is shop-surface only.

#### Creative details

- First frame: unknown.
- On-screen text/caption: unknown.
- Voiceover/caption: unknown.
- Shot sequence: unknown.
- Visual proof: listing claims only; no video proof captured.
- CTA: shop/listing purchase path.
- Comments/discussion signals: product reviews/ratings may exist; TikTok video comments not captured.
- Heat signals: snippets showed high sold-count blanket listings, but no video performance metrics.

#### Metrics

- Views: unknown.
- Likes: unknown.
- Comments: unknown.
- Shares: unknown.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: unknown.

#### Knowledge value

- Repeatable pattern: waterproof/washable blanket products have TikTok Shop demand, but video mechanics remain unknown.
- Supporting claims: manual input for `candidate_claim_petcommerce_2026_05_10_004`.
- Counterexample to: none; not a completed video case.
- Risks: inferring video performance from shop sales would be invalid.
- Confidence: low.
- Next test idea: snapshot videos that show before/after couch, crate, car, or bed mess relief before product mention.

### case_2026_05_10_petcommerce_012

#### Identity

- Case ID: `case_2026_05_10_petcommerce_012`
- Source type: ad / reply-to-comment product bridge
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7505179973889474576/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: Cooling pet mat / heat-safety product
- Collector: TK Case Librarian

#### Classification

- Content category: training/safety / heat comfort product
- Audience motive: keep pet cooler and safer in warm conditions
- Viewer tension or curiosity gap: how to keep a pet cool without a complicated setup
- Hook type: reply-to-comment / seasonal problem answer
- Attention before product mention: partial; the reply-to-comment frame and heat problem appear before or alongside the item.
- First 3 seconds: unknown exact frame.
- Script structure: viewer/comment request -> heat problem -> cooling mat answer -> shop CTA.
- Filming method: product demo with pet, exact shots unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: ad/shop path.
- Product/affiliate fit: high.

#### Creative details

- First frame: unknown.
- On-screen text/caption: reply-to-comment and "dog overheat" problem framing.
- Voiceover/caption: product solution to heat problem.
- Shot sequence: unknown.
- Visual proof: likely pet using mat; not verified.
- CTA: direct shop/ad path.
- Comments/discussion signals: 193 comments exposed; reply-to-comment format implies source/product intent, but raw comments unknown.
- Heat signals: 8.1K likes, 193 comments, 56 shares, CTR Top 1 percent, conversion Top 40 percent, 6-second view rate Top 17 percent.

#### Metrics

- Views: unknown.
- Likes: 8.1K.
- Comments: 193.
- Shares: 56.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 17 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: seasonal safety concern plus reply-to-comment can make a product bridge feel demand-led.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_002`, `candidate_claim_petcommerce_2026_05_10_005`.
- Counterexample to: none.
- Risks: overheating is health/safety-adjacent; avoid implying a mat prevents all heat risk.
- Confidence: medium-low.
- Next test idea: capture heat-comfort videos with comments to see whether viewers ask about effectiveness, size, and safety limits.

### case_2026_05_10_petcommerce_013

#### Identity

- Case ID: `case_2026_05_10_petcommerce_013`
- Source type: ad / safety-claim product
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7321447087257681921/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: PetSafe / GPS wireless fence
- Collector: TK Case Librarian

#### Classification

- Content category: training/safety / containment product
- Audience motive: keep dogs contained without traditional fencing
- Viewer tension or curiosity gap: whether a GPS fence is reliable and humane enough
- Hook type: product promise / freedom plus safety
- Attention before product mention: no or weak; brand/product appears central.
- First 3 seconds: unknown exact frame.
- Script structure: product promise -> safety/freedom benefit -> CTA.
- Filming method: product/outdoor demo, exact shots unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: ad/shop path.
- Product/affiliate fit: high, but high-trust.

#### Creative details

- First frame: unknown.
- On-screen text/caption: GPS wireless fence product promise.
- Voiceover/caption: safety/containment benefit.
- Shot sequence: unknown.
- Visual proof: likely dog outdoors and product/app/receiver; not verified.
- CTA: direct ad/shop path.
- Comments/discussion signals: 13 comments exposed; raw concern/source intent unknown.
- Heat signals: 548 likes, 13 comments, 12 shares, CTR Top 1 percent, conversion Top 2 percent, 6-second view rate Top 21 percent.

#### Metrics

- Views: unknown.
- Likes: 548.
- Comments: 13.
- Shares: 12.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 21 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: safety devices may sell through clear utility claims, but require stricter trust checks than comfort products.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_005`.
- Counterexample to: ordinary low-risk product demo handling.
- Risks: containment, training, escape, injury, and humane-use concerns; avoid absolute safety claims.
- Confidence: medium-low.
- Next test idea: collect organic GPS-fence comments for skepticism, setup questions, and safety objections before any creative test.

### case_2026_05_10_petcommerce_014

#### Identity

- Case ID: `case_2026_05_10_petcommerce_014`
- Source type: ad / safety-product hard-sell control
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/topads/7303279451625242626/pc/en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: United States / English-facing
- Account/niche: dog sneaker / paw-protection product
- Collector: TK Case Librarian

#### Classification

- Content category: training/safety / paw protection / travel accessory
- Audience motive: protect paws outdoors, heat/cold/rough ground concern
- Viewer tension or curiosity gap: whether the dog will tolerate shoes and whether they actually help
- Hook type: direct product benefit
- Attention before product mention: no; product-protection claim is immediate.
- First 3 seconds: unknown exact frame.
- Script structure: paw-protection promise -> product demo -> shop CTA.
- Filming method: product demo, exact shots unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- Conversion path: ad/shop path.
- Product/affiliate fit: high, but hard-sell.

#### Creative details

- First frame: unknown.
- On-screen text/caption: paw-protection product framing.
- Voiceover/caption: protect paws with dog shoes.
- Shot sequence: unknown.
- Visual proof: likely dog wearing shoes; not verified.
- CTA: direct purchase path.
- Comments/discussion signals: 8 comments exposed; raw sentiment unknown.
- Heat signals: 122 likes, 8 comments, 20 shares, CTR Top 1 percent, conversion Top 11 percent, 6-second view rate Top 15 percent.

#### Metrics

- Views: unknown.
- Likes: 122.
- Comments: 8.
- Shares: 20.
- Saves: unknown.
- Followers gained: unknown.
- Profile visits: unknown.
- Clicks/DM/orders: unknown.
- Retention notes: Creative Center 6-second view rate Top 15 percent; raw retention unknown.

#### Knowledge value

- Repeatable pattern: paw-protection products provide a low-heat hard-sell safety control.
- Supporting claims: `candidate_claim_petcommerce_2026_05_10_005`.
- Counterexample to: safety products automatically create strong discussion.
- Risks: fit, comfort, training acclimation, and temperature claims need careful handling.
- Confidence: medium-low.
- Next test idea: compare direct paw-protection product demo against content-first "walk problem" or "dog refuses shoes" framing.
