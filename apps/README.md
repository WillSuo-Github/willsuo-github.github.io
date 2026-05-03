# Reusable App Support and Privacy Pages

This folder hosts reusable support and privacy pages for App Store apps.

Canonical URL patterns:

- Support: `https://willsuo-github.github.io/apps/support/?app=<slug>`
- Privacy: `https://willsuo-github.github.io/apps/privacy/?app=<slug>`

To add a new app, add a new entry to `apps/app-data.js` with a lowercase slug. Optional clean redirects can be added under `<slug>/support/` and `<slug>/privacy/` when App Store Connect should use a shorter product-specific URL.

Do not point a new app at another app's support or privacy page. Add a new data entry, even if most sections reuse the same local-first wording.
