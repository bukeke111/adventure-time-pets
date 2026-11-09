# Sprite animation states

The current Codex pet atlas uses 8 columns and 9 rows. Rows are read from top to bottom. The frame counts below describe the populated cells in the current v1 atlas.

| Row | State | Frames | Intended feedback |
| ---: | --- | ---: | --- |
| 0 | `idle` | 6 | Calm breathing and waiting loop |
| 1 | `running-right` | 8 | Moving toward the right |
| 2 | `running-left` | 8 | Moving toward the left |
| 3 | `waving` | 4 | Greeting or acknowledging the user |
| 4 | `jumping` | 5 | Positive transition or celebration |
| 5 | `failed` | 8 | Error, failure, or blocked task |
| 6 | `waiting` | 6 | Waiting for input or an external step |
| 7 | `running` | 6 | Work in progress |
| 8 | `review` | 6 | Reviewing or checking a result |

## Playback guidance

Use a fixed cell size of 192 × 208 pixels. Advance frames from left to right within one row, then loop the row. Keep the same scale and baseline across frames to avoid visual popping. A state change should switch rows while preserving the current display scale.

The public GIF preview shows the six-frame `idle` row at half cell size. The complete character atlas remains outside the public repository because it contains third-party characters and artwork.

## State previews

Open each GIF to inspect the corresponding sequence:

| State | Preview |
| --- | --- |
| `idle` | [idle.gif](../preview/states/idle.gif) |
| `running-right` | [running-right.gif](../preview/states/running-right.gif) |
| `running-left` | [running-left.gif](../preview/states/running-left.gif) |
| `waving` | [waving.gif](../preview/states/waving.gif) |
| `jumping` | [jumping.gif](../preview/states/jumping.gif) |
| `failed` | [failed.gif](../preview/states/failed.gif) |
| `waiting` | [waiting.gif](../preview/states/waiting.gif) |
| `running` | [running.gif](../preview/states/running.gif) |
| `review` | [review.gif](../preview/states/review.gif) |
