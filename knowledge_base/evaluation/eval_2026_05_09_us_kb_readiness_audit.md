# eval_2026_05_09_us_kb_readiness_audit

## Evaluation identity

- Evaluation ID: `eval_2026_05_09_us_kb_readiness_audit`
- Issue: `ULT-87` / `0d1063a7-7f92-49ca-bfa5-4e5f86126848`
- Judge: `tk-viral-judge`
- Date: 2026-05-09
- Evaluation type: setup/readiness audit after first US retrospective hot-sample pass
- Knowledge snapshot:
  - `trends/us_trend_ledger_2026-05-09.md`
  - `samples/us_hot_sample_set_2026-05-09.md`
  - `case_library/2026-05-09_us_hot_cases_batch_001.md`
  - `taxonomy/TAXONOMY_V0.md`
  - `classifier_reviews/2026-05-09_us_hot_taxonomy_claim_review.md`
  - `relations/reviewed_claims_2026-05-09.md`
- Sample set: `sample_us_hot_2026_05_09_001`, 21 retrospective hot rows
- Prediction ledger: not populated
- Outcome window: already visible in source material; not usable for blind scoring

## Sample set and leakage check

- Source pool: TikTok Creative Center US 7-day hashtag trend page plus Lightreel May 1-7, 2026 trend report.
- Sample size: 21 rows, all selected as hot, viral, breakout, tutorial, remix, or niche-reference examples.
- Outcome hidden before prediction: no.
- Visible outcome fields: views, some engagement rates, some follower-count breakout notes, source popularity wording, and TikTok URLs/creator handles.
- Explainer input scrubbed: no blind explainer packet exists yet.
- Prediction lock before unblind: not applicable; no predictions were made.
- Baseline fields separated from explainer prediction: not yet testable.
- Leakage verdict: fail for blind prediction scoring; acceptable only as non-blind case-library and taxonomy-seeding evidence.
- Survivorship-bias verdict: high. The batch has no cold or average examples and is heavily shaped by trend-report selection.
- Evidence-chain verdict: mostly clear. The ledger points to the sample set, the sample rows are normalized into 21 case records, the classifier review narrows category boundaries, and reviewed claims preserve provisional/proposed status. Two chain defects remain: some trend-ledger rows are still pending case links, and `sample_us_2026_05_09_011` has a prom-trend linkage that conflicts with the May-wordplay sample description.

## Scorecard

| Dimension | Score / status | Judge note |
| --- | --- | --- |
| Directional accuracy | not run | Prohibited for this issue because outcomes were visible before any prediction lock. |
| Calibration | not run | No sealed predictions. |
| Hot-video recall | not run | Existing rows are known hot or curated positive examples. |
| Broad hot recall | not run | Not a blind outcome comparison. |
| False-positive rate | not run | No cold/medium rows. |
| Baseline comparison | defined, not run | Current set would reward source-selection leakage. |
| Explanation usefulness readiness | partial pass | Vocabulary and claims are usable as labeled hypotheses, not as durable rules. |
| Evidence-chain completeness | pass with caveats | Chain is auditable from trend to sample to cases to classifier to claims. |
| Case evidence completeness | partial pass | Case audit reports 0.74 completeness; direct comments, saves, shares, retention, CTA, and exact first-frame evidence are missing. |
| Taxonomy support | pass with caveats | Good enough for next extraction packets if top-level category and subtype/context tags are separated. |
| Claims readiness | partial pass | One claim is accepted_provisional; the rest must stay proposed or proposed_split. |
| Anti-overfit status | fail for current set, pass for protocol intent | The current evidence is biased, but the next-test requirements point in the right direction. |
| Ready for 30-video blind sample | conditional go | Ready to collect and run a new blind sample only after the minimal safeguards below are applied. |

## Aggregate verdict

The current knowledge base is ready to launch the next 30-video blind-sample collection and explainer test, but the current US hot sample must not be used to claim predictive accuracy. The first US pass is strong enough as a vocabulary, case-library, and claim-triage seed. It is not strong enough as evidence that the explainer can predict hotness across mixed outcomes.

