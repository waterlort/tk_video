# ULT-317 Manual Verification Packet - Creator Persona Rows - 2026-05-18

## Packet Identity

- Issue: ULT-317 / `71dcd84d-4c49-4bef-b406-5bb4f946d58a`
- Parent issue: ULT-313
- Verification agent: tk-case-librarian
- Collection date: 2026-05-18 Asia/Shanghai
- Region/language: US-facing English where visible; non-US/off-topic rows retained as explicit noise controls
- Source type: TikTok public-search scout rows plus public TikTok mobile page capture
- Source inputs:
  - `evaluation/eval_2026_05_18_creator_persona_readiness_ult316.md`
  - `trends/us_creator_persona_radar_2026-05-18_home_pet_auto.md`
  - `case_library/2026-05-18_us_creator_persona_case_packet_home_pet_auto.md`
  - `playbooks/faceless_crossborder_creator_operating_plan_2026-05-18.md`
- Capture assets:
  - `evaluation/assets/ult317_manual_verification_2026-05-18/public_page_capture_summary.json`
  - `evaluation/assets/ult317_manual_verification_2026-05-18/*_first.png`
  - `evaluation/assets/ult317_manual_verification_2026-05-18/*_after3s.png`
- Status: manual public-page verification packet. Not a durable taxonomy, relation, conversion, prediction, or production-lock artifact.

## Verification Status

This pass selected 18 rows as requested: 6 home, 6 pet, and 6 auto. Each category includes 3 high-public-metric relevant rows, 2 lower-signal controls, and 1 high-metric noise/off-topic control.

Verified from public mobile page:

- page loaded for 18/18 selected rows;
- visible opening frame screenshot captured for 18/18;
- caption, handle, audio label, public like/comment/share counts, and search/recommendation context captured for 18/18;
- visual category confirmation completed for 18/18;
- public-page noise controls preserved for 3/18.

Still missing or incomplete:

- exact first video frame and uninterrupted first-3-second playback are approximate because captures use public web playback states, not downloaded source video;
- top comment text could not be retrieved: opening the public comment control triggered TikTok comment-list requests, but responses returned empty bodies in this browser context;
- originality/repost status is visual/caption-level only; no cross-platform reverse lookup was run;
- follower gain, profile visits, retention, clicks, add-to-cart, orders, and true conversion remain unknown.

## Evidence Completeness Score

Overall score after this pass: **0.66 / 1.00**.

| Dimension | Score | Notes |
| --- | ---: | --- |
| Row selection balance | 0.92 | Required 18-row mix was met across home, pet, and auto. |
| Public-page visual confirmation | 0.78 | All rows loaded and screenshots confirm category/noise status. |
| First-3-second certainty | 0.55 | Opening frame and near-opening page state captured; not full source-video extraction. |
| Comment evidence | 0.15 | Public comment counts visible; comment text unavailable in this pass. |
| Originality/repost certainty | 0.35 | Caption/account clues only; repost/AI likely on some rows but not proven by external lookup. |
| Metric completeness | 0.62 | Public proxies captured; business/conversion metrics unknown. |
| Claim hygiene | 0.90 | All patterns remain candidate-only; no durable claims promoted. |

## Selected Row Manifest

Public metrics are proxies from the scout JSON, with visible page counts cross-checked during capture where available. Collection timestamp for page captures: 2026-05-18 Asia/Shanghai.

