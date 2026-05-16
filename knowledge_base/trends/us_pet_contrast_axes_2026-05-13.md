# US pet contrast-axes trend radar

## Status

- Radar ID: `trend_us_pet_contrast_axes_2026_05_13`
- Recorded date: 2026-05-13 Asia/Shanghai
- Collection timestamp: 2026-05-13T13:41:28Z
- Region target: US-facing TikTok/TK public discovery terms; not geo-verified
- Purpose: search new pet material through the user's quality axes
- Confidence: scout-level only
- Do not use as: durable virality proof, conversion proof, or blind-prediction set

## User Axes Used

This radar was built around the user's evaluation focus:

- common twists are weak;
- animal behavior must be credible;
- the object/action logic must be visually clear;
- reversal must be strong enough;
- cold viewers should understand without account lore;
- quirky but low-stakes habits are not enough;
- strong ideas need both contrast and motivation.

Detailed filter:

`/Users/airlort/Documents/tk_video/knowledge_base/playbooks/pet_idea_quality_axes_2026-05-13.md`

## Source Inputs

- Local run: `/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/pet_contrast_axes_2026-05-13/pet_public_search_candidates.json`
- Top links: `/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/pet_contrast_axes_2026-05-13/top_links.tsv`
- Local adapter: `/Users/airlort/Documents/tk_video/tools/tiktok_public_search/search_tiktok_public.mjs`
- Official trend-tooling context: TikTok Creative Center Trends help, https://ads.tiktok.com/help/article/how-to-use-trends?lang=en

## Query

Terms:

`dogcaught`, `catcaught`, `guiltydog`, `guiltycat`, `dogsteals`, `catsteals`, `dogreaction`, `catreaction`, `unexpectedpet`, `petreaction`, `funnydogreaction`, `funnycatreaction`, `dogrefuses`, `stubborndog`, `dogtantrum`, `dogescape`, `catescape`, `dogfails`, `catfails`, `dogsideeye`, `catsideeye`, `dogjealous`, `catjealous`, `dogbuttons`, `talkingdog`

Window: 90 days.

Candidate cap: 180.

Warnings: none.

## Aggregate Snapshot

Candidate count: 180.

By caption-label proxy:

| Label | Count |
| --- | ---: |
| `unclear` | 92 |
| `surprise_or_reaction` | 37 |
| `stubborn_or_sassy` | 35 |
| `cute` | 21 |
| `food_or_eating` | 12 |
| `care_or_cleaning` | 7 |

High-yield terms included `talkingdog`, `dogfails`, `catfails`, `catreaction`, `dogreaction`, `guiltydog`, `funnydogreaction`, and `petreaction`.

Noise remains high. Many top rows are non-pet, entertainment, news, creator-sketch, or meme-edit content. This supports the existing rule: public tag heat must be manually verified before use.

## What This Round Adds

The strongest transferable pet examples are not just "cute" or "food". They usually use one of these structures:

1. Calm setup to sudden animal reflex.
   - Example: cat reaction to a moving/dropped lizard-prank setup.
   - Why it can work: the contrast is immediate, visible, and motivated by startle/prey reflex.
   - Risk: animal-stress or staging risk; do not copy unsafe prank details.

2. Ordinary care routine becomes theatrical avoidance.
   - Example: dog reacts intensely to nail trimming.
   - Why it can work: grooming avoidance is common and credible, but the reaction is unusually big.
   - Transfer rule: common premise can work only if the behavior is visually extreme.

3. Physical mismatch creates instant comedy.
   - Example: a cat is too large for an object or opening.
   - Why it can work: no caption or account history is needed; the body-task mismatch is visible.
   - Transfer rule: use real physical constraints, not fake object confusion.

4. Caught-in-the-act with visible evidence.
   - Example: a kitten or cat "finally got caught" after chaotic behavior.
   - Why it can work: guilt/caught framing is credible only when evidence is visible.
   - Transfer rule: show the mess, stolen object, or forbidden location before the reaction face.

5. Stubborn refusal with consequence.
   - Example: a small dog refuses to walk a tiny distance, or a dog has a visible tantrum.
   - Why it can work: refusal is credible, but it needs a concrete consequence such as the owner having to pick the dog up or the walk becoming impossible.
   - Transfer rule: refusal alone is too common; refusal plus cost is stronger.

6. Button/talking dog is high-interest but not first-account friendly.
   - Example: a dog uses buttons around shower/work/social desires.
   - Why it can work: it suggests cognition beyond expectation.
   - Transfer risk: cold viewers need context, and a new account cannot fake a believable button-dog relationship quickly.

## Why Some Common Ideas Still Fail

- Food-sound activation is clear but common.
- Jealousy is understandable but often generic.
- Stealing a sofa spot is credible but low contrast.
- Ritual/order-dependent eating can work only if the full sequence is visually surprising, otherwise it feels like a caption claim.
- Talking-dog and voiceover formats can score well, but they are fragile without an established character or excellent voice writing.

## Candidate Knowledge Claims

- `candidate_claim_pet_contrast_2026_05_13_001`: Strong pet-video contrast needs a credible animal motive, not only a surprise ending.
- `candidate_claim_pet_contrast_2026_05_13_002`: Common pet premises can work only when the specific visible behavior is extreme or physically consequential.
- `candidate_claim_pet_contrast_2026_05_13_003`: First-exposure pet videos should avoid mechanisms that depend on established account lore, such as complex training routines or button-language relationships.
- `candidate_claim_pet_contrast_2026_05_13_004`: Physical mismatch, caught-in-act evidence, and care-avoidance reactions are more transferable than generic jealousy or food-sound confusion.
- `candidate_claim_pet_contrast_2026_05_13_005`: Search-noise controls are required because high-score public results under pet terms often include non-pet material.

All claims remain candidate-only until classifier review and manual visual verification.

