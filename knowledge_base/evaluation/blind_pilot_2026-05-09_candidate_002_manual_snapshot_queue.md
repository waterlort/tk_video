# Candidate 002 manual snapshot queue and intake spec

## Identity

- Issue: `ULT-95`
- Artifact ID: `blind_pilot_2026_05_09_candidate_002_manual_snapshot_queue`
- Created: 2026-05-09
- Owner: TK Case Librarian
- Purpose: replacement design for the failed ULT-92 live collection path.
- Status: design and queue template only. No candidate 002 samples are collected, scored, locked, or ready for explainer handoff.

## Hard policy boundary

This artifact exists because ULT-92 encountered platform safety blocking during live collection. Candidate 002 must now be filled only by human collectors or an externally authorized safe collection process.

Agents must not perform any live platform access for this queue:

- no TikTok/TK browsing
- no Creative Center browsing
- no third-party TikTok viewer access
- no web search for samples
- no scraper, oEmbed, curl, wget, browser automation, or public metadata verification
- no attempt to decode or verify URLs beyond what the human or external provider supplies

The agent role is limited to normalization, audit, quota checking, leakage checking, and creation of metric-scrubbed packets after the external snapshots are submitted.

## Current verdict

Candidate 002 is not ready for prediction lock and is not an explainer-visible candidate set. This replacement issue produces only the manual/external queue, field specification, sampling quotas, scrub rules, sealed-manifest contract, collector handoff, and memory update recommendations.

Candidate 002 can be sent to TK Content Explainer only after 30 external snapshots are filled, audited, scrubbed, and linked to a sealed judge-only manifest.

## Evidence read

- `knowledge_base/case_library/CASE_TEMPLATE.md`
- `knowledge_base/evaluation/PREDICTION_EVALUATION_PROTOCOL.md`
- `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_sampling_design_audit.md`
- `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_manual_manifest_TEMPLATE.md`
- `knowledge_base/predictions/blind_pilot_2026-05-09_candidate_002_feature_packet_TEMPLATE.md`
- `knowledge_base/samples/blind_pilot_2026-05-09_candidate_002_snapshot_queue.md`

No live source material was opened, searched, scraped, or verified for this issue.

## Intake queue contract

Each row is a manual or externally provided snapshot packet. A row is not filled until the collector supplies source reference, artifact references, post date evidence, collection metadata, judge-only metrics or explicit unavailable reasons, and scrub-ready creative observations.

Rows must keep observed facts separate from interpretation:

- Observed fields describe what is visible or supplied in the snapshot artifacts.
- Interpretation fields classify mechanism, audience motive, hook, category, risk, and repeatable pattern.
- Judge-only fields contain URLs, handles, metrics, follower baselines, outcome buckets, collection target roles, and metric-bearing screenshots.
- Explainer-visible packets must contain only metric-scrubbed creative fields and approved context.

## Required snapshot fields

