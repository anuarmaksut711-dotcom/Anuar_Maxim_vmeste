# Midterm CSS and component changes

| Earlier implementation | Current implementation |
| --- | --- |
| Bootstrap bundle on every page | Local Bootstrap CSS only; no scripts |
| Collapsed navbar and dropdown requiring JS | One visible Bootstrap navigation list, wrapping on narrow screens |
| Bootstrap carousel | Captioned photo grid |
| Different navigation and a one-page circle in the header | Shared header, footer and title pattern |
| Disabled online-booking button | Native form, browser field checks, result area and future message containers |
| All computers marked free | Stable seat IDs and room layouts without a live-availability claim |
| Remote game artwork in cards | Text cards with the existing names and categories |
| Generic photo descriptions | Descriptive alternatives and visible captions |

Bootstrap handles layout, spacing, typography utilities, cards, tables and forms. Custom CSS supplies fonts, brand colours, image crops, focus appearance and prepared states. There are no custom layout breakpoints or JavaScript-dependent Bootstrap controls.

The `#booking-result:target` selector reveals a static field-check message after native form navigation. It does not calculate a total or create a reservation. Future JavaScript hooks are documented in the README.
