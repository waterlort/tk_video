# Blind pilot candidate 002 manual snapshot queue

## Queue identity

- Queue ID: `blind_pilot_2026_05_09_candidate_002_snapshot_queue`
- Created: 2026-05-09
- Purpose: manual or externally authorized collection plan for a mixed-outcome blind pilot.
- Status: design queue only. No rows are collected yet.
- Use boundary: judge/source-control only. Do not pass this queue to TK Content Explainer because it contains hidden target strata and source-path intent.

## Collection rule

Do not treat a slot as filled until the collector records a direct source URL, visible or decoded post date, collection timestamp, outcome snapshot, creator baseline or substitute, first-three-second description, caption/on-screen text, audio description, CTA, and a raw discussion sample or explicit unavailable note.

Hot/medium/cold strata are balancing targets for the judge-only manifest. They must not appear in explainer feature packets.

## Desired evidence field bundle

Every slot targets the same `E15` evidence bundle unless a field is explicitly unavailable and documented:

1. direct URL
2. visible or decoded post date
3. collection timestamp
4. views
5. likes
6. comments
7. shares
8. saves
9. follower baseline or documented substitute
10. exact first 3 seconds
11. caption/on-screen text
12. audio/sound description
13. CTA or explicit no-CTA note
14. raw comment/discussion sample or explicit unavailable note
15. screenshot/archive note

Slot-specific desired evidence means the collector should capture the details that make the target mechanism testable, such as exact reveal wording, scan/score screen state, tool task obstacle, clipping subtype proof, or product/conversion CTA.

## Quotas

- Total slots: 30.
- Target outcome balance: 10 hot, 10 medium, 10 cold/ordinary.
- Minimum cold/ordinary rows: 10.
- Minimum creator/account count: 10.
- Minimum independent source-path families: 4.
- Maximum per source family / trend / sound / format / creator: 9 rows.
- Maximum clipping-economy rows: 9 unless the run is explicitly converted to a clipping-specific subtest.

## Source-path families

- `trend_surface_hot`: current trend or search surface where high-performing examples are visible.
- `same_trend_recent_ordinary`: recent posts under the same sound/hashtag/mechanism that are ordinary or weak.
- `creator_neighbor_post`: adjacent posts from the same creator before/after a stronger reference post.
- `competitor_account_grid`: account grid or profile-level comparison from relevant niche competitors.
- `keyword_recent_search`: keyword search sorted or inspected for recent non-winner examples.
- `external_report_reference`: third-party trend report or curated example, limited to support context rather than blind scoring.

## Snapshot queue

| Slot | Queue ID | Target source-path family | Target mechanism / category | Hidden target stratum | Anti-overfit group | Why this slot exists | Required comparator |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | c2_slot_001 | trend_surface_hot | entertainment score/face rating reveal | hot | score_reveal_entertainment | Positive example for rating/debate score reveal. | Same vertical non-score or weak score row. |
| 02 | c2_slot_002 | same_trend_recent_ordinary | entertainment score/face rating reveal | cold | score_reveal_entertainment | Cold counterexample for rating/debate score reveal. | Slot 01 or similar hot rating row. |
| 03 | c2_slot_003 | competitor_account_grid | beauty or skin scan reveal | medium | score_reveal_beauty | Tests utility/appearance score reveal outside winner pages. | Same account or same tag lower/higher row. |
| 04 | c2_slot_004 | same_trend_recent_ordinary | beauty or skin scan reveal | cold | score_reveal_beauty | Cold counterexample for beauty scan urgency. | Slot 03 or prior beauty scan case. |
| 05 | c2_slot_005 | trend_surface_hot | shopping/ingredient scan reveal | hot | score_reveal_shopping | Positive example for practical utility score reveal. | Same product category ordinary row. |
| 06 | c2_slot_006 | keyword_recent_search | shopping/ingredient scan reveal | cold | score_reveal_shopping | Cold counterexample for warning/scan format. | Slot 05 or same app/product mechanism. |
| 07 | c2_slot_007 | creator_neighbor_post | non-score beauty utility | medium | non_score_control | Same vertical control without score mechanism. | Slots 03-04. |
| 08 | c2_slot_008 | keyword_recent_search | non-score shopping utility | cold | non_score_control | Same vertical cold control without scan/score reveal. | Slots 05-06. |
| 09 | c2_slot_009 | trend_surface_hot | tool/app task challenge demo | hot | embedded_tool_task | Positive task-obstacle app demo. | Same tool/mechanism ordinary row. |
| 10 | c2_slot_010 | same_trend_recent_ordinary | tool/app task challenge demo | cold | embedded_tool_task | Cold counterexample for task-obstacle app demo. | Slot 09. |
| 11 | c2_slot_011 | trend_surface_hot | AI prank-as-demo | hot | ai_prank_demo | Positive prank-as-demo row. | Same prank pattern ordinary row. |
| 12 | c2_slot_012 | creator_neighbor_post | AI prank-as-demo | cold | ai_prank_demo | Cold counterexample for AI prank-as-demo. | Slot 11. |
| 13 | c2_slot_013 | competitor_account_grid | routine-embedded education/tool demo | medium | routine_tool_demo | Tests routine-layered education without assuming heat. | Same account or same app row. |
| 14 | c2_slot_014 | keyword_recent_search | routine-embedded education/tool demo | cold | routine_tool_demo | Cold counterexample for routine-layered education. | Slot 13. |
| 15 | c2_slot_015 | external_report_reference | AI output transformation | medium | ai_output_transform | Tests generated-output-as-content without overfitting to one app. | Abstract tool explainer control. |
| 16 | c2_slot_016 | keyword_recent_search | abstract tool explainer | cold | abstract_tool_control | Control for embedded-tool hypothesis. | Slots 09-15. |
| 17 | c2_slot_017 | trend_surface_hot | actual clip/highlight | hot | clipping_actual | Positive actual clip/highlight row. | Same source moment lower row if possible. |
| 18 | c2_slot_018 | competitor_account_grid | actual clip/highlight | medium | clipping_actual | Ordinary actual clip row. | Slot 17. |
| 19 | c2_slot_019 | creator_neighbor_post | actual clip/highlight | cold | clipping_actual | Cold actual clip row to prevent source-moment overfit. | Slots 17-18. |
| 20 | c2_slot_020 | trend_surface_hot | meta clipping tutorial/strategy | hot | clipping_meta | Positive tutorial/strategy row. | Cold tutorial row. |
| 21 | c2_slot_021 | keyword_recent_search | meta clipping tutorial/strategy | cold | clipping_meta | Cold counterexample for clipping tutorial claims. | Slot 20. |
| 22 | c2_slot_022 | competitor_account_grid | payout proof | medium | clipping_payout | Tests proof/receipt framing. | Payout proof cold row. |
| 23 | c2_slot_023 | keyword_recent_search | payout proof | cold | clipping_payout | Cold counterexample for payout proof. | Slot 22. |
| 24 | c2_slot_024 | competitor_account_grid | marketplace/platform opportunity | medium | clipping_marketplace | Tests platform opportunity framing. | Recruiting-hype row. |
| 25 | c2_slot_025 | keyword_recent_search | recruiting hype / aspirational promise | cold | clipping_recruiting | Red-flag counterexample for vague opportunity content. | Slot 24. |
| 26 | c2_slot_026 | trend_surface_hot | hyper-specific POV comedy | hot | pov_comedy | Positive for accepted_provisional comedy claim. | Cold POV row. |
| 27 | c2_slot_027 | same_trend_recent_ordinary | hyper-specific POV comedy | cold | pov_comedy | Counterexample for accepted_provisional comedy claim. | Slot 26. |
| 28 | c2_slot_028 | competitor_account_grid | store-specific utility | medium | utility_conversion | Future affiliate/conversion utility row. | Cold store utility row. |
| 29 | c2_slot_029 | keyword_recent_search | store-specific utility | cold | utility_conversion | Cold counterexample for store utility conversion hypothesis. | Slot 28. |
| 30 | c2_slot_030 | competitor_account_grid | product/fashion transition | medium | product_transition | Future affiliate/product fit row. | Weak transition row in later batch if not found here. |

