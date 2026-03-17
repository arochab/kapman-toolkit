# CLAUDE.md — KAPMAN Studio Project Memory

## Mission
Turn KAPMAN Studio into a premium static web app for music production decisions: plugin selection, sound design stacks, mix checks, and finishing workflows. Private-access, deployable on GitHub Pages with zero backend.

## Architecture
- **3 files**: `index.html`, `styles.css`, `app.js`
- **No build step**. Plain HTML/CSS/JS.
- **No external dependencies** except Google Fonts (DM Sans, Instrument Serif).
- **No assets folder needed** — logo is rendered as a CSS div with letter "K".

## Password Gate
- **Single constant**: `const PASSWORD = "kapman"` → line 1 of `app.js`
- **localStorage key**: `kapman-gate` → value `"ok"` when authenticated
- **To reset access**: clear `kapman-gate` from localStorage, or use incognito
- **NEVER** duplicate the password string anywhere else

## State Management
| Key | localStorage key | Values | Default |
|-----|-----------------|--------|---------|
| Language | `kapman-lang` | `en` \| `fr` | `en` |
| Theme | `kapman-theme` | `dark` \| `light` | `dark` |
| Gate | `kapman-gate` | `ok` \| absent | absent |

No other hidden state. No sessionStorage. No cookies.

## UI/UX Rules
1. DM Sans for body, Instrument Serif for display headlines
2. Dark-mode-native. Light mode is secondary but must work
3. One dominant focal area per screen
4. No repeated card patterns that all look identical
5. Vendor monograms use colored squares, not fake logos
6. Fewer clicks > more sections
7. Page transitions use subtle fadeUp animation
8. Glass panels: surface + border + backdrop-filter blur
9. Mobile: sidebar becomes slide-out drawer with overlay

## Content Rules
- All plugin data must reference plugins Adam actually owns (see Kapman_s_vsts)
- Recipes must use real plugin names with real parameter values
- Stop rules on every recipe
- Never claim Mix Check does mastering — it measures, suggests, nothing more
- Never present unverified plugin features as fact

## Vendor Scope (verified in app)
FabFilter, D16, Eventide, Xfer, Baby Audio, u-he, Arturia, Valhalla DSP, iZotope, Cableguys, Devious Machines, KORG

## Deploy
```bash
# From repo root:
git add index.html styles.css app.js CLAUDE.md
git commit -m "v4 redesign"
git push
# GitHub Pages serves from main branch root
```

## Sanity Checklist (before every push)
- [ ] Password exists only once in app.js line 1
- [ ] Gate blocks access until correct password
- [ ] EN/FR toggle works on all visible text
- [ ] Dark/Light toggle works everywhere
- [ ] No dead nav links
- [ ] No broken asset references
- [ ] Mobile sidebar opens/closes correctly
- [ ] Mix Check does not overclaim
- [ ] All plugins reference real owned products

## Never-Repeat Mistakes
1. Do NOT duplicate the password constant
2. Do NOT reference assets/kapman-mark.svg (we use CSS-only logo now)
3. Do NOT add a Focus mode that hides critical UI without clear value
4. Do NOT use Inter or system fonts — use DM Sans
5. Do NOT create glass cards that all look the same size/shape
6. Do NOT add vendors/plugins the user doesn't own without marking them
7. Do NOT create build steps or require npm
8. Do NOT use localStorage for anything besides the 3 documented keys

## Token Discipline
- Inspect before rewriting
- Reuse working data, replace weak shells
- No filler text in responses
- No giant essay explanations
- Prefer concise implementation notes