| Case ID | Category | Bucket | Creator | Term | Posted | Duration | Views | Likes | Comments | Shares | Collects | URL |
| --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `home_01_homewithsaja` | home | high relevant | `@homewithsaja` | amazonhomefinds | 2026-04-09 | 14s | 1,400,000 | 41,500 | 109 | 11,100 | 15,400 | https://www.tiktok.com/@homewithsaja/video/7626850650810256653 |
| `home_02_thesamfindz` | home | high relevant | `@thesamfindz` | amazonhomefinds | 2026-05-02 | 94s | 1,200,000 | 72,600 | 206 | 6,242 | 16,700 | https://www.tiktok.com/@thesamfindz/video/7635334080942361874 |
| `home_03_simplywithjulia` | home | high relevant | `@simplywithjulia` | amazonhomefinds | 2026-05-08 | 8s | 1,400,000 | 26,300 | 216 | 11,000 | 7,981 | https://www.tiktok.com/@simplywithjulia/video/7637344757731036446 |
| `home_04_hacksbyviktoriia` | home | lower-signal control | `@hacksbyviktoriia` | homehacks | 2026-05-18 | 60s | 126 | 5 | 4 | 0 | 2 | https://www.tiktok.com/@hacksbyviktoriia/video/7641061571392851230 |
| `home_05_white_at_home` | home | lower-signal control | `@white.at.home` | amazonhomefinds | 2026-05-13 | 36s | 4,604 | 194 | 3 | 18 | 104 | https://www.tiktok.com/@white.at.home/video/7639432671906630925 |
| `home_06_keyyv7_noise` | home | high-metric noise | `@keyyv7` | homeorganization | 2026-05-07 | 12s | 28,600,000 | 3,200,000 | 6,059 | 5,300,000 | 217,800 | https://www.tiktok.com/@keyyv7/video/7637235374703512850 |
| `pet_01_funny_cat_098` | pet | high relevant | `@funny.cat.098` | catsoftiktok | 2026-04-16 | 97s | 36,900,000 | 7,300,000 | 19,400 | 1,700,000 | 565,200 | https://www.tiktok.com/@funny.cat.098/video/7629298270031891725 |
| `pet_02_dogsbylogan` | pet | high relevant | `@dogsbylogan` | doggrooming | 2026-04-15 | 74s | 7,700,000 | 1,500,000 | 2,463 | 184,800 | 77,100 | https://www.tiktok.com/@dogsbylogan/video/7628780196958686477 |
| `pet_03_dindin_inparis` | pet | high relevant | `@dindin.inparis` | catsoftiktok | 2026-04-10 | 108s | 33,500,000 | 1,200,000 | 10,400 | 87,700 | 77,724 | https://www.tiktok.com/@dindin.inparis/video/7627232156791672086 |
| `pet_04_petsgoodis` | pet | lower-signal control | `@petsgoodis.com` | petgadgets | 2026-04-15 | 19s | 347,000 | 2,292 | 26 | 563 | 360 | https://www.tiktok.com/@petsgoodis.com/video/7628936431544601870 |
| `pet_05_darcyandb` | pet | lower-signal control | `@darcyandb` | dogsoftiktok | 2026-05-13 | 35s | 130,200 | 12,200 | 123 | 1,850 | 1,073 | https://www.tiktok.com/@darcyandb/video/7639455628519296278 |
| `pet_06_herocat2309_ai_noise` | pet | high-metric noise | `@herocat2309` | petgadgets | 2026-04-07 | 60s | 100,600,000 | 1,900,000 | 10,100 | 452,300 | 142,700 | https://www.tiktok.com/@herocat2309/video/7625991410411425046 |
| `auto_01_spiffyuddish` | auto | high relevant | `@spiffyuddish` | cartok | 2026-05-16 | 40s | 680,200 | 97,600 | 736 | 13,300 | 8,163 | https://www.tiktok.com/@spiffyuddish/video/7640386608226716942 |
| `auto_02_vrzmobiledetailing` | auto | high relevant | `@vrzmobiledetailing` | cardetailing | 2026-04-15 | 133s | 786,300 | 42,700 | 461 | 2,239 | 6,215 | https://www.tiktok.com/@vrzmobiledetailing/video/7629031134336208141 |
| `auto_03_alejandrobrett023` | auto | high relevant | `@alejandrobrett023` | cargadgets | 2026-05-08 | 21s | 1,500,000 | 2,226 | 39 | 563 | 632 | https://www.tiktok.com/@alejandrobrett023/video/7637482490394971406 |
| `auto_04_trqautoparts` | auto | lower-signal control | `@trqautoparts` | autoparts | 2026-05-17 | 131s | 3,631 | 149 | 7 | 4 | 12 | https://www.tiktok.com/@trqautoparts/video/7640992617055964430 |
| `auto_05_keepitsimplesparkles` | auto | lower-signal control | `@keepitsimplesparkles` | carhacks | 2026-05-15 | 58s | 7,180 | 353 | 3 | 19 | 93 | https://www.tiktok.com/@keepitsimplesparkles/video/7640229002409463053 |
| `auto_06_encryptedgold_real_noise` | auto | high-metric noise | `@encryptedgold_real` | cartok | 2026-04-25 | 18s | 2,300,000 | 284,200 | 1,170 | 51,000 | 38,400 | https://www.tiktok.com/@encryptedgold_real/video/7632785967950073110 |