| Field | Required content | Destination | Missing rule |
| --- | --- | --- | --- |
| Sample ID | Stable internal ID, e.g. `blind_us_2026_05_09_c2_001`. | Judge manifest and feature packet | Cannot be missing. |
| Source reference | Direct URL or external snapshot source ref supplied by human/provider. Agent must not open it. | Judge-only manifest | If URL unavailable, record provider ref and reason. |
| Snapshot screenshots | Post screenshot, first-frame screenshot, metric screenshot, and profile/follower baseline screenshot where available. | Judge-only artifact refs; scrubbed visual observations can be copied to packet | If unavailable, record `unavailable` plus reason. |
| Screen recording | Short recording or externally produced frame sequence sufficient to describe first 3 seconds and edit rhythm. | Judge-only artifact ref; observations can be copied to packet | If unavailable, provide transcript/frame notes and reason. |
| Caption/transcript | Caption, on-screen text, voiceover transcript, or provider transcript. | Scrubbed packet after metric/handle removal | If unavailable, record `unavailable` plus reason. |
| Visible/decoded post date | Visible post date, decoded post date, or external provider date. Include provider and method if decoded/external. | Judge manifest; packet only if not a performance proxy | If unavailable, record `unavailable` plus reason. |
| Collection timestamp | Timestamp when snapshot was captured. | Judge-only manifest | Cannot be missing. |
| Collector | Human collector or external provider name/process ID. | Judge-only manifest | Cannot be missing. |
| Region/language | Region and language visible or supplied. | Judge manifest and packet | If inferred, mark as interpretation. |
| Source path family | Collection path family from the approved list below. | Judge/source-control only | Cannot be missing. |
| Views | Metric visible in snapshot. | Judge-only manifest | Record `unavailable` plus reason; do not estimate. |
| Likes | Metric visible in snapshot. | Judge-only manifest | Record `unavailable` plus reason; do not estimate. |
| Comments | Metric visible in snapshot. | Judge-only manifest | Record `unavailable` plus reason; do not estimate. |
| Shares | Metric visible in snapshot. | Judge-only manifest | Record `unavailable` plus reason; do not estimate. |
| Saves | Metric visible in snapshot. | Judge-only manifest | Record `unavailable` plus reason; do not estimate. |
| Follower baseline | Profile follower count or documented substitute from same snapshot window. | Judge-only manifest | Record substitute method or `unavailable` plus reason. |
| First 3 seconds | Exact visual/audio/text sequence in the opening 0-3s. | Metric-scrubbed packet | Must be supplied from artifact or transcript. |
| Caption/on-screen text | Verbatim text after removing metrics, handles, and popularity cues. | Metric-scrubbed packet | Record `unavailable` plus reason if absent. |
| Script structure | Observed sequence, e.g. setup -> proof -> reveal -> CTA. | Interpretation field in packet | Mark uncertainty if inferred. |
| Filming method | Screen recording, selfie, green screen, clip reuse, product demo, etc. | Packet | Mark uncertainty if inferred. |
| Editing rhythm | Cut pace, reveal timing, loop, captions, zooms, montage, hold frames. | Packet | Mark uncertainty if inferred. |
| Audio role | Music, voiceover, trend sound, ambient, silent, SFX, or text-only role. | Packet | Do not include sound popularity. |
| Discussion signal | Metric-scrubbed comment themes, debate cues, questions, skepticism. | Packet theme only; raw comment screenshot stays judge-only | If comments unavailable, record reason. |
| Heat signal | Non-metric creative heat signal only, such as debate-worthy reveal or repeatable remix cue. | Packet if scrubbed; metric heat stays judge-only | Do not leak views/ranking/source popularity. |
| CTA | Visible conversion or engagement action, or explicit no-CTA. | Packet if not outcome revealing | If unavailable, record reason. |
| Risk notes | Policy, misleading claim, privacy, medical/beauty claim, copyright, monetization risk. | Packet and audit | Mark unknown if not assessable. |
| Repeatable pattern | Candidate pattern for later review, not a durable claim. | Audit / candidate claim queue | Must stay provisional. |
| Next test idea | One follow-up test suggested by the case. | Audit / case record | Can be `unknown` if no row evidence. |

## Row record template

Use this template for each externally supplied snapshot before creating any explainer-visible packet.

```md
## C2 row `blind_us_2026_05_09_c2_XXX`

### Judge/source-control fields

- Slot:
- Direct URL or external source ref:
- Source ref provider:
- Provider method:
- Collector:
- Collection timestamp:
- Region/language:
- Source path family:
- Creator/account judge-only ID:
- Visible or decoded post date:
- Post date provider/method:
- Snapshot artifact refs:
  - post screenshot:
  - first-frame screenshot:
  - screen recording/frame sequence:
  - caption/transcript:
  - metric screenshot:
  - profile/follower baseline screenshot:
- Judge-only metrics:
  - views:
  - likes:
  - comments:
  - shares:
  - saves:
  - follower baseline:
  - unavailable reasons:
- Collection target role:
- Outcome bucket:
- Comparable baseline rule:

### Observed creative fields

- First 3 seconds:
- First frame:
- Caption/on-screen text, scrubbed:
- Shot sequence:
- Filming method:
- Editing rhythm:
- Audio role:
- CTA:
- Discussion signal, scrubbed:
- Heat signal, scrubbed:
- Risk notes:

### Interpretation fields

- Niche/account type:
- Content category:
- Hook type:
- Audience motive:
- Viewer tension or curiosity gap:
- Script structure:
- Conversion path:
- Product/affiliate fit:
- Candidate repeatable pattern:
- Candidate linked claims:
- Counterexample value:
- Confidence:
- Next test idea:

### Audit

- Observed fields complete:
- Interpretation fields complete:
- Judge-only fields complete:
- Leakage risk:
- Evidence completeness score:
- Ready for feature packet: yes/no
```

