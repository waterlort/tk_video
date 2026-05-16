# Visual identity lock protocol

Date created: 2026-05-10

Status: required production guardrail

Reason: the pet demo storyboard produced inconsistent dog appearances across frames. This is a high-severity production failure because short-form video trust depends on the viewer recognizing the same subject across cuts.

## Principle

Before generating static storyboards, video prompts, motion prompts, or final video, the system must define how many persistent subjects exist and lock their visual identity.

Do not proceed to final storyboard or video generation until a subject identity bible exists.

## Required identity bible

For every persistent subject, record:

- Subject ID: stable name such as `dog_01`, `owner_01`, `product_01`, `room_01`.
- Role: protagonist, secondary person, product, location, recurring prop, overlay device.
- Must-stay traits: size, age range, body type, color palette, markings, clothing, accessories, silhouette, texture, material, brand/no-brand constraints.
- Variable traits: pose, camera angle, expression, lighting, distance, allowed movement.
- Forbidden drift: traits that must not change between shots.
- Reference source: approved still frame, source image, generated frame, or text-only identity spec.

For pets, include at minimum:

- species and apparent breed/mix,
- size,
- coat length and texture,
- exact coat color distribution and markings,
- ear shape,
- eye color,
- collar/accessory,
- unique visible identifier,
- forbidden breed/color/marking changes.

For products, include at minimum:

- shape,
- dimensions/aspect,
- material,
- color,
- logo/label policy,
- repeated placement rules,
- forbidden packaging or brand drift.

For locations, include at minimum:

- layout,
- key furniture/objects,
- wall/floor color,
- lighting state,
- camera geography,
- forbidden room swaps.

## Prompt rules

Every per-shot image or video prompt must repeat the identity anchors for all persistent subjects visible in that shot.

When the tool supports image references, seed images, frame references, or character references, use the approved reference for the persistent subject. If the tool does not support references, state the risk and produce prompt packs only unless the user accepts the risk.

The first approved frame should become the reference image for later frames when possible.

## Review gate

A storyboard or video pack fails review if any persistent subject changes identity:

- different apparent breed/species/person/product,
- changed coat or skin color,
- changed markings,
- changed outfit/accessory when not scripted,
- changed object shape or logo,
- changed room geometry,
- changed subject count,
- impossible body/anatomy drift,
- inconsistent age or scale.

The reviewer should reject the asset even if the story logic, hooks, and prompts are otherwise strong.

## Agent responsibility

- Planner: define subject count and identity bible before requesting static or motion work.
- Static image agent: generate frames against the identity bible and reject/regenerate inconsistent frames.
- Motion/video agent: preserve identity anchors in every shot prompt and use references when possible.
- Reviewer: score identity consistency as a blocking requirement.
- TK judge: treat identity drift as a production-chain failure, not merely an aesthetic issue.

## Knowledge status

This is a process guardrail, not a viral-performance claim. It does not say identity-consistent videos will become hot. It says identity drift invalidates a generated video plan as production-ready evidence.