## Row-Level Verification Records

### `home_01_homewithsaja`

- Status: public-page verified for home relevance; comments/originality incomplete.
- First frame: hand lifts or positions a clear table-protector sheet on a wood dining table.
- First 3 seconds: object/result proof appears immediately; viewer can understand the table-protection premise cold.
- Shot sequence: table surface close-up -> clear protector interaction -> caption/source cue. Full sequence beyond opening not extracted.
- Audio role: visible audio label `LET ME BE`; likely music bed.
- Discussion signal: comment text unavailable; public comment count visible at about 109. Search surface clusters around table protector, dining table, and Amazon home finds.
- Originality/repost status: unknown; account-branded product demo appears creator-native but not proven.
- Category confirmation: home/table protection confirmed visually.
- Risks: affiliate/source cue via LTK; avoid "must have" overclaim without material, heat, stain, and surface-limit proof.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_002`.

### `home_02_thesamfindz`

- Status: public-page verified for kitchen/home gadget relevance; comments/originality incomplete.
- First frame: hands use a black utensil in a white pan/pot with cooked food and a visible insert or divider.
- First 3 seconds: product-use context appears immediately, but exact gadget function needs full playback.
- Shot sequence: cooking vessel close-up -> hand/product action -> caption positions it as item number 2 in an Amazon gadget list.
- Audio role: original sound.
- Discussion signal: comment text unavailable; public comment count visible at about 206. Search surface clusters around Amazon kitchen gadgets and Amazon finds.
- Originality/repost status: unknown; list-style Amazon gadget post may be creator compilation or sourced product clip.
- Category confirmation: home/kitchen gadget confirmed visually.
- Risks: list-style product montage can feel spammy if proof is weak; product identity and safety limits are unclear from opening.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_002`.

### `home_03_simplywithjulia`