## Source path families

Use at least four independent source path families across the 30 rows.

| Source path family | Description | Explainer visibility |
| --- | --- | --- |
| `trend_surface_hot` | Human/provider identifies a high-performing example from a trend, search, or platform surface. | Hidden; source popularity wording is not visible. |
| `same_trend_recent_ordinary` | Recent ordinary or weak examples under the same sound, tag, or mechanism. | Hidden; only scrubbed creative features can be visible. |
| `creator_neighbor_post` | Adjacent posts from the same creator before/after a stronger or weaker reference. | Hidden; creator handle and baseline stay sealed. |
| `competitor_account_grid` | Human/provider samples from a relevant competitor account grid. | Hidden; account identity stays sealed. |
| `keyword_recent_search` | Human/provider samples from keyword-search recent results. | Hidden; ranking/source position stays sealed. |
| `external_report_reference` | Externally supplied report, archive, or curated source reference. | Hidden unless the report has no performance proxy. |

## Sampling quota and anti-overfit plan

- Total rows: 30.
- Verified ordinary/cold examples: 8-10 required; this queue reserves exactly 10 judge-only ordinary/cold control slots.
- Collection target roles are collection-balancing roles, not final outcome buckets. Final `hot` / `medium` / `cold` / `unknown` outcome buckets are written only in the sealed judge-only manifest after the pre-unblind threshold rule exists.
- Independent source path families: at least 4.
- Creator/account count: at least 10.
- Category/format count: at least 3.
- Maximum per source family: 9/30.
- Maximum per trend: 9/30.
- Maximum per sound: 9/30.
- Maximum per format: 9/30.
- Maximum per creator/account: 9/30.
- Maximum clipping/clipping-economy rows: 9/30 unless the evaluation is explicitly converted to a clipping-specific subtest before collection.
- Candidate 001 cannot be used as the scored blind set.
- No single viral example can be upgraded into a durable taxonomy or relation claim.

## Thirty-row queue

Collection target role is for sample owner and judge only. It must not appear in explainer packets and must not be copied as a final outcome bucket.

