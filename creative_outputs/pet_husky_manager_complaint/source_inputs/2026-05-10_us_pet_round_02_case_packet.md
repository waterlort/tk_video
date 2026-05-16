# US pet trend evidence round 02 case packet

## Batch metadata

- Batch ID: `case_batch_us_pet_2026_05_10_round_02`
- Issue: `ULT-106`
- Date collected: 2026-05-10
- Region/language target: United States / English-facing
- Collector: TK Case Librarian
- Collection type: public TikTok channel snapshot plus Creative Center manual snapshot queue
- Source scope: `#pibble`, `#husky`, `#catmomlife`, `#backyardchickens`, `#petlovers`, and broad cute control `#cutedog`
- Source references:
  - `trends/us_pet_trend_radar_2026-05-10_round_01.md`
  - `playbooks/visual_identity_lock_protocol_2026-05-10.md`
  - TikTok channel pages for `pibble`, `husky`, `automatic-feeder-for-cats`, `dog-and-cat`, `pet-supplies`, `cutest-dog-breeds`, and `cute-small-dogs`
  - TikTok Creative Center hashtag pages for `catmomlife`, `backyardchickens`, and `petlovers`
  - SocialCal US pet hashtag mirror updated 2026-04-29 / local round 01 radar
- Use boundary: evidence scouting and manual snapshot handoff only.
- Do not use as: durable taxonomy update, relation-claim promotion, prediction set, or proof that a format will perform.

## Evidence completeness audit

- Evidence completeness score: 0.62 overall.
- Completed/usable case records: 10 caption-backed records plus 2 Creative Center ID-only manual snapshot rows.
- High-confidence fields: source surface, collection date, target hashtag, account/handle when exposed, caption-level hook, broad category, visible like count or channel metric when exposed.
- Medium-confidence fields: script structure, filming method, editing rhythm, audio role, CTA, discussion signal. These are interpreted from captions and public channel snippets, not from full playback.
- Low-confidence or missing fields: exact post date, raw views for most TikTok-channel rows, comments, shares, saves, retention, follower gain, profile visits, clicks, orders, full first 3 seconds, exact shot-by-shot sequence, and visual identity stability.
- Main caveat: most public TikTok pages exposed captions and like/account counts but did not allow reliable video playback in this collection pass. Treat first-three-second and identity notes as `unknown` unless a snapshot explicitly supports them.
- Manual follow-up required: the two `#backyardchickens` rows are Creative Center related-video IDs without handle/caption playback; they need human or authorized snapshot capture before normalization into high-confidence cases.

## Source-field clarity check

| Case ID | Target tag | Source clarity | Caption/detail clarity | Metrics clarity | Identity stability clarity | Current use |
| --- | --- | --- | --- | --- | --- | --- |
| `case_2026_05_10_pet_001` | `#pibble` | direct video URL | medium | partial likes only | unknown | counterexample / tag-noise scout |
| `case_2026_05_10_pet_002` | `#pibble` | direct video URL | medium | partial likes only | unknown | cute-dog/meme boundary scout |
| `case_2026_05_10_pet_003` | `#husky` | direct video URL | medium | partial likes only | unknown | breed-personality scout |
| `case_2026_05_10_pet_004` | `#husky` | direct video URL | medium | partial likes only | likely but unverified | breed-personality scout |
| `case_2026_05_10_pet_005` | `#catmomlife` | direct video URL | high caption | partial likes only | unknown | cat-parent utility scout |
| `case_2026_05_10_pet_006` | `#catmomlife` | direct video URL from click failure | medium | partial likes only | unknown | community advice scout |
| `case_2026_05_10_pet_007` | `#backyardchickens` | Creative Center video ID | low | unknown | unknown | manual snapshot row |
| `case_2026_05_10_pet_008` | `#backyardchickens` | Creative Center video ID | low | unknown | unknown | manual snapshot row |
| `case_2026_05_10_pet_009` | `#petlovers` | direct video URL | medium | partial likes only | not applicable / product list | commerce-noise scout |
| `case_2026_05_10_pet_010` | `#petlovers` | channel snapshot | medium | partial likes/views from snippet | likely but unverified | grooming transformation scout |
| `case_2026_05_10_pet_011` | `#cutedog` | direct video URL from click failure | medium | partial likes only | not applicable / montage | broad cute control |
| `case_2026_05_10_pet_012` | `#cutedog` | direct video URL from click failure | medium | partial likes only | unknown | broad cute control |

