# Pixel Computer Club midterm

Pixel is a four-page website for a computer club at 36 Mangilik El Avenue in Astana. Visitors can find visiting information, compare equipment and prices, explore the rooms and games, and fill in booking details. The midterm prepares the HTML and CSS structure for later JavaScript assignments.

## Open the site

Open `index.html` in a browser. CSS, fonts and displayed images are local. No installation, build step, server or internet connection is needed to browse the pages. Map, Instagram, telephone and email links intentionally open external services.

**No JavaScript is used, including no Bootstrap JavaScript.** Bootstrap 5.3.8 is local CSS only, with its MIT license in `assets/vendor/BOOTSTRAP-LICENSE.txt`. All four pages use visible wrapping navigation. The gallery is a Bootstrap grid. The FAQ uses native HTML `details` and `summary`.

## Page list

| Page | Purpose |
| --- | --- |
| `index.html` | Club introduction, links to other pages, six captioned photographs, visitor questions and contacts |
| `all-locations.html` | Prices, Standard/Duo/VIP equipment, booking fields and result containers |
| `computers.html` | Standard, Duo and VIP room layouts, with links to equipment and booking details |
| `games.html` | The existing list of 20 games and applications, with a route to computer rooms |

Every page has the same navigation and footer. Titles follow `Page | Pixel Computer Club`. The current navigation item uses `aria-current="page"`. A keyboard-accessible skip link goes to the main content.

## Three visitor journeys

### 1 Find the address and opening hours

- **Start:** Open `index.html`.
- **Steps:** Follow **Address & opening hours** to the footer.
- **End:** Read the address and 24/7 opening hours. **Directions on 2GIS** is available for the map; the address and hours can be read without an external service or a staff member.

### 2 Compare a room and its price

- **Start:** Open **Computer rooms** from any page.
- **Steps:** Find the VIP room; follow **View VIP equipment**; read its specifications; use the **Prices** link near the page title.
- **End:** Compare VIP with Standard and Duo for the same package. The listed 1-hour prices are 900, 1,000 and 1,500 KZT respectively. No account, approval or staff action is involved.

### 3 Choose a game and check booking details

- **Start:** Open **Games** and find Counter-Strike 2.
- **Steps:** Follow **Explore the rooms**, then **Booking details**. Choose **Standard · 1 hour · 900 KZT**. Enter a preferred date, time, name and phone number. Press **Check booking details**.
- **End:** The browser checks the mandatory fields and navigates to the booking-status area when they are valid. The result explicitly says no reservation request was sent. Form processing and real reservations are outside this static midterm.

## Booking behavior

The browser checks required fields and length constraints. **Clear form** resets the controls. **Check booking details** performs a static GET navigation to `all-locations.html#booking-result`. Controls deliberately have IDs but no `name` attributes, so entered contact details are not sent in a query string or to a server. Navigation reloads the form; values are not saved. This is a field-check result, not a reservation or live-availability claim.

The package selector contains only combinations listed in the table, with a price beside each option. Day is offered under Standard only. The prepared selection and total containers currently refer to that displayed price. Calculation and discount eligibility will be handled in the later JavaScript assignment.

## Prepared for future JavaScript

IDs are English and lowercase. Each form, input, selector, textarea and button has an ID. Future scripts can update existing containers and states without adding HTML or writing CSS by hand.

| Hook | Intended later use |
| --- | --- |
| `booking-form`, `booking-submit`, `booking-reset` | Handle submission and resetting |
| `booking-package` | Read the package; options include `data-room` and `data-price` |
| `booking-date`, `booking-time`, `booking-name`, `booking-phone`, `booking-notes` | Read and validate visit details |
| `booking-selection`, `booking-total`, `booking-summary` | Show the selection, calculated price and summary |
| `booking-errors`, `booking-confirmation` | Show errors or confirmation; live-region roles are prepared |
| `seat-pc-01` through `seat-pc-20`, `seat-duo-01` through `seat-duo-02`, `seat-vip-01` through `seat-vip-05` | Identify each room-layout item |
| `room-results`, `room-errors` | Show later room-related messages |
| `games-list`, `game-1` through `game-20`, `games-results`, `games-empty` | Update the games or show an empty result |

CSS includes `is-hidden`, `is-active`, `is-selected`, `is-error`, `is-success` and `is-disabled`. These are visual states. A future script must also set `disabled` or accessibility attributes when needed; a class alone does not disable a control.

## Bootstrap and CSS choices

Bootstrap supplies containers, responsive grids, cards, tables, navigation, typography utilities, spacing and form controls. `col-12 col-md-4` gives one equipment card per row on phones and three at the medium breakpoint. The form/status columns use `col-lg-8` and `col-lg-4`. A responsive table wrapper keeps any table overflow inside the table.

`css/base.css` contains local fonts and brand variables. `css/Anuar.css` contains small photo, colour, focus and state rules. There are no custom layout breakpoints. Script elements and obsolete Bootstrap carousel, dropdown and collapse controls have been removed.

## Content and evidence

Prices, equipment, contacts, room counts and game names were preserved from the supplied repository. The six existing club photographs were retained and given captions based on visible content. This is not independent verification that the information is current or that the students took the photographs. Confirm those facts before submission.

The unsupported US school-league claim, unrelated team photograph and third-party game covers are not used in the site. Room layouts do not claim that every seat is currently free. Exact Day/Night time windows were missing in the source and were not invented.

## Validation and screenshots

[QUALITY-PASS.md](QUALITY-PASS.md) records the dated findings, checks and remaining student responsibilities. `validation/` contains machine-readable results. `screenshots/` contains each page at 375 px and 1440 px, plus the checked-form state. Browser checks ran with JavaScript disabled.

## Final freeze and defense

Before the final tag, confirm the content and photo authorship and complete a real teammate cross-review at least two days before the deadline. Each student needs genuine commits from their own account on at least four different days. One update cannot manufacture those historical requirements.

After those checks and resulting corrections, commit the final state on the intended submission branch and create the `midterm` tag if it does not exist:

```bash
git add Testi README.md
git commit -m "Finish midterm content and review"
git tag -a midterm -m "Midterm HTML and CSS freeze"
git push origin HEAD
git push origin midterm
```

After the freeze, follow the assignment's rule for JavaScript-generated changes. Each student should explain their own and a teammate's page: semantic HTML, form labels and constraints, table headers, the Bootstrap grid, CSS specificity and the box model. Be ready to explain why the site works without JavaScript, why the form does not create a real reservation and why each result container exists.
