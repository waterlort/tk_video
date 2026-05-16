# tk_video project brief

## Goal

Build a repeatable TikTok/TK traffic video operation that can discover current platform trends, deconstruct high-performing videos, produce fast testable video concepts, and iterate toward follower and traffic growth.

Initial account direction: a general traffic account that first optimizes for attention, followers, and repeatable topic/format discovery. Later it should evolve toward TikTok Shop, affiliate, or product-led conversion, where conversion rate becomes a core metric.

## Operating principle

Do not copy viral videos. Extract the reusable logic: audience tension, hook shape, pacing, proof, editing rhythm, caption/keyword strategy, and conversion path. Every idea should become a small test with a measurable hypothesis.

## Recommended Multica agents

1. TK Trend Scout
   - Monitors current TikTok trend signals by region, niche, industry, hashtag, song, creator, and video format.
   - Produces a daily trend radar with source links, evidence, and why each trend is usable or not usable.

2. Viral Video Analyst
   - Breaks down selected viral videos into hook, first 3 seconds, scene sequence, on-screen text, audio, pacing, emotional trigger, CTA, and repeatable template.
   - Separates platform mechanics from niche-specific creative choices.

3. Niche Strategy Planner
   - Defines account positioning, target audience, content pillars, series concepts, and traffic path.
   - Converts trend findings into a weekly testing map instead of random one-off posts.

4. Hook And Script Writer
   - Generates batches of TikTok-native hooks, scripts, shot lists, captions, and A/B variants.
   - Keeps scripts short, visually executable, and tied to one clear viewer promise.

5. Production Director
   - Turns scripts into filming/editing instructions: shots, b-roll, voiceover, captions, cuts, effects, music notes, and export specs.
   - Defines persistent subjects and a visual identity bible before static storyboard, image, or video generation.
   - Creates CapCut/Symphony-style production SOPs for fast publishing.

6. Growth Analyst
   - Reviews post results, retention, saves, shares, comments, follows, profile visits, and click/DM conversion.
   - Decides what to repeat, remix, kill, or scale in the next batch.

7. Policy And Brand Safety Reviewer
   - Checks claims, copyright/music risk, platform policy risk, sensitive topics, and misleading engagement tactics.
   - Keeps the account growth-focused without drifting into spammy or unsafe behavior.

8. TK Knowledge Classifier
   - Owns the taxonomy of content categories, audience motives, hook types, script structures, filming techniques, edit rhythms, audio/music roles, trend signals, discussion signals, and conversion paths.
   - Adapts the existing `classifier` agent pattern: first decide category membership and boundary fit, then decide whether a relation claim is applicable.

9. TK Knowledge Modifier
   - Owns long-term memory updates: concept pages, relation claims, trend ledger, case library, indices, backlinks, confidence levels, stale-claim deprecation, and change history.
   - Adapts the existing `modifier` agent pattern: only update durable memory from accepted proposals and evidence-backed cases.

10. TK Case Librarian
   - Records reference videos, own experiments, competitor examples, failed tests, and conversion examples as evidence.
   - Ensures every major knowledge-base claim links back to source, date, metrics, and observed outcome.

11. TK Content Explainer
   - Reads a structured video sample against the current knowledge base and explains what the video is likely doing: audience motive, hook logic, filming/editing logic, audio role, discussion trigger, and conversion fit.
   - Predicts whether the video is likely to become hot using only allowed pre-outcome features, then records uncertainty and missing signals.
   - Does not mutate long-term memory directly; it produces candidate explanations, gaps, conflicts, and questions for classifier/modifier.

12. TK Viral Judge
   - Evaluates whether the knowledge base, extractor, analyst, classifier, modifier, and explainer are actually improving prediction and understanding.
   - Runs blind or held-out prediction tests on sampled videos, compares predicted hotness against later observed outcomes, and diagnoses failure causes.
   - Protects the system from overfitting: do not optimize for one video, one creator, one trend, one wording pattern, or already-known viral metrics.

## Recommended Multica skills

1. tk-trend-research-protocol
   - Query official and public trend sources.
   - Capture date, region, niche, timeframe, source URL, observed signal, and confidence.
   - Output: trend radar table plus 3-5 recommended creative angles.

2. viral-video-deconstruction
   - Analyze a video or reference link by timeline.
   - Output: hook type, promise, curiosity gap, pacing map, caption/on-screen text, audio role, CTA, and reusable template.

3. tk-account-positioning
   - Convert a vague account idea into audience, pain points, content pillars, recurring series, visual identity, and traffic destination.
   - Output: account strategy one-pager and 30-day content thesis.