## Candidate patterns

- `#pibble` is not clean breed evidence in this pass. The public channel snapshot contained meme/edit language and "pibble" fandom phrasing, so classifier should treat it as a boundary/noise risk before any breed-community claim.
- `#husky` provides clearer repeated format language: attitude, arguing, foot-stomping, "Huskies are just different," and breed-stereotype comedy.
- `#catmomlife` splits into two useful tracks: owner anxiety/community advice and cat-parent utility products. Product-led examples need disclosure and authenticity checks.
- `#backyardchickens` is visible in official trend tooling, but public evidence is currently ID-heavy. It needs manual snapshots to determine whether content is pet, homestead, farming utility, comedy, predator-risk, or egg-economy.
- `#petlovers` is broad and commerce-prone. Some rows are useful product or grooming examples, but the tag alone is weak evidence of owner-community discussion.
- `#cutedog` broad cute controls lean toward montage/breed-list/puppy-aesthetic formats with weak persistent-subject identity unless the account uses a recurring named pet.

## Candidate claims for TK Knowledge Classifier

- `candidate_claim_pet_2026_05_10_001`: In current pet scouting, `#pibble` may behave as a meme/noise or edit tag, not only a pitbull/breed-community tag.
- `candidate_claim_pet_2026_05_10_002`: Breed-specific tags with strong stereotype language, especially `#husky`, may produce more repeatable hooks than generic cute tags because the audience recognizes a behavior script.
- `candidate_claim_pet_2026_05_10_003`: Cat-parent identity tags can bridge to utility products when the product is embedded in a real care routine, but product-first captions risk ad fatigue.
- `candidate_claim_pet_2026_05_10_004`: `#backyardchickens` should be treated as a pet/homestead boundary category until snapshots show whether the viewer job is animal affection, household utility, egg economics, or rural-life identity.
- `candidate_claim_pet_2026_05_10_005`: Broad cute controls such as `#cutedog` are useful reach comparisons but weak evidence for persistent-character series unless the subject identity is locked and recurring.

## Counterexamples and caveats

- `#pibble` rows weaken the round 01 assumption that the tag is straightforwardly breed/community-specific.
- `#petlovers` rows show how a general pet-community tag can attach to dropshipping/product-list content with little pet-owner story.
- `#cutedog` rows show broad cute traffic can be montage/list based, making identity-lock and repeatable subject claims hard to evaluate.
- Creative Center related-video IDs are useful for queueing real examples but are not enough for full case normalization without captions, screenshots, or playback.

## Recommended next test

Run a 6-video pet test before any new generated example:

1. Two `#husky`-style breed personality clips: one "argument/attitude" hook and one "physical behavior proof" hook.
2. Two `#catmomlife` clips: one owner-problem/community advice prompt and one routine-embedded utility demo.
3. Two `#backyardchickens` clips after manual snapshots: one homestead routine and one animal-personality/cute clip.

Keep the same persistent subject in every shot, name the subject on screen, and use a comment-first CTA. Compare comment quality, saves, and identity recall before moving to product or AI-generated examples.

## Case records

### case_2026_05_10_pet_001

#### Identity

- Case ID: `case_2026_05_10_pet_001`
- Source type: public TikTok channel snapshot / tag scout
- Source URL or local file: https://www.tiktok.com/@leakyscrotum/video/7520060469173046559
- Source surface: https://www.tiktok.com/channel/pibble
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@leakyscrotum`; meme/edit or pet-adjacent account context unknown
- Collector: TK Case Librarian
- Target hashtag: `#pibble`

#### Source observations

- Caption observed: "what kind of pibble is this? goodbye, and goodnight niche trend..." with `#pibble`, `#fyp`, and tagged accounts.
- Visible heat signal: 193.7K like-count surface on the channel snapshot; account surface showed 1.4M.
- Discussion signal observed: caption invites identification with "what kind of pibble is this"; raw comments unknown.
- CTA observed: none.
- Metrics observed: likes 193.7K surface; views unknown; comments unknown; shares unknown; saves unknown; retention unknown; follower gains unknown.
- Persistent subject identity stable: unknown; no reliable playback/screenshot captured.

#### Interpretation