- Status: public-page verified for kitchen/home product relevance; comments/originality incomplete.
- First frame: hand holds a dispenser bottle or container inside a refrigerator-door drink setup.
- First 3 seconds: beverage storage/dispenser benefit is visible quickly; "no spills" claim comes from caption.
- Shot sequence: fridge-door context -> hand dispenses or installs product -> caption explains easy beverage dispensing.
- Audio role: original sound.
- Discussion signal: comment text unavailable; public comment count visible at about 216. Search surface clusters around drink dispenser, beverage dispenser, Amazon home finds.
- Originality/repost status: unknown; creator appears to demonstrate product but not independently verified.
- Category confirmation: home/kitchen dispenser confirmed visually.
- Risks: avoid spill-proof/durability claims unless tested; affiliate relationship via Amazon tags should be disclosed where required.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_002`.

### `home_04_hacksbyviktoriia`

- Status: public-page verified as lower-signal home/cleaning control; comments/originality incomplete.
- First frame: hand dispenses pink foaming cleaner into a toilet bowl.
- First 3 seconds: cleaning action appears immediately; the hook is "doing it wrong" from caption, not a visible before/after yet.
- Shot sequence: toilet close-up -> cleaner application -> likely process/claim explanation. Full proof outcome not extracted.
- Audio role: `Cool Kids (our sped up version)`.
- Discussion signal: comment text unavailable; public comment count visible at about 4.
- Originality/repost status: unknown; looks like original hands-only cleaning footage.
- Category confirmation: home cleaning confirmed visually.
- Risks: cleaner effectiveness and hygiene claims need proof; weak response makes it a useful cold control.
- Candidate links: weak support/counterexample for `candidate_claim_creator_persona_2026_05_18_002`.

### `home_05_white_at_home`

- Status: public-page verified as lower-signal Amazon home control; comments/originality incomplete.
- First frame: rug/floor texture close-up with overlaid "vintage look" text.
- First 3 seconds: decor item is visible, but the product benefit is aesthetic rather than functional.
- Shot sequence: rug/decor close-up -> likely additional home decor finds; caption frames "zero regret" Amazon items.
- Audio role: `Staying Still`.
- Discussion signal: comment text unavailable; public comment count visible at about 3.
- Originality/repost status: unknown; appears creator/home decor native.
- Category confirmation: home decor confirmed visually.
- Risks: aesthetic-only hook is weaker for faceless proof-role account; low comments make it a useful ordinary/cold comparison.
- Candidate links: counterexample pressure on overly broad "Amazon home finds" assumptions.

### `home_06_keyyv7_noise`

- Status: public-page verified as high-metric home-route noise.
- First frame: small pineapple plant outdoors with Spanish on-screen text.
- First 3 seconds: plant/mini-pineapple curiosity appears; not home organization evidence.
- Shot sequence: plant close-up -> generic viral caption route. Full sequence not extracted.
- Audio role: `son original`.
- Discussion signal: comment text unavailable; public comment count visible at about 6,070.
- Originality/repost status: unknown.
- Category confirmation: off-topic/noise for home organization. The content is plant/viral curiosity, not home/living product proof.
- Risks: proves tag-route leakage; high public metrics would overfit if treated as home evidence.
- Candidate links: supports `candidate_claim_creator_persona_2026_05_18_006` as a process guardrail.

### `pet_01_funny_cat_098`

- Status: public-page verified for pet relevance; comments/originality incomplete.
- First frame: close-up black kitten near a keyboard or desk setup.
- First 3 seconds: animal subject is immediate; caption says kitten meow, but source sound was not audited.
- Shot sequence: kitten close-up -> likely behavior/audio payoff. Full sequence not extracted.
- Audio role: original sound; likely animal/source audio but not proven.
- Discussion signal: comment text unavailable; public comment count visible at about 19.4K. Search surface clusters around cat meowing and funny cat videos.
- Originality/repost status: unknown; account name and generic cat clip create repost-risk.
- Category confirmation: pet/cat confirmed visually.
- Risks: repost/originality and non-US uncertainty; do not use for product or real-owned-pet claims until checked.
- Candidate links: supports the need for real behavior/fixed subject gate under `candidate_claim_creator_persona_2026_05_18_003`.

### `pet_02_dogsbylogan`

- Status: public-page verified for pet grooming relevance; comments/originality incomplete.
- First frame: wet small dog in a grooming tub.
- First 3 seconds: grooming setting and animal state are visible immediately.
- Shot sequence: bathing/grooming table close-up -> likely group or transformation sequence around Pomeranians.
- Audio role: original sound.
- Discussion signal: comment text unavailable; public comment count visible at about 2,464. Search surface clusters around Pomeranian and dog grooming.
- Originality/repost status: likely creator/groomer original from account context, but not externally proven.
- Category confirmation: pet grooming/care confirmed visually.
- Risks: animal comfort/respect, grooming claims, and product/tool claims need care; useful positive pattern if ethical handling is verified.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_003`.

### `pet_03_dindin_inparis`

