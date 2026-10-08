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
policy/
  index.html                # Consolidated privacy policy for all apps
assets/
  logo.png                  # Company logo
  terminal.png              # Terminal app icon
  insomnia.png              # Insomnia app icon
  leaflet.png               # Leaflet app icon
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
- **/leaflet/** — Leaflet product page (features) — macOS Markdown viewer
- **/terminal/beta/** — TestFlight beta sign-up and testing guide
- **/policy/** — Consolidated privacy policy for all apps, with per-app anchors (`#terminal`, `#insomnia`, `#leaflet`). Use `https://sillysirenstudios.com/policy/` as the Privacy Policy URL in App Store Connect
- **/terminal/policy/**, **/leaflet/policy/** — Redirects to `/policy/` so previously published URLs keep working

## Contact

No email addresses are published on the site. All contact goes through the form at `/contact/`, which posts to the Cloudflare Worker in `worker/index.js` (delivered via Resend).

- `/contact/?topic=support` relabels the form "Support" and makes the email subject "Support request from …"
- `/contact/?topic=support&app=insomnia` (or `app=leaflet`) also tags the subject "(Insomnia)" / "(Leaflet)" and adds version guidance to the message box
- Changes to `worker/index.js` only take effect after the worker is redeployed (`wrangler deploy`); until then support messages arrive with the standard "Message from …" subject
