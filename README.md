# SillySirenStudios.github.io

Company and app landing pages for [Silly Siren Studios](https://sillysirenstudios.github.io), served via GitHub Pages.

## Structure

```
index.html                  # Company homepage
terminal/
  index.html                # Silly Siren Terminal app page
  policy/
    index.html              # Redirect to /policy/#terminal
insomnia/
  index.html                # Silly Siren Insomnia app page
  support/
    index.html              # Insomnia support page (App Store Support URL)
leaflet/
  index.html                # Leaflet app page
  support/
    index.html              # Leaflet support page (App Store Support URL)
  policy/
    index.html              # Redirect to /policy/#leaflet
nfc-lab/
  index.html                # NFC Lab app page (Coming Soon)
  support/
    index.html              # NFC Lab support page (App Store Support URL)
  policy/
    index.html              # Redirect to /policy/#nfc-lab
clocks/
  index.html                # Clocks app page
  support/
    index.html              # Clocks support page (App Store Support URL)
policy/
  index.html                # Consolidated privacy policy for all apps
assets/
  logo.png                  # Company logo
  terminal.png              # Terminal app icon
  insomnia.png              # Insomnia app icon
  leaflet.png               # Leaflet app icon
  clocks.png                # Clocks app icon
  nfc-lab.png              # NFC Lab app icon
css/
  main.css                  # Shared styles (reset, variables, nav, footer)
  home.css                  # Homepage-specific styles
  terminal.css              # Terminal app page styles
  policy.css                # Privacy policy styles
```

## Pages

- **/** — Company homepage with app catalog and values
- **/terminal/** — Silly Siren Terminal product page (features, pricing, privacy) — iPhone & iPad
- **/insomnia/** — Silly Siren Insomnia product page (features, pricing) — macOS menu bar app
- **/insomnia/support/** — Insomnia support page (routes to the support form, bug-report guidance) — use as the Support URL in App Store Connect
- **/leaflet/support/** — Leaflet support page — use as the Support URL in App Store Connect
- **/leaflet/** — Leaflet product page (features): Markdown, plain-text and data file viewer
- **/clocks/** — Clocks product page (features) — macOS menu bar world clock
- **/clocks/support/** — Clocks support page — use as the Support URL in App Store Connect
- **/nfc-lab/** — NFC Lab product page (Coming Soon) — iPhone NFC tag tool
- **/nfc-lab/support/** — NFC Lab support page — use as the Support URL in App Store Connect
- **/terminal/beta/** — TestFlight beta sign-up and testing guide
- **/policy/** — Consolidated privacy policy for all apps, with per-app anchors (`#terminal`, `#insomnia`, `#leaflet`, `#clocks`, `#nfc-lab`). Use `https://sillysirenstudios.com/policy/` as the Privacy Policy URL in App Store Connect
- **/terminal/policy/**, **/leaflet/policy/** — Redirects to `/policy/` so previously published URLs keep working

## Contact

No email addresses are published on the site. All contact goes through the form at `/contact/`, which posts to the Cloudflare Worker in `worker/index.js` (delivered via Resend).

- `/contact/?topic=support` relabels the form "Support" and makes the email subject "Support request from …"
- `/contact/?topic=support&app=insomnia` (or `app=leaflet`) also tags the subject "(Insomnia)" / "(Leaflet)" and adds version guidance to the message box
- `app=clocks` only changes the form text; the worker does not tag its subject