## Slot-specific desired evidence notes

Each row requires the `E15` evidence bundle above. Additional desired notes by slot:

| Slot | Desired evidence emphasis |
| --- | --- |
| 01 | Exact rating prompt, score reveal timing, viewer debate cue, and comment disagreement sample. |
| 02 | Same as slot 01, plus evidence that the post is ordinary/cold rather than unavailable. |
| 03 | Scan UI state, before/after or diagnosis wording, and whether the claim is cosmetic or practical. |
| 04 | Same as slot 03, plus cold-row discussion sample or explicit no-discussion note. |
| 05 | Ingredient/product scan state, warning or benefit wording, and any shopping intent CTA. |
| 06 | Same as slot 05, plus evidence that the scan hook did not convert into heat. |
| 07 | Non-score beauty utility first 3 seconds and how it differs from score/scan framing. |
| 08 | Non-score shopping utility first 3 seconds and how it differs from score/scan framing. |
| 09 | Tool/app task obstacle, screen-recording evidence, and result reveal timing. |
| 10 | Same as slot 09, plus ordinary-row proof against app-demo overfit. |
| 11 | Prank setup, AI/tool reveal moment, and whether the joke depends on tool novelty. |
| 12 | Same as slot 11, plus weak-response discussion or explicit unavailable note. |
| 13 | Routine context, educational step sequence, and embedded-tool role. |
| 14 | Same as slot 13, plus missing-tension notes if the routine feels flat. |
| 15 | AI output transformation input/output evidence and whether the result is surprising. |
| 16 | Abstract explainer structure and absence of embodied task/demo evidence. |
| 17 | Source moment, clip/highlight context, and whether comments reference the original event. |
| 18 | Same as slot 17, with ordinary-account or ordinary-format baseline. |
| 19 | Same as slot 17, plus cold evidence against source-moment overfit. |
| 20 | Tutorial promise, strategy steps, proof claims, and CTA or monetization path. |
| 21 | Same as slot 20, plus weak proof or weak discussion notes. |
| 22 | Payout proof surface, receipt/screenshot type, and credibility risk notes. |
| 23 | Same as slot 22, plus evidence of cold response or skepticism. |
| 24 | Marketplace/platform opportunity wording and whether it is practical or speculative. |
| 25 | Recruiting or aspirational-promise wording and red-flag policy/risk notes. |
| 26 | Hyper-specific POV setup, identity cue, and joke payoff timing. |
| 27 | Same as slot 26, plus evidence that specificity alone did not produce heat. |
| 28 | Store-specific utility, product/conversion path, and CTA clarity. |
| 29 | Same as slot 28, plus cold response evidence. |
| 30 | Transition structure, product/fashion reveal timing, and affiliate/product fit notes. |

## Handoff

After all slots are filled, create a new locked sample set from only the completed rows. Do not send this queue to TK Content Explainer.
