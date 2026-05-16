# Case batch: US hot TikTok samples 2026-05-09

## Batch metadata

- Batch ID: `case_batch_us_hot_2026_05_09_001`
- Source sample set: `sample_us_hot_2026_05_09_001`
- Collection type: retrospective hot sample
- Outcome metrics visible: yes
- Date collected: 2026-05-09
- Region/language: US / English-facing TikTok signals
- Collector: TK Case Librarian normalization pass
- Main sources:
  - TikTok Creative Center US 7-day hashtag trends
  - Lightreel May 1-7, 2026 TikTok weekly trend report
- Use boundary: case-library seeding, taxonomy calibration, and proposed relation-claim evidence only.
- Do not use as: blind prediction / judge test set.

## Case audit

- Evidence completeness score: 0.74 overall.
- Completed case records in this file: 21 / 21 source samples.
- High-confidence evidence fields: source URL, collection date, region/language, source type, visible outcome note, broad category guess, format/mechanism.
- Medium-confidence evidence fields: first 3 seconds, shot sequence, editing rhythm, audience motive, discussion signal. These are interpreted from source notes and format descriptions unless explicitly stated.
- Low-confidence or missing fields: exact post date, raw likes, raw comments, shares, saves, retention, follower gain, profile visits, clicks, DMs, orders, and actual CTA copy.
- Main caveat: all outcomes were visible before this case batch, so no record here should be treated as prediction evidence.
- Trend ledger mismatch to review: `sample_us_2026_05_09_011` is linked from prom trend rows, but the sample note describes May wordplay around "The One That Got Away"; classifier should decide whether this belongs under prom/sound, seasonal wordplay, or both.

## Source-field clarity check

| Sample ID | Case ID | Source URL | Source type | Outcome | Category / format clarity | Fit note |
| --- | --- | --- | --- | --- | --- | --- |
| sample_us_2026_05_09_001 | case_2026_05_09_011 | clear | clear | clear | clear event spectacle / photo post | general traffic reference; weak direct affiliate unless adapted into deconstruction |
| sample_us_2026_05_09_002 | case_2026_05_09_010 | clear | clear | clear | clear transformation reveal | general traffic reference; weak direct affiliate |
| sample_us_2026_05_09_003 | case_2026_05_09_012 | clear | clear | clear | clear rare celebrity duet | general traffic reference; weak affiliate |
| sample_us_2026_05_09_004 | case_2026_05_09_001 | clear | clear | clear | strong comparison/deconstruction | general traffic plus later taste/fashion curation |
| sample_us_2026_05_09_005 | case_2026_05_09_002 | clear | clear | clear | strong proximity reaction | general traffic plus event/local curation |
| sample_us_2026_05_09_006 | case_2026_05_09_013 | clear | clear | clear | clear celebrity dance amplification | general traffic only unless remixed |
| sample_us_2026_05_09_007 | case_2026_05_09_014 | clear | clear | clear | clear official choreography | reference only; weak account-v0 fit |
| sample_us_2026_05_09_008 | case_2026_05_09_015 | clear | clear | clear | clear slowed mirrored tutorial | general traffic plus tutorial/creator growth |
| sample_us_2026_05_09_009 | case_2026_05_09_016 | clear | clear | clear | clear original dance credit | creator identity reference |
| sample_us_2026_05_09_010 | case_2026_05_09_017 | clear | clear | clear | strong trend-to-niche remix | general traffic and possible food/personality bridge |
| sample_us_2026_05_09_011 | case_2026_05_09_018 | clear | clear | clear | sound trend / seasonal wordplay; prom linkage uncertain | general traffic; classify before claim use |
| sample_us_2026_05_09_012 | case_2026_05_09_019 | clear | clear | clear | strong cultural revival choreography | general traffic; weak affiliate |
| sample_us_2026_05_09_013 | case_2026_05_09_020 | clear | clear | clear | clear cross-event celebrity amplification | general traffic reference |
| sample_us_2026_05_09_014 | case_2026_05_09_003 | clear | clear | clear | strong two-role skit | general traffic plus later AI/tool education bridge |
| sample_us_2026_05_09_015 | case_2026_05_09_021 | clear | clear | clear | strong identity reveal format | general traffic; medium affiliate only if niche identity maps to product |
| sample_us_2026_05_09_016 | case_2026_05_09_004 | clear | clear | clear | strong hyper-specific POV | general traffic; weak direct affiliate |
| sample_us_2026_05_09_017 | case_2026_05_09_005 | clear | clear | clear | strong object-triggered fashion transition | high future affiliate/product fit |
| sample_us_2026_05_09_018 | case_2026_05_09_006 | clear | clear | clear | strong specific-store utility | high future affiliate/product fit |
| sample_us_2026_05_09_019 | case_2026_05_09_007 | clear | clear | clear | clear AI/tool education hook | high lead/product affiliate fit |
| sample_us_2026_05_09_020 | case_2026_05_09_008 | clear | clear | clear | clear everyday-setting dance | general traffic / follower growth |
| sample_us_2026_05_09_021 | case_2026_05_09_009 | clear | clear | clear | clear dance + comedy-audio breakout | general traffic / follower growth |

## Candidate patterns

- Large cultural moments are more reusable for small or general accounts when the creator adds an angle: comparison, proximity, niche expertise, identity, or remix context.
- Raw celebrity/event clips produce heat but are weaker learning examples unless adapted into commentary, deconstruction, ranking, or explainable format mechanics.
- Dance-trend cases split into three useful subtypes: celebrity amplification, tutorial capture, and low-follower identity-context breakout.
- Hyper-specific POV comedy and identity-audio formats appear stronger for discussion/tagging than for immediate conversion.
- Specific-store utility, fashion transitions, and AI/tool contradiction hooks have lower pure entertainment dependence and stronger future affiliate, lead, or product paths.

## Classification questions for TK Knowledge Classifier