The central risk is not that the knowledge base is incoherent. It is that the current evidence is all positive, visible-outcome, source-curated material. A simple baseline such as "anything selected by Lightreel or Creative Center trend coverage is likely hot" would appear strong on this batch without proving any knowledge-base value.

## Knowledge layer verdict

- Pass for chain clarity: trend ledger -> sample set -> case records -> classifier review -> reviewed claims is visible and auditable.
- Partial for evidence maturity: the chain correctly labels the source as retrospective and non-blind, but the trend ledger still has pending links and one category/linkage mismatch.
- Do not upgrade durable knowledge from this pass. Use it to guide blind sample design and explainer reasoning labels.

## Case evidence layer verdict

- Pass for normalization: 21 of 21 source rows were converted into case records with observed facts separated from interpretation.
- Partial for evidence quality: the 0.74 completeness score is plausible, but raw comments, saves, shares, retention, exact first 3 seconds, CTA, profile action, and conversion metrics are missing.
- Risk: discussion and conversion signals are often inferred from format, not directly observed. That is acceptable for hypothesis generation but weak for claim confidence.
- Keep the cold/failed evidence gap visible. The next case batch must include medium and cold examples.

## Taxonomy/classifier layer verdict

- The classifier made the right boundary move by refusing to promote `cultural moment`, `dance`, or `fashion transition` into top-level categories.
- The top-level taxonomy plus subtype/context tags is enough for the next explainer test.
- Required cleanup before the blind run: feature packets should store `top_level_category`, `subtype`, and `context_tags` separately instead of mixing labels such as `cultural moment / reaction`.
- Resolve the `sample_us_2026_05_09_011` prom-vs-May-wordplay mismatch before using it as linked evidence.

## Claims/modifier readiness verdict

- `claim_2026_05_09_002` can be used as accepted-provisional reasoning at low-medium confidence: hyper-specific relatable comedy may create discussion/tagging when the situation is precise.
- `claim_2026_05_09_001A` and `claim_2026_05_09_001B` must remain `proposed_split`: cultural-event interpretation and rare-access/proximity are different mechanisms.
- `claim_2026_05_09_006A` and `claim_2026_05_09_006B` must remain `proposed_split`: identity/location trend participation and new-dance/comedy novelty are different mechanisms.
- `claim_2026_05_09_003`, `claim_2026_05_09_004`, and `claim_2026_05_09_005` must remain `proposed`: each has plausible conversion logic but too little direct save/comment/profile/conversion evidence.
- No reviewed claim should be raised in confidence until mixed-outcome counterexamples are collected.

## Case-level failure attribution

No case-level prediction failures can be scored yet. The table below records the likely failure modes if this seed evidence is misused in the next loop.

| Case group | Current issue | Likely failure attribution | Owner | Required action |
| --- | --- | --- | --- | --- |
| All 21 retrospective rows | Outcomes and source popularity were visible before prediction. | leakage / sample_quality | tk-viral-judge | Do not score these as blind predictions. Use them only as seed cases and baseline-design material. |
| `case_2026_05_09_001`, `case_2026_05_09_002` | Stronger small-creator cultural-event examples, but still source-selected positives. | sample_quality / analyst | tk-case-librarian | Add direct first-frame, comment, and matched cold cultural-event derivatives. |
| `case_2026_05_09_010`, `011`, `012`, `013`, `014`, `020` | Raw celebrity, official, or institutional distribution can be mistaken for repeatable account mechanics. | metric_confound / sample_quality | tk-knowledge-classifier | Treat as event/source heat baselines or reference cases, not small-account proof. |
| `case_2026_05_09_003`, `004`, `021` | Discussion/tagging is plausible but raw comment density is unknown. | case_librarian / analyst | tk-case-librarian | Capture comment examples and tag-density for mixed-outcome POV/identity cases. |
| `case_2026_05_09_005`, `006`, `007` | Conversion claims depend on saves, source questions, profile action, or lead behavior that is missing. | case_librarian / modifier | tk-knowledge-modifier | Keep as proposed until product-source comments and conversion-path metrics exist. |
| `case_2026_05_09_008`, `009`, `015`, `016`, `017`, `018`, `019` | Dance/audio cases mix celebrity, official, tutorial, original-credit, remix, and low-follower breakout mechanisms. | classifier / sample_quality | tk-knowledge-classifier | Split by mechanism and collect low-follower non-breakout copies as counterexamples. |

