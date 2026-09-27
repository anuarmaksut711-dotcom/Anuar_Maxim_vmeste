# Pixel Computer Club

Assignment 3 rebuilds the existing two-page Pixel Computer Club site with Bootstrap 5.3.8. Open `index.html` locally and use the navigation to move between the club overview and equipment prices. The original pages and content are retained; no new pages, site builder, or custom JavaScript are required.

## Files

- `index.html` — club overview, carousel, community, gallery, and footer contacts.
- `all-locations.html` — equipment, prices, and the booking link.
- `css/base.css` — local fonts and brand colour variables.
- `css/Anuar.css` — photo backgrounds and small visual corrections.
- `assets/pixel/` — original photos and local fonts.
- `CSS-changes.md` — Assignment 2 CSS rules replaced by Bootstrap classes.
- `screenshots/` — the overview at 375, 768, and 1440 pixels and the collapsed phone navigation.
- `AI-log.md` — AI assistance log.

## Responsive layout

The gallery and equipment cards use one column on phones, two at `md` (768px), and three at `lg` (992px). The introduction image and community content change from one to two columns at `md`. Equipment cards demonstrate a nested grid row. The navbar expands at `lg` and uses Bootstrap's toggler below that breakpoint. The included screenshots show the overview at all three required widths and the collapsed navigation at phone width.

`container-fluid` provides the full-width page and footer backgrounds, while inner `container` elements keep content readable. The page uses Bootstrap spacing, grid, typography, navigation, carousel, and button classes. Local CSS is limited to fonts, brand colours, photo backgrounds, and small visual corrections; it contains no custom grid or breakpoint rules.

The **Birthday Parties → At Pixel Main** menu item opens the booking controls on the prices page. **Contact Us** and the desktop Contact button jump to the contact details at the bottom of the current page.

The website loads Bootstrap 5.3.8 CSS and its official JavaScript bundle from jsDelivr, so an internet connection is needed when opening the local files.