- Should "cultural moment / celebrity event" be a subtype under `reaction and deconstruction`, `entertainment wrapper`, or a separate trend-context label?
- Should dance samples be split into `trend participation`, `dance tutorial`, `dance remix`, and `identity-context performance`?
- Should `specific-store utility` become a subtype of `practical utility`, or remain a format/mechanism tag?
- Should "identity reveal" be treated as `story and identity` when the audio supplies the structure, or as `entertainment wrapper` with identity motive?
- How should `sample_us_2026_05_09_011` be classified given the mismatch between prom trend linkage and May wordplay sample note?

## Case records

### case_2026_05_09_001

#### Identity

- Case ID: `case_2026_05_09_001`
- Source sample: `sample_us_2026_05_09_004`
- Source type: breakout creator
- Source URL or local file: https://www.tiktok.com/@annacadence/video/7636223701947665678
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: fashion, art-history, cultural event analysis
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 11.5K followers -> 5.3M views, 17% engagement.
- Content observed from source note: Met Gala looks paired with art-history inspirations.
- Format/mechanism observed: split-screen comparison.
- Heat signals: Met Gala reaction/comparison wave; major cultural event; small-account breakout.
- Discussion signals observed: unknown raw comments; source interpretation suggests debate over comparison accuracy and tagging.
- CTA observed: unknown.
- Metrics observed: views 5.3M; engagement 17%; follower count 11.5K before/at source note; likes unknown; comments unknown; shares unknown; saves unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: reaction and deconstruction / cultural moment.
- Audience motive: taste, cultural literacy, curiosity, status.
- Viewer tension or curiosity gap: which hidden reference explains the celebrity outfit?
- Hook type: comparison / hidden inspiration.
- First 3 seconds: likely immediate visual pair of outfit and reference image; needs direct video confirmation.
- Script structure: event artifact -> unexpected reference -> implied judgment.
- Filming method: split-screen comparison.
- Shot sequence: celebrity look -> inspiration image -> caption/context pairing.
- Editing rhythm: caption-led visual pairing.
- Music/audio role: emotional or authority framing; source note describes ethereal authority.
- On-screen text/caption style: likely explanatory labels; exact copy unknown.
- CTA and conversion path: unknown observed CTA; repeatable path is follow for more cultural deconstruction.
- Product/affiliate fit: medium; can evolve toward fashion, art, taste, book, or styling curation.

#### Knowledge value

- Repeatable pattern: convert a large cultural event into niche-specific interpretation rather than reposting the event.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: none yet.
- Risks and policy notes: copyright/media reuse risk; weak if the comparison feels forced.
- Confidence: medium.
- Next test idea: collect 10 cultural-event comparison posts and compare angle clarity, visual contrast, and discussion density.

### case_2026_05_09_002

#### Identity

- Case ID: `case_2026_05_09_002`
- Source sample: `sample_us_2026_05_09_005`
- Source type: breakout creator
- Source URL or local file: https://www.tiktok.com/@thatssosavannah/video/7636437124572663054
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: cultural event reaction / sidewalk celebrity access
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 2.9K followers -> 8.9M views.
- Content observed from source note: Met Gala sidewalk arrivals with personal reaction.
- Format/mechanism observed: proximity plus personality.
- Heat signals: Met Gala event heat; rare public access angle; small-account breakout.
- Discussion signals observed: unknown raw comments; likely identity questions, outfit debate, and event FOMO.
- CTA observed: unknown.
- Metrics observed: views 8.9M; follower count 2.9K before/at source note; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: cultural moment / reaction.
- Audience motive: proximity, event access, personality, FOMO.
- Viewer tension or curiosity gap: what does the event look like from a normal public vantage point?
- Hook type: rare access from public position.
- First 3 seconds: likely live sighting or immediate arrival reaction; needs direct video confirmation.
- Script structure: live sighting -> genuine reaction -> series continuation.
- Filming method: sidewalk phone footage.
- Shot sequence: public vantage -> celebrity/event movement -> creator reaction/commentary.
- Editing rhythm: raw event capture.
- Music/audio role: secondary; live ambience likely matters more.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; repeatable path is follow for event-watch series.
- Product/affiliate fit: medium; can later support local/event recommendations, style commentary, or creator personality.

#### Knowledge value

- Repeatable pattern: be physically near a large moment and add authentic personality.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: none yet.
- Risks and policy notes: privacy/location crowding risk; hard to repeat without access.
- Confidence: medium.
- Next test idea: compare public-vantage event clips with and without creator reaction/context.

### case_2026_05_09_003

#### Identity

- Case ID: `case_2026_05_09_003`
- Source sample: `sample_us_2026_05_09_014`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@nathandoancomedy/video/7635584722000792863
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: comedy / tech culture
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 7.7M views.
- Content observed from source note: one-person two-role skit about AI misunderstanding common sense.
- Format/mechanism observed: AI misunderstanding mapped to human common-sense failure.
- Heat signals: AI discourse; Lightreel format signal.
- Discussion signals observed: unknown raw comments; likely viewers add AI failure stories.
- CTA observed: unknown.
- Metrics observed: views 7.7M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / comedy / tech culture.
- Audience motive: frustration relief, recognition, humor.
- Viewer tension or curiosity gap: how will the "AI" misread an obvious human request?
- Hook type: contradiction / common-sense failure.
- First 3 seconds: likely establishes human vs AI roles; exact line unknown.
- Script structure: setup -> literal AI response -> escalating absurdity.
- Filming method: one creator, two roles.
- Shot sequence: role A prompt -> role B literal response -> reaction/escalation.
- Editing rhythm: dialogue cuts.
- Music/audio role: secondary or none.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; possible follow-up path to AI tips or tool education.
- Product/affiliate fit: medium-high for AI/tool education if softened into practical follow-up.

#### Knowledge value

