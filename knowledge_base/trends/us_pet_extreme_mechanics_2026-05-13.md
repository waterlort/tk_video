# US pet extreme-mechanics trend radar

## Status

- Radar ID: `trend_us_pet_extreme_mechanics_2026_05_13`
- Recorded date: 2026-05-13 Asia/Shanghai
- Collection timestamp: 2026-05-12T12:50:26Z
- Region target: US-facing TikTok/TK discovery terms
- Vertical: pets / pet-owner entertainment / future product bridge
- Confidence: scout-level only
- Do not use as: proof of virality, follower gain, or conversion performance

## Source Inputs

- Local run: `/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/pet_extremes_2026-05-12/pet_public_search_candidates.json`
- Top links: `/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/pet_extremes_2026-05-12/top_links.tsv`
- Local adapter: `/Users/airlort/Documents/tk_video/tools/tiktok_public_search/search_tiktok_public.mjs`
- Extracted from broader local tool folder: `/Users/airlort/Documents/工具`
- Official trend tooling context: TikTok Creative Center Trends help, https://ads.tiktok.com/help/article/how-to-use-trends?lang=en
- Prior radar: `/Users/airlort/Documents/tk_video/knowledge_base/trends/us_pet_trend_radar_2026-05-10_round_01.md`

## Query

Terms:

`dogreaction`, `catreaction`, `dogmom`, `catsoftiktok`, `dogsoftiktok`, `petparent`, `puppytiktok`, `petsoftiktok`, `petgadgets`, `doggrooming`, `dogtantrum`, `sassydog`, `hungrydog`, `dogeating`, `catzoomies`, `dogzoomies`, `petsurprise`

Window: 60 days.

Candidate cap: 120.

Scoring proxy:

`petInterestScore = comments*10 + shares*8 + collects*4 + likes*0.5 + views*0.02`

Important limitation: this is a public engagement proxy, not a true TikTok ranking score and not a US-only verified feed.

One route warning was recorded: `catreaction/discover` hit an SSL protocol error. Other tag/discover routes continued.

## Aggregate Snapshot

Candidate count: 120.

By search term:

| Term | Count |
| --- | ---: |
| `catsoftiktok` | 20 |
| `dogeating` | 17 |
| `petsoftiktok` | 11 |
| `catreaction` | 10 |
| `puppytiktok` | 9 |
| `petparent` | 7 |
| `catzoomies` | 7 |
| `sassydog` | 6 |
| `doggrooming` | 6 |
| `dogmom` | 4 |
| `hungrydog` | 4 |
| `petgadgets` | 4 |
| `dogsoftiktok` | 4 |
| `dogtantrum` | 3 |
| `dogzoomies` | 3 |
| `petsurprise` | 3 |
| `dogreaction` | 2 |

Caption-label proxy:

| Label | Count |
| --- | ---: |
| `unclear` | 47 |
| `cute` | 38 |
| `food_or_eating` | 22 |
| `surprise_or_reaction` | 15 |
| `care_or_cleaning` | 7 |
| `stubborn_or_sassy` | 7 |

## Core Learning

Pet videos in this scout set are not strong because they are merely pets. The useful rows tend to contain a visible extreme:

- extreme cute: baby-like scale, first-time milestone, helpless/tiny visual, or face-forward charm;
- stubborn/sassy: a recurring non-negotiable pet rule, such as refusing to let the owner stop petting;
- food/eating: intense appetite, strong eating sound, speed, or a debate prompt around feeding;
- surprise/reaction: visible or audible trigger followed quickly by a strong pet response;
- care/transformation: grooming, cleaning, or hygiene only works when there is an obvious before/after or sensory payoff.

The boring failure mode is now explicit: `normal pet + text overlay` should be rejected unless the pet performs a visible unusual behavior in the first 1-2 seconds.

## Mechanism Notes

### Extreme Cute

Useful cases include baby-state framing, first bark, tiny kitten/puppy presentation, and camera-facing expressions. Caption framing can help, but the visual must already carry the feeling.

Production implication:

