# eval_2026_05_09_setup_audit

## Evaluation identity

- Evaluation ID: eval_2026_05_09_setup_audit
- Issue: ULT-84
- Judge: tk-viral-judge
- Date: 2026-05-09
- Evaluation type: setup audit before first video prediction run
- Knowledge snapshot: tk_video knowledge base as of 2026-05-09 after evaluation-template update
- Sample set: blind sample not yet collected; `samples/us_hot_sample_set_2026-05-09.md` exists as retrospective hot-sample seed material only
- Prediction ledger: not yet populated
- Outcome window: defined by protocol, not yet applied

## Sample set and leakage check

- Sample set status: template exists and now targets 30 videos with explicit diversity and hidden-balance rules. A 21-row US hot-sample seed set exists, but it declares outcomes visible and is not intended for blind judge scoring.
- Leakage check status: protocol ready; the existing US hot-sample seed set fails blind-evaluation leakage by design and should be used for case-library seeding, taxonomy calibration, or relation-claim proposals only.
- Outcome metrics hidden: required for views, likes, comments, shares, saves, follower deltas, creator follower count, profile visits, clicks/sales, velocity, rank labels, and virality wording.
- Live URL risk: flagged. Explainer should not receive live source URLs or creator handles when those expose engagement metrics.
- Explainer input: must be metric-scrubbed clips, screenshots, transcripts, or structured feature packets.
- Unblinding: prediction lock must include bucket, confidence, reasons, missing signals, claims used, knowledge snapshot, and timestamp.
- Leakage verdict: pass for protocol readiness. Existing `sample_us_hot_2026_05_09_001` set is invalid for blind prediction scoring because outcomes, source URLs, and creator-size breakout signals are visible.

## Scorecard

- Directional accuracy: not run
- Calibration: not run
- Hot-video recall: not run
- Broad hot recall: not run
- False-positive rate: not run
- Baseline comparison: defined, not run
- Explanation usefulness: not run
- Evidence completeness: not run
- Anti-overfit status: protocol pass, sample pending
- Unknown/inconclusive rate: not run

## Aggregate verdict

The first prediction-evaluation loop is ready at the protocol/template level but must not be treated as a blind performance evaluation yet. A retrospective hot-sample seed set is present, but it already exposes outcomes and is explicitly marked not for blind judge scoring. No explainer predictions or sealed/unblinded outcome comparison were available in this issue.

The main fixed risk was leakage: the original templates allowed source URL and creator/account fields to sit beside "outcome hidden" without separating what the explainer may see. The revised templates require a metric-scrubbed explainer feature packet and a sealed judge-only outcome manifest.

## Layer verdicts

- Knowledge layer verdict: not evaluated; no content claims were tested.
- Extraction/analysis layer verdict: not evaluated; feature-packet requirements are now explicit.
- Case evidence layer verdict: not evaluated; case records are pending.
- Taxonomy/classifier layer verdict: not evaluated; failure categories now include classifier boundary and relation-applicability failures.
- Modifier/update layer verdict: not evaluated; failure categories now include stale, overbroad, under-scoped, or missing durable memory.
- Explainer reasoning verdict: not evaluated; prediction buckets and lock requirements are defined.
- Sample quality verdict: protocol improved; existing hot-sample seed set is usable for case evidence but not for blind prediction.
- Metric validity verdict: protocol improved; actual outcomes pending.
- Process verdict: ready to launch sample collection after source pool/region is chosen.

## Baseline comparison

| Baseline | Status | Notes |
| --- | --- | --- |
| trend_heat_only | defined, not run | Use only trend/sound/source heat. |
| creator_size_only | defined, not run | Keep separate from explainer input unless explicitly allowed. |
| category_prior_only | defined, not run | Requires enough category diversity in sample. |
| source_popularity_only | defined, not run | Use source ranking only as baseline, not as hidden explainer signal. |

The system cannot claim knowledge-base predictive value until the explainer beats or usefully explains its difference from at least one simple baseline.

## Case-level failure attribution

No case-level prediction failures are attributable yet because no blind sample rows have been scored. The existing US hot-sample seed set should be retained as non-blind evidence, not counted as prediction evidence.

Failure taxonomy is now standardized for the first run:

- extractor
- analyst
- case_librarian
- classifier
- modifier
- explainer
- sample_quality
- metric_confound
- trend_shift
- leakage

## Anti-overfit notes

- The sample template requires at least 10 creators and at least 3 categories or formats for a 30-video batch.
- No single trend, sound, creator, or source pool should exceed 30% unless the test is explicitly trend-specific.
- Cold and weak videos must be retained after scoring.
- Skill or durable-claim changes should require repeated evidence unless a severe leakage bug appears.
- Known viral examples should not count as successful prediction unless outcomes were hidden and predictions were locked first.

## What to keep, change, deprecate

- Keep: TK-specific explainer/judge roles, prediction buckets, outcome buckets, anti-overfit stance, and evidence-first case discipline.
- Change: use metric-scrubbed explainer packets and sealed judge-only outcome manifests; do not pass live metric-bearing URLs to the explainer in blind tests.
- Deprecate: any workflow where source URL, creator size, or visible engagement can reach the explainer without being explicitly marked as a baseline.
- Do not change yet: taxonomy, relation claims, trend ledger, and modifier behavior; no prediction evidence exists yet.