- Repeatable pattern: translate broad tech anxiety into a hyper-specific skit.
- Supporting claims: `claim_2026_05_09_002`, `claim_2026_05_09_005`
- Counterexample to: none yet.
- Risks and policy notes: may reinforce shallow AI jokes if no practical insight follows.
- Confidence: medium.
- Next test idea: test one two-role AI skit followed by a practical "how to avoid this prompt mistake" video.

### case_2026_05_09_004

#### Identity

- Case ID: `case_2026_05_09_004`
- Source sample: `sample_us_2026_05_09_016`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@jordansmikle/video/7636093687751052574
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: comedy / relatable social scenario
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 5M views, 19% engagement.
- Content observed from source note: hyper-specific POV, "friend who has been to your house 100+ times."
- Format/mechanism observed: face/body acting around a precise social micro-situation.
- Heat signals: high engagement relative to views; relatable POV format.
- Discussion signals observed: unknown raw comments; likely tagging friends and adding variants.
- CTA observed: unknown.
- Metrics observed: views 5M; engagement 19%; likes unknown; comments unknown; shares unknown; saves unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / relatable comedy.
- Audience motive: recognition, social bonding, self-identification.
- Viewer tension or curiosity gap: which tiny behavior makes this friend instantly recognizable?
- Hook type: hyper-specific POV.
- First 3 seconds: likely "POV" setup with immediate character behavior; exact copy unknown.
- Script structure: "POV: one friend..." -> committed physical acting -> escalating familiar detail.
- Filming method: face/body acting.
- Shot sequence: character entrance -> repeated familiar behavior -> punchline/detail.
- Editing rhythm: quick physical beats.
- Music/audio role: comedy cue.
- On-screen text/caption style: likely POV text; exact copy unknown.
- CTA and conversion path: unknown observed CTA; likely follow for more POV characters.
- Product/affiliate fit: low-medium; useful for audience growth, weaker immediate product fit.

#### Knowledge value

- Repeatable pattern: specific social micro-situation beats broad generic comedy.
- Supporting claims: `claim_2026_05_09_002`
- Counterexample to: broad "relatable" content without specificity.
- Risks and policy notes: format becomes weak if scenario is generic or acting is low-commitment.
- Confidence: medium.
- Next test idea: create three POVs with one precise social behavior each and compare tagging/comment specificity.

### case_2026_05_09_005

#### Identity

- Case ID: `case_2026_05_09_005`
- Source sample: `sample_us_2026_05_09_017`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@danch.merk/video/7634582098485087508
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: fashion transition
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 5.8M views.
- Content observed from source note: spray bottle triggers fashion reveal synced to beat drop.
- Format/mechanism observed: object-triggered reveal.
- Heat signals: transformation/reveal mechanic; fashion product visibility.
- Discussion signals observed: unknown raw comments; likely outfit details, how-to, and product/source questions.
- CTA observed: unknown.
- Metrics observed: views 5.8M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: product-adjacent demo / fashion transition.
- Audience motive: transformation, taste, surprise, buying confidence.
- Viewer tension or curiosity gap: what look appears after the object action?
- Hook type: visual shock / pattern break.
- First 3 seconds: ordinary state plus spray bottle action; exact framing unknown.
- Script structure: ordinary state -> object action -> high-fashion reveal.
- Filming method: before/after reveal / transition cut.
- Shot sequence: pre-reveal outfit -> object trigger -> final outfit detail.
- Editing rhythm: beat-drop reveal.
- Music/audio role: rhythm driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; natural path to product tags, outfit links, or affiliate list.
- Product/affiliate fit: high for apparel/accessory affiliate later.

#### Knowledge value

- Repeatable pattern: household object as transition trigger gives novelty to outfit content.
- Supporting claims: `claim_2026_05_09_003`
- Counterexample to: none yet.
- Risks and policy notes: product details must be visible; transition effect can overpower the outfit.
- Confidence: medium.
- Next test idea: test three ordinary object triggers for the same outfit reveal and compare replay/comment questions.

### case_2026_05_09_006

#### Identity

- Case ID: `case_2026_05_09_006`
- Source sample: `sample_us_2026_05_09_018`
- Source type: niche breakthrough
- Source URL or local file: https://www.tiktok.com/@nutrition.girlies/video/7636120808015908127
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: food / wellness / grocery shopping
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 19K views, 49x normal content.
- Content observed from source note: healthy food finds at Costco / store-specific utility.
- Format/mechanism observed: specific-store carousel.
- Heat signals: strong lift vs account baseline; store-specific shopping utility.
- Discussion signals observed: unknown raw comments; likely where to buy, price, taste, macros, alternatives.
- CTA observed: unknown.
- Metrics observed: views 19K; baseline multiple 49x; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: practical utility / food wellness.
- Audience motive: shopping confidence, health, saving time.
- Viewer tension or curiosity gap: which Costco items are worth buying for healthier eating?
- Hook type: list / specific-store finds.
- First 3 seconds: likely store context or first item; exact frame unknown.
- Script structure: store context -> item list -> implicit recommendation.
- Filming method: carousel / product photos.
- Shot sequence: store/item images -> item-by-item notes -> possible save prompt.
- Editing rhythm: swipeable list / information-led.
- Music/audio role: background.
- On-screen text/caption style: product labels and concise benefit notes likely; exact copy unknown.
- CTA and conversion path: unknown observed CTA; natural path to save, follow for store lists, affiliate/product curation.
- Product/affiliate fit: high for affiliate, shop, or product curation.

#### Knowledge value

- Repeatable pattern: store-specific utility can beat general wellness advice.
- Supporting claims: `claim_2026_05_09_004`
- Counterexample to: broad wellness tips with no purchase context.
- Risks and policy notes: nutrition claims need caution; avoid unsupported health claims.
- Confidence: medium.
- Next test idea: compare "Costco healthy finds" against "healthy snacks I like" using saves and product-source comments.