## Baseline comparison

No baseline can be scored on this batch. For the next blind run, these baselines should be computed after unblinding and kept separate from explainer inputs.

| Baseline | Inputs allowed | Status | Notes |
| --- | --- | --- | --- |
| trend_heat_only | trend ledger heat, hashtag/sound/event visibility | defined, not run | Important because current examples are heavily trend-driven. |
| source_selection_only | whether the video came from a trend report or Creative Center-linked pool | defined, not run | Current retrospective set would be contaminated by this baseline. |
| creator_size_or_authority_only | follower count, verified/media/celebrity/official status | defined, not run | Must be judge-only unless explicitly tested as a baseline. |
| category_prior_only | top-level category/subtype prior from prior sealed samples | defined, not run | Not reliable until mixed-outcome category data exists. |
| format_specificity_only | presence of comparison, rare access, hyper-specific POV, store-specific utility, or identity context | defined, not run | Useful challenger baseline against full explainer reasoning. |

## Anti-overfit verdict

- Current evidence overfits visible winners. It should not be used to reward memorization.
- Source-pool overfit risk is high: TikTok Creative Center plus one trend report.
- Trend overfit risk is high: Met Gala/cultural-event, celebrity, dance/audio, and sound-format examples dominate the learning signal.
- Metric overfit risk is high: views and some engagement/follower notes were present before any explainer reasoning.
- Counterexample coverage is missing: no cold cultural-event reposts, generic dance copies, broad wellness advice, abstract AI hype, or unclear fashion transitions.
- The classifier/modifier restraint is good: overbroad claims were split or held proposed instead of promoted.

## Ready-for-blind-test verdict

Conditional go. The knowledge base is ready to support a 30-video blind-sample run if the current seed set is not reused as the test set and the following minimum items are completed:

1. Build a new 30-video sample with hidden outcomes and a judge-only sealed outcome manifest.
2. Include hot, medium, and cold examples; do not reveal balance to the explainer.
3. Require at least 10 creators and at least 3 top-level categories/formats.
4. Keep any one source pool, trend, event, sound, creator, or format under 30% unless the test is explicitly trend-specific.
5. Include matched positive/negative sets for cultural-event derivatives, hyper-specific POV comedy, fashion transitions, store-specific utility, AI/tool demos, and low-follower dance/trend participation.
6. Give the explainer only metric-scrubbed clips/screenshots/transcripts/feature packets, not live URLs, creator handles, views, likes, shares, follower counts, source-rank labels, or virality wording.
7. Lock prediction bucket, confidence, reasons, claims used, missing signals, knowledge snapshot, and timestamp before unblinding.
8. Score baselines after unblind: trend heat, source selection, creator size/authority, category prior, and format specificity.

## What to keep, change, deprecate

- Keep: retrospective hot batch as seed evidence; observed-vs-interpretation separation; top-level taxonomy plus context/subtype tags; classifier restraint; `claim_2026_05_09_002` as low-medium accepted-provisional only.
- Change: normalize case category fields; collect raw comments and exact first-frame evidence; add mixed-outcome counterexamples; enforce metric-scrubbed explainer packets; correct the sample 011 trend-link mismatch.
- Deprecate: any scoring workflow that passes current sample URLs, creator handles, views, engagement rates, follower-count breakouts, or trend-report selection status to the explainer.
- Do not change yet: no new top-level taxonomy categories, no confidence upgrades for proposed claims, and no durable conversion playbooks.

## Next handoffs by agent

