# Blind pilot candidate set 2026-05-09

## Sample set identity

- Sample set ID: `blind_pilot_2026_05_09_candidate_001`
- Evidence pass: TK Case Librarian, issue `ULT-90`, 2026-05-09
- Region/language: US / English-facing TikTok
- Niche/category focus: mixed UGC, app marketing, clipping, education, fitness, beauty, finance, entertainment
- Source pool:
  - Lightreel Viral UGC Trends, published/updated 2026-05-07
  - Lightreel Clipping Content Marketing on TikTok, published/updated 2026-05-07
- Collection method: source-stratified candidate audit, not a locked blind prediction set
- Sample size: 30
- Knowledge snapshot: `TAXONOMY_V0.md` + `reviewed_claims_2026-05-09.md`
- Assigned judge: `tk-viral-judge`
- Assigned explainer: `tk-content-explainer`

## Current verdict

Not ready for prediction lock.

This file is safe for TK Case Librarian and TK Viral Judge only. Do not give it to TK Content Explainer because it contains source URLs, creator handles, and judge/source control notes.

Use `knowledge_base/predictions/blind_pilot_2026-05-09_feature_packets.md` as the only explainer-visible artifact if the set is used for a dry run. That file is scrubbed of URLs, handles, metrics, follower counts, source-page winner language, and outcome-derived labels.

## Evidence collection notes

- Date collected/audited: 2026-05-09T14:44Z
- Issue attachments matched the local files by checksum before editing.
- Direct `tiktok.com` page verification from the agent network was inconclusive: page fetch and oEmbed attempts failed with connection reset/timeouts.
- Lightreel embedded evidence was accessible: 29 video assets and 1 photo cover asset returned HTTP 200 from the article storage layer.
- Post dates below are derived from TikTok numeric post IDs by timestamp decode. Treat them as visible-date proxies until confirmed on TikTok.
- Source article context was used to correct several v0 category errors:
  - `002` is a PSL face/score reveal, not an AI prank.
  - `004` is a Her 75 fitness transformation, not an AI prank.
  - `010` is a Halo AI fake-tattoo prank, not a fitness transformation.
  - `015` is a Menace AI fake-disaster prank.

## Diversity and leakage audit

- Creator diversity: pass. The set has 28 distinct creator/account handles; the only repeated accounts are `isakclipssz` and `rojzkenji` with 2 rows each.
- Category diversity: pass at a broad level. Categories include alarm/app challenge, AI prank, scan/score reveal, fitness transformation, language learning, study/exam, clipping tutorial, clipping economy, finance/podcast clip, streamer clip, sports/referee, beauty/product, and entertainment.
- Source concentration: fail. The set is 15/30 from one Lightreel UGC article and 15/30 from one Lightreel clipping article. This is above the requested 30% ceiling for a single source family.
- Format concentration: fail. Clipping/clipping-economy rows are 15/30, above the 30% ceiling unless the run is explicitly declared trend-specific.
- Outcome balance: fail. There are no verified true cold/ordinary examples. Several rows have unknown exact outcomes, but unknown is not the same as cold.
- Leakage status: candidate control sheet and sealed manifest remain judge-only. Feature packets were rebuilt with direct-observation and interpretation fields separated.

## Candidate rows