- Status: public-page verified for pet feeding/ASMR relevance; comments/originality incomplete.
- First frame: close-up of hand/food interaction near cat feeding; the cat is partly obscured by hand.
- First 3 seconds: feeding/food-prep context appears, but the opening is less immediately legible than the kitten/grooming rows.
- Shot sequence: feeding close-up -> ingredient list in caption -> likely cat eating payoff.
- Audio role: visible original-music label; likely ASMR/feeding role not proven without audio playback.
- Discussion signal: comment text unavailable; public comment count visible at about 10.4K. Search surface clusters around feeding cats/dogs and mukbang.
- Originality/repost status: unknown; named cat "Bubu" suggests fixed-subject account, but not verified.
- Category confirmation: pet feeding/cat food confirmed by caption and visual context.
- Risks: diet/feeding safety, ingredient claims, and non-US/source uncertainty; do not generalize to pet product conversion.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_003`.

### `pet_04_petsgoodis`

- Status: public-page verified as lower-signal pet product control; comments/originality incomplete.
- First frame: small comb used on white dog fur near face.
- First 3 seconds: grooming product and use case are immediately visible.
- Shot sequence: comb on fur/face area -> product claim in caption. Full before/after not extracted.
- Audio role: original-music label.
- Discussion signal: comment text unavailable; public comment count visible at about 26.
- Originality/repost status: likely product-demo account; original source unknown.
- Category confirmation: pet product/grooming confirmed visually.
- Risks: eye-area safety and "no scratching" claim need proof; low engagement makes it useful as control against assuming visible product proof is sufficient.
- Candidate links: weak support/counterexample for `candidate_claim_creator_persona_2026_05_18_003`.

### `pet_05_darcyandb`

- Status: public-page verified as lower-signal real-pet behavior/food control; comments/originality incomplete.
- First frame: dachshund puppy eating watermelon, with text implying puppy tried and loved it.
- First 3 seconds: animal eating behavior is immediate and easy to understand.
- Shot sequence: puppy close-up eating -> likely crunchy/sensory payoff and comparison prompt.
- Audio role: `Rock and Roll Session`; visual behavior carries the premise without audio.
- Discussion signal: comment text unavailable; public comment count visible at about 124.
- Originality/repost status: likely owner-account original, but not proven.
- Category confirmation: pet/dog eating confirmed visually.
- Risks: feeding-safety context missing; avoid recommending foods or diet claims.
- Candidate links: supports fixed-subject/behavior mechanism only, not feeding advice.

### `pet_06_herocat2309_ai_noise`

- Status: public-page verified as high-metric pet-route noise/AI-story control.
- First frame: AI-generated anthropomorphic onion/vegetable characters in a train scene.
- First 3 seconds: story/AI brainrot premise is visible; not real pet or pet-product evidence.
- Shot sequence: AI character scene -> story caption about onion girl -> playlist/story framing.
- Audio role: original audio label from account.
- Discussion signal: comment text unavailable; public comment count visible at about 10.5K.
- Originality/repost status: likely AI-generated account output; exact source unknown.
- Category confirmation: off-topic for real-pet evidence despite `#catstory`/pet route.
- Risks: must not be mixed with real animal behavior, pet product, or animal-respect claims.
- Candidate links: supports `candidate_claim_creator_persona_2026_05_18_006` and caveat under `candidate_claim_creator_persona_2026_05_18_003`.

### `auto_01_spiffyuddish`

- Status: public-page verified for auto/CarTok relevance; comments/originality incomplete.
- First frame: car driving/rolling shot with ranking overlay for "worst sounding" vehicles.
- First 3 seconds: ranking/debate structure is visible immediately.
- Shot sequence: ranked list overlay -> car/exhaust examples -> "watch/duet ranking" prompt.
- Audio role: original sound; sound is likely central to content because hook concerns exhaust sound, but audio was not evaluated.
- Discussion signal: comment text unavailable; public comment count visible at about 765. Search surface clusters around car exhaust rankings.
- Originality/repost status: unknown; likely compilation/ranking format.
- Category confirmation: auto/car-debate confirmed visually.
- Risks: debate heat is not product proof; sound-ranking disagreement may inflate comments without conversion value.
- Candidate links: informs auto comment-mechanic caveat for `candidate_claim_creator_persona_2026_05_18_005`.

### `auto_02_vrzmobiledetailing`

- Status: public-page verified for auto detailing relevance; comments/originality incomplete.
- First frame: very dirty car interior/floor area with cleaning products visible and text hook about client understatement.
- First 3 seconds: before-state transformation hook appears immediately.
- Shot sequence: dirty interior close-up -> likely cleaning ASMR/process -> result reveal.
- Audio role: visible music label; likely music/ASMR support.
- Discussion signal: comment text unavailable; public comment count visible at about 461. Search surface clusters around car detailing before/after.
- Originality/repost status: likely local mobile-detailing business original, but not proven.
- Category confirmation: auto detailing confirmed visually.
- Risks: service/business CTA could differ from product-demo conversion; before/after needs real result check.
- Candidate links: supports low-risk detailing transformation angle under `candidate_claim_creator_persona_2026_05_18_005`.

### `auto_03_alejandrobrett023`

