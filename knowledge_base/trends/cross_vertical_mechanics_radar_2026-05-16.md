# Cross-Vertical Short-Video Mechanics Radar

## Status

- Radar ID: `trend_cross_vertical_mechanics_2026_05_16`
- Recorded date: 2026-05-16 Asia/Shanghai
- Region/language target: US-facing TikTok/TK discovery terms; not geo-verified
- Collection type: public TikTok tag/discover metadata via local Playwright adapter
- Use boundary: scout-level mechanic learning and production hypothesis generation
- Do not use as: durable virality proof, conversion proof, or blind prediction sample set

## Source Runs

| Run | Focus | Candidate count | Local output |
| --- | --- | ---: | --- |
| Round 01 | story / POV / skit / reaction / interview | 120 | `knowledge_base/tool_runs/tiktok_public_search/general_story_entertainment_2026-05-16_round_01/` |
| Round 02 | utility / AI tools / career / money / study | 96 | `knowledge_base/tool_runs/tiktok_public_search/utility_learning_money_2026-05-16_round_02/` |
| Round 03 | commerce / beauty / home / product demo | 60 | `knowledge_base/tool_runs/tiktok_public_search/commerce_beauty_home_2026-05-16_round_03/` |
| Round 04 | food / fitness / transformation / routine | 56 | `knowledge_base/tool_runs/tiktok_public_search/food_fitness_lifestyle_2026-05-16_round_04/` |
| Round 05 | opinion / reaction / comment reply / social roles | 120 | `knowledge_base/tool_runs/tiktok_public_search/opinion_reaction_social_2026-05-16_round_05/` |
| Round 06 | duration probe across representative mechanics | 80 | `knowledge_base/tool_runs/tiktok_public_search/duration_probe_2026-05-16_round_06/` |

Total raw candidate rows: 532 before cross-run duplicate review.

Official context to compare against later:

- TikTok Creative Center Trends: `https://ads.tiktok.com/business/creativecenter`
- TikTok Creative Center Keyword Insights: `https://ads.tiktok.com/business/creativecenter/keyword-insights`
- TikTok Creative Center Top Ads / creative inspiration: `https://ads.tiktok.com/business/creativecenter/inspiration/topads`

## Evidence Completeness

- Completeness score: 0.50 overall.
- Strengths: direct public URLs, engagement proxies, source terms, caption text, broad cross-vertical coverage.
- Missing: verified playback, actual first 3 seconds, actual duration for prior runs, sound/music identity, frame-level shot order, full comment examples, creator baseline, region, distribution source, and whether rows are original, reposts, edits, or off-topic route noise.
- Adapter update: `tools/tiktok_public_search/search_tiktok_public.mjs` now records `durationSeconds` when TikTok exposes it. Rounds 01-05 were collected before that field existed; Round 06 confirms the field is available in most returned rows.

## Duration Probe

Round 06 covered `commentreply`, `worktok`, `amazonfinds`, `recipehack`, `reactionvideo`, `productivitytips`, and `skit`.

- Candidate rows: 80.
- Rows with nonzero `durationSeconds`: 77.
- Observed duration range: 5-634 seconds.
- Average duration among rows with duration: 64.45 seconds.

Interpretation:

- Duration is now technically capturable for future batches.
- The raw range is noisy because public routes can return compilations, reposts, long edits, and off-topic rows.
- Short role-comedy/worktok rows appeared at 5-11 seconds in the probe; recipe/productivity rows often stretched longer; reaction rows included both short clips and long compilations.
- Duration should be analyzed only after category verification and manual playback, not from route matches alone.

## Search Noise Finding

Broad tag/discover routes are noisy. A single high-score video can appear under unrelated terms such as `chatgpttips`, `beautyhacks`, and `weightlossjourney`. This proves the workflow needs a two-step gate:

1. Public search finds candidate mechanics.
2. Manual or frame-level inspection verifies the true content category before any claim, script, or prediction uses the row.

High-score route matches are not category evidence.

## Working Mechanic Clusters

### Relatable POV / Skit / Role Comedy

Signal terms: `comedysketch`, `skit`, `pov`, `relatable`, `worktok`, `parenting`.

Core logic:

- Viewer enters through a role they already understand: coworker, partner, parent, teacher, customer, kid, student.
- The first seconds name or show the social situation.
- The payoff confirms an identity: "that is me", "that is my coworker", "that is my kid".

Production implication: one common situation, one specific behavior, one punchline. The joke should be acted, not only captioned.

### Wait-For-It / Reaction / Prank / Surprise

Signal terms: `waitforit`, `reactionvideo`, `unexpected`, `funnyvideos`.

Core logic:

- The video sells an upcoming state change.
- The viewer stays because the setup is simple and the payoff is promised soon.
- Reaction face/body language carries more value than explanation.

Production implication: show the trigger, pay off quickly, then hold or replay the expression if it is worth rewatching.

### Comment Reply / Green Screen / Social Proof Loop

Signal terms: `commentreply`, `greenscreen`, `storyresponse`, `thingsididntknow`.

Core logic:

