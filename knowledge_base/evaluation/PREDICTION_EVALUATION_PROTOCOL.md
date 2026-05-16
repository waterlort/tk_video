# TK prediction evaluation protocol

This protocol defines how TK Content Explainer predictions and TK Viral Judge evaluations should be run without outcome leakage or overfitting.

## Evaluation purpose

The goal is not perfect virality prediction. The goal is to test whether the knowledge base, extraction, analysis, case evidence, taxonomy, modifier updates, and explainer reasoning generalize across sampled videos well enough to guide future content work.

## Required artifacts

- `samples/SAMPLE_SET_TEMPLATE.md`: 30-video sample set and outcome hiding control sheet.
- `predictions/PREDICTION_LEDGER_TEMPLATE.md`: prediction lock, unblind, scoring, and failure attribution ledger.
- `evaluation/JUDGE_SCORECARD_TEMPLATE.md`: judge scorecard, baseline comparison, anti-overfit review, and handoff report.
- Optional sealed outcome manifest: judge-only file or attachment that is never passed to TK Content Explainer before prediction lock.

## Role boundary

- TK Content Explainer receives metric-scrubbed structured features and predicts `likely_hot`, `maybe_hot`, `likely_not_hot`, or `inconclusive`.
- TK Viral Judge owns sample audit, leakage checks, unblinding, scoring, failure attribution, baseline comparison, and routing follow-ups.
- TK Viral Judge does not directly change taxonomy, relation claims, or durable content memory from one evaluation. It can update evaluation templates/protocols when the issue explicitly authorizes protocol setup or when severe evaluation bugs are found.

## Sample set contract

Each first-round sample set should target 30 videos:

- At least 10 creators/accounts.
- At least 3 categories or formats.
- No single trend, sound, creator, or source pool above 30% of the set unless the test is explicitly trend-specific.
- Include weak and ordinary videos, not only known viral examples.
- Use a fixed observation window before prediction starts.

The sample owner may use hidden outcome strata to balance hot/medium/cold examples, but those strata must stay in the sealed manifest.

## Outcome hiding

Hidden from explainer before prediction lock:

- Views, likes, comments, shares, saves, bookmarks, watch/retention metrics, profile visits, follows, clicks, sales, follower delta, creator follower count, post age-adjusted velocity, platform rank, visible "viral" labels, and any outcome-derived tag.
- Live source URLs or creator handles when opening them exposes visible engagement metrics.
- Hidden sample-balancing labels.

Allowed to explainer before prediction lock:

- Metric-scrubbed video artifact, screenshots with metrics cropped, transcript, on-screen text, audio description, visual sequence, filming/editing notes, CTA, policy-risk notes, region/language, rough trend context, and knowledge snapshot.
- Creator-size or trend-heat fields only when the test explicitly marks them as a baseline feature. The ledger must then separate baseline prediction from knowledge-led prediction.

## Prediction lock

A prediction is locked only when the ledger records:

- Sample ID
- Feature packet reference
- Knowledge snapshot
- Explainer prediction bucket
- Confidence
- Main reason
- Missing signals
- Claims used or absence of claims
- Timestamp

Outcome unblinding before this lock invalidates the row for accuracy scoring.

## Unblinding

Default windows:

- Early signal: T+72h from posting.
- Primary outcome: T+7d from posting.
- Final check: T+14d from posting, optional.
- Archived held-out set: unblind immediately after every prediction row is locked.

The primary window cannot be changed after outcomes are seen. Deleted, private, boosted, non-comparable, or missing-metric videos become `unknown` unless a predeclared rule handles them.

## Prediction buckets

- `likely_hot`: current knowledge suggests strong probability of above-sample performance.
- `maybe_hot`: promising but important signals are missing or mixed.
- `likely_not_hot`: weak fit, weak hook, weak discussion signal, stale format, unclear audience motive, or high risk.
- `inconclusive`: sample lacks enough information for a meaningful prediction.

## Outcome buckets

Outcome is relative to sample, niche, account size, post age, source context, and region/language.

- `hot`: clearly above comparable sample performance.
- `medium`: ordinary or mixed performance.
- `cold`: clearly below comparable sample performance.
- `unknown`: insufficient, unavailable, deleted, boosted, or not comparable.

Each sample set must write its concrete threshold rule before unblinding.

## Scoring

- `match`: `likely_hot` with `hot`, `likely_not_hot` with `cold`, or `maybe_hot` with `medium`.
- `partial`: adjacent outcome, useful explanation with weaker directional accuracy, or uncertainty that correctly names missing signals.
- `mismatch`: confident wrong direction or unsupported explanation.
- `inconclusive`: prediction or outcome cannot be scored.

Aggregate metrics:

- Directional accuracy = matches / scorable rows.
- Calibration = match rate by confidence tier.
- Hot-video recall = hot rows predicted `likely_hot`.
- Broad hot recall = hot rows predicted `likely_hot` or `maybe_hot`.
- False-positive rate = non-hot rows predicted `likely_hot`.
- Explanation usefulness = 0 to 2 per row.
- Evidence completeness = rows with required feature packet fields / all rows.
- Baseline delta = explainer metric minus simple baseline metric.

## Baselines

Use at least one baseline when data allows:

- `trend_heat_only`: predicts from trend/sound/source heat without video-specific structure.
- `creator_size_only`: predicts from creator/account size or recent account average.
- `category_prior_only`: predicts from category or format prior in the sample/source pool.
- `source_popularity_only`: predicts from source list/ranking popularity.

Do not claim the knowledge base adds value unless it beats or explains its difference from these baselines.

## Failure attribution

Use one primary failure type and optional secondary types:

- `extractor`: feature extraction missed or leaked important information.
- `analyst`: video structure or meaning was misread.
- `case_librarian`: evidence record was incomplete or missing counterexample/metric context.
- `classifier`: taxonomy boundary, subtype, or relation applicability was wrong or missing.
- `modifier`: durable memory was stale, overbroad, under-scoped, missing backlinks, or not deprecated.
- `explainer`: reasoning overreached, ignored uncertainty, misused knowledge, or chose an unsupported bucket.
- `sample_quality`: sample was unavailable, duplicate, too narrow, insufficiently scrubbed, or unrepresentative.
- `metric_confound`: outcome was distorted by boost, creator-size shock, external event, platform suppression, repost, account restriction, or measurement mismatch.
- `trend_shift`: trend/category changed during collection or observation.
- `leakage`: hidden outcome or proxy outcome reached the predictor before lock.

## Anti-overfitting guardrails

- Do not optimize around one video, creator, trend, sound, category, source pool, wording pattern, or sample batch.
- Do not reward explanations that restate visible metrics.
- Keep cold samples, failed predictions, and mismatch rows as evidence.
- Require repeated failures before changing skills or durable claims, unless one failure reveals leakage or a severe evaluation bug.
- Prefer changes that improve extraction, evidence, taxonomy, or explanation across categories.

## First-run ready gate

Do not run the first small-scale evaluation until all are true:

- A 30-video sample set is filled or a deliberately smaller pilot size is documented.
- Outcome metrics and live URLs are withheld from the explainer packet.
- A sealed outcome manifest exists.
- Thresholds for hot/medium/cold/unknown are written before unblind.
- Knowledge snapshot is recorded.
- Prediction lock process is clear.
- At least one baseline can be computed or explicitly marked unavailable with reason.
- Cold and weak samples are retained.
