# Prediction ledger template

Use this ledger for blind or held-out virality prediction tests. The prediction section is locked before unblinding; outcome and judge sections are filled only after the lock.

## Test setup

- Test ID: pred_YYYY_MM_DD_01
- Sample set ID:
- Date created:
- Region/language:
- Source pool:
- Sample method: random / stratified / trend-focused / competitor-focused / own-account / mixed
- Knowledge snapshot:
- Outcome fields hidden: views, likes, comments, shares, saves, follower delta, profile visits, clicks/sales, creator follower count, velocity, visible rank labels
- Explainer input packet path:
- Outcome manifest path: judge-only, sealed until prediction lock
- Outcome window: T+72h early / T+7d primary / T+14d final / archived held-out snapshot
- Baselines to compute: trend_heat_only / creator_size_only / category_prior_only / source_popularity_only / none
- Judge owner:
- Prediction lock timestamp:
- Unblind timestamp:
- Leakage status: pass / fail / needs audit

## Bucket definitions

Prediction buckets:

- `likely_hot`: current knowledge suggests strong probability of above-sample performance.
- `maybe_hot`: promising but important signals are missing or mixed.
- `likely_not_hot`: weak fit, weak hook, weak discussion signal, stale format, unclear audience motive, or high risk.
- `inconclusive`: sample lacks enough information for a meaningful prediction.

Outcome buckets:

- `hot`: clearly above comparable sample performance.
- `medium`: ordinary or mixed performance.
- `cold`: clearly below comparable sample performance.
- `unknown`: insufficient, unavailable, deleted, boosted, or not comparable.

Failure attribution values:

- `extractor`: feature extraction missed or exposed important information incorrectly.
- `analyst`: video structure, hook, pacing, audio, audience motive, or CTA was misread.
- `case_librarian`: evidence record lacked required fields, source context, metrics, or counterexample handling.
- `classifier`: taxonomy boundary, category assignment, or relation applicability was wrong or missing.
- `modifier`: stale, overbroad, under-scoped, or missing durable memory claim affected reasoning.
- `explainer`: reasoning overreached, ignored uncertainty, misused knowledge, or chose an unsupported bucket.
- `sample_quality`: sample is unavailable, duplicate, unrepresentative, too narrow, or insufficiently scrubbed.
- `metric_confound`: paid boost, creator size shock, repost, external event, platform suppression, or measurement mismatch distorted outcome.
- `trend_shift`: trend/category changed between collection, prediction, and outcome window.
- `leakage`: hidden outcome or proxy outcome reached the predictor before lock.

## Prediction rows

| Sample ID | Feature packet ref | Category | Hidden metrics? | Extractor version | Analyst version | Explainer prediction | Confidence | Main reason | Missing signals | Claims used | Baseline prediction | Outcome bucket | Judge score | Primary failure attribution | Secondary attribution | Follow-up |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sample_YYYY_MM_DD_01 |  |  | yes / no |  |  | likely_hot / maybe_hot / likely_not_hot / inconclusive | low / medium / high |  |  |  |  | hot / medium / cold / unknown | match / partial / mismatch / inconclusive | extractor / analyst / case_librarian / classifier / modifier / explainer / sample_quality / metric_confound / trend_shift / leakage |  |  |

## Scoring rules

- `match`: `likely_hot` with `hot`, `likely_not_hot` with `cold`, or `maybe_hot` with `medium`.
- `partial`: adjacent bucket result, useful explanation with weak directional accuracy, or `maybe_hot` against `hot`/`cold` with uncertainty clearly stated.
- `mismatch`: confident wrong direction, especially `likely_hot` with `cold` or `likely_not_hot` with `hot`.
- `inconclusive`: prediction or outcome is `inconclusive`/`unknown`; exclude from directional accuracy but count in evidence completeness.

Aggregate metrics to compute after unblind:

- Directional accuracy: matches / scorable rows.
- Calibration: match rate by confidence tier.
- Hot-video recall: hot rows predicted `likely_hot`; also track broad recall as hot rows predicted `likely_hot` or `maybe_hot`.
- False-positive rate: non-hot rows predicted `likely_hot`.
- Explanation usefulness: 0-2 per row, where 0 = not useful, 1 = partially diagnostic, 2 = reason matched observed heat/discussion/conversion signal.
- Baseline delta: knowledge-led score minus each baseline score.

## Notes

- Do not use views, likes, comments, shares, saves, follower count, or already-known virality as prediction inputs unless the test explicitly allows that field as a baseline.
- Keep failed predictions. They are evidence.
- Compare against simple baselines before claiming the knowledge base adds value.
- If leakage occurs, mark the affected rows invalid for prediction accuracy and keep them only as process-failure evidence.
