# Pixel Computer Club

Assignment 3 continues the existing two-page Pixel Computer Club website in Astana. The original content, equipment specifications, prices, photographs and main section order are retained.

## Open the website

Open `index.html` directly in a browser. Follow **The devices and price** to `all-locations.html`. No installation, build, server, hosting or domain is required. An internet connection is required for Bootstrap 5.3.8 CSS and its official JavaScript bundle, loaded from jsDelivr. There is no project JavaScript.

## Files

- `index.html`: about the club, photo carousel, community and gallery.
- `all-locations.html`: prices and three equipment tiers.
- `css/base.css`: local fonts and brand colour variables.
- `css/Anuar.css`: photo backgrounds and small decorative corrections.
- `assets/pixel/`: original photos and local font files.
- `CSS-changes.md`: removed CSS rules and Bootstrap replacements.
- `screenshots/`: the about page at 375, 768 and 1440 pixels, plus the collapsed phone navigation.
- `VALIDATION.md`: verification results.
- `AI-log.md`: assistance requests and the work performed.
- `REQUIREMENTS-CHECK.md`: requirement-by-requirement review and outstanding deviations.

## Responsive layout

The gallery, equipment cards and footer use one column on phones, two at `md` (768px) and three at `lg` (992px). The introduction image and community paragraphs change from one to two columns at `md`. Equipment lists demonstrate a nested row inside each card's parent column. The navbar expands at `lg`; below that width its button opens and closes the navigation.

`container-fluid` supplies full-width page and footer backgrounds. Inner `container` elements keep content readable. Footer and pricing-note alignment changes at `md`; the floating contact link is hidden below `md`.

Centered `col-12 col-lg-8` wrappers keep the original compact proportions without custom width rules. The black background, local fonts and purple panels preserve the site's identity. Both custom stylesheets total 41 lines, with no custom breakpoints or layout rules.