4. shortform-script-lab
   - Create hooks and scripts in multiple formats: problem/solution, myth-busting, before/after, list, story, reaction, product demo, and case teardown.
   - Output: 10 hooks, 3 scripts, 2 A/B variants, caption keywords, and CTA options.

5. vertical-video-production-sop
   - Convert script into shot list, voiceover, captions, edit rhythm, audio direction, and publishing checklist.
   - Require a subject identity bible for people, pets, products, locations, and recurring props before visual generation.
   - Output: production-ready checklist and asset list.

6. growth-feedback-loop
   - Convert analytics into next actions.
   - Output: weekly learning report, winning patterns, failed hypotheses, next batch plan.

7. compliance-and-originality-check
   - Check copyright, music use, AI disclosure, exaggerated claims, impersonation, and low-value reposting.
   - Output: risk notes and safer alternatives.

8. tk-knowledge-base-protocol
   - Maintain taxonomy, relation claims, trend ledger, case library, playbooks, and change history.
   - Output: accepted/rejected knowledge proposals, confidence levels, backlinks, stale-claim notes, and next validation tests.

9. tk-case-evidence-record
   - Normalize each reference video or account experiment into a structured case.
   - Output: source, date, category, hook, script, filming method, music/audio, heat/discussion signals, metrics, repeatable pattern, risk notes, and linked claims.

10. tk-prediction-evaluation-protocol
   - Run blind virality prediction tests and judge whether the current knowledge base generalizes across sampled videos.
   - Output: prediction ledger, scorecard, failure attribution, anti-overfit notes, and recommended process updates.

## First issue tree

1. Define account niche and traffic goal.
2. Create TK knowledge taxonomy v0 and case evidence template.
3. Build a 7-day trend radar for the chosen region and niche.
4. Deconstruct 20 reference videos into reusable templates and evidence records.
5. Create the first relation claims between category, hook, filming method, music/audio, heat, discussion, and conversion potential.
6. Build the first blind prediction set: sample videos, hide outcome metrics where possible, extract features, let TK Content Explainer predict hotness, and let TK Viral Judge score after unblinding.
7. Create 30 video ideas and rank by effort, novelty, discussion depth, repeatability, and future conversion potential.
8. Produce 10 scripts and 3 production-ready videos.
9. Publish, measure, update the case library, run the first growth review, and feed prediction errors back into the knowledge workflow.

## Data sources to prioritize

- TikTok Creative Center Trends: hashtags, songs, creators, videos by region and industry.
  Source: https://ads.tiktok.com/business/creativecenter
- TikTok Creative Center Keyword Insights: ad keywords and top-converting phrases by region and industry.
  Source: https://ads.tiktok.com/business/creativecenter
- TikTok Creative Center Top Ads and Creative Insights: ad creative patterns and proven commercial hooks.
  Source: https://ads.tiktok.com/business/creativecenter
- TikTok Symphony Creative Studio: fast script, caption, AI video, dubbing, and edit experimentation.
  Source: https://ads.tiktok.com/help/article/about-symphony-creative-studio
- Native TikTok search and competitor accounts: organic examples and niche language.
- Account analytics: retention, follows, saves, shares, comments, profile visits, and traffic conversion.

## Knowledge base layer

The project should build its own durable knowledge base, not just produce one-off videos. The knowledge base should connect:

- Content category
- Audience motive and pain point
- Hook type
- Script structure
- Filming method
- Editing rhythm
- Music/audio role
- Heat signal
- Discussion signal
- Conversion path
- Product/affiliate fit
- Case evidence
- Persistent subject identity and visual continuity

Every durable claim should link to case records. A case record can be a viral reference, competitor post, own account experiment, ad example, failed test, or conversion example.

The `classifier` / `modifier` architecture from QCResearcher should be adapted into TK-specific agents:

- `TK Knowledge Classifier` decides taxonomy, boundaries, category membership, relation applicability, and split/merge proposals.
- `TK Knowledge Modifier` applies approved memory updates, maintains relation claims, backlinks, trend ledger, case library, and deprecates stale claims.
- `TK Content Explainer` reads structured video samples through the current knowledge base and produces explanations, predictions, uncertainty, and missing signals without changing memory.
- `TK Viral Judge` tests whether those explanations and predictions generalize across sampled videos, diagnoses which agent layer failed, and blocks overfitting.

The detailed design is in `KNOWLEDGE_BASE_DESIGN.md`.