- Content category: meme/edit boundary, not clean pet-breed evidence.
- Audience motive: in-joke recognition, niche-tag participation, identity play.
- Viewer tension or curiosity gap: what counts as a "pibble" inside this trend?
- Hook type: identity question / niche meme.
- First 3 seconds: unknown; caption suggests immediate identity-question setup.
- Script structure: caption question -> meme/edit reveal -> tag-community recognition.
- Filming method: unknown; likely edited or repurposed visual, unverified.
- Shot sequence: unknown.
- Editing rhythm: likely fast meme/edit rhythm, unverified.
- Music/audio role: unknown.
- On-screen text/caption style: caption-led.
- CTA and conversion path: none observed; weak conversion fit.
- Product/affiliate fit: low.

#### Knowledge value

- Repeatable pattern: a pet-looking hashtag can become a meme label; do not assume tag meaning from name alone.
- Supporting claims: `candidate_claim_pet_2026_05_10_001`
- Counterexample to: "breed tag means breed-community content."
- Risks: tag noise; weak pet-owner authenticity; possible non-pet visuals.
- Confidence: low-medium.
- Next test idea: collect five `#pibble` manual screenshots and classify real dog, meme/edit, repost, or non-pet.

### case_2026_05_10_pet_002

#### Identity

- Case ID: `case_2026_05_10_pet_002`
- Source type: public TikTok channel snapshot / tag scout
- Source URL or local file: https://www.tiktok.com/@pibblesdog/video/7533675227314670866
- Source surface: https://www.tiktok.com/channel/pibble
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@pibblesdog`; dog/cute-animal or edit context unknown
- Collector: TK Case Librarian
- Target hashtag: `#pibble`

#### Source observations

- Caption observed: "Pibbles are so cute" with `#pibble`, `#cuteanimals`, `#cutedog`, and `#pibbles`.
- Visible heat signal: 177.8K like-count surface; account surface showed 1M.
- Discussion signal observed: likely breed/cuteness affirmation from caption, but raw comments unknown.
- CTA observed: none.
- Metrics observed: likes 177.8K surface; views unknown; comments unknown; shares unknown; saves unknown; retention unknown.
- Persistent subject identity stable: unknown; no reliable playback/screenshot captured.

#### Interpretation

- Content category: cute dog / tag-community boundary.
- Audience motive: cuteness, breed affection, light identity signaling.
- Viewer tension or curiosity gap: minimal; "cute pibble" affirmation.
- Hook type: direct cute appeal.
- First 3 seconds: unknown.
- Script structure: cute subject -> affective caption -> tag amplification.
- Filming method: unknown.
- Shot sequence: unknown.
- Editing rhythm: likely simple cute clip or montage, unverified.
- Music/audio role: unknown.
- On-screen text/caption style: caption-led.
- CTA and conversion path: none observed.
- Product/affiliate fit: low unless converted into breed-specific toy/comfort routine.

#### Knowledge value

- Repeatable pattern: broad cute framing can attach to a breed-like tag, but evidence is too thin to infer community depth.
- Supporting claims: `candidate_claim_pet_2026_05_10_001`, `candidate_claim_pet_2026_05_10_005`
- Counterexample to: none; primarily a weak support case.
- Risks: low information density; no confirmed identity lock.
- Confidence: low-medium.
- Next test idea: compare `#pibble` cute clips with `#pitbullsoftiktok` or `#rescuedogsoftiktok` comment depth.

### case_2026_05_10_pet_003

#### Identity

- Case ID: `case_2026_05_10_pet_003`
- Source type: public TikTok channel snapshot / breed-specific reference
- Source URL or local file: https://www.tiktok.com/@siberianderpskies/video/7537233697754418487
- Source surface: https://www.tiktok.com/channel/husky
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@siberianderpskies`; husky/pet personality
- Collector: TK Case Librarian
- Target hashtag: `#husky`

#### Source observations

- Caption observed: "Not really sure how it's possible they're both the most Husky to ever Husky, but the video doesn't lie" with husky tags.
- Visible heat signal: 14.2K like-count surface; account surface showed 62.6K.
- Discussion signal observed: caption invites agreement around recognizable husky behavior; raw comments unknown.
- CTA observed: none.
- Metrics observed: likes 14.2K surface; views unknown; comments unknown; shares unknown; saves unknown; retention unknown.
- Persistent subject identity stable: unknown from playback, but account/handle suggests recurring husky subjects.

#### Interpretation

