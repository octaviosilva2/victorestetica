

## Plan: Visual Identity Update (Colors + Typography)

### Summary
Update the site's color palette from champagne gold to the brand's green (#6D7C71) and swap typography from Playfair Display to LUXERIE for headings, while keeping Inter for body text. No structural or layout changes.

### Technical Changes

**1. Typography — Load LUXERIE font**

In `src/index.css`, replace the Google Fonts import for Playfair Display with a CDNFonts import for LUXERIE:
```
@import url('https://fonts.cdnfonts.com/css/luxerie');
```
Keep Inter from Google Fonts. Update the heading font-family rule from `'Playfair Display'` to `'Luxerie'`.

In `tailwind.config.ts`, update `fontFamily.serif` to `["Luxerie", "Georgia", "serif"]`.

**2. Color Palette — Update CSS variables**

In `src/index.css` `:root`, convert the brand colors to HSL and apply:

| Token | Current (gold) | New value |
|---|---|---|
| `--primary` | `36 45% 70%` | `144 7% 46%` (#6D7C71) |
| `--accent` | `36 45% 70%` | `144 7% 46%` |
| `--ring` | `36 45% 70%` | `144 7% 46%` |
| `--background` | `0 0% 100%` | `0 0% 88%` (#E0E0E0) |
| `--background-subtle` | `30 10% 97%` | `0 0% 92%` |
| `--card` | `0 0% 100%` | `0 0% 93%` |
| `--secondary` | `30 10% 95%` | `0 0% 90%` |
| `--muted` | `30 10% 96%` | `0 0% 91%` |
| `--border` | `30 15% 90%` | `0 0% 82%` |
| `--input` | `30 15% 90%` | `0 0% 82%` |

Also update the `.dark` theme block with equivalent shifts.

Update the scrollbar thumb color (already uses `--primary`, so automatic).

**3. Files to modify**

- `src/index.css` — Font import + CSS variables + heading font-family
- `tailwind.config.ts` — Font family definition

No component files need changes since they all reference CSS variables and Tailwind tokens.

