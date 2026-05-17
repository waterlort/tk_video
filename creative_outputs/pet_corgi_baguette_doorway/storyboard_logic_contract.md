# Storyboard logic contract: Mochi doorway baguette

## Purpose

This file fixes the storyboard-logic failure from the first generated storyboard sheet. The prior sheet preserved a recognizable dog and prop, but it did not clearly show the causal sequence. Panels 1-3 repeated a similar front-facing dog pose instead of showing approach, collision, and reset.

Any future static storyboard, prompt pack, or generated sheet for this concept must follow this contract.

## Core Cause-Effect Sentence

Mochi wants to carry a long plush baguette through a narrow doorway; the horizontal toy hits both sides of the doorframe; Mochi refuses to drop it, backs up, rotates the toy diagonally, squeezes through, and looks back proudly.

## Required Six-State Grammar

| Panel | State | Required visual evidence | Reject if |
| --- | --- | --- | --- |
| 1 | Approach before contact | Mochi is on the room side, moving toward the doorway; plush baguette is horizontal and obviously wider than the opening; no collision yet. | Mochi is already centered in the doorway with no approach motion. |
| 2 | Collision/contact | Both plush baguette ends visibly touch or compress against the white doorway trim; Mochi pauses but keeps holding it. | The toy floats in front of the doorway or only one side touches. |
| 3 | Failed attempt/reset | Mochi has backed up or shifted paws away from the trim; toy remains horizontal; failure is readable. | Panel repeats the same pose as panel 2. |
| 4 | Strategy change | Mochi tilts the toy diagonally; toy angle is clearly different from panels 1-3. | Toy is still horizontal or the panel only changes camera angle. |
| 5 | Crossing | Mochi is partly through the threshold; diagonal toy clears the trim; body and prop visibly cross the doorway. | Mochi is still blocked or already fully finished. |
| 6 | Aftermath/lookback | Mochi is fully on the hallway side, toy still in mouth, looking back proudly at the doorway. | Mochi remains in the doorway or the toy disappears. |

## Spatial Continuity

- The same narrow white doorway must stay fixed across all panels.
- The room side and hallway side must be readable.
- The sage mat and light oak floor may help orient the viewer, but must not distract.
- The toy must not shrink to make the passage easy.
- The final panel must prove Mochi is on the other side.

## Identity Continuity

Use `subject_identity_bible.md`.

Mochi must remain:

- small adult tan-and-white corgi mix;
- white lightning blaze;
- right ear upright, left ear folded tip;
- aqua collar with brass tag;
- playful and calm, not distressed.

The toy must remain:

- oversized plush baguette;
- pale golden fabric;
- soft rounded ends;
- three darker stitched diagonal crust marks;
- not real bread, not a stick, not a bone.

## Prompting Rule

Any image prompt for a 6-panel sheet must say:

```text
Do not repeat the same front-facing dog pose across panels. Each panel must show a different action state and a different toy-doorway relationship: approach, collision, reset, diagonal strategy, crossing, aftermath.
```

## Review Rule

Reject the sheet if:

- the first 2-second proof is unclear;
- panel 2 does not show both toy ends hitting the doorway;
- panel 3 does not show a real reset/back-up;
- panel 4 does not change toy angle;
- panel 5 does not show threshold crossing;
- panel 6 does not show aftermath on the hallway side;
- dog identity, toy identity, or doorway geography drifts.