- Content category: breed-personality comedy.
- Audience motive: recognition, owner identity, breed stereotype enjoyment.
- Viewer tension or curiosity gap: what behavior proves a dog is "the most Husky"?
- Hook type: breed stereotype / behavior proof.
- First 3 seconds: unknown; likely shows two dogs or immediate behavior contrast.
- Script structure: claim -> behavior proof -> audience recognition.
- Filming method: owner phone footage, inferred from pet-account style.
- Shot sequence: unknown.
- Editing rhythm: likely short observational clip, unverified.
- Music/audio role: unknown; caption carries primary framing.
- On-screen text/caption style: caption-led.
- CTA and conversion path: none observed; possible follow-for-more breed personality series.
- Product/affiliate fit: medium later for enrichment, leashes, grooming, or home-proofing if routine is shown.

#### Knowledge value

- Repeatable pattern: "most [breed] ever" compresses breed knowledge into a quick behavior proof.
- Supporting claims: `candidate_claim_pet_2026_05_10_002`
- Counterexample to: broad generic cute tags with no behavior script.
- Risks: stereotype can become repetitive; visual identity still unverified.
- Confidence: medium.
- Next test idea: film one recurring husky-like character with a single unmistakable behavior proof in the first 2 seconds.

### case_2026_05_10_pet_004

#### Identity

- Case ID: `case_2026_05_10_pet_004`
- Source type: public TikTok channel snapshot / breed-specific reference
- Source URL or local file: https://www.tiktok.com/@worldsokayestdogs/video/7529713552425258253
- Source surface: https://www.tiktok.com/channel/husky
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@worldsokayestdogs`; dog personality/comedy
- Collector: TK Case Librarian
- Target hashtag: `#husky`

#### Source observations

- Caption observed: "The foot stomp. Huskies are just different" with `#HuskyLife`, `#HuskyLove`, `#husky`, and `#huskysoftiktok`.
- Visible heat signal: 946.5K like-count surface; account surface showed 5.7M.
- Discussion signal observed: caption likely invites owners to recognize a specific husky behavior; raw comments unknown.
- CTA observed: none.
- Metrics observed: likes 946.5K surface; views unknown; comments unknown; shares unknown; saves unknown; retention unknown.
- Persistent subject identity stable: likely if the same dog is shown in the clip, but visual verification unavailable.

#### Interpretation

- Content category: breed-personality comedy / behavior proof.
- Audience motive: recognition, tagging other husky owners, affectionate frustration.
- Viewer tension or curiosity gap: why is a foot stomp uniquely "husky"?
- Hook type: specific behavior proof.
- First 3 seconds: unknown; likely immediate foot-stomp or owner/dog exchange.
- Script structure: behavior moment -> breed label -> recognition loop.
- Filming method: owner phone footage, inferred.
- Shot sequence: unknown.
- Editing rhythm: likely single-moment or quick reaction clip.
- Music/audio role: unknown; natural sound may matter if stomp/arguing is audible.
- On-screen text/caption style: caption-led.
- CTA and conversion path: none observed.
- Product/affiliate fit: medium for future breed-specific enrichment or training-adjacent content, but no current conversion path.

#### Knowledge value

- Repeatable pattern: one highly specific physical behavior can carry a breed-comedy clip.
- Supporting claims: `candidate_claim_pet_2026_05_10_002`
- Counterexample to: generic "my dog is cute" framing.
- Risks: overclaiming from likes without comments/views; unverified first 3 seconds.
- Confidence: medium.
- Next test idea: create a "Husky foot-stomp scale" owner prompt with a named recurring dog and ask viewers to rate their dog's version.

### case_2026_05_10_pet_005

#### Identity

- Case ID: `case_2026_05_10_pet_005`
- Source type: public TikTok channel snapshot / product-adjacent example
- Source URL or local file: https://www.tiktok.com/@simplekitties/video/7432450417310616863
- Source surface: https://www.tiktok.com/channel/automatic-feeder-for-cats?lang=en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@simplekitties`; cat care / cat products
- Collector: TK Case Librarian
- Target hashtags: `#catmomlife`, `#petlovers`

#### Source observations

- Caption observed: automatic wet food feeder demo for busy pet parents; mentions models, ice packs, app scheduling, safety features, discount code, `#gifted`, and `#catmomlife`.
- Visible heat signal: 3,820 like-count surface; account surface showed 77K.
- Discussion signal observed: utility questions likely, but raw comments unknown.
- CTA observed: discount code and bio link.
- Metrics observed: likes 3,820 surface; views unknown; comments unknown; shares unknown; saves unknown; clicks/orders unknown.
- Persistent subject identity stable: unknown for cats; product identity likely repeated through demo, but not visually verified.

