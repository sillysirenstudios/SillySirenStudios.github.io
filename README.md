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
leaflet/
  index.html                # Leaflet app page
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
- **/leaflet/** — Leaflet product page (features) — macOS Markdown viewer
- **/terminal/beta/** — TestFlight beta sign-up and testing guide
- **/policy/** — Consolidated privacy policy for all apps, with per-app anchors (`#terminal`, `#insomnia`, `#leaflet`). Use `https://sillysirenstudios.com/policy/` as the Privacy Policy URL in App Store Connect
- **/terminal/policy/**, **/leaflet/policy/** — Redirects to `/policy/` so previously published URLs keep working

## Contact

Public contact email: `SillySirenStudios+contact@gmail.com` — delivers to the main Gmail inbox.