### case_2026_05_09_007

#### Identity

- Case ID: `case_2026_05_09_007`
- Source sample: `sample_us_2026_05_09_019`
- Source type: niche reference
- Source URL or local file: https://www.tiktok.com/@leon.petrou/photo/7634994246881135893
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: AI/tool education
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 196K views.
- Content observed from source note: Claude can control browser, but most people use it wrong.
- Format/mechanism observed: problem framing plus screen walkthrough / photo walkthrough.
- Heat signals: AI tool trend; contradiction hook.
- Discussion signals observed: unknown raw comments; likely how-to questions, tool comparisons, usefulness challenges.
- CTA observed: unknown.
- Metrics observed: views 196K; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: practical utility / AI tool education.
- Audience motive: productivity, not falling behind, leverage.
- Viewer tension or curiosity gap: why are people using an advanced tool incorrectly?
- Hook type: contradiction.
- First 3 seconds: likely "most people use this wrong" claim; exact copy unknown.
- Script structure: claim -> demonstration -> implication.
- Filming method: screen recording / photo walkthrough.
- Shot sequence: problem statement -> tool workflow -> corrected usage implication.
- Editing rhythm: information-led.
- Music/audio role: secondary.
- On-screen text/caption style: explanatory steps; exact copy unknown.
- CTA and conversion path: unknown observed CTA; natural path to lead magnet, course, newsletter, or tool affiliate.
- Product/affiliate fit: high for lead magnet, course, tool affiliate, newsletter.

#### Knowledge value

- Repeatable pattern: strong contradiction hook works for tool education, but conversion-path fit should matter more than raw views.
- Supporting claims: `claim_2026_05_09_005`
- Counterexample to: abstract AI hype with no demonstration.
- Risks and policy notes: tool capabilities and UI may change quickly; avoid overclaiming.
- Confidence: low-medium.
- Next test idea: compare contradiction hook vs step-by-step tutorial for the same AI workflow.

### case_2026_05_09_008

#### Identity

- Case ID: `case_2026_05_09_008`
- Source sample: `sample_us_2026_05_09_020`
- Source type: breakout creator
- Source URL or local file: https://www.tiktok.com/@8araka_/video/7635075216288353566
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: dance / school context
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 829 followers -> 808K views, 15% engagement.
- Content observed from source note: simple dance in school hallway.
- Format/mechanism observed: everyday location plus performance confidence.
- Heat signals: low-follower breakout; trend dance in recognizable social setting.
- Discussion signals observed: unknown raw comments; likely confidence, school setting, dance ability.
- CTA observed: unknown.
- Metrics observed: views 808K; engagement 15%; follower count 829 before/at source note; likes unknown; comments unknown; shares unknown; saves unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / dance / everyday setting.
- Audience motive: entertainment, peer identity, belonging.
- Viewer tension or curiosity gap: how does a simple dance feel in an ordinary school hallway?
- Hook type: ordinary location plus committed performance.
- First 3 seconds: likely immediate dance start in hallway; exact frame unknown.
- Script structure: single performance.
- Filming method: phone performance / school hallway.
- Shot sequence: fixed or handheld hallway framing -> dance performance -> likely loop/ending pose.
- Editing rhythm: audio-led.
- Music/audio role: primary trend driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; follower-growth path through repeated identity/context performances.
- Product/affiliate fit: low initially; possible later fashion, music, or fitness bridge.

#### Knowledge value

- Repeatable pattern: low-follower dance can break out when location/context gives the trend an identity signal.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: generic dance copy with no context.
- Risks and policy notes: school/location privacy and filming permissions.
- Confidence: medium.
- Next test idea: compare the same dance in plain room, school hallway, and distinctive outdoor/social setting.

### case_2026_05_09_009

#### Identity

- Case ID: `case_2026_05_09_009`
- Source sample: `sample_us_2026_05_09_021`
- Source type: breakout creator
- Source URL or local file: https://www.tiktok.com/@mileypileyy/video/7634434965375044894
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: dance / comedy audio
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 3K followers -> 1.2M views, 13% engagement.
- Content observed from source note: new dance alert plus shock-humor audio; other recent posts under 2K views.
- Format/mechanism observed: dance trend framing combined with comedy audio.
- Heat signals: low-follower breakout; strong contrast with recent baseline.
- Discussion signals observed: unknown raw comments; likely replication and reactions to audio.
- CTA observed: unknown.
- Metrics observed: views 1.2M; engagement 13%; follower count 3K before/at source note; account baseline under 2K views on recent posts; likes unknown; comments unknown; shares unknown; saves unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / dance / comedic audio.
- Audience motive: entertainment, surprise, trend participation.
- Viewer tension or curiosity gap: what is the "new dance" and why does the audio feel shocking?
- Hook type: new dance alert.
- First 3 seconds: likely announcement/text and immediate audio setup; exact copy unknown.
- Script structure: announcement -> comedic shock-humor audio -> dance.
- Filming method: phone performance.
- Shot sequence: creator setup -> dance movement -> audio punch/replay moment.
- Editing rhythm: audio-led.
- Music/audio role: primary.
- On-screen text/caption style: likely short trend label; exact copy unknown.
- CTA and conversion path: unknown observed CTA; follow for more dances/personality.
- Product/affiliate fit: low initially; possible later fashion or creator merchandise only after audience formation.

#### Knowledge value

- Repeatable pattern: small accounts can spike when "new dance" framing combines with comedy audio.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: copied dance with no framing or comedic contrast.
- Risks and policy notes: shock humor can create brand-safety risk depending on audio.
- Confidence: medium.
- Next test idea: test dance announcement with straight audio vs comedic audio vs identity-specific location.

### case_2026_05_09_010

#### Identity