#### Interpretation

- Content category: routine-embedded utility demo / product-adjacent.
- Audience motive: problem relief, feeding convenience, cat-parent identity.
- Viewer tension or curiosity gap: how can busy owners keep wet food fresh and scheduled?
- Hook type: practical solution / product feature stack.
- First 3 seconds: unknown; caption suggests product-first or problem-first feeder demo.
- Script structure: problem/user identity -> product models -> feature list -> discount CTA.
- Filming method: product demo, likely tabletop or home routine footage.
- Shot sequence: unknown; likely feeder closeups and cat-use context.
- Editing rhythm: feature list / demo cuts.
- Music/audio role: unknown.
- On-screen text/caption style: likely benefit bullets, unverified.
- CTA and conversion path: code `SIMPLEKITTIES` for 10% off in bio; gifted disclosure present.
- Product/affiliate fit: high, but ad/disclosure risk must be managed.

#### Knowledge value

- Repeatable pattern: cat-parent identity plus a concrete routine problem can support a utility demo.
- Supporting claims: `candidate_claim_pet_2026_05_10_003`
- Counterexample to: pure entertainment-only pet framing.
- Risks: product-first fatigue, affiliate disclosure, unverifiable outcomes, health/feeding claims.
- Confidence: medium.
- Next test idea: test the same feeder/routine as "what changed my morning with two cats" without opening with the product name.

### case_2026_05_10_pet_006

#### Identity

- Case ID: `case_2026_05_10_pet_006`
- Source type: public TikTok channel snapshot / owner-advice prompt
- Source URL or local file: https://www.tiktok.com/@maxtheorangewarrier/video/7456583731684445470
- Source surface: https://www.tiktok.com/channel/dog-and-cat?lang=en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@maxtheorangewarrier`; orange cat / dog-cat household
- Collector: TK Case Librarian
- Target hashtag: `#catmomlife`

#### Source observations

- Caption observed: "We want max to be able to go out and play but the puppy and kitten play like this and I'm scared!" with `#catmom`, `#catmomlife`, `#catanddog`, `#introducingcat`, and help-request tags.
- Visible heat signal: 573.1K like-count surface; account surface showed 7.8M.
- Discussion signal observed: strong implied advice/discussion prompt because caption asks for help around pet interaction.
- CTA observed: implicit help/advice request.
- Metrics observed: likes 573.1K surface; views unknown; comments unknown; shares unknown; saves unknown; retention unknown.
- Persistent subject identity stable: likely recurring cat `Max` from caption/account, but visual verification unavailable.

#### Interpretation

- Content category: owner concern / community advice / pet introduction.
- Audience motive: advice, empathy, concern, household pet identity.
- Viewer tension or curiosity gap: is puppy-kitten play safe or too rough?
- Hook type: risk/concern question.
- First 3 seconds: unknown; likely shows puppy-kitten interaction quickly.
- Script structure: desired outcome -> concerning behavior -> ask community.
- Filming method: owner phone footage, inferred.
- Shot sequence: unknown.
- Editing rhythm: likely raw observation to preserve advice context.
- Music/audio role: unknown; natural sound may help judge play intensity.
- On-screen text/caption style: caption-led advice prompt.
- CTA and conversion path: comment advice; no product path observed.
- Product/affiliate fit: medium later for gates, toys, or behavior guides, but current value is community discussion.

#### Knowledge value

- Repeatable pattern: real owner uncertainty can produce higher-quality comments than generic cute captions.
- Supporting claims: `candidate_claim_pet_2026_05_10_003`
- Counterexample to: product-first pet content.
- Risks: safety advice, animal behavior claims, over-dramatizing distress.
- Confidence: medium.
- Next test idea: make a low-risk "is this normal play?" clip with clear safety context and no medical/training claims.

### case_2026_05_10_pet_007

#### Identity

- Case ID: `case_2026_05_10_pet_007`
- Source type: TikTok Creative Center related-video ID / manual snapshot row
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/hashtag/backyardchickens/pc/en?countryCode=US&period=30
- Related video ID: `7629544412002929933`
- Date collected: 2026-05-10
- Source/post date: unknown; Creative Center page crawled 2 weeks before collection.
- Region/language: US target; language unknown
- Account/niche: unknown; likely backyard chickens / homestead / farm animals
- Collector: TK Case Librarian
- Target hashtag: `#backyardchickens`

