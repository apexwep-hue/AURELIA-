# Aurelia Vance Atelier — Luxury Artistic Portfolio Website Template

A premium, museum-inspired, zero-dependency HTML5/CSS3/Vanilla JS portfolio template designed for fine artists, painters, sculptors, photographers, and high-end atelier studios.

---

## Quick Start & Customization

All personal details, colors, social links, and artwork entries are completely centralized inside `js/data.js`. **You never need to search through raw HTML files to edit standard client details.**

### 1. How to Change Colors & Palette
Open `js/data.js` and locate `SITE_CONFIG.colors`:

```javascript
colors: {
  primaryBg: "#121212",       // Main background color
  secondaryBg: "#191817",     // Card and secondary background
  accentGold: "#c5a059",      // Primary luxury brand gold
  accentGoldHover: "#dfb76c", // Hover states
  textMain: "#f4f1ea",        // Body font color
  textMuted: "#a39f97"        // Subtitles and captions
}