# Simple Kiosk Presentation Tool

> **Looking for the German version?** / **Suchen Sie die deutsche Anleitung?** > 📄 [Zur deutschen Dokumentation (README_DE.md)](README_DE.md)

A minimalist, web-based kiosk presentation system designed for information screens, exhibitions, and events.

## Why this project?
This tool was developed to provide a lightweight, low-maintenance alternative to complex kiosk software. It allows users to quickly and easily update content (texts and images) without requiring a server infrastructure, Content Management Systems (CMS), or programming skills. The system is designed for maximum ease of use.

## Key Features
- **100% Offline-Capable:** No internet connection or external server requests needed – perfect for standalone presentation PCs.
- **Simple Configuration:** Content management is centralized within a single, clean configuration file (`config.js`).
- **Zero Installation:** Runs directly via double-click in any modern web browser.
- **Smart Stacking:** Dynamic, time-controlled revealing of image stacks for engaging presentations.
- **Flexible Layouts:** Optional `"layout": "center"` for projects without a before/after story — all images reveal in a centered stack.
- **Smart Image Adaptation:** Automatically detects portrait and landscape formats to ensure perfect, distortion-free display on kiosk screens.

## Project Configuration

Each project in `config.js` has a `title`, `description`, and an `images` array. For slides with multiple images, the first image is shown on the left by default while the rest reveal in a stack on the right (before/after layout).

To show all images in a centered stack instead — useful for step-by-step projects without a clear "before" photo — add the optional field:

```js
"layout": "center",
```

See the "Die neue Leinwand" project in `config.js` for a working example. Single-image slides are unaffected.

## Structure
- `index.html` - The main entry point (open in any browser)
- `app.js` - The presentation logic
- `style.css` - The layout and modern/classic themes
- `config.js` - The centralized configuration file for your data
- `ANLEITUNG.txt` - A simple, non-technical setup guide for end-users (in German)