#### Source observations

- Creative Center source observed: `#backyardchickens` in Pets, 14K posts in last 30 days and 443K overall on the accessible result.
- Related hashtags observed: `#chickentok`, `#chickensoftiktok`, `#chickens`, `#chickencoop`, `#hens`.
- Visible heat signal: listed as popular in the last 30 days under the hashtag.
- Discussion signal observed: unknown.
- CTA observed: unknown.
- Metrics observed: all video-level metrics unknown.
- Persistent subject identity stable: unknown.

#### Interpretation

- Content category: unknown; likely pet/homestead boundary.
- Audience motive: unknown; possible animal affection, coop utility, egg economics, or rural identity.
- Viewer tension or curiosity gap: unknown.
- Hook type: unknown.
- First 3 seconds: unknown; manual snapshot required.
- Script structure: unknown.
- Filming method: unknown.
- Shot sequence: unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown.
- Product/affiliate fit: unknown; possible coop, feed, safety, cleaning, or homestead products after snapshot.

#### Knowledge value

- Repeatable pattern: not established; row only proves Creative Center related-video presence.
- Supporting claims: `candidate_claim_pet_2026_05_10_004`
- Counterexample to: treating Creative Center IDs as completed cases.
- Risks: insufficient evidence; may be farming utility rather than pet content.
- Confidence: low.
- Next test idea: manually capture screenshot/caption/first 5 seconds and classify viewer job before using this row.

### case_2026_05_10_pet_008

#### Identity

- Case ID: `case_2026_05_10_pet_008`
- Source type: TikTok Creative Center related-video ID / manual snapshot row
- Source URL or local file: https://ads.tiktok.com/business/creativecenter/hashtag/backyardchickens/pc/en?countryCode=US&period=30
- Related video ID: `7613086456558505247`
- Date collected: 2026-05-10
- Source/post date: unknown; Creative Center page crawled 2 weeks before collection.
- Region/language: US target; language unknown
- Account/niche: unknown; likely backyard chickens / homestead / farm animals
- Collector: TK Case Librarian
- Target hashtag: `#backyardchickens`

#### Source observations

- Creative Center source observed: listed under popular related videos for `#backyardchickens` in the last 30 days.
- Visible heat signal: related-video placement only; no raw likes/views captured.
- Discussion signal observed: unknown.
- CTA observed: unknown.
- Metrics observed: all video-level metrics unknown.
- Persistent subject identity stable: unknown.

#### Interpretation

- Content category: unknown; likely pet/homestead boundary.
- Audience motive: unknown.
- Viewer tension or curiosity gap: unknown.
- Hook type: unknown.
- First 3 seconds: unknown; manual snapshot required.
- Script structure: unknown.
- Filming method: unknown.
- Shot sequence: unknown.
- Editing rhythm: unknown.
- Music/audio role: unknown.
- On-screen text/caption style: unknown.
- CTA and conversion path: unknown.
- Product/affiliate fit: unknown.

#### Knowledge value

- Repeatable pattern: not established.
- Supporting claims: `candidate_claim_pet_2026_05_10_004`
- Counterexample to: over-reading ID-only trend rows.
- Risks: insufficient evidence; no caption or metrics.
- Confidence: low.
- Next test idea: collect three `#backyardchickens` snapshots and split them into pet affection, egg/homestead utility, coop setup, and predator-risk categories.

### case_2026_05_10_pet_009

#### Identity

- Case ID: `case_2026_05_10_pet_009`
- Source type: public TikTok channel snapshot / commerce example
- Source URL or local file: https://www.tiktok.com/@usadrop__fulfillment/video/7385185473695649067
- Source surface: https://www.tiktok.com/channel/pet-supplies?lang=en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@usadrop__fulfillment`; dropshipping / product sourcing
- Collector: TK Case Librarian
- Target hashtag: `#petlovers`

#### Source observations

