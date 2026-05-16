# Judge scorecard template

Use this scorecard after prediction lock and outcome unblinding. For setup audits, fill non-applicable prediction metrics as `not run` and score only process readiness.

## Evaluation identity

- Evaluation ID: eval_YYYY_MM_DD_01
- Prediction ledger:
- Judge:
- Date:
- Knowledge snapshot:
- Sample set:
- Outcome window:
- Evaluation type: setup audit / blind prediction / held-out replay / post-window unblind

## Sample set and leakage check

- Sample size:
- Creator/account diversity:
- Category/format diversity:
- Source pool diversity:
- Outcome fields hidden before prediction:
- Source URL / creator metric exposure risk:
- Explainer input scrubbed:
- Prediction lock complete before unblind:
- Baseline fields separated from explainer prediction:
- Leakage verdict: pass / fail / partial / not testable
- Leakage notes:

## Aggregate score

- Directional accuracy:
- Calibration:
- Hot-video recall:
- Broad hot recall:
- False-positive rate:
- Baseline comparison:
- Explanation usefulness:
- Evidence completeness:
- Anti-overfit status:
- Unknown/inconclusive rate:

## Aggregate verdict

- Knowledge layer verdict:
- Extraction/analysis layer verdict:
- Case evidence layer verdict:
- Taxonomy/classifier layer verdict:
- Modifier/update layer verdict:
- Explainer reasoning verdict:
- Sample quality verdict:
- Metric validity verdict:
- Process verdict:

## Baseline comparison

| Baseline | Inputs allowed | Accuracy | Hot recall | False-positive rate | Delta vs explainer | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| trend_heat_only |  |  |  |  |  |  |
| creator_size_only |  |  |  |  |  |  |
| category_prior_only |  |  |  |  |  |  |
| source_popularity_only |  |  |  |  |  |  |

## Case-level failure attribution

| Sample ID | Prediction | Confidence | Outcome | Judge score | Failure type | What failed | Recommended owner | Recommended action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sample_YYYY_MM_DD_01 | likely_hot / maybe_hot / likely_not_hot / inconclusive | low / medium / high | hot / medium / cold / unknown | match / partial / mismatch / inconclusive | extractor / analyst / case_librarian / classifier / modifier / explainer / sample_quality / metric_confound / trend_shift / leakage |  |  |  |

## Failure attribution decision rules

- `extractor`: missing or wrong extracted features changed the explainer's available evidence.
- `analyst`: extracted facts existed, but structure or meaning was misread before explanation.
- `case_librarian`: source evidence was incomplete or not normalized enough for claims/counterexamples.
- `classifier`: category boundary, subtype, or relation applicability was wrong or missing.
- `modifier`: durable memory was stale, overbroad, missing backlinks, or failed to deprecate a claim.
- `explainer`: prediction reasoning ignored evidence, overfit, overclaimed, or selected a bucket inconsistent with its own uncertainty.
- `sample_quality`: sample could not support a clean test because of duplicates, unavailable media, narrow pool, insufficient scrub, or poor comparability.
- `metric_confound`: outcome is distorted by boost, creator-size event, account restriction, repost, external press, platform suppression, measurement mismatch, or conversion campaign.
- `trend_shift`: the creative/trend context changed after collection or during the observation window.
- `leakage`: any hidden metric or proxy outcome was visible before prediction lock.

## Anti-overfit checks

- Was the sample drawn from more than one creator/account?
- Was the sample drawn from more than one category or format?
- Was no single trend/sound/source pool allowed to dominate unless explicitly trend-specific?
- Were outcome metrics hidden before prediction?
- Were baseline fields separated from knowledge-led predictions?
- Did the system outperform trend-heat-only, creator-size-only, category-prior-only, or source-popularity-only baselines?
- Are weak/failed videos retained as evidence?
- Are cold samples represented in failure analysis?
- Is any proposed skill/template/claim change supported by repeated evidence or one severe evaluation bug?

## What to keep, change, deprecate

- Keep:
- Change:
- Deprecate:
- Do not change yet:

## Next handoffs by agent

- TK Case Librarian:
- TK Knowledge Classifier:
- TK Knowledge Modifier:
- TK Content Explainer:
- TK Viral Judge:
- Growth Analyst:
- Trend Scout / Viral Video Analyst:

## Memory artifacts

### short-term-memory.md

- Issue:
- Node type:
- Owner:
- Time:
- Inputs used:
- Decisions:
- Validation:
- Open risks:

### long-term-memory.md

- Issue:
- Method:
- Result:
- Stable contracts:
- Diagnostic pointer:
- Parent-level signal:
