# tk-prediction-evaluation-protocol

Use this skill for TK Content Explainer and TK Viral Judge work.

## Purpose

Evaluate whether the tk_video knowledge base and agent workflow can explain and predict TikTok/TK video performance across many sampled videos without overfitting.

The goal is not perfect prediction. The goal is to understand most samples well enough, identify what is missing, and improve the collection -> analysis -> knowledge base -> explanation -> production loop.

## Key roles

### TK Content Explainer

- Reads structured video features and current knowledge-base surfaces.
- Explains active content category, audience motive, hook logic, script structure, filming method, editing rhythm, music/audio role, heat signal, discussion signal, and conversion fit.
- Predicts likely hotness before outcome metrics are revealed.
- Records uncertainty, missing signals, conflicts with memory, and questions for classifier/modifier.
- Does not mutate durable memory directly.

### TK Viral Judge

- Builds or audits blind/held-out prediction tests.
- Ensures views, likes, comments, shares, saves, follower deltas, and other outcome metrics do not leak into the explainer prediction unless the test explicitly allows a baseline.
- Compares predictions with outcomes after unblinding or after a fixed observation window.
- Scores directional accuracy, calibration, hot-video recall, false positives, baseline comparison, and explanation usefulness.
- Diagnoses whether failures came from feature extraction, video analysis, taxonomy gaps, stale claims, modifier updates, explainer reasoning, sample quality, metric confounds, or trend shift.
- Proposes process updates only when evidence is repeated or high severity.

## Outcome hiding and unblinding

- Hide views, likes, comments, shares, saves, follower deltas, creator follower count, profile visits, clicks/sales, velocity, rank labels, and visible virality wording before prediction lock.
- Hide live source URLs or creator handles from the explainer when opening them would expose engagement metrics.
- Use metric-scrubbed clips, screenshots, transcripts, or structured feature packets for explainer input.
- Lock predictions with sample ID, knowledge snapshot, bucket, confidence, reasons, missing signals, claims used, and timestamp before unblinding.
- Use a fixed outcome window. Default windows: T+72h early, T+7d primary, T+14d optional final, or archived held-out snapshot after lock.
- Mark leaked rows invalid for accuracy scoring and keep them as process-failure evidence.

## Prediction buckets

- `likely_hot`: current knowledge suggests strong probability of above-sample performance.
- `maybe_hot`: promising but important signals are missing or mixed.
- `likely_not_hot`: weak fit, weak hook, weak discussion signal, stale format, unclear audience motive, or high risk.
- `inconclusive`: sample lacks enough information for a meaningful prediction.

## Outcome buckets

Outcome should be relative to the sample, niche, account size, post age, and source context.

- `hot`: clearly above comparable sample performance.
- `medium`: ordinary or mixed performance.
- `cold`: clearly below comparable sample performance.
- `unknown`: insufficient or unavailable outcome data.

## Failure attribution values

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

## Baseline comparison

Compare knowledge-led predictions against simple baselines when data allows:

- trend heat only
- creator size only
- category prior only
- source popularity only

Do not claim knowledge-base value unless it beats or usefully explains its difference from these baselines.

## Anti-overfitting rules

- Do not optimize the workflow around one video, one creator, one sound, one niche, one trend, one source pool, or one wording pattern.
- Do not reward explanations that simply restate already-visible metrics.
- Keep cold and failed samples as evidence.
- Compare against simple baselines such as trend heat only, creator size only, or source popularity only.
- Prefer process changes that generalize across categories.
- Require repeated evidence before changing skills, unless a single failure reveals a severe leakage or evaluation bug.

## Required outputs

For explainer:

- video explanation
- predicted hotness bucket
- confidence
- reasons
- missing signals
- knowledge claims used
- candidate gaps or conflicts
- questions for classifier/modifier/judge
- short-term-memory.md
- long-term-memory.md

For judge:

- test setup
- leakage check
- scorecard
- aggregate verdict
- failure attribution
- baseline comparison
- anti-overfit notes
- next handoffs
- skill/process update proposals if justified
- short-term-memory.md
- long-term-memory.md