- Caption observed: "5 Pets products for dropshipping! What's your favorite?" with `#pets`, `#petsproducts`, `#petcare`, `#petlovers`, and dropshipping tags.
- Visible heat signal: 2,669 like-count surface; account surface showed 55.5K.
- Discussion signal observed: "What's your favorite?" asks for preference comments; raw comments unknown.
- CTA observed: favorite-selection prompt.
- Metrics observed: likes 2,669 surface; views unknown; comments unknown; shares unknown; saves unknown; clicks/orders unknown.
- Persistent subject identity stable: not applicable; product-list format likely uses multiple objects.

#### Interpretation

- Content category: product list / commerce scout.
- Audience motive: product discovery, seller curiosity, pet-care shopping.
- Viewer tension or curiosity gap: which pet product is worth dropshipping?
- Hook type: numbered list / product ranking.
- First 3 seconds: unknown; likely list title or first product reveal.
- Script structure: list premise -> product sequence -> preference CTA.
- Filming method: product compilation or demo clips, unverified.
- Shot sequence: unknown.
- Editing rhythm: likely fast product-card sequence.
- Music/audio role: unknown.
- On-screen text/caption style: likely product labels, unverified.
- CTA and conversion path: comment favorite; possible sourcing/shop path.
- Product/affiliate fit: high commerce fit, weak authentic pet-owner fit.

#### Knowledge value

- Repeatable pattern: broad pet-community tags can be used for seller-facing product lists, not just owner content.
- Supporting claims: `candidate_claim_pet_2026_05_10_003`
- Counterexample to: treating `#petlovers` as authentic owner-community evidence.
- Risks: generic dropshipping, low trust, product-first fatigue.
- Confidence: medium.
- Next test idea: compare product-list intro against routine-embedded pet-owner demo using the same product.

### case_2026_05_10_pet_010

#### Identity

- Case ID: `case_2026_05_10_pet_010`
- Source type: public TikTok channel snapshot / grooming transformation
- Source URL or local file: https://www.tiktok.com/channel/pet-groomer?lang=en
- Source row: `@girlwithedogs`, caption "I was out of commission for 2 days after this groom, but it was worth it..." with `#petlovers`
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: English-facing; exact region unknown
- Account/niche: `@girlwithedogs`; professional pet grooming
- Collector: TK Case Librarian
- Target hashtag: `#petlovers`

#### Source observations

- Caption observed: hard grooming/transformation context around husky/malamute dog grooming and `#petlovers`.
- Visible heat signal: 1.3M like-count surface and 15.1M account/video surface in the channel snapshot; exact metric mapping needs manual verification.
- Discussion signal observed: likely high because transformation/grooming effort invites reaction and questions; raw comments unknown.
- CTA observed: none in caption excerpt.
- Metrics observed: likes/views ambiguous from channel snippet; comments unknown; shares unknown; saves unknown.
- Persistent subject identity stable: likely because grooming transformation depends on the same dog before/after, but visual verification unavailable.

#### Interpretation

- Content category: transformation / labor proof / pet care.
- Audience motive: satisfaction, empathy for effort, grooming knowledge, before-after payoff.
- Viewer tension or curiosity gap: how hard was this groom and how dramatic is the result?
- Hook type: hardship-to-payoff transformation.
- First 3 seconds: unknown; likely before-state or grooming challenge.
- Script structure: difficult pet state -> grooming labor -> clean reveal.
- Filming method: groomer workspace footage.
- Shot sequence: unknown.
- Editing rhythm: before/process/after cuts, inferred.
- Music/audio role: unknown.
- On-screen text/caption style: caption-led with likely process labels.
- CTA and conversion path: no direct CTA observed; possible follow/subscription for grooming transformations.
- Product/affiliate fit: medium-high for grooming tools, but trust depends on professional care and animal-safety framing.

#### Knowledge value

- Repeatable pattern: visible labor plus before-after payoff can outperform generic pet product listing.
- Supporting claims: `candidate_claim_pet_2026_05_10_002`, `candidate_claim_pet_2026_05_10_003`
- Counterexample to: pure cute control with no transformation.
- Risks: animal stress, grooming safety, exact metrics unverified.
- Confidence: medium-low until direct video captured.
- Next test idea: collect a confirmed grooming transformation with first frame, before/after stills, and comments to separate satisfaction from concern.

### case_2026_05_10_pet_011

#### Identity

- Case ID: `case_2026_05_10_pet_011`
- Source type: public TikTok channel snapshot / broad cute control
- Source URL or local file: https://www.tiktok.com/@amazinganimals.us/video/7281385425439149358
- Source surface: https://www.tiktok.com/channel/cutest-dog-breeds?lang=en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@amazinganimals.us`; animal facts/cute breeds
- Collector: TK Case Librarian
- Target hashtag: `#cutedog`