- Case ID: `case_2026_05_09_010`
- Source sample: `sample_us_2026_05_09_002`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@metroentertainment/video/7636365531095764246
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: celebrity event / entertainment media
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 12.5M views.
- Content observed from source note: Bad Bunny aged-prosthetics Met Gala appearance.
- Format/mechanism observed: transformation reveal / visual shock.
- Heat signals: Met Gala; celebrity; identity distortion; replay value.
- Discussion signals observed: unknown raw comments; likely "is that really him", costume details, celebrity debate.
- CTA observed: unknown.
- Metrics observed: views 12.5M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / celebrity event / transformation.
- Audience motive: shock, curiosity, social sharing.
- Viewer tension or curiosity gap: is the unrecognizable person actually a known celebrity?
- Hook type: visual shock or pattern break.
- First 3 seconds: likely prosthetic reveal or identity confusion; exact frame unknown.
- Script structure: reveal -> recognition -> replay.
- Filming method: event clip.
- Shot sequence: unusual visual -> celebrity recognition -> costume/context detail.
- Editing rhythm: short spectacle.
- Music/audio role: secondary.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; weak for account v0 unless adapted into reaction/comparison.
- Product/affiliate fit: low direct fit.

#### Knowledge value

- Repeatable pattern: major event plus identity distortion drives replay.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: none yet.
- Risks and policy notes: copyrighted event-media reuse; hard for small creators to source original footage.
- Confidence: medium.
- Next test idea: adapt transformation reveal into "why this worked" deconstruction instead of reposting.

### case_2026_05_09_011

#### Identity

- Case ID: `case_2026_05_09_011`
- Source sample: `sample_us_2026_05_09_001`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@vogueitalia/photo/7636214280097959190
- Date collected: 2026-05-09
- Region/language: US / English-facing signal from source set
- Account/niche: fashion / celebrity event / editorial media
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 36M views.
- Content observed from source note: Alex Consani custom Gucci at Met Gala.
- Format/mechanism observed: celebrity-event visual spectacle / photo post.
- Heat signals: Met Gala; major fashion publication; striking visual.
- Discussion signals observed: unknown raw comments; likely outfit/taste debate and celebrity sharing.
- CTA observed: unknown.
- Metrics observed: views 36M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: cultural moment / fashion spectacle.
- Audience motive: taste, status, celebrity curiosity, visual novelty.
- Viewer tension or curiosity gap: what is the standout visual from the event?
- Hook type: visual shock or pattern break.
- First 3 seconds: likely immediate high-impact outfit image; exact crop unknown.
- Script structure: visual artifact -> recognition/context -> aesthetic judgment.
- Filming method: photo post / editorial asset.
- Shot sequence: single or carousel fashion image sequence; exact sequence unknown.
- Editing rhythm: static visual impact / carousel pacing.
- Music/audio role: unknown.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; reusable path is deconstructing or ranking event looks.
- Product/affiliate fit: medium only if adapted into fashion curation; raw celebrity asset has weak direct fit.

#### Knowledge value

- Repeatable pattern: visual spectacle at a major event can produce huge raw reach, but the reusable lesson is the visual pattern, not the media repost.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: treating raw major-media celebrity access as reproducible for a small account.
- Risks and policy notes: high copyright/media access risk; low repeatability.
- Confidence: low-medium.
- Next test idea: turn the same visual into a "3 styling rules from this look" deconstruction and measure saves/comments.

### case_2026_05_09_012

#### Identity

- Case ID: `case_2026_05_09_012`
- Source sample: `sample_us_2026_05_09_003`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@voguemagazine/video/7636261993472691470
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: music / fashion / celebrity event
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 7.6M views.
- Content observed from source note: Stevie Nicks and Sabrina Carpenter at Temple of Dendur.
- Format/mechanism observed: rare duet moment / cross-generational celebrity interaction.
- Heat signals: Met Gala; celebrity pairing; music-fashion crossover.
- Discussion signals observed: unknown raw comments; likely fandom crossover, nostalgia, outfit/event discussion.
- CTA observed: unknown.
- Metrics observed: views 7.6M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: cultural moment / music-fashion crossover.
- Audience motive: fandom, nostalgia, taste, social sharing.
- Viewer tension or curiosity gap: what happens when two culturally distinct artists share an event moment?
- Hook type: rare pairing.
- First 3 seconds: likely shows both celebrities together; exact frame unknown.
- Script structure: rare encounter -> recognition -> fan interpretation.
- Filming method: event clip.
- Shot sequence: celebrity pair -> venue/event context -> reaction/recognition.
- Editing rhythm: short spectacle / fan-service pacing.
- Music/audio role: likely emotional/fandom framing; exact audio unknown.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; reusable path is fandom/culture commentary.
- Product/affiliate fit: low direct fit; medium if adapted into music/fashion curation.

#### Knowledge value

- Repeatable pattern: cross-generational fandom overlap can amplify a cultural event clip.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: generic celebrity reposts without pairing/meaning.
- Risks and policy notes: copyrighted event footage; weak repeatability for small accounts.
- Confidence: low-medium.
- Next test idea: make a commentary version explaining the fandom overlap rather than relying on raw footage.

### case_2026_05_09_013

#### Identity

- Case ID: `case_2026_05_09_013`
- Source sample: `sample_us_2026_05_09_006`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@iamurhope/video/7635788661283474706
- Date collected: 2026-05-09
- Region/language: US / English-facing signal from source set
- Account/niche: dance / K-pop celebrity
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 75.6M views.
- Content observed from source note: J-Hope amplifies Six Seven / Seis Sete challenge.
- Format/mechanism observed: celebrity trend participation.
- Heat signals: massive celebrity account; active dance challenge; trend sound/movement.
- Discussion signals observed: unknown raw comments; likely fandom, replication, dance challenge participation.
- CTA observed: unknown.
- Metrics observed: views 75.6M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / dance trend.
- Audience motive: fandom, entertainment, belonging.
- Viewer tension or curiosity gap: how does a major celebrity perform the current challenge?
- Hook type: trend participation with celebrity authority.
- First 3 seconds: likely immediate recognizable performer/dance start; exact frame unknown.
- Script structure: single challenge performance.
- Filming method: performance clip.
- Shot sequence: performer intro -> core challenge movement -> loop/end pose.
- Editing rhythm: audio-led.
- Music/audio role: primary trend driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; repeatable for small accounts only if adapted with identity/context.
- Product/affiliate fit: low direct fit.