- tk-case-librarian: build the 30-video blind sample and sealed outcome manifest; add medium/cold counterexamples; capture raw comment examples, exact first 3 seconds, on-screen text, CTA, save/share/comment signals, and direct feature packets.
- tk-knowledge-classifier: normalize category fields into top-level category plus subtype/context tags; resolve `sample_us_2026_05_09_011`; keep cultural-event, dance, fashion transition, store utility, and AI/tool patterns as subtypes or relation scopes, not new top-level categories.
- tk-knowledge-modifier: preserve reviewed-claim statuses; do not promote claims without mixed-outcome evidence; update backlinks and change history only after classifier-approved splits or claim edits.
- tk-content-explainer: use `claim_2026_05_09_002` as provisional reasoning with confidence visible; treat all proposed/proposed_split claims as hypotheses; predict from scrubbed feature packets only.
- tk-viral-judge: preflight leakage before prediction, verify the prediction ledger is locked, unblind only after the fixed rule, score against baselines, and attribute failures by extractor, analyst, case_librarian, classifier, modifier, explainer, sample_quality, metric_confound, trend_shift, or leakage.

## short-term-memory.md

### Step identity

- Issue: `ULT-87` / `0d1063a7-7f92-49ca-bfa5-4e5f86126848`
- Node type: knowledge-base readiness audit before first 30-video blind prediction test
- Owner: `tk-viral-judge`
- Time: 2026-05-09

### Condensed local context

- The issue asked whether the first US TK knowledge base, case library, taxonomy, and reviewed claims are ready for a blind prediction test.
- The attached/current local evidence includes a 21-row retrospective US hot sample, trend ledger, 21 normalized case records, taxonomy v0, classifier review, reviewed claims, and prediction evaluation protocol.
- Outcomes are visible in the seed sample, so no blind accuracy, recall, calibration, or false-positive metric was scored.

### Decisions

- The evidence chain is clear enough for a readiness audit.
- The current sample fails blind leakage controls by design and must not be scored as prediction evidence.
- The taxonomy is sufficient for the next test if feature packets separate top-level category from subtype/context tags.
- Only `claim_2026_05_09_002` can guide explainer reasoning as accepted-provisional at low-medium confidence.
- Split/proposed claims must remain non-durable until mixed-outcome counterexamples exist.
- The system is conditionally ready to collect and run a new 30-video blind sample after minimum leakage and diversity controls are applied.

### Open risks

- No cold/medium cases exist in the current batch.
- Raw comments, saves, shares, retention, first-frame text, CTA, and conversion metrics are missing across most cases.
- Current examples are overconcentrated in trend-report-selected winners, cultural moments, celebrity/official distribution, and dance/audio trends.
- `sample_us_2026_05_09_011` needs classification/linkage cleanup.

## long-term-memory.md

### Step summary

- Issue: `ULT-87` / `0d1063a7-7f92-49ca-bfa5-4e5f86126848`
- Node type: judge readiness audit
- Owner: `tk-viral-judge`

### Stable memory update

- The first US retrospective hot batch is useful as seed evidence, not as a blind prediction benchmark.
- Current durable stance: no new top-level taxonomy category; no claim-confidence upgrade from this batch alone.
- Accepted-provisional reasoning currently allowed: hyper-specific relatable comedy may drive discussion/tagging when the situation is precise and viewers can tag or add variants.
- Cultural-event interpretation/proximity and low-follower dance/trend participation need split, mixed-outcome validation before acceptance.
- Fashion transition, store-specific utility, and AI/tool contradiction hooks remain proposed until direct product-source, save, comment, profile, or conversion evidence exists.

### Diagnostic pointer

- If the first blind run performs poorly, first inspect leakage and feature-packet quality before changing taxonomy or claims.
- If failures concentrate in cultural-event or dance cases, inspect classifier boundaries and source/creator metric confounds.
- If failures concentrate in utility, fashion, or AI/tool cases, inspect missing saves, comments, profile action, and conversion-path metrics.

### Parent-level signal

- The project can proceed to a 30-video blind sample collection with strict metric-scrubbing, sealed outcomes, mixed outcomes, and baseline separation.
- Do not report predictive accuracy until predictions are locked before unblind.