#### Source observations

- Caption observed: "Here's the cutest dog breeds in the world, aren't they?" with `#cutestdog`, `#cutedog`, `#cutepuppy`, and `#funnypuppy`.
- Visible heat signal: 61.3K like-count surface; account surface showed 1.1M.
- Discussion signal observed: caption asks for agreement/opinion; raw comments unknown.
- CTA observed: implicit agreement prompt.
- Metrics observed: likes 61.3K surface; views unknown; comments unknown; shares unknown; saves unknown.
- Persistent subject identity stable: not applicable if breed montage/list; no recurring subject verified.

#### Interpretation

- Content category: broad cute control / breed list.
- Audience motive: quick cute payoff, ranking agreement, breed preference.
- Viewer tension or curiosity gap: which breeds will be ranked cutest?
- Hook type: top/list curiosity.
- First 3 seconds: unknown; likely title/ranking card or first breed reveal.
- Script structure: list premise -> breed examples -> agreement prompt.
- Filming method: montage/list, inferred from caption.
- Shot sequence: unknown.
- Editing rhythm: likely quick cuts between breeds.
- Music/audio role: unknown.
- On-screen text/caption style: likely list labels, unverified.
- CTA and conversion path: opinion/comment path; no product path observed.
- Product/affiliate fit: low-medium; could bridge to breed guides but weak direct conversion.

#### Knowledge value

- Repeatable pattern: broad cute controls can draw surface engagement through list/ranking, but they do not validate identity-lock series.
- Supporting claims: `candidate_claim_pet_2026_05_10_005`
- Counterexample to: recurring-character pet story.
- Risks: stock/repost montage, low trust, weak identity.
- Confidence: medium-low.
- Next test idea: compare a breed-list `#cutedog` control against one named-dog mini-story with the same first-frame cuteness.

### case_2026_05_10_pet_012

#### Identity

- Case ID: `case_2026_05_10_pet_012`
- Source type: public TikTok channel snapshot / broad cute control
- Source URL or local file: https://www.tiktok.com/@officialpupcup/video/7249535821252955435
- Source surface: https://www.tiktok.com/channel/cute-small-dogs?lang=en
- Date collected: 2026-05-10
- Source/post date: unknown from accessible source
- Region/language: US target / English-facing caption
- Account/niche: `@officialpupcup`; puppy/small dog content
- Collector: TK Case Librarian
- Target hashtag: `#cutedog`

#### Source observations

- Caption observed: "Check out this tiny puppy!" with `#smallpuppy`, `#cutepuppy`, `#puppy`, `#puppiesoftiktok`, `#dogsoftiktok`, `#cutedog`, and `#smalldog`.
- Visible heat signal: 5,615 like-count surface; account surface showed 146.8K.
- Discussion signal observed: weak from caption; likely cute-reaction comments, raw comments unknown.
- CTA observed: "Check out" attention command.
- Metrics observed: likes 5,615 surface; views unknown; comments unknown; shares unknown; saves unknown.
- Persistent subject identity stable: unknown; could be one puppy, but visual verification unavailable.

#### Interpretation

- Content category: broad cute dog / puppy appeal.
- Audience motive: cuteness, puppy affection, low-effort browsing.
- Viewer tension or curiosity gap: minimal; tiny puppy reveal.
- Hook type: direct cute reveal.
- First 3 seconds: unknown; likely puppy closeup.
- Script structure: cute subject -> quick visual payoff.
- Filming method: likely phone closeup or reposted puppy clip, unverified.
- Shot sequence: unknown.
- Editing rhythm: likely simple, unverified.
- Music/audio role: unknown.
- On-screen text/caption style: caption-led.
- CTA and conversion path: no conversion path observed.
- Product/affiliate fit: low unless converted into puppy care routine or supply list.

#### Knowledge value

- Repeatable pattern: broad cute tags may work as control traffic but offer little reusable structure without a behavior hook.
- Supporting claims: `candidate_claim_pet_2026_05_10_005`
- Counterexample to: behavior-proof or community-advice pet formats.
- Risks: generic, low differentiation, identity unknown.
- Confidence: medium-low.
- Next test idea: use this as a control against a named-puppy routine clip with a sharper first-3-second question.

