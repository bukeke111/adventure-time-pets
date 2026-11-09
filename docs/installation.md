# Installation and local preview

This repository contains documentation, examples, and low-resolution previews. It does not include the complete Finn, Jake, and BMO character atlas.

## Requirements

- Git
- Python 3 for the local static server
- A browser with JavaScript enabled
- A sprite sheet that you own or have permission to use, if you want to run the examples with character art

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

The pages reference `assets/pixel-trio-spritesheet.png`. Create the `assets/` directory and place your authorized sprite sheet there, or change the path in the example. The expected v1 atlas size is 1536 × 1872 pixels with 192 × 208 pixel cells.

## Preview without a local atlas

Open `preview/pixel-trio-idle.gif` or the images in `preview/`. These low-resolution files are included to show the animation concept and the frame layout.

## Connecting another runtime

Use the row and frame table in [animation-states.md](./animation-states.md). A runtime should select one row for the current status, draw one 192 × 208 cell, and advance the frame index at a consistent interval.