- Status: public-page verified for auto accessory/TikTok Shop relevance; comments/originality incomplete.
- First frame: hands attach or handle a brass tire air chuck on a tire/air setup.
- First 3 seconds: accessory and use context are immediately visible.
- Shot sequence: product close-up -> hands-on attachment/use -> TikTok Shop product card visible.
- Audio role: original-music label.
- Discussion signal: comment text unavailable; public comment count visible at about 39.
- Originality/repost status: unknown; product-card and commission label suggest commerce demo.
- Category confirmation: auto tire accessory confirmed visually.
- Risks: tire-pressure and fitment/safety context; visible "creator earns commission" requires disclosure discipline; low like-to-view ratio makes it a control-like high-view row.
- Candidate links: `candidate_claim_creator_persona_2026_05_18_005`.

### `auto_04_trqautoparts`

- Status: public-page verified as lower-signal auto parts/control; comments/originality incomplete.
- First frame: presenter at workbench with preassembled steering knuckle/brake assembly.
- First 3 seconds: part and explainer setup are visible, but it is face/person-led rather than faceless hands-only.
- Shot sequence: presenter/part at table -> explanation of preassembled assembly -> likely repair/process CTA.
- Audio role: original sound; spoken explainer likely.
- Discussion signal: comment text unavailable; public comment count visible at about 7.
- Originality/repost status: likely brand original from TRQ account, but not independently verified.
- Category confirmation: auto parts confirmed visually.
- Risks: safety-critical repair component; not a low-compliance faceless candidate without review.
- Candidate links: supports caution under `candidate_claim_creator_persona_2026_05_18_005`.

### `auto_05_keepitsimplesparkles`

- Status: public-page verified as lower-signal auto organization/control; comments/originality incomplete.
- First frame: woman at minivan with "Amazon mom car must-haves" text.
- First 3 seconds: car organization/list premise is visible, but creator/lifestyle presence is stronger than product proof.
- Shot sequence: minivan context -> list of console organizer, cupholder trash can, mounts, charger, screen cleaner, safety hammer, bags, visor holder.
- Audio role: `Perfect Day (From "Legally Blonde")`.
- Discussion signal: comment text unavailable; public comment count visible at about 3.
- Originality/repost status: likely creator original but not proven.
- Category confirmation: auto organization/accessory list confirmed visually.
- Risks: lifestyle/list format may not transfer to faceless bench account; safety hammer claim should be reviewed.
- Candidate links: weak support/counterexample for auto accessory assumptions.

### `auto_06_encryptedgold_real_noise`

- Status: public-page verified as high-metric auto-route noise.
- First frame: Geometry Dash gameplay with large on-screen text.
- First 3 seconds: gaming/rage content is visible; no auto/car relevance.
- Shot sequence: gameplay screen -> creator tags and meme caption -> high engagement unrelated to car route.
- Audio role: `A4 childishly fresh eyes slowed`.
- Discussion signal: comment text unavailable; public comment count visible at about 1,338.
- Originality/repost status: unknown.
- Category confirmation: off-topic/noise for auto evidence.
- Risks: strong warning against using `cartok` route heat without visual verification.
- Candidate links: supports `candidate_claim_creator_persona_2026_05_18_006`.

## Candidate Patterns

Observed facts from this pass:

- Category-relevant high rows usually show the object, animal, mess, car, or product in the opening public frame.
- The strongest home rows show direct product-in-context proof: table protector, kitchen gadget, or dispenser.
- The strongest pet rows show live animal behavior or care context immediately: kitten, grooming tub, feeding.
- The strongest auto rows split into debate/ranking, transformation/detailing, and accessory proof.
- High-metric noise rows are visually obvious once opened: plant/mini-food, AI vegetable story, and Geometry Dash gameplay.

Interpretation, candidate-only:

- "Proof before personality" is still useful as a script guardrail, but not proven as a performance driver.
- Product-card visibility alone does not guarantee strong engagement; the air-chuck row has high public views but low comments/likes relative to view count.
- Pet rows require stricter source/originality separation because real-animal, repost-like, and AI-story rows coexist in the same public route.
- Auto rows require two separate buckets: low-risk accessory/detailing demos and high-risk repair/fitment/safety explainers.

