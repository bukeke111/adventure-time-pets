# Installation and local preview

This repository contains documentation, examples, a low-resolution GIF, and the complete 1536 × 1872 Finn, Jake, and BMO atlas at `assets/pixel-trio-spritesheet.png`. The atlas is third-party fan artwork.

## Requirements

- Git
- Python 3 for the local static server
- A browser with JavaScript enabled
- Permission to use or redistribute the included third-party character artwork in your context

## Clone the repository

```bash
git clone https://github.com/bukeke111/codex-adventure-time-pets.git
cd codex-adventure-time-pets
```

## Run the examples

Start a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Open these pages in a browser:

- `http://localhost:8000/examples/css-spritesheet.html`
- `http://localhost:8000/examples/canvas-spritesheet.html`

The pages reference the included `assets/pixel-trio-spritesheet.png`. Its v1 atlas size is 1536 × 1872 pixels with 192 × 208 pixel cells.

## Preview and asset terms

Open `preview/pixel-trio-idle.gif` for the low-resolution animation preview, or use the full atlas in `assets/` with the examples. Finn, Jake, BMO, and related artwork remain third-party material. The repository's MIT and CC BY licenses do not grant permission to reuse those characters.

## Connecting another runtime

Use the row and frame table in [animation-states.md](./animation-states.md). A runtime should select one row for the current status, draw one 192 × 208 cell, and advance the frame index at a consistent interval.
