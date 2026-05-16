# eval_2026_05_10_candidate_002_preflight_ult97

## Evaluation identity

- Evaluation ID: `eval_2026_05_10_candidate_002_preflight_ult97`
- Multica issue: `ULT-97` / `416923ae-5a1d-4290-8b2d-5d9ddf40b857`
- Judge: `tk-viral-judge`
- Date: 2026-05-10
- Evaluation type: setup audit / leakage-boundary preflight
- Prediction scoring: not run
- Live platform access: not performed
- Sample set: `blind_pilot_2026-05-09_candidate_002`
- Rows collected: `0/30`

## Scope note

This is not a blind prediction score. Candidate 002 is still a manual/external snapshot collection design, not a completed sample set. Directional accuracy, hot-video recall, false-positive rate, calibration, explanation usefulness, and baseline delta are all `not run`.

The audit checks whether the current knowledge base and candidate 002 intake design are ready to enter human or external snapshot collection without leaking outcome information to TK Content Explainer.

## Leakage verdict

- Verdict: `partial pass for design / not testable for actual sample`
- Outcome fields hidden before prediction: specified as judge-only.
- URL, handle, metric, follower baseline, source path, collection target role, outcome bucket, metric screenshot, and source popularity wording: must remain judge-only.
- Explainer input: no filled scrubbed packets exist yet.
- Prediction lock before unblind: required by template, not yet possible.
- Main operational risk: the full knowledge-base folder contains judge-only and evaluation files. TK Content Explainer must receive only a curated safe knowledge snapshot plus scrubbed feature packets.

Judge recommendation applied after audit: the judge-only manifest's hidden target stratum wording was renamed to the less outcome-like operational field `collection_target_role`, with values like `hot_candidate`, `ordinary_cold_control`, and `open_comparator`, before broad handoff.

## Scorecard

| Metric | Status |
| --- | --- |
| Directional accuracy | not run |
| Calibration | not run |
| Hot-video recall | not run |
| Broad hot recall | not run |
| False-positive rate | not run |
| Baseline comparison | defined, not run |
| Explanation usefulness | not run |
| Evidence completeness | actual row evidence `0/30` |
| Anti-overfit status | conditional pass at design level |
| Unknown/inconclusive rate | not run |
| Sample-quality readiness | ready for manual/external collection only |

## Aggregate verdict

- Knowledge layer: structurally ready for manual/external snapshot collection; not ready to claim predictive power.
- Extraction/analysis layer: packet fields are adequate, but no row evidence exists.
- Case evidence layer: not ready; candidate 002 has no collected case rows, metrics, transcripts, screenshots, comments, or artifacts.
- Taxonomy/classifier layer: pass. ULT-96 keeps scan/score reveal and clipping economy as structural labels/subtypes, not causal performance claims.
- Modifier/update layer: pass. No relation, performance, conversion, outcome-bucket, or judge-manifest claim was upgraded.
- Explainer reasoning layer: not testable. Candidate 002 must not be sent to TK Content Explainer yet.
- Process verdict: ready for manual/external collection; not ready for prediction lock, unblind, scoring, or durable knowledge mutation.

## Anti-overfit design verdict

Pass at design level:

- 30-row target.
- At least 10 creators/accounts.
- At least 4 source-path families.
- At least 3 categories/formats.
- Max 9/30 concentration cap.
- 10 ordinary/cold control roles reserved.
- Failed or weak rows must be preserved as evidence.
- Score/scan rows require non-score controls.
- Embedded tool demos require abstract controls.
- Clipping rows are capped and split by viewer job.

Not yet verified:

- Real collector behavior.
- Actual creator/source diversity.
- Real cold/ordinary outcomes.
- Source popularity balance.
- Screenshot, transcript, and metric completeness.

## Ready gates

Ready for manual/external collection: `yes`.

Ready for TK Content Explainer: `no`.

Ready for prediction lock: `no`.

Ready for judge scoring: `no`.

Ready for durable KB mutation: `no`.

Minimum items before explainer:

1. 30 completed snapshot rows.
2. At least 10 verified cold/ordinary rows.
3. At least 10 creators/accounts.
4. At least 4 source-path families.
5. No source, trend, sound, format, or creator concentration above 9/30.
6. Judge-only manifest completed.
7. Pre-unblind threshold rule written.
8. Scrubbed feature packets generated.
9. Leakage check passed.
10. Prediction ledger prepared.
11. TK Viral Judge owns the sealed manifest.

## Next handoffs

- Human/external collector: fill all 30 row packets with source ref, screenshots, first frame, recording/frame sequence, caption/transcript, metric screenshot, follower baseline or substitute, post-date evidence, timestamp, source path family, and unavailable-field reasons. Agents should not open or verify platform URLs.
- TK Case Librarian: audit row completeness and quotas, separate observations from interpretation, create scrubbed feature packets only after artifacts exist, and preserve cold/ordinary rows.
- TK Viral Judge: own the sealed manifest, write pre-unblind hot/medium/cold/unknown thresholds, run leakage checks, lock the prediction ledger, and later unblind/score.
- TK Content Explainer: wait. Use only scrubbed packets and a safe knowledge snapshot after judge leakage pass.
- TK Knowledge Classifier: review candidate claims only after filled mixed-outcome rows exist.
- TK Knowledge Modifier: no mutation now; future updates require accepted classifier or case-librarian proposals with backlinks and changelog entries.

## Local references

- Intake spec: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_manual_snapshot_queue.md`
- Sampling design audit: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_sampling_design_audit.md`
- Manual manifest template: `knowledge_base/evaluation/blind_pilot_2026-05-09_candidate_002_manual_manifest_TEMPLATE.md`
- Feature packet template: `knowledge_base/predictions/blind_pilot_2026-05-09_candidate_002_feature_packet_TEMPLATE.md`
- Taxonomy: `knowledge_base/taxonomy/TAXONOMY_V0.md`
- Modifier report: `knowledge_base/modifier_reports/2026-05-09_ult93_taxonomy_label_update.md`
