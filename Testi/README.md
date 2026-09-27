# Pixel Computer Club

Assignment 3 rebuilds the Pixel Computer Club site with Bootstrap 5.3.8. Open `index.html` locally and use the navigation to visit the club overview, equipment prices, computer rooms, and games library. The site runs from local files with no build step, hosting, site builder, or custom JavaScript.

## Files

- `index.html` — club overview, carousel, community, gallery, and footer contacts.
- `all-locations.html` — equipment, prices, and the booking link.
- `computers.html` — responsive diagrams for the common, Duo, and VIP rooms.
- `games.html` — a responsive 20-title games and applications library.
- `css/base.css` — local fonts and brand colour variables.
- `css/Anuar.css` — photo backgrounds and small visual corrections.
- `assets/pixel/` — original photos and local fonts.
- `CSS-changes.md` — Assignment 2 CSS rules replaced by Bootstrap classes.
- `screenshots/` — the overview at 375, 768, and 1440 pixels and the collapsed phone navigation.
- `AI-log.md` — AI assistance log.

## Responsive layout

The gallery and equipment cards use one column on phones, two at `md` (768px), and three at `lg` (992px). The introduction image and community content change from one to two columns at `md`. Equipment cards demonstrate a nested grid row. The navbar expands at `lg` and uses Bootstrap's toggler below that breakpoint. The included screenshots show the overview at all three required widths and the collapsed navigation at phone width.

`container-fluid` provides the full-width page and footer backgrounds, while inner `container` elements keep content readable. The pages use Bootstrap spacing, grid, typography, navigation, carousel, and button classes. Local CSS is limited to fonts, brand colours, photo backgrounds, and small card/hover details; it contains no custom page-grid or breakpoint rules. The games grid has two columns on phones, three on tablets, and four on desktop. Common-room seats change from two columns on phones to four at `md`; the Duo and VIP layouts adjust to their room sizes.

The **Компьютеры** and **Игры** navigation links open the two new pages. The existing contact details remain in the footer on every page, and the desktop Contact button jumps to them.

The website loads Bootstrap 5.3.8 CSS and its official JavaScript bundle from jsDelivr, so an internet connection is needed when opening the local files.