## Candidate Claims

Do not promote. Send to TK Knowledge Classifier if these need review.

- `candidate_claim_creator_persona_2026_05_18_001`: Faceless creator persona should be anchored in a repeatable testing role, not lifestyle identity. This pass adds visual support from home/product and auto/accessory rows, but no performance proof.
- `candidate_claim_creator_persona_2026_05_18_002`: Home product demos need visible problem/use-case before pitch. Supported by the three high home rows; weakened by low-signal home controls that also show product but lack strong response.
- `candidate_claim_creator_persona_2026_05_18_003`: Pet content needs fixed subject or clear behavior mechanism. Supported visually by kitten/grooming/feeding rows; AI pet-route noise remains a major caveat.
- `candidate_claim_creator_persona_2026_05_18_005`: Auto accessory content needs higher compliance gates. Supported by tire air chuck, steering knuckle, and safety-hammer/list examples.
- `candidate_claim_creator_persona_2026_05_18_006`: Public-search route rows cannot support category claims until manually watched. Strongly supported by 3/18 deliberate high-metric noise controls.

## Counterexamples

- `home_06_keyyv7_noise`: 28.6M public views under `homeorganization`, but visual content is mini-pineapple/viral curiosity, not home organization.
- `pet_06_herocat2309_ai_noise`: 100.6M public views under `petgadgets`, but visual content is AI anthropomorphic story, not real pet/product evidence.
- `auto_06_encryptedgold_real_noise`: 2.3M public views under `cartok`, but visual content is Geometry Dash gameplay.
- `home_04_hacksbyviktoriia`: clear home-cleaning action but very low public response, showing that first-frame proof alone is not sufficient.
- `pet_04_petsgoodis`: clear product-use proof but low public response, warning against assuming pet product demos automatically work.
- `auto_04_trqautoparts`: legitimate auto part explainer but safety-critical and low-signal; not suitable as a low-compliance faceless template without review.

## Recommended Next Test

Proceed with a limited 12-video learning batch only as exploratory production, not as classifier confidence, modifier promotion, or prediction scoring.

Recommended split:

- Home: 4 proof-first demos using table protector, dispenser/spill control, small organizer, and cheap-vs-premium adhesive or surface test.
- Pet: 3 bench-only pet product tests plus 1 real-pet behavior row only if footage is owned/licensed and animal-respect safe.
- Auto: 4 low-risk interior/cleaning/accessory demos. Keep tire air chuck language limited to convenience and include "check fit/pressure guidance" boundaries; avoid steering/suspension/brake repair as production content.

Measurement:

- fixed observation windows: T+24h, T+72h, T+7d;
- track 2-second hold, completion, saves, source/fitment comments, profile visits, link/shop actions where available, policy flags, and spam/trust comment quality;
- retain cold controls and noise controls in the evidence layer before any claim upgrade.

## Missing Data

- 5-10 actual top/relevant comments per row.
- Exact first 3 seconds from downloaded/source video.
- Repost/originality cross-check per row.
- Creator follower count at collection time.
- TikTok Shop click, add-to-cart, order, or affiliate data.
- Retention, profile visit, and follower-gain data.
- Policy review for auto fitment/safety and pet feeding/grooming safety.

## Classification Notes

- Verified category-positive rows: 15/18.
- Verified high-metric noise rows: 3/18.
- Rows suitable as positive visual case inputs after comment/originality follow-up: `home_01_homewithsaja`, `home_03_simplywithjulia`, `pet_02_dogsbylogan`, `auto_02_vrzmobiledetailing`.
- Rows suitable mainly as controls/caveats: `home_04_hacksbyviktoriia`, `home_05_white_at_home`, `pet_04_petsgoodis`, `auto_04_trqautoparts`, `auto_05_keepitsimplesparkles`.
- Rows suitable as search-noise controls: `home_06_keyyv7_noise`, `pet_06_herocat2309_ai_noise`, `auto_06_encryptedgold_real_noise`.

## Final Guardrail

This packet upgrades the ULT-313 rows from scout-only to **public-page visually checked** for the captured fields only. It does not make them eligible for durable taxonomy, relation, conversion, prediction, or production-lock claims.