## Next handoffs by agent

- TK Case Librarian: prepare the first 30-video blind sample set using `samples/SAMPLE_SET_TEMPLATE.md`, plus a sealed outcome manifest and metric-scrubbed feature packet references. Keep `samples/us_hot_sample_set_2026-05-09.md` as case-library seed material only.
- Viral Video Analyst / extractor role: produce structured feature packets with hook, first 3 seconds, script, shots, edit rhythm, audio role, discussion signal, CTA, and missing-feature notes.
- TK Content Explainer: after the judge confirms leakage pass, predict each sample into `likely_hot`, `maybe_hot`, `likely_not_hot`, or `inconclusive` without using hidden metrics.
- TK Viral Judge: lock predictions, unblind outcomes after the fixed window or held-out reveal, score the ledger, compare baselines, and attribute failures.
- TK Knowledge Classifier: only review taxonomy/claim boundary changes after the judge identifies repeated classifier failures.
- TK Knowledge Modifier: only update durable memory from accepted classifier/case-librarian proposals, not from one isolated prediction miss.
- Growth Analyst: after own-account posts exist, compare prediction errors against retention, saves, shares, follows, profile visits, and conversion path.

## short-term-memory.md

### Step identity

- Issue: ULT-84 / a4696212-701c-4db6-8c2c-ce15c52dff31
- Node type: judge setup / protocol implementation
- Owner: tk-viral-judge
- Time: 2026-05-09

### Condensed local context

- The issue asked to migrate QCResearcher-style explainer/judge evaluation into tk_video.
- The local knowledge base already had sample, prediction ledger, and judge scorecard templates, matching the issue attachments. A retrospective US hot-sample seed set also exists, but it exposes outcomes and is not blind.
- The original templates were useful but too thin on leakage control, unblinding, baselines, and exact failure categories.

### Key decisions and rationale

- Added a dedicated prediction evaluation protocol so sample collection, prediction, unblinding, scoring, and failure attribution share one stable contract.
- Expanded the sample template into a 30-video structure with metric-scrubbed explainer packet rules and a sealed outcome manifest pointer.
- Standardized the requested failure taxonomy exactly around extractor, analyst, case_librarian, classifier, modifier, explainer, sample_quality, metric_confound, trend_shift, and leakage.
- Did not mutate taxonomy, case claims, trend records, or content knowledge because no video evidence has been evaluated.

### Work trace

- Read ULT-84 issue details and empty comment history.
- Read parent ULT-80 handoffs, local project brief, knowledge-base design, local skills, and current templates.
- Updated evaluation templates and protocol surfaces.
- Produced this setup-audit report as the first judge output.

### Validation performed

- Confirmed issue attachments matched the local templates before editing.
- Confirmed the updated templates define sample set, ledger, scorecard, hiding/unblind rules, prediction buckets, outcome buckets, failure taxonomy, baselines, and anti-overfit checks.

### Open threads

- A real prediction score cannot be computed until the first blind sample set, feature packets, predictions, and sealed outcomes exist.
- Source pool, region/language, and whether creator-size baseline is allowed still need to be chosen before the first run.

## long-term-memory.md

### Step summary

- Issue: ULT-84 / a4696212-701c-4db6-8c2c-ce15c52dff31
- Node type: judge setup / protocol implementation
- Owner: tk-viral-judge

### Method used

- Audited the current tk_video knowledge-base surfaces against the requested explainer/judge loop.
- Tightened evaluation contracts without changing content taxonomy or durable knowledge claims.

### Result achieved

- The prediction evaluation loop is ready for sample collection and blind prediction execution.
- The first real scorecard remains pending because no blind sample set has been collected. The existing US hot-sample file is non-blind seed evidence.

### Stable contracts

- 30-video sample set target with diversity guardrails.
- Outcome metrics hidden from explainer unless explicitly used as a baseline.
- Prediction lock before unblind.
- Prediction buckets: likely_hot, maybe_hot, likely_not_hot, inconclusive.
- Outcome buckets: hot, medium, cold, unknown.
- Failure taxonomy: extractor, analyst, case_librarian, classifier, modifier, explainer, sample_quality, metric_confound, trend_shift, leakage.
- Baseline comparison: trend heat, creator size, category prior, source popularity where data permits.

### Diagnostic index

- If the first evaluation fails due to leakage, inspect `samples/SAMPLE_SET_TEMPLATE.md`, the feature packet handoff, and whether any rows were copied from non-blind seed sets like `samples/us_hot_sample_set_2026-05-09.md`.
- If accuracy is poor with good feature packets, inspect `predictions/PREDICTION_LEDGER_TEMPLATE.md` rows and then route failures by attribution type.
- Read short-term memory only when reconstructing why protocol fields were added.

### Parent-level signal

- ULT-80 can treat the eval loop as structurally ready.
- Do not infer any knowledge-base predictive quality yet; only readiness was evaluated.
