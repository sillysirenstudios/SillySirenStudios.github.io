# Changelog

## [Unreleased]

### Changed
- Homepage Terminal card now shows the Silly Siren Terminal app icon (assets/terminal.png) instead of the keyboard emoji

### Added
- Leaflet (Mac Markdown viewer) added to the homepage app lineup as "Coming Soon", with a product page at /leaflet/ and icon at assets/leaflet.png
- Consolidated privacy policy at /policy/ covering Terminal, Insomnia, and Leaflet, with per-app anchors (#terminal, #insomnia, #leaflet)
- Silly Siren Insomnia (Mac menu bar app) added to the homepage app lineup as "Coming Soon", with nav and footer links
- New product page at /insomnia/ with features and pricing
- Insomnia app icon at assets/insomnia.png
- iPhone support reflected across terminal and beta pages — hero, badge, and description updated to "iPhone & iPad SSH Client"
- Live Server Metrics feature card on terminal page (CPU, memory, disk, network — Pro)
- Server metrics added to Free and Pro pricing lists
- iPhone test card on beta page covering single-column navigation and orientation
- Metrics (Pro) test card on beta page

### Changed
- /terminal/policy/ and /leaflet/policy/ now redirect to the consolidated /policy/ page so previously published URLs keep working
- Nav and footer "Privacy Policy" links on the homepage, Insomnia, and Leaflet pages now point to /policy/
- Zero Telemetry feature card: "your iPad" → "your device"

---

### Added
- New beta page at /terminal/beta/ with TestFlight explainer, testing checklist, known limitations, and mailto CTA
- "Join the Beta" button on terminal hero (App Store link hidden until live)
- Universal nav and footer links across all pages: Home, Terminal, Beta, Privacy Policy, Contact

### Changed (terminal mockup)
- Updated terminal mockup with Buddhist-themed username (bodhi), hostname (lotus.dev), server URL (web-01.lotus.dev), and git commit messages

### Changed (features)
- Terminal pricing: moved 15 built-in color schemes to Free tier; replaced "All color schemes" with custom theme import (.json / .itermcolors) as Pro feature
- Terminal Fully Customizable feature card: clarified 15 built-in schemes are free, noted custom theme import is Pro

### Changed (copy review)
- Homepage values section-sub: softened "strong opinions" to reflect craft and mindfulness
- Homepage Focused Scope card: removed "no upsells" framing, reworded around intentional scope

- Terminal page: "Why it exists" origin strip with first-person quote about building out of frustration with existing SSH apps
- Terminal page: pricing philosophy note explaining the anti-subscription stance (point-to-point app, no server involvement) while noting the annual option exists
- Homepage: "Fair Pricing" value card surfacing the one-time purchase philosophy at the studio level

### Changed
- Updated public contact email to `SillySirenStudios+contact@gmail.com` across all pages to avoid exposing the base Gmail address