- The comment or external artifact is the hook.
- Platform UI pre-loads context, reducing setup cost.
- The creator adds proof, performance, correction, ranking, or a stronger example.

Production implication: the comment/artifact must be readable in the first second, and the response must create a new payoff.

### Utility / Tool / Study / Money

Signal terms: `productivitytips`, `chatgpttips`, `aitools`, `studytok`, `sidehustle`, `marketingtips`.

Core logic:

- The value is a compressed improvement promise.
- Save/collect potential rises when the outcome is useful, repeatable, and not too cognitively expensive.
- Screen recordings, list overlays, and before/after proof often matter more than creator personality.

Production implication: result/promise first, then 2-4 steps, then proof/example. Avoid abstract setup before the viewer knows the payoff.

### Product / Commerce / Beauty / Home

Signal terms: `amazonfinds`, `gadgettok`, `productreview`, `cleantok`, `tiktokmademebuyit`, `grwm`.

Core logic:

- The product is interesting only after the viewer sees the use case, result, or identity fit.
- Hard selling is weaker than "look what this solves / changes / reveals".
- Product-adjacent videos can bridge to commerce later if comments ask source or usage questions.

Production implication: lead with result, problem, or sensory proof. Show product details only after the need is legible, unless the object itself is visually strange enough to hook.

### Transformation / Process / Routine

Signal terms: `recipehack`, `mealprep`, `dayinmylife`, `morningroutine`, `fitnessjourney`, `weightlossjourney`.

Core logic:

- The viewer wants to see a state move from A to B.
- The content can be longer than a pure reaction if every step visibly advances the state.
- Routine content needs aspiration, comedy, sensory satisfaction, or a strong contrast.

Production implication: show before/after early or tease the final state. Every process shot should change visible information.

### Opinion / Red Flag / Debate / Ranking

Signal terms: `unpopularopinion`, `hot take`, `redflag`, `datingadvice`, `ranking`.

Core logic:

- The hook is a claim viewers can accept, reject, or map onto someone they know.
- Comments are part of the product.
- The best versions give enough evidence to argue with, not just a vague opinion.

Production implication: state the claim first, give one concrete example immediately, and bound the claim so it feels specific rather than empty bait.

## Cross-Cluster Commonalities

1. Visible proof beats topic heat.
2. Cold-viewer clarity is the shared gate.
3. The first shot should answer "what am I watching?"
4. The strongest scripts compress to one viewer job: laugh/share, save/apply, argue/comment, buy/want, identify/tag, or follow-for-series.
5. Audio role follows semantic load:
   - original dialogue for skits, worktok, reactions, and comments;
   - voiceover for tutorials, tool demos, and story compression;
   - music/beat for montage, transformation, and visual loops;
   - SFX for state changes, reveals, score updates, or comedy beats.
6. Production complexity does not equal viral potential. Many strong mechanics are simple: a comment screenshot, a face reaction, a product close-up, a role-play caption, or one repeated behavior.

## Duration Hypotheses For Future Testing

These combine production hypotheses with the Round 06 duration probe. They still require manual category verification.

| Mechanic | First test length | Reason |
| --- | ---: | --- |
| Reaction / prank / wait-for-it | 6-12s | One setup and one payoff. |
| Relatable POV / skit | 10-20s | Role setup, behavior, punchline. |
| Comment reply / ranking | 12-25s | Context artifact plus response. |
| Product demo / home / beauty | 12-25s | Result, use, proof, soft CTA. |
| Utility / AI tool / study | 18-35s | Promise, steps, example. |
| Transformation / routine | 18-45s | Before, process, reveal. |
| Storytime / social conflict | 25-60s | Only if each beat raises stakes. |

## Candidate Knowledge Claims

- `candidate_claim_cross_vertical_2026_05_16_001`: Cross-vertical short-video performance should be gated by visible proof in the first seconds, not topic/tag heat alone.
- `candidate_claim_cross_vertical_2026_05_16_002`: Content mechanics cluster better by viewer job than by surface topic.
- `candidate_claim_cross_vertical_2026_05_16_003`: High information density is safer when the first two seconds define a simple promise or container.
- `candidate_claim_cross_vertical_2026_05_16_004`: Product-adjacent videos should usually lead with use case, result, or sensory proof before product explanation.
- `candidate_claim_cross_vertical_2026_05_16_005`: Comment-reply and green-screen formats reduce setup cost because the artifact/comment supplies instant context.
- `candidate_claim_cross_vertical_2026_05_16_006`: Broad TikTok tag/discover routes are useful for scout discovery but unsafe as category evidence without visual/manual verification.

All claims remain candidate-only pending classifier review, manual visual inspection, mixed-outcome rows, and duration-aware extraction.

## Next Data Work

1. Re-run selected terms after Playwright browser install so `durationSeconds` is available where TikTok exposes it.
2. Manually inspect 5-8 candidates per mechanic cluster.
3. Add first-3-second frame notes, audio role, shot count, and actual video duration.
4. Build a mixed-outcome set: high, medium, and cold videos for the same mechanics.
5. Route claims to `tk-knowledge-classifier` before modifier promotion.