| Slot | Sample ID | Source path family | Target category/format | Collection target role | Anti-overfit group | Required comparator intent |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | `blind_us_2026_05_09_c2_001` | `trend_surface_hot` | score/rating reveal entertainment | `hot_candidate` | score_reveal_entertainment | Compare to ordinary same-mechanism row. |
| 02 | `blind_us_2026_05_09_c2_002` | `same_trend_recent_ordinary` | score/rating reveal entertainment | `ordinary_cold_control` | score_reveal_entertainment | Counterexample to slot 01 mechanism. |
| 03 | `blind_us_2026_05_09_c2_003` | `competitor_account_grid` | beauty or skin scan reveal | `open_comparator` | score_reveal_beauty | Compare to weak beauty scan row. |
| 04 | `blind_us_2026_05_09_c2_004` | `same_trend_recent_ordinary` | beauty or skin scan reveal | `ordinary_cold_control` | score_reveal_beauty | Cold counterexample to scan urgency. |
| 05 | `blind_us_2026_05_09_c2_005` | `trend_surface_hot` | shopping or ingredient scan reveal | `hot_candidate` | score_reveal_shopping | Compare to ordinary product utility row. |
| 06 | `blind_us_2026_05_09_c2_006` | `keyword_recent_search` | shopping or ingredient scan reveal | `ordinary_cold_control` | score_reveal_shopping | Cold counterexample to warning/scan format. |
| 07 | `blind_us_2026_05_09_c2_007` | `creator_neighbor_post` | non-score beauty utility | `open_comparator` | non_score_control | Control against score/scan mechanism. |
| 08 | `blind_us_2026_05_09_c2_008` | `keyword_recent_search` | non-score shopping utility | `open_comparator` | non_score_control | Control against score/scan mechanism. |
| 09 | `blind_us_2026_05_09_c2_009` | `trend_surface_hot` | tool/app task challenge demo | `hot_candidate` | embedded_tool_task | Compare to ordinary same-tool row. |
| 10 | `blind_us_2026_05_09_c2_010` | `same_trend_recent_ordinary` | tool/app task challenge demo | `ordinary_cold_control` | embedded_tool_task | Cold counterexample to task-obstacle demo. |
| 11 | `blind_us_2026_05_09_c2_011` | `trend_surface_hot` | AI prank-as-demo | `hot_candidate` | ai_prank_demo | Compare to weak prank row. |
| 12 | `blind_us_2026_05_09_c2_012` | `creator_neighbor_post` | AI prank-as-demo | `ordinary_cold_control` | ai_prank_demo | Cold counterexample to tool novelty. |
| 13 | `blind_us_2026_05_09_c2_013` | `competitor_account_grid` | routine-embedded education/tool demo | `open_comparator` | routine_tool_demo | Compare to abstract explainer control. |
| 14 | `blind_us_2026_05_09_c2_014` | `keyword_recent_search` | routine-embedded education/tool demo | `ordinary_cold_control` | routine_tool_demo | Cold counterexample for routine education. |
| 15 | `blind_us_2026_05_09_c2_015` | `external_report_reference` | AI output transformation | `open_comparator` | ai_output_transform | Compare to abstract tool explainer. |
| 16 | `blind_us_2026_05_09_c2_016` | `keyword_recent_search` | abstract tool explainer | `open_comparator` | abstract_tool_control | Control for embedded-demo claims. |
| 17 | `blind_us_2026_05_09_c2_017` | `trend_surface_hot` | actual clip/highlight | `hot_candidate` | clipping_actual | Compare to ordinary actual clip row. |
| 18 | `blind_us_2026_05_09_c2_018` | `competitor_account_grid` | actual clip/highlight | `open_comparator` | clipping_actual | Ordinary clip comparison row. |
| 19 | `blind_us_2026_05_09_c2_019` | `creator_neighbor_post` | actual clip/highlight | `ordinary_cold_control` | clipping_actual | Cold source-moment overfit counterexample. |
| 20 | `blind_us_2026_05_09_c2_020` | `trend_surface_hot` | meta clipping tutorial/strategy | `hot_candidate` | clipping_meta | Compare to weak tutorial row. |
| 21 | `blind_us_2026_05_09_c2_021` | `keyword_recent_search` | meta clipping tutorial/strategy | `ordinary_cold_control` | clipping_meta | Cold counterexample for clipping tutorial. |
| 22 | `blind_us_2026_05_09_c2_022` | `competitor_account_grid` | payout proof | `open_comparator` | clipping_payout | Compare to skepticism or later cold payout row if available. |
| 23 | `blind_us_2026_05_09_c2_023` | `keyword_recent_search` | payout proof | `open_comparator` | clipping_payout | Open comparator for proof/receipt framing. |
| 24 | `blind_us_2026_05_09_c2_024` | `competitor_account_grid` | marketplace/platform opportunity | `open_comparator` | clipping_marketplace | Compare to recruiting-hype row. |
| 25 | `blind_us_2026_05_09_c2_025` | `keyword_recent_search` | recruiting hype / aspirational promise | `ordinary_cold_control` | clipping_recruiting | Red-flag counterexample to opportunity claims. |
| 26 | `blind_us_2026_05_09_c2_026` | `trend_surface_hot` | hyper-specific POV comedy | `hot_candidate` | pov_comedy | Compare to cold POV row. |
| 27 | `blind_us_2026_05_09_c2_027` | `same_trend_recent_ordinary` | hyper-specific POV comedy | `ordinary_cold_control` | pov_comedy | Counterexample to specificity alone. |
| 28 | `blind_us_2026_05_09_c2_028` | `competitor_account_grid` | store-specific utility | `open_comparator` | utility_conversion | Compare to slot 29 or later weak utility row. |
| 29 | `blind_us_2026_05_09_c2_029` | `keyword_recent_search` | store-specific utility | `open_comparator` | utility_conversion | Open comparator for conversion utility. |
| 30 | `blind_us_2026_05_09_c2_030` | `competitor_account_grid` | product/fashion transition | `open_comparator` | product_transition | Compare in later batch if weak transition is not found here. |