#### Knowledge value

- Repeatable pattern: celebrity amplification validates a dance challenge but is not itself a small-account rule.
- Supporting claims: `claim_2026_05_09_006` as weak contextual evidence only.
- Counterexample to: assuming all trend participation is reproducible without audience or identity signal.
- Risks and policy notes: overfitting to celebrity distribution.
- Confidence: low-medium.
- Next test idea: compare celebrity challenge posts with small-account remixes using unique location, role, or tutorial framing.

### case_2026_05_09_014

#### Identity

- Case ID: `case_2026_05_09_014`
- Source sample: `sample_us_2026_05_09_007`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@cortis_bighit/video/7634768036246998293
- Date collected: 2026-05-09
- Region/language: US / English-facing signal from source set
- Account/niche: dance / K-pop / official choreography
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 6.2M views.
- Content observed from source note: CORTIS REDRED official choreography.
- Format/mechanism observed: official choreography post.
- Heat signals: K-pop label/artist account; dance challenge source material.
- Discussion signals observed: unknown raw comments; likely fandom and dance learning interest.
- CTA observed: unknown.
- Metrics observed: views 6.2M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / official dance choreography.
- Audience motive: fandom, participation, entertainment.
- Viewer tension or curiosity gap: what is the official movement people should copy?
- Hook type: official source / challenge origin.
- First 3 seconds: likely choreography starts immediately; exact frame unknown.
- Script structure: single official performance.
- Filming method: choreography performance.
- Shot sequence: group/performer setup -> core moves -> final pose/loop.
- Editing rhythm: beat-synced / audio-led.
- Music/audio role: primary.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; follow/participate in challenge.
- Product/affiliate fit: low direct fit.

#### Knowledge value

- Repeatable pattern: official choreography creates source material for tutorial and remix accounts.
- Supporting claims: `claim_2026_05_09_006` as trend-source context.
- Counterexample to: treating official artist posts as comparable to small-account posts.
- Risks and policy notes: distribution advantage from official fanbase.
- Confidence: low-medium.
- Next test idea: track tutorial/remix posts published after official choreography to see which derivative formats outperform.

### case_2026_05_09_015

#### Identity

- Case ID: `case_2026_05_09_015`
- Source sample: `sample_us_2026_05_09_008`
- Source type: tutorial reference
- Source URL or local file: https://www.tiktok.com/@singsingaduck/video/7634815085751356693
- Date collected: 2026-05-09
- Region/language: US / English-facing signal from source set
- Account/niche: dance tutorial
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 2.9M views.
- Content observed from source note: REDRED tutorial riding the main dance trend.
- Format/mechanism observed: slowed mirrored breakdown.
- Heat signals: active K-pop dance trend; tutorial demand.
- Discussion signals observed: unknown raw comments; likely requests for counts, speed, mirrored view, and difficulty.
- CTA observed: unknown.
- Metrics observed: views 2.9M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: practical utility / dance tutorial.
- Audience motive: participation, learning, belonging.
- Viewer tension or curiosity gap: can I learn the trend without decoding the original choreography?
- Hook type: tutorial / slowed breakdown.
- First 3 seconds: likely shows mirrored slowed movement or tutorial promise; exact copy unknown.
- Script structure: trend reference -> slowed steps -> repeatable practice.
- Filming method: tutorial performance.
- Shot sequence: front-facing mirrored view -> move segments -> full sequence.
- Editing rhythm: step-by-step cuts or slowed single-shot pacing.
- Music/audio role: rhythm driver and learning reference.
- On-screen text/caption style: likely step labels or tutorial framing; exact copy unknown.
- CTA and conversion path: unknown observed CTA; follow for tutorials, saves for practice.
- Product/affiliate fit: low-medium; later dance course, fitness, or creator support path.

#### Knowledge value

- Repeatable pattern: tutorializing a fast-moving dance trend can capture people who want to participate but need instruction.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: generic dance copy with no added utility.
- Risks and policy notes: music rights and trend decay.
- Confidence: medium.
- Next test idea: compare full-speed cover, slowed mirrored tutorial, and "3 hardest moves" breakdown for the same dance.

### case_2026_05_09_016

#### Identity

- Case ID: `case_2026_05_09_016`
- Source sample: `sample_us_2026_05_09_009`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@thewakinghat/video/7634654798884687107
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: dance trend / original credit
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 2.3M views.
- Content observed from source note: Slayyyter Old Technology dance; vibe/pose-driven movement.
- Format/mechanism observed: original dance credit / pose-driven trend.
- Heat signals: emerging dance format; original movement reference.
- Discussion signals observed: unknown raw comments; likely credit, replication, sound/trend discussion.
- CTA observed: unknown.
- Metrics observed: views 2.3M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / dance trend origin.
- Audience motive: entertainment, identity, trend participation.
- Viewer tension or curiosity gap: what movement defines this sound/trend?
- Hook type: original dance credit / distinctive pose.
- First 3 seconds: likely immediate pose/movement with sound; exact frame unknown.
- Script structure: single performance around repeatable gesture.
- Filming method: phone performance.
- Shot sequence: intro pose -> core movement -> repeatable/loopable ending.
- Editing rhythm: audio-led.
- Music/audio role: primary trend driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; follow/credit path if creator becomes associated with trend.
- Product/affiliate fit: low direct fit.

#### Knowledge value

