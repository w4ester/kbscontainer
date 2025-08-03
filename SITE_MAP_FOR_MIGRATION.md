# CyberUXcellence Awards - Site Map for Migration
## Phase 3: Winners Version (August 6, 2025)

This document lists all files needed to migrate the complete Phase 3 winners version to a dummy GitHub repository for testing.

---

## 📁 ROOT FILES
```
index.html                           # Main HTML file with winners section
KBS_Review_Questions_August3.md      # Client review questions (optional)
```

---

## 📁 CSS FILES (`/css/`)
```
about.css                   # About section styles
additional-fixes.css        # Additional style fixes
blog.css                   # Blog styles
categories.css             # Categories section styles
faq.css                    # FAQ section styles
footer.css                 # Footer styles
global.css                 # Global styles and variables
hero.css                   # Hero section styles
judges-optimized.css       # Optimized judges styles
judges-popup.css           # Judge popup modal styles
judges.css                 # Judges section styles
judgesAnnounced.css        # Judges announced styles
sponsorship.css            # Sponsorship section styles
timeline.css               # Timeline section styles
why.css                    # Why Nominate section styles
winners-home.css           # Winners section styles ⭐ NEW
winners.css                # Winners page styles
```

---

## 📁 JAVASCRIPT FILES (`/js/`)
```
about.js                   # About section logic
analytics.js               # Analytics tracking
blog.js                    # Blog functionality
categories.js              # Categories section logic
categoriesoldcopy.js       # Old categories backup
faq.js                     # FAQ section logic
hero.js                    # Hero section logic
hubspot-form.js            # HubSpot form integration
judges-interest.js         # Judge interest section ⭐ NEW
judges-popup.js            # Judge popup functionality
judges.js                  # Judges section logic
judgesAnnounced.js         # Judges announced logic
main.js                    # Main orchestrator ⭐ MODIFIED
sponsorship.js             # Sponsorship section logic
timeline.js                # Timeline section logic
why.js                     # Why Nominate logic ⭐ MODIFIED
winners-home.js            # Winners home logic
winners.js                 # Winners section logic ⭐ NEW
```

---

## 📁 ASSETS FILES (`/assets/`)

### Essential Images (`/assets/images/`)
```
favicon.ico
LinkedIn.svg
linkedinIcon.svg
newuxcellenceorangeuse.svg
newuxcellenceorangeuseclean.svg
useMindgrubLogoFooter.svg
heroShield.svg
heroShieldSolid.svg
trophy-icon.svg
shield-ux-icon.svg
```

### Category Icons - Purple (`/assets/images/purpleSVG/`)
```
best_mobile_security_ux_purple.svg
best_overall_ux_cybersecurity_purple.svg
best_use_of_data_visulaization_purple.svg
most_accessibile_design_purple.svg
most_intuitive_user_interface_purple.svg
```

### Winner Company Logos ⭐ NEW (`/assets/images/LogosCyberUXcellenceSubmissons2025/`)
```
Beyond Identity Logo.svg
Dataminr Logo.png
Pixee Logo (1).svg
RedSeal Logo.png
SOCRadar Logo 2 (1).svg
```

### Judge Headshots (`/assets/Judges Headshots/`)
```
judges_alicia_blacksvg_popupimage.svg
judges_damian_blacksvg_popupimage.svg
judges_malcom_blacksvg_popupimage.svg
judges_megan_blacksvg_popupimage.svg
judges_michael_blacksvg_popupimage.svg
judges_nick_blacksvg_popupimage.svg
judges_patricia_blacksvg_popupimage.png
judges_peter_blacksvg_popupimage.svg
judges_rinki_blacksvg_popupimage.svg
judges_ron_blacksvg_popupimage.svg
judges_troy_blacksvg_popupimage.svg
judgesBioicon.svg
```

### Favicon Files (`/assets/images/favicon_io/`)
```
android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
favicon-16x16.png
favicon-32x32.png
favicon.ico
site.webmanifest
```

---

## 🚨 CRITICAL NOTES FOR MIGRATION

1. **Complete Folder Migration**: Copy the ENTIRE `use_this_as_site_august_6_switch/` folder
2. **Do NOT Mix Versions**: Replace all existing files - don't cherry-pick
3. **Password Protection**: Add password overlay with `kbsRocks25!` after migration
4. **Test Thoroughly**: Ensure all sections load and function properly

## ⚡ Key Changes in Phase 3
- Winners section added after Hero
- Judge Interest section added after Judges
- Navigation updated (removed FAQ/Blog)
- All CTA buttons standardized to crimson (#DC143C)
- Logo href changed to `index.html`
- Contact banner removed (was causing white gap)

## 📋 Pre-Migration Checklist
- [ ] All files listed above are present
- [ ] REVEAL_WINNERS toggle is set to `true` in winners.js
- [ ] HubSpot embed codes are placeholders (awaiting client)
- [ ] No references to root path `/` (changed to relative paths)

---

Generated: August 3, 2025
Purpose: Migration to dummy GitHub for client review