## Explainer-visible packet scrub checklist

Before any packet is sent to TK Content Explainer, remove or withhold:

- direct URL
- creator handle, profile URL, username, or visible watermark if it identifies the account
- views, likes, comments count, shares, saves, follower baseline, engagement rate, velocity, rankings, or "viral" labels
- metric screenshots and profile screenshots
- collection target role
- outcome bucket
- source path family
- source-control sheet or sealed manifest reference
- source popularity wording such as "top result", "high-performing", "winner", "from viral page", or "from low-performing row"
- live platform links or any artifact that requires the explainer to open a URL

Allowed in the explainer packet after scrub:

- sample ID
- region/language
- source type at a non-leaking level, e.g. `manual snapshot`
- visible or decoded post date only if it is not being used as a performance proxy
- first 3 seconds
- first frame and shot sequence
- caption/on-screen text with metrics, handles, and popularity cues removed
- transcript or voiceover with metrics and handles removed
- audio role without sound popularity
- script structure
- filming method
- editing rhythm
- CTA if not outcome revealing
- discussion themes with no counts, handles, or popularity cues
- policy/risk notes
- missing field notes
- knowledge snapshot and candidate provisional claims

Leakage check result must be recorded as `pass` before handoff.

## Sealed manifest specification

The sealed manifest is judge-only and must be owned by TK Viral Judge or the sample owner. TK Content Explainer must not receive it or any derivative containing outcome proxies before prediction lock.

Required sealed manifest fields:

- sample ID
- direct URL or external source ref
- provider and collection method
- collector
- collection timestamp
- creator/account judge-only ID
- profile/follower baseline or substitute
- visible or decoded post date plus provider/method
- region/language
- source path family
- collection target role
- views
- likes
- comments
- shares
- saves
- metric screenshot ref
- profile/follower baseline screenshot ref
- post screenshot/screen recording refs
- comparable baseline rule
- pre-unblind hot/medium/cold/unknown threshold rule
- outcome bucket
- completion status
- unavailable metric reasons
- audit notes

## Pre-unblind bucket threshold rule

The judge must write the concrete threshold rule before prediction lock and before unblinding any explainer predictions. The rule must use comparable account size, post age, source context, category/format, and region/language when possible.

Default bucket definitions until a concrete rule is written:

- `hot`: clearly above comparable rows or creator/account baseline.
- `medium`: ordinary, mixed, or comparable to baseline.
- `cold`: clearly below comparable rows or creator/account baseline.
- `unknown`: deleted, unavailable, boosted, non-comparable, missing required metrics, or collection artifacts insufficient to verify the row.

A row with `unknown` outcome is excluded from scoring unless a predeclared rule covers the missingness. The primary outcome window cannot be changed after outcomes are viewed.

## Human collector handoff

The human/external collector should submit one folder or packet per row with:

- completed row template
- source URL or external source ref
- provider/method note
- post screenshot
- first-frame screenshot
- screen recording or frame sequence covering at least the first 3 seconds
- caption/transcript artifact
- metric screenshot
- profile/follower baseline screenshot or documented substitute
- visible/decoded post date evidence
- collection timestamp
- collector identity
- region/language note
- source path family note
- unavailable-field reasons

Acceptance checks:

- 30 rows submitted.
- 8-10 verified ordinary/cold rows present; target is 10.
- At least 10 creators/accounts.
- At least 4 source path families.
- At least 3 categories/formats.
- No source family, trend, sound, format, or creator exceeds 9/30.
- Clipping/clipping-economy rows do not exceed 9/30 unless the test is explicitly changed.
- Every row has judge-only metrics or explicit unavailable reasons.
- Every row has first 3 seconds, caption/on-screen text or unavailable reason, audio role, CTA or no-CTA note, risk notes, and discussion signal or unavailable reason.
- Observed facts and interpretation are separated.
- Explainer-visible packets pass leakage check.

## Evidence completeness score