- Repeatable pattern: original or early-credit dance posts can gain from being the reference others copy.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: late trend copies without ownership, utility, or context.
- Risks and policy notes: attribution disputes; rapid decay once larger accounts copy.
- Confidence: medium.
- Next test idea: track original-credit comments and remix volume for dance-origin posts.

### case_2026_05_09_017

#### Identity

- Case ID: `case_2026_05_09_017`
- Source sample: `sample_us_2026_05_09_010`
- Source type: remix reference
- Source URL or local file: https://www.tiktok.com/@nikkisworld_/video/7635405867252321566
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: dance trend / comedy contrast / baking context
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 1M views.
- Content observed from source note: Old Technology dance adapted into baking context.
- Format/mechanism observed: trend inserted into unrelated context.
- Heat signals: active sound/dance trend; niche remix novelty.
- Discussion signals observed: unknown raw comments; likely contrast between baking and dance, replication, personality reaction.
- CTA observed: unknown.
- Metrics observed: views 1M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / trend remix.
- Audience motive: surprise, humor, creator personality, trend recognition.
- Viewer tension or curiosity gap: why is a dance trend appearing inside a baking scenario?
- Hook type: context collision.
- First 3 seconds: likely baking context before trend movement lands; exact frame unknown.
- Script structure: unrelated activity -> trend interruption -> comedic contrast.
- Filming method: phone performance / kitchen or baking setup.
- Shot sequence: baking activity -> dance insert -> reaction/loop.
- Editing rhythm: audio-led with context switch.
- Music/audio role: primary trend driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; possible bridge to food creator personality.
- Product/affiliate fit: medium if the niche context supports recipes, tools, or ingredients.

#### Knowledge value

- Repeatable pattern: trend-to-niche remix can make a broad dance format feel owned by a specific creator.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: trend participation with no context or niche collision.
- Risks and policy notes: trend may distract from niche promise if overused.
- Confidence: medium.
- Next test idea: put the same trend into three niche activities and compare whether comments mention the niche or only the dance.

### case_2026_05_09_018

#### Identity

- Case ID: `case_2026_05_09_018`
- Source sample: `sample_us_2026_05_09_011`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@its_me_katy_g/video/7634550402456784142
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: sound trend / seasonal wordplay
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 3M views.
- Content observed from source note: sped-up "The One That Got Away" with May wordplay.
- Format/mechanism observed: seasonal wordplay using trend sound.
- Heat signals: active sound trend; seasonal pun timing.
- Discussion signals observed: unknown raw comments; likely wordplay recognition, seasonal jokes, shares.
- CTA observed: unknown.
- Metrics observed: views 3M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / sound trend / seasonal wordplay.
- Audience motive: humor, trend recognition, seasonal identity.
- Viewer tension or curiosity gap: how does the sound lyric become a May-specific joke?
- Hook type: seasonal wordplay.
- First 3 seconds: likely text setup tied to May; exact copy unknown.
- Script structure: text setup -> sound lyric/pun -> punchline/replay.
- Filming method: unknown, likely lip-sync or text-led performance.
- Shot sequence: text/creator setup -> lip-sync or reaction -> pun landing.
- Editing rhythm: audio-led.
- Music/audio role: primary trend driver.
- On-screen text/caption style: likely short pun setup; exact copy unknown.
- CTA and conversion path: unknown observed CTA; follow for timely sound jokes.
- Product/affiliate fit: low direct fit; may bridge to seasonal fashion/prom only if adapted.

#### Knowledge value

- Repeatable pattern: timely wordplay can refresh a familiar sound when calendar context is obvious.
- Supporting claims: `claim_2026_05_09_006` as sound-trend identity evidence.
- Counterexample to: unrelated sound reuse with no fresh context.
- Risks and policy notes: trend ledger prom linkage is uncertain; classify before using as prom evidence.
- Confidence: low-medium.
- Next test idea: create three calendar-specific sound posts and track whether comments repeat the pun.

### case_2026_05_09_019

#### Identity

- Case ID: `case_2026_05_09_019`
- Source sample: `sample_us_2026_05_09_012`
- Source type: breakout creator
- Source URL or local file: https://www.tiktok.com/@devinbeasleyjr/video/7635012910216973582
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: cultural moment / dance revival / Michael Jackson
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 3K followers -> 1.6M views.
- Content observed from source note: Michael Jackson biopic and Thriller/Beat It revival context; full choreography recreation.
- Format/mechanism observed: full choreography recreation tied to cultural revival.
- Heat signals: Michael Jackson / Jaafar Jackson trend; low-follower breakout; nostalgia.
- Discussion signals observed: unknown raw comments; likely nostalgia, accuracy, MJ fandom, biopic interest.
- CTA observed: unknown.
- Metrics observed: views 1.6M; follower count 3K before/at source note; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: entertainment wrapper / dance revival / cultural moment.
- Audience motive: nostalgia, fandom, skill appreciation, identity.
- Viewer tension or curiosity gap: can a small creator recreate a legendary performance well enough to feel timely?
- Hook type: cultural revival / full recreation.
- First 3 seconds: likely immediately recognizable MJ movement or styling; exact frame unknown.
- Script structure: cultural context -> full choreography recreation -> nostalgia payoff.
- Filming method: performance recreation.
- Shot sequence: recognizable intro pose -> signature moves -> final callback.
- Editing rhythm: audio-led, likely longer performance continuity.
- Music/audio role: primary nostalgia and rhythm driver.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; follow for performance/revival content.
- Product/affiliate fit: low direct fit; possible dance tutorial or apparel bridge.

#### Knowledge value

- Repeatable pattern: cultural news can revive old choreography when the creator supplies recognizable skill and timing.
- Supporting claims: `claim_2026_05_09_006`
- Counterexample to: nostalgia references with weak execution.
- Risks and policy notes: music rights; comparison to iconic performer raises quality bar.
- Confidence: medium.
- Next test idea: compare full recreation against "3 signature moves explained" tutorial during the same revival window.

