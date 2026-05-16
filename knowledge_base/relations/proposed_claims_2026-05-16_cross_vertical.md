# Proposed Cross-Vertical Claims - 2026-05-16

These claims are candidate-only. They come from the 2026-05-16 public-search scout runs and require classifier review, manual visual verification, and mixed-outcome counterexamples before modifier promotion.

## candidate_claim_cross_vertical_2026_05_16_001

Claim: Cross-vertical short-video performance should be gated by visible proof in the first seconds, not topic/tag heat alone.

Scope: TikTok/TK short videos across entertainment, utility, product, transformation, and opinion clusters.

Applies when: The viewer can see a result, behavior, reaction, artifact, product use, or state change before explanation.

Does not apply when: The row is only a high-score tag/discover match without category verification.

Supporting cases: `case_2026_05_16_cv_001`, `002`, `003`, `009`, `010`, `012`, `016`.

Counterexamples: `case_2026_05_16_cv_005`.

Confidence: low-medium.

Next validation test: Manually inspect first 2 seconds for 5 high, 5 medium, and 5 cold rows per mechanic.

## candidate_claim_cross_vertical_2026_05_16_002

Claim: Content mechanics cluster better by viewer job than by surface topic.

Scope: General traffic account ideation and testing.

Applies when: A video can be assigned one dominant job: laugh/share, save/apply, argue/comment, buy/want, identify/tag, or follow/series.

Does not apply when: A video tries to serve multiple jobs before the first payoff.

Supporting cases: `case_2026_05_16_cv_002`, `006`, `008`, `009`, `014`, `015`, `018`.

Counterexamples: unresolved; needs mixed-outcome rows.

Confidence: low-medium.

Next validation test: Generate 12 concepts by viewer job and compare retention/comment/save/share profiles.

## candidate_claim_cross_vertical_2026_05_16_003

Claim: High information density is safer when the first two seconds define a simple promise or container.

Scope: Utility, AI/tool, marketing, recipe, study, and product education videos.

Applies when: The opening defines the result, topic container, or artifact before listing steps.

Does not apply when: The video starts with abstract context, creator introduction, or jargon.

Supporting cases: `case_2026_05_16_cv_006`, `007`, `008`, `011`.

Counterexamples: unresolved; needs manual view and cold rows.

Confidence: low.

Next validation test: A/B test result-first vs context-first openings for one utility topic.

## candidate_claim_cross_vertical_2026_05_16_004

Claim: Product-adjacent videos should usually lead with use case, result, or sensory proof before product explanation.

Scope: Commerce-adjacent product demos, beauty/home tools, cleaning, pet gear, and Amazon-style finds.

Applies when: The viewer sees why the object matters before being asked to care about the object.

Does not apply when: The object itself is visually strange enough to be the first-shot hook.

Supporting cases: `case_2026_05_16_cv_009`, `010`.

Counterexamples: unresolved; needs low-performing product demos.

Confidence: low-medium.

Next validation test: Compare result-first, problem-first, and product-first demos for the same object.

## candidate_claim_cross_vertical_2026_05_16_005

Claim: Comment-reply and green-screen formats reduce setup cost because the artifact/comment supplies instant context.

Scope: Comment reply, creator response, ranking, reaction, and green-screen explainer videos.

Applies when: The comment/artifact is readable and the response creates a new payoff.

Does not apply when: The reply only acknowledges the comment without proof, performance, or insight.

Supporting cases: `case_2026_05_16_cv_016`, `017`.

Counterexamples: unresolved.

Confidence: low.

Next validation test: Create three comment-reply concepts with different response types: proof, performance, and correction.

## candidate_claim_cross_vertical_2026_05_16_006

Claim: Broad TikTok tag/discover routes are useful for scout discovery but unsafe as category evidence without visual/manual verification.

Scope: All public-search adapter outputs.

Applies when: A high-score row appears under unrelated terms or with unclear/off-topic caption context.

Does not apply when: A row has been manually watched and matched to the target category.

Supporting cases: `case_2026_05_16_cv_005`.

Counterexamples: manually verified rows not yet available in this batch.

Confidence: high as a process claim.

Next validation test: Add a manual verification field and require at least one first-frame note before case promotion.

