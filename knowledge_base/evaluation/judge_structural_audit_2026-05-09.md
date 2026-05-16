# Judge structural audit 2026-05-09

## Evaluation identity

- Evaluation ID: `judge_structural_audit_2026_05_09_us_hot_001`
- Multica issue: `ULT-87`
- Evaluation type: setup audit / knowledge-base structural audit
- Judge protocol: `tk-prediction-evaluation-protocol`
- Date: 2026-05-09
- Knowledge snapshot:
  - `us_hot_sample_set_2026-05-09.md`
  - `us_trend_ledger_2026-05-09.md`
  - `2026-05-09_us_hot_cases_batch_001.md`
  - `TAXONOMY_V0.md`
  - `2026-05-09_us_hot_taxonomy_claim_review.md`
  - `reviewed_claims_2026-05-09.md`

## Scope note

This is not a blind prediction score. The first US sample batch is retrospective and outcome-visible. Therefore directional accuracy, hot-video recall, false-positive rate, calibration, and baseline delta are not valid metrics yet.

This audit checks whether the knowledge base is structurally ready for the first blind prediction test.

## Sample set and leakage check

- Sample size: 21 hot or breakout samples.
- Creator/account diversity: acceptable for seeding, not enough for prediction evaluation.
- Category/format diversity: strong enough for seed taxonomy.
- Source pool diversity: limited; mainly TikTok Creative Center trend signals plus one Lightreel weekly report.
- Outcome fields hidden before prediction: no.
- Source URL / creator metric exposure risk: high.
- Explainer input scrubbed: no.
- Prediction lock complete before unblind: no.
- Baseline fields separated from explainer prediction: not applicable.
- Leakage verdict: not testable for prediction; high leakage if used as blind set.

## Aggregate score

- Directional accuracy: not run.
- Calibration: not run.
- Hot-video recall: not run.
- Broad hot recall: not run.
- False-positive rate: not run.
- Baseline comparison: not run.
- Explanation usefulness: not run.
- Evidence completeness: usable seed quality; case-librarian reported 0.74.
- Anti-overfit status: partial pass for documentation; fail for sample composition if used directly for rules.
- Unknown/inconclusive rate: high for detailed metrics such as retention, saves, shares, profile visits, CTA, and raw comments.

## Aggregate verdict

- Knowledge layer verdict: promising but early. The knowledge base now connects trend signals, samples, cases, taxonomy review, and reviewed claims, but it is still mostly built from visible winners.
- Extraction/analysis layer verdict: not yet judged. Current case records are hand-normalized from public descriptions, not extracted from scrubbed feature packets.
- Case evidence layer verdict: pass for seeding; not pass for durable inference. It needs cold/average counterexamples and raw comment/metric fields.
- Taxonomy/classifier layer verdict: pass for first iteration. The classifier correctly prevented over-promotion of `cultural moment`, `dance`, and `fashion transition` into top-level categories.
- Modifier/update layer verdict: not ready for broad durable mutations. Only `claim_2026_05_09_002` should guide work as `accepted_provisional`; other claims stay proposed or split.
- Explainer reasoning verdict: not yet tested. It should be tested only with metric-scrubbed feature packets.
- Sample quality verdict: good for hot-case learning, weak for prediction or generalization.
- Metric validity verdict: insufficient. Many metrics are missing or visible only as article-level summaries.
- Process verdict: ready to prepare blind sample set, not ready to claim predictive power.

## Claims readiness

Can be used provisionally:

- `claim_2026_05_09_002`: hyper-specific relatable comedy can create discussion and tagging behavior. Use low-medium confidence and require counterexamples.

Must remain proposed/split:

- `claim_2026_05_09_001A`: cultural-event interpretation/comparison.
- `claim_2026_05_09_001B`: rare-access/proximity reaction.
- `claim_2026_05_09_003`: object-triggered fashion transition for affiliate/product fit.
- `claim_2026_05_09_004`: store-specific utility content for conversion potential.
- `claim_2026_05_09_005`: AI/tool "using it wrong" contradiction hook.
- `claim_2026_05_09_006A`: trend participation plus location/identity context.
- `claim_2026_05_09_006B`: new-dance framing plus comedy/shock audio.

## Anti-overfit checks

- More than one creator/account: yes.
- More than one category/format: yes.
- No single trend dominates: partial. Met Gala/cultural-moment content is overrepresented.
- Outcome metrics hidden: no.
- Baseline fields separated: not applicable yet.
- Cold/weak videos retained: no, not in this batch.
- Failed predictions retained: not applicable yet.
- Skill/claim changes supported by repeated evidence: partial. Taxonomy label additions are safe; durable claims should remain conservative.

Anti-overfit verdict: partial pass. The documentation explicitly guards against overfitting, but the current data is still hot-only and source-limited.

## Ready-for-blind-test verdict

Conditional yes.

The knowledge base is ready to design the first 30-video blind sample set, but not ready to run a real judge score until these minimum items exist:

1. 30-video mixed sample set with hot/medium/cold balance hidden from explainer.
2. At least 10 creators/accounts.
3. At least 3 categories/formats.
4. No single trend or creator above 30% unless the test is trend-specific.
5. Metric-scrubbed feature packets for TK Content Explainer.
6. Sealed outcome manifest owned by TK Viral Judge.
7. Predeclared hot/medium/cold thresholds.
8. At least one baseline: trend_heat_only, creator_size_only, category_prior_only, or source_popularity_only.
9. Prediction ledger locked before unblinding.

## Next handoffs by agent

- TK Case Librarian:
  - Build mixed-outcome counterexample batch.
  - Add cold/average samples for Met Gala derivatives, dance/trend copies, store-specific utility, fashion transitions, and AI/tool demos.
  - Preserve raw comments and visible CTA text when available.

- TK Knowledge Classifier:
  - Review split claims after counterexamples arrive.
  - Define boundary tests for cultural-event interpretation vs raw event spectacle.
  - Define boundary tests for trend-performance identity context vs generic copy.

- TK Knowledge Modifier:
  - Apply taxonomy label additions and `claim_2026_05_09_002` as accepted_provisional if authorized.
  - Keep all other claims proposed/split with explicit counterexample needs.

- TK Content Explainer:
  - Do not predict from current hot sample URLs.
  - Wait for metric-scrubbed feature packets and locked knowledge snapshot.

- TK Viral Judge:
  - Own the sealed outcome manifest and leakage check.
  - Run first blind pilot only after the ready gate passes.

- Trend Scout / Viral Video Analyst:
  - Collect current US samples from at least two source pools.
  - Produce feature packets that do not expose outcome metrics or creator-size proxies.

## Final judge note

The first knowledge base is useful enough to guide ideation and case collection, but not yet enough to claim it can predict virality. The strongest current value is taxonomy calibration and process design. The next decisive step is not more hot examples; it is mixed-outcome, metric-scrubbed sampling.