### case_2026_05_09_020

#### Identity

- Case ID: `case_2026_05_09_020`
- Source sample: `sample_us_2026_05_09_013`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@mtvuk/video/7636301526608252182
- Date collected: 2026-05-09
- Region/language: US / English-facing signal from source set
- Account/niche: cultural moment / celebrity / Michael Jackson biopic
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 5.1M views.
- Content observed from source note: Jaafar Jackson at Met Gala feeds Michael Jackson movie interest.
- Format/mechanism observed: cross-event amplification.
- Heat signals: Met Gala plus Michael Jackson / Jaafar Jackson trend overlap.
- Discussion signals observed: unknown raw comments; likely resemblance, biopic interest, MJ fandom, event styling.
- CTA observed: unknown.
- Metrics observed: views 5.1M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: cultural moment / celebrity / cross-event amplification.
- Audience motive: fandom, curiosity, nostalgia, entertainment-news tracking.
- Viewer tension or curiosity gap: how does one event appearance connect to a larger entertainment storyline?
- Hook type: cross-event recognition.
- First 3 seconds: likely Jaafar Jackson visual or identifying caption; exact frame unknown.
- Script structure: event clip -> identity recognition -> movie/trend implication.
- Filming method: event clip / entertainment media post.
- Shot sequence: celebrity at event -> identifying detail -> fandom/movie context.
- Editing rhythm: short entertainment-news pacing.
- Music/audio role: secondary.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown observed CTA; reusable path is commentary/explainer rather than raw clip.
- Product/affiliate fit: low direct fit.

#### Knowledge value

- Repeatable pattern: overlapping trend narratives can raise heat when one visual artifact points to another active cultural conversation.
- Supporting claims: `claim_2026_05_09_001`
- Counterexample to: one-off celebrity clips with no second narrative.
- Risks and policy notes: media reuse; event/news trend decay.
- Confidence: medium.
- Next test idea: build a "why this Met Gala clip is really about the MJ movie" explainer and compare comments about both topics.

### case_2026_05_09_021

#### Identity

- Case ID: `case_2026_05_09_021`
- Source sample: `sample_us_2026_05_09_015`
- Source type: viral reference
- Source URL or local file: https://www.tiktok.com/@chamberlin_kevin/video/7636516119897033998
- Date collected: 2026-05-09
- Region/language: US / English-facing
- Account/niche: identity trend / comedy audio
- Collector: TK Case Librarian

#### Source observations

- Outcome observed: 4M views.
- Content observed from source note: Eminem "My Name Is" format; cross-niche adaptability.
- Format/mechanism observed: audio plus text identity reveal.
- Heat signals: repeated identity reveal format; adaptable trend audio.
- Discussion signals observed: unknown raw comments; likely self-identification, tags, niche variants, identity debate.
- CTA observed: unknown.
- Metrics observed: views 4M; likes unknown; comments unknown; shares unknown; saves unknown; engagement unknown; followers gained unknown; profile visits unknown; clicks/DM/orders unknown; retention unknown.

#### Interpretation

- Content category: story and identity / entertainment wrapper.
- Audience motive: belonging, self-recognition, humor.
- Viewer tension or curiosity gap: what identity is being revealed through the familiar audio template?
- Hook type: identity reveal.
- First 3 seconds: likely text sets up identity label before audio payoff; exact copy unknown.
- Script structure: identity setup -> audio cue -> reveal/confirmation.
- Filming method: unknown, likely face-to-camera or text-led performance.
- Shot sequence: setup text/pose -> audio beat -> identity reveal.
- Editing rhythm: audio-led.
- Music/audio role: trend participation and comedy cue.
- On-screen text/caption style: identity label and reveal; exact copy unknown.
- CTA and conversion path: unknown observed CTA; follow or comment with identity variant.
- Product/affiliate fit: medium if identity maps to a product niche; otherwise general traffic.

#### Knowledge value

- Repeatable pattern: audio templates with a blank identity slot travel across niches because viewers can map themselves into the format.
- Supporting claims: `claim_2026_05_09_002`, `claim_2026_05_09_006`
- Counterexample to: identity reveals that are too broad to trigger self-recognition.
- Risks and policy notes: identity humor can become exclusionary if aimed at protected traits or stereotypes.
- Confidence: medium.
- Next test idea: test the same audio reveal with three identity slots: hobby, job role, and shopping behavior.

## Counterexamples and caveats

- Raw celebrity/event footage (`case_2026_05_09_010`, `case_2026_05_09_011`, `case_2026_05_09_012`, `case_2026_05_09_013`, `case_2026_05_09_014`, `case_2026_05_09_020`) is strong heat evidence but weak proof of repeatable small-account mechanics.
- Dance trend participation without added identity, tutorial value, niche remix, or original-credit status remains an assumed counterexample class; cold samples are still needed.
- Store utility and AI/tool education have stronger conversion logic but currently fewer supporting cases than entertainment formats.
- No failed posts or weak examples were included in this retrospective batch, so every proposed pattern remains vulnerable to survivorship bias.

## Recommended next tests

- Collect 10 cold or average Met Gala derivative posts to test whether angle clarity predicts performance better than event relevance alone.
- Collect 10 low-follower dance posts that did not break out and compare identity/context signal against `case_2026_05_09_008`, `case_2026_05_09_009`, `case_2026_05_09_015`, and `case_2026_05_09_017`.
- Run one practical-utility mini-series: "Costco healthy finds", "Trader Joe's healthy finds", and "Walmart healthy finds"; measure saves and source/price questions.
- Run one AI/tool contradiction hook against a plain tutorial hook using the same workflow; judge by comments, saves, and profile/lead action if available.
- Convert one raw event spectacle into a deconstruction post to test whether small-account interpretation can replace media access.
