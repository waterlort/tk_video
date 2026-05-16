# Candidate 002 sampling design audit

## Audit identity

- Audit ID: `candidate_002_sampling_design_audit_2026_05_09`
- Related issues: `ULT-90`, `ULT-92`, `ULT-93`, `ULT-94`, `ULT-95`
- Status: design complete, collection not complete
- Verdict: not ready for prediction lock until manual snapshots are filled.

## Why candidate 002 is needed

Candidate 001 is useful as a boundary and process artifact, but it is not a valid blind prediction set. It has no verified cold/ordinary examples, incomplete row-level outcomes, and excessive concentration in two winner/source pages.

Candidate 002 should be built from a manual or externally authorized snapshot workflow that preserves the judge/explainer boundary and adds counterexamples before any relation claim is upgraded.

## Design outputs

- Snapshot queue: `knowledge_base/samples/blind_pilot_2026-05-09_candidate_002_snapshot_queue.md`
- Replacement no-live-access manual snapshot queue/spec: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_manual_snapshot_queue.md`
- Judge-only manifest template: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_manual_manifest_TEMPLATE.md`
- Explainer packet template: `knowledge_base/predictions/blind_pilot_2026-05-09_candidate_002_feature_packet_TEMPLATE.md`
- This audit: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_sampling_design_audit.md`

## Coverage map

| Area | Slots | Purpose | Counterexample coverage |
| --- | --- | --- | --- |
| Score/scan reveal | 01-08 | Test cross-category score/scan mechanism across entertainment, beauty, shopping, and non-score controls. | Slots 02, 04, 06, 08. |
| Tool/app embedded demo | 09-16 | Test task challenge, AI prank, routine education, AI output, and abstract explainer control. | Slots 10, 12, 14, 16. |
| Clipping economy | 17-25 | Split actual clips, meta tutorials, payout proof, marketplace opportunity, and recruiting hype. | Slots 19, 21, 23, 25. |
| General traffic and conversion fit | 26-30 | Test POV comedy, store-specific utility, and product/fashion transition. | Slots 27, 29, plus future weak transition row if slot 30 is medium/hot. |

## Ready gate

Candidate 002 can move to TK Content Explainer only when all are true:

- 30 slots are filled with real sample IDs.
- At least 10 cold/ordinary rows are verified.
- At least 10 creator/accounts are represented.
- At least 4 source-path families are represented.
- No source family, trend, sound, format, or creator exceeds 9/30.
- Judge-only manifest has direct URL, creator, metrics, follower baseline/substitute, outcome bucket, and archive note for every row or explicit unavailable reason.
- Explainer feature packets are generated from scrubbed observations and pass a leakage grep for URLs, handles, metrics, follower counts, hidden strata, outcome buckets, and source popularity wording.
- Prediction ledger is prepared before any unblind.
- TK Viral Judge owns the sealed manifest.

## Evidence completeness

Use the 15-point formula in the manual manifest template. Required set threshold before prediction lock: average completeness >= 0.85, with no row below 0.70 unless marked `unknown` and excluded from scoring.

Current sample evidence completeness: 0/30 rows collected, so no prediction score can be calculated. Design completeness is sufficient for handoff because the queue, judge-only manifest, explainer packet template, quota rules, leakage boundary, and ready gate are all present.

## Missing data

All row-level evidence remains unknown until manual or externally authorized collection fills the queue:

- direct URLs
- creator/account identities for the sealed manifest
- visible or decoded post dates
- collection timestamps
- views, likes, comments, shares, saves
- follower baseline or substitute
- exact first 3 seconds
- caption/on-screen text
- audio/sound role
- CTA
- raw discussion sample
- screenshot/archive note

## Candidate patterns

- Score/scan reveal may be a cross-category mechanism when the reveal is immediate, visible, and debate-worthy; slots 01-08 test entertainment, beauty, shopping, and non-score controls.
- Embedded tool/app demos may outperform abstract explainers when the task obstacle and output are visible inside the first seconds; slots 09-16 separate task challenge, prank, routine, output transformation, and abstract control rows.
- Clipping economy content must be split by subtype before judging: actual clip/highlight, meta tutorial/strategy, payout proof, marketplace/platform opportunity, and recruiting/aspirational promise are not interchangeable.
- Future affiliate/conversion fit should be tested through utility and product-transition rows without assuming that general traffic formats convert.

## Candidate claims

These are candidate claims only; do not write them into durable relation surfaces without classifier/modifier approval and mixed-outcome evidence.

- `scan_score_reveal_cross_category_candidate`: score/scan reveal can create curiosity across niches when the outcome is visible, personalized, and arguable.
- `embedded_tool_demo_over_abstract_explainer_candidate`: app/tool demos are stronger when the viewer sees a concrete task and output rather than a verbal explanation.
- `clipping_subtype_split_required_candidate`: clipping economy examples need subtype labels before pattern or risk claims are evaluated.
- `conversion_fit_requires_utility_or_product_path_candidate`: traffic formats should not be treated as affiliate-ready unless CTA, product relevance, or store-specific utility is visible.

## Counterexamples

The queue intentionally reserves counterexample rows:

- cold score/scan reveal controls: slots 02, 04, 06, 08
- cold embedded-tool controls: slots 10, 12, 14, 16
- cold clipping economy controls: slots 19, 21, 23, 25
- cold general traffic/conversion controls: slots 27, 29
- non-score utility controls: slots 07, 08
- abstract tool explainer control: slot 16

## Recommended next test

Fill all 30 queue slots with manual or externally authorized snapshots, verify at least 10 cold/ordinary rows and at least 10 creators across at least 4 source-path families, then create metric-scrubbed feature packets for TK Content Explainer while TK Viral Judge keeps the sealed manifest. Lock the prediction ledger before any unblind.

## Handoff checklist

1. Manual collector fills the snapshot queue and judge-only manifest.
2. Case librarian verifies row completeness and anti-overfit quotas.
3. Case librarian creates final metric-scrubbed feature packets.
4. Viral judge runs leakage preflight.
5. Content explainer receives only feature packets and knowledge snapshot.
6. Prediction ledger is locked.
7. Viral judge unblinds and scores against the sealed manifest.

## Current verdict

Not ready. The design is ready, but collection and snapshots are not complete.
