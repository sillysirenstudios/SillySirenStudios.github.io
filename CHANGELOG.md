# Changelog

## [Unreleased]

### Changed
- Removed all email addresses from site pages: the contact and beta sign-up error messages no longer show an address, and the Insomnia support page uses the form instead
- Contact form supports `?topic=support` (and `&app=insomnia`): heading becomes "Support", message placeholder asks for version info, and the worker sends the email with subject "Support request (Insomnia) from …" (requires redeploying the worker)

### Added
- Insomnia support page at /insomnia/support/ with bug-report guidance and a common question, routing to the support form; the Insomnia hero's secondary button now links to it. Use https://sillysirenstudios.com/insomnia/support/ as the Support URL in App Store Connect

### Added
- Leaflet support page at /leaflet/support/ routing to the support form (`?topic=support&app=leaflet`), mirroring Insomnia's. Use https://sillysirenstudios.com/leaflet/support/ as the Support URL in App Store Connect; the Leaflet hero's secondary button now links to it
- Support form and worker accept `app=leaflet`, so support emails are subjected "Support request (Leaflet) from …" (requires redeploying the worker)

### Changed
- Privacy policy: Leaflet "Data" paragraph now discloses locally stored display preferences (appearance, text size, window size), kept in the app sandbox and never transmitted
- Leaflet page title uses the App Store name "Silly Siren Leaflet"
- Leaflet page and homepage card now describe the app's current feature set: display math (KaTeX), Quick Look, folder browsing and file links, search and outline, live reload, themes and text size, copy and PDF export. Inline math and diagrams in PDF export are deliberately not claimed

### Fixed
- Leaflet copy no longer claims "no network access"/"no network entitlement", since Leaflet now holds `com.apple.security.network.client` so Mermaid web views render. Policy explains the entitlement; the Leaflet page and homepage card now say "no accounts, no tracking" and "Offline by Design"
- Privacy policy: Insomnia "Data" paragraph no longer claims the Login Item flag is the only thing stored; it now discloses locally stored preferences (settings, auto-activate app list, Login Item registration), kept in the app sandbox and never transmitted

### Changed
- Simplified nav and footer on every page to Home · Apps · Privacy Policy · Contact, replacing the per-app links; "Apps" links to the homepage apps grid (/#apps). Terminal pages also keep a Beta link. All Privacy Policy links now point to /policy/
- Homepage apps heading: "Built for the people who live in the terminal" → "Tools that earn their place", since the lineup is no longer terminal-only (hero tagline unchanged)
- Terminal and Insomnia pages, beta pages, and the privacy policy drop the "Silly Siren" prefix from nav brands and headings (browser tab titles keep the full name)
- Homepage app cards drop the redundant "Silly Siren" prefix: "Terminal", "Insomnia" (Leaflet unchanged)
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
- Updated the public contact email across all pages to avoid exposing the base Gmail address (since superseded: no email addresses are shown on the site)
