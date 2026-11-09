# Codex Adventure Time Pets

**An unofficial Adventure Time pixel companion for Codex.**

Bring Finn, Jake, and BMO to your coding workspace with expressive frame-by-frame animations and interactive reactions to your Codex workflow.

### Features

- **Finn, Jake & BMO** — Three familiar characters brought together as a pixel-art companion squad.
- **Rich Sprite Animations** — Detailed frame-by-frame movement, expressions, and character reactions.
- **Expressive Status Feedback** — Sprite states cover coding, waiting, review, failure, movement, and task completion moments.
- **Pixel-Art Aesthetic** — A cohesive retro animation style inspired by *Adventure Time*.

### Dynamic demo

![Pixel Trio idle animation](./preview/pixel-trio-idle.gif)

The GIF is a low-resolution preview of the idle row. The full character sprite sheet is kept outside this public repository.

### Disclaimer

This is an unofficial, fan-made project and is not affiliated with, sponsored by, or endorsed by the creators or rights holders of *Adventure Time* or by OpenAI.

Finn, Jake, BMO, and *Adventure Time* belong to their respective rights holders. This project does not claim ownership of these characters.

Any license applied to the original source code does not grant permission to reuse third-party characters or artwork.

## Inspiration and attribution

*Adventure Time* was created by Pendleton Ward. The project began as a Frederator Studios short and later became a Cartoon Network series.

- [Frederator Studios introduction to Adventure Time](https://frederatorstudios.com/shows/adventure-time/)
- [Warner Bros. Discovery official material](https://press.wbd.com/us/media-release/hbo-max/hbo-max-orders-four-adventure-time-distant-lands-specials-cartoon-network-studios)
- [Cartoon Network trademark notice](https://www.cartoonnetwork.com/legal/trademark.html?atclk_gn=un_community)

## Repository contents

- `preview/` contains low-resolution previews, including the animated idle demo.
- `docs/sprite-layout.md` documents the 8 × 9 sprite atlas layout.
- `docs/animation-states.md` documents the nine available animation rows and their populated frame counts.
- `docs/installation.md` explains how to preview the examples and connect a local sprite sheet.
- `examples/css-spritesheet.html` demonstrates CSS background positioning.
- `examples/canvas-spritesheet.html` demonstrates Canvas frame drawing.

## Installation and local preview

See [docs/installation.md](./docs/installation.md) for the complete setup. The shortest path is:

```bash
git clone https://github.com/bukeke111/codex-adventure-time-pets.git
cd codex-adventure-time-pets
python3 -m http.server 8000
```

Then open the CSS or Canvas example at `http://localhost:8000/examples/`.

The examples expect a local file at `assets/pixel-trio-spritesheet.png`. The complete character atlas is not distributed in this repository. Replace that path with a sprite sheet you have permission to use, or use the preview GIF to inspect the published demo.

## Licenses

- Example source code is released under the [MIT License](./CODE_LICENSE.md).
- Documentation is released under [CC BY 4.0](./LICENSE).
- The *Adventure Time* characters and related artwork are excluded from those licenses.