- A generated concept must show an unmistakably cute physical state or milestone in frame 1.
- A soft backstory is not enough.
- Reuse one named pet identity across all frames; cute content loses trust immediately if the animal changes.

### Stubborn Or Sassy

The stronger rows are built around an animal enforcing a rule: same tantrum every night, not allowing scratching to stop, or giving a side-eye when attention ends.

Production implication:

- The pet must actively resist, demand, protest, or enforce a routine.
- The owner should be secondary; the pet's behavior is the joke.
- The script should preserve a repeatable series premise: "every night", "every time", or "house rule".

### Food Or Eating

Food rows have high public-proxy scores, especially when they add sensory intensity or a debate prompt. Some examples involve raw-feeding or unusual ingredients, which are engagement-rich but safety-sensitive.

Production implication:

- Prefer safe, ordinary food setups, treat puzzles, slow feeders, crunch sound, or anticipation rather than copying risky raw-feeding details.
- The first second should show the food trigger and the pet's body reaction.
- The comment prompt can invite comparison, not medical or diet advice.

### Surprise Or Reaction

Reaction rows rely on a fast trigger-to-payoff loop: food sound, smell, kiss, orange, being caught, or a new object.

Production implication:

- The trigger must be legible before the reaction.
- Payoff should happen within 1-2 seconds.
- The clip should loop cleanly or end on an expression that makes viewers rewatch.

### Care Or Transformation

Grooming and cleaning rows can work, but mostly when the visual transformation is the content. General care advice without visible change is weaker.

Production implication:

- Show before/after contrast, texture, dirt-to-clean, fluff-to-shape, or shine.
- Product can appear later; the transformation should lead.

### AI Pet Story Boundary

One high-proxy row is explicitly AI-generated pet-story content. This is useful as a format lead, not as evidence for a real-pet account.

Production implication:

- AI animal videos need a locked character bible and a strong absurd/extreme premise.
- Do not mix AI-story evidence with real-owner pet evidence when making durable claims.

## Noise And Counterexamples

The public search adapter is useful but noisy. High-score rows under pet terms included unclear or off-topic content such as travel humor, fashion, political/fiction edits, product surfaces, and general meme rows.

Knowledge-base rule:

- Tag heat is not pet evidence until the candidate is visually or caption-confirmed as pet content.
- Keep off-topic rows as search-noise evidence, not as trend support.
- Judge should penalize workflows that treat broad tag results as verified category cases.

## Candidate Knowledge Claims

- `candidate_claim_pet_extreme_2026_05_13_001`: For pet traffic accounts, "visible extreme" is a stronger creative gate than "pet topic" or broad cute hashtag presence.
- `candidate_claim_pet_extreme_2026_05_13_002`: Stubborn/sassy pet clips become more repeatable when the pet enforces a recurring rule rather than simply reacting once.
- `candidate_claim_pet_extreme_2026_05_13_003`: Food/eating pet clips are high-engagement candidates, but safety-sensitive feeding details should not be copied into production concepts without risk filtering.
- `candidate_claim_pet_extreme_2026_05_13_004`: Surprise/reaction clips need trigger visibility and payoff speed; caption-only surprise is weak.
- `candidate_claim_pet_extreme_2026_05_13_005`: AI pet-story rows should be separated from real-pet evidence and require stricter identity-lock review.

All claims remain candidate-only until classifier review, manual visual verification, and mixed-outcome comparison.

## Next Tests

Before another generated pet example, run a small concept gate:

1. Choose exactly one primary pet and one optional human/prop.
2. Select one extreme mechanism: cute, stubborn, food, reaction, or transformation.
3. Write the first 2 seconds as visible proof, not explanation.
4. Create a one-line repeatable series premise.
5. Reject the concept if the same idea still works after replacing the animal with "a normal cute dog sitting there."

For evidence collection, inspect 8-12 candidates manually:

- 2 extreme cute,
- 2 stubborn/sassy,
- 2 food/eating,
- 2 surprise/reaction,
- 1-2 grooming/transformation,
- 1-2 noisy/off-topic controls.