Row-level evidence completeness is currently `0/30 rows collected`; no prediction score can be calculated.

When rows are submitted, score each row using 15 points:

1. source URL or external source ref
2. visible/decoded post date plus provider/method
3. collection timestamp
4. views or unavailable reason
5. likes or unavailable reason
6. comments or unavailable reason
7. shares or unavailable reason
8. saves or unavailable reason
9. follower baseline/substitute or unavailable reason
10. exact first 3 seconds
11. caption/on-screen text or unavailable reason
12. audio role
13. CTA or explicit no-CTA note
14. discussion signal or unavailable reason
15. screenshot/archive artifact refs

Prediction lock requires average completeness `>= 0.85`, no row below `0.70` unless marked `unknown` and excluded from scoring, and zero leakage into explainer packets.

Design completeness for this issue: complete for queue/spec handoff; incomplete for candidate evaluation because no external snapshots exist yet.

## Missing data

All row-level data is currently missing:

- direct URLs or external source refs
- screenshot and screen-recording artifact refs
- captions/transcripts
- metric screenshots
- profile/follower baseline screenshots
- visible or decoded post dates
- collection timestamps
- collectors/providers
- region/language confirmation
- source path family assignments from actual collection
- views, likes, comments, shares, saves
- follower baselines
- first 3 seconds
- script structures
- filming/editing/audio notes
- discussion signals
- heat signals
- CTAs
- risk notes
- outcome buckets
- comparable baseline thresholds

## Candidate patterns

These are candidate patterns to test, not durable knowledge claims:

- Score/scan reveals may travel across entertainment, beauty, and shopping when the result is immediate, visible, and arguable.
- Embedded tool/app demos may be stronger than abstract explanations when the task obstacle and output are visible in the first seconds.
- AI prank-as-demo content may depend on tool novelty plus social reaction, so ordinary counterexamples are needed.
- Clipping economy content must be split by subtype before performance or risk patterns are evaluated.
- Store-specific utility and product/fashion transitions may be better conversion candidates than general traffic posts, but only if CTA and product fit are visible.

## Candidate claims

Route these to TK Knowledge Classifier before any durable relation update:

- `scan_score_reveal_cross_category_candidate`
- `embedded_tool_demo_over_abstract_explainer_candidate`
- `ai_prank_demo_requires_social_reaction_candidate`
- `clipping_subtype_split_required_candidate`
- `conversion_fit_requires_utility_or_product_path_candidate`

No taxonomy, relation, trend ledger, or durable claim surface should be mutated from this design alone.

## Counterexamples reserved by design

- Ordinary/cold control rows reserved by design: slots 02, 04, 06, 10, 12, 14, 19, 21, 25, 27.
- Cold score/scan reveal rows: slots 02, 04, 06.
- Non-score controls: slots 07, 08.
- Cold embedded-tool rows: slots 10, 12, 14.
- Abstract tool control: slot 16.
- Cold clipping rows: slots 19, 21, 25.
- Cold general traffic row: slot 27.
- Open comparators that may become counterexamples after manifest verification: slots 03, 08, 16, 22, 23, 28, 29, 30.

Failed posts and weak examples must be preserved as counterexamples, not discarded as collection noise.

## Recommended next test

Have a human or externally authorized collector fill all 30 rows using the row template and artifact checklist. Then TK Case Librarian should audit completeness, enforce quota limits, create metric-scrubbed feature packets, and send only scrubbed packets to TK Content Explainer after leakage checks pass. TK Viral Judge should keep the sealed manifest, write the pre-unblind threshold rule, and lock the prediction ledger before outcome unblind.

## Memory update recommendations

`short-term-memory.md` should record that ULT-95 created a no-live-access replacement queue/spec at `evaluation/blind_pilot_2026-05-09_candidate_002_manual_snapshot_queue.md`, that no rows were collected, and that candidate 002 is not ready for prediction lock.

`long-term-memory.md` should preserve the stable contract: candidate 002 must be filled by human/external snapshots only; agents can normalize and audit after submission; URLs, handles, metrics, baselines, source paths, collection target roles, and outcome buckets remain judge-only; explainer packets must be scrubbed and leakage-checked.