| Sample ID | Judge/source ref | Source type | Visible/post date proxy | Date collected | Creator/account judge-only | Explainer artifact ref | Corrected category/context | Direct TikTok status | Article media status | Outcome status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| blind_us_2026_05_09_001 | https://www.tiktok.com/@biancawakesup/video/7635814082850884884 | TikTok video | 2026-05-03 23:38:27 UTC | 2026-05-09 | biancawakesup | `feature_packet_001` | alarm app / performative distress challenge | not verified from agent network | HTTP 200 video asset | exact rounded views + engagement from source | Daily alarm-object challenge. |
| blind_us_2026_05_09_002 | https://www.tiktok.com/@cetonell/video/7634893011335351572 | TikTok video | 2026-05-01 12:04:14 UTC | 2026-05-09 | cetonell | `feature_packet_002` | PSL face rating / scan-score reveal | not verified from agent network | HTTP 200 video asset | range only | Corrected from v0 AI-prank label. |
| blind_us_2026_05_09_003 | https://www.tiktok.com/@chloemeetscelebs/video/7635140599359802632 | TikTok video | 2026-05-02 04:05:00 UTC | 2026-05-09 | chloemeetscelebs | `feature_packet_003` | AI celebrity fake-media prank | not verified from agent network | HTTP 200 video asset | unknown exact | Fake celebrity/shop encounter sent to boss. |
| blind_us_2026_05_09_004 | https://www.tiktok.com/@errobweuc0t/video/7634575162683165982 | TikTok video | 2026-04-30 15:30:49 UTC | 2026-05-09 | errobweuc0t | `feature_packet_004` | fitness transformation / Her 75 sound format | not verified from agent network | HTTP 200 video asset | exact rounded views + engagement from source | Corrected from v0 AI-prank label. |
| blind_us_2026_05_09_005 | https://www.tiktok.com/@jizelalovesskincare/video/7634612444991655181 | TikTok video | 2026-04-30 17:55:29 UTC | 2026-05-09 | jizelalovesskincare | `feature_packet_005` | skincare scan / score reveal | not verified from agent network | HTTP 200 video asset | account-level repeat outcome only | Row-level exact metrics still missing. |
| blind_us_2026_05_09_006 | https://www.tiktok.com/@kalash.psl/video/7634832304304622866 | TikTok video | 2026-05-01 08:08:39 UTC | 2026-05-09 | kalash.psl | `feature_packet_006` | PSL face rating / aesthetic montage | not verified from agent network | HTTP 200 video asset | format range only | Row-level exact metrics still missing. |
| blind_us_2026_05_09_007 | https://www.tiktok.com/@quis.jamz/video/7634932801158073631 | TikTok video | 2026-05-01 14:38:38 UTC | 2026-05-09 | quis.jamz | `feature_packet_007` | AI music / text-to-song | not verified from agent network | HTTP 200 video asset | exact rounded views from source | Early-format medium example, not cold. |
| blind_us_2026_05_09_008 | https://www.tiktok.com/@reviewsbykeri/video/7634525942408285470 | TikTok video | 2026-04-30 12:19:49 UTC | 2026-05-09 | reviewsbykeri | `feature_packet_008` | grocery scanner / score reveal | not verified from agent network | HTTP 200 video asset | unknown exact | Oasis scanner format; row metrics missing. |
| blind_us_2026_05_09_009 | https://www.tiktok.com/@reviewswithmia/video/7634555983271906590 | TikTok video | 2026-04-30 14:16:23 UTC | 2026-05-09 | reviewswithmia | `feature_packet_009` | grocery scanner / score reveal | not verified from agent network | HTTP 200 video asset | exact rounded views + follower baseline from source | Medium-hot source example. |
| blind_us_2026_05_09_010 | https://www.tiktok.com/@sammyish1m/video/7635399294207397133 | TikTok video | 2026-05-02 20:48:52 UTC | 2026-05-09 | sammyish1m | `feature_packet_010` | AI fake-tattoo prank | not verified from agent network | HTTP 200 video asset | unknown exact | Corrected from v0 fitness label. |
| blind_us_2026_05_09_011 | https://www.tiktok.com/@violla.praktika/video/7635594789810949398 | TikTok video | 2026-05-03 09:27:29 UTC | 2026-05-09 | violla.praktika | `feature_packet_011` | GRWM language learning | not verified from agent network | HTTP 200 video asset | unknown exact | Hair rollers plus Italian tutor interaction. |
| blind_us_2026_05_09_012 | https://www.tiktok.com/@blairstudycorner/video/7635307687470763272 | TikTok video | 2026-05-02 14:53:23 UTC | 2026-05-09 | blairstudycorner | `feature_packet_012` | exam affirmation / student urgency | not verified from agent network | HTTP 200 video asset | exact rounded views + engagement from source | Exam-season study app content. |
| blind_us_2026_05_09_013 | https://www.tiktok.com/@lj.rae/video/7636136599343992087 | TikTok video | 2026-05-04 20:29:59 UTC | 2026-05-09 | lj.rae | `feature_packet_013` | exam-season urgency / study app content | not verified from agent network | HTTP 200 video asset | exact rounded views from source | Exact app/context still needs direct extraction. |
| blind_us_2026_05_09_014 | https://www.tiktok.com/@elliottm826/video/7634578931009572110 | TikTok video | 2026-04-30 15:45:26 UTC | 2026-05-09 | elliottm826 | `feature_packet_014` | fitness transformation / Her 75 sound format | not verified from agent network | HTTP 200 video asset | exact rounded views + engagement from source | Same sound/format family as 004. |
| blind_us_2026_05_09_015 | https://www.tiktok.com/@kingspranks/video/7635998916844047638 | TikTok video | 2026-05-04 11:35:42 UTC | 2026-05-09 | kingspranks | `feature_packet_015` | AI fake-disaster prank | not verified from agent network | HTTP 200 video asset | unknown exact | Fake toddler sidewalk-crack disaster sent to wife. |
| blind_us_2026_05_09_016 | https://www.tiktok.com/@isakclipssz/video/7613815156916735262 | TikTok video | 2026-03-05 16:51:23 UTC | 2026-05-09 | isakclipssz | `feature_packet_016` | clipping tutorial / Whop payout walkthrough | not verified from agent network | HTTP 200 video asset | exact rounded views + engagement range from source | Older March reference in clipping article. |
| blind_us_2026_05_09_017 | https://www.tiktok.com/@rojzkenji/video/7628952459578412306 | TikTok video | 2026-04-15 11:51:51 UTC | 2026-05-09 | rojzkenji | `feature_packet_017` | clipping contrarian / lifestyle proof | not verified from agent network | HTTP 200 video asset | exact rounded views from source | "Clipping is dead" contrarian angle. |
| blind_us_2026_05_09_018 | https://www.tiktok.com/@rojzkenji/video/7628961058417282312 | TikTok video | 2026-04-15 12:25:13 UTC | 2026-05-09 | rojzkenji | `feature_packet_018` | clipping advice / low-competition niche | not verified from agent network | HTTP 200 video asset | unknown exact | Same creator as 017; outcome needed. |
| blind_us_2026_05_09_019 | https://www.tiktok.com/@financeclips_/video/7636086580368674062 | TikTok video | 2026-05-04 17:15:53 UTC | 2026-05-09 | financeclips_ | `feature_packet_019` | finance/podcast clip | not verified from agent network | HTTP 200 video asset | rounded source outcome only | Source says both finance examples cleared 2M+. |
| blind_us_2026_05_09_020 | https://www.tiktok.com/@financial_clips_/video/7636075624536231199 | TikTok video | 2026-05-04 16:33:22 UTC | 2026-05-09 | financial_clips_ | `feature_packet_020` | finance/podcast clip | not verified from agent network | HTTP 200 video asset | rounded source outcome only | Source says both finance examples cleared 2M+. |
| blind_us_2026_05_09_021 | https://www.tiktok.com/@thatrandomclipper0/video/7636263984215215382 | TikTok video | 2026-05-05 04:44:18 UTC | 2026-05-09 | thatrandomclipper0 | `feature_packet_021` | streamer clipping / reaction angle | not verified from agent network | HTTP 200 video asset | exact rounded views from source | Clavicular clip with dramatic zoom/reaction angle. |
| blind_us_2026_05_09_022 | https://www.tiktok.com/@badboyclipz0/video/7628777571077098783 | TikTok video | 2026-04-15 00:33:12 UTC | 2026-05-09 | badboyclipz0 | `feature_packet_022` | streamer clipping / wholesome-drama angle | not verified from agent network | HTTP 200 video asset | exact rounded views from source | Clavicular clip with soft music and pet/dog moment. |
| blind_us_2026_05_09_023 | https://www.tiktok.com/@wardoclip/video/7626959037464055053 | TikTok video | 2026-04-10 02:56:21 UTC | 2026-05-09 | wardoclip | `feature_packet_023` | streamer highlight clip | not verified from agent network | HTTP 200 video asset | exact rounded views from source | Clavicular highlight with strong text hook. |
| blind_us_2026_05_09_024 | https://www.tiktok.com/@tjrmindset/video/7629751287797665037 | TikTok video | 2026-04-17 15:31:43 UTC | 2026-05-09 | tjrmindset | `feature_packet_024` | trading streamer clip / clipping program | not verified from agent network | HTTP 200 video asset | account baseline/payout context only | Row-level views missing. |
| blind_us_2026_05_09_025 | https://www.tiktok.com/@mac_tray/video/7635331067297221918 | TikTok video | 2026-05-02 16:24:06 UTC | 2026-05-09 | mac_tray | `feature_packet_025` | N3on streamer clip | not verified from agent network | HTTP 200 video asset | creator/program context only | Row-level views missing. |
| blind_us_2026_05_09_026 | https://www.tiktok.com/@refereeclark/video/7633465418702769421 | TikTok video | 2026-04-27 15:44:26 UTC | 2026-05-09 | refereeclark | `feature_packet_026` | Jestr/gameplay creator payout proof | not verified from agent network | HTTP 200 video asset | payout baseline only | Not a standard clipping clip; useful boundary case. |
| blind_us_2026_05_09_027 | https://www.tiktok.com/@jestr.gg/photo/7636131603063786759 | TikTok photo | 2026-05-04 20:10:36 UTC | 2026-05-09 | jestr.gg | `feature_packet_027` | gaming/clipping marketplace photo post | not verified from agent network | HTTP 200 cover asset | platform CPM/cap context only | Photo/carousel row; no video asset in article. |
| blind_us_2026_05_09_028 | https://www.tiktok.com/@makeup.and.skinca337/video/7636599968895094046 | TikTok video | 2026-05-06 02:28:06 UTC | 2026-05-09 | makeup.and.skinca337 | `feature_packet_028` | Relay templated beauty/product ad | not verified from agent network | HTTP 200 video asset | unknown exact | Useful counterexample candidate for mass-templated content. |
| blind_us_2026_05_09_029 | https://www.tiktok.com/@cmbboys/video/7636245030620941581 | TikTok video | 2026-05-05 03:30:45 UTC | 2026-05-09 | cmbboys | `feature_packet_029` | Clipster entertainment/streamer clipper account | not verified from agent network | HTTP 200 video asset | account-level total only | Row-level exact metrics missing. |
| blind_us_2026_05_09_030 | https://www.tiktok.com/@1percent704/video/7635967981788466453 | TikTok video | 2026-05-04 09:35:40 UTC | 2026-05-09 | 1percent704 | `feature_packet_030` | ClipHaus aspirational recruiting content | not verified from agent network | HTTP 200 video asset | unknown exact | Useful red-flag/counterexample candidate. |

## Replacement log

No rows were replaced in this pass. The minimum evidence needed to select true cold/ordinary replacements is unavailable from the current two source articles and could not be collected from direct TikTok access in this run.

Recommended replacement rule before prediction lock:

- Replace at least 8 rows from the clipping-heavy half with ordinary/cold TikTok posts collected from non-winner surfaces.
- Keep no source family, format family, trend, or sound above 9/30.
- For each replacement, capture direct URL, decoded/visible post date, creator context, caption/on-screen text, exact views/likes/comments/shares/saves or an archived outcome snapshot, and follower baseline or a documented substitute.

## Ready-gate gaps

- Direct TikTok accessibility and current metrics remain unverified from this environment.
- Exact row-level outcome metrics are missing or only rounded/ranged for more than half the rows.
- No true cold/ordinary examples are validated.
- Source and format concentration exceed the requested anti-overfit ceiling.
- Raw comments, shares, saves, CTA text, and direct first-3-second transcripts are still missing for most rows.
