# Midterm quality pass

Date: 3 October 2026, Asia/Qyzylorda. This is an automated and visual review of the prepared revision. It does not replace the separate teammate cross-review required by the assignment.

## Found and fixed

| Finding | Correction |
| --- | --- |
| Bootstrap JavaScript loaded on every page | Removed scripts and stored Bootstrap CSS locally |
| Mobile menu and carousel needed JavaScript | Visible wrapping navigation and captioned gallery |
| Navigation content and headers differed | Consistent navigation, footer and titles |
| Unsupported US school-league claim | Removed the claim and linked to actual site content |
| Prices ended at a disabled booking button | Visit/contact fields, native checking and result containers |
| Incomplete future IDs and states | Lowercase IDs, data attributes and reusable state classes |
| Every seat was marked free without live data | Room layouts without availability claims |
| Generic captions and unrelated artwork | Descriptive captions and no unrelated art in the displayed pages |
| Screenshots covered an old version | New phone/desktop screenshots for all pages |
| Validator rejected aria-label on generic price-table spans | Decorative dash plus separate visually hidden text |

## Completed checks

- Official Nu Html Checker **26.10.2 (f302f46)**, run locally on all four HTML pages: **zero errors and zero warnings**. Raw output: `validation/w3c-results.json`.
- Chromium with JavaScript disabled, all four pages at **320, 375, 768 and 1440 px**: 16 viewport checks; no page overflow, page/console errors, failed resource loads, broken displayed images or script requests.
- Local links, fragments and referenced CSS/font/image assets resolve. No duplicate or mixed-case IDs, empty `href="#"`, inline event handlers or `javascript:` URLs were found.
- The primary navigation is visible at every tested width. All three README journeys were clicked through.
- Empty required fields prevent submission. A filled form reaches the checked state. Contact details do not enter the URL. Reset clears the form. Native FAQ disclosures open without JavaScript.
- Page screenshots were visually inspected for clipped text, overlapping controls and layout problems.

Browser results: `validation/browser-checks.json`. Local-link and structure results: `validation/static-checks.json`. External map/social destinations were retained from the source; they are not independently verified current business records.

## Remaining student checks

- Confirm ownership of the six club photos and the accuracy of prices, equipment, contacts, opening hours, room counts and game names. Confirm the exact Day/Night time windows and discount terms.
- Each student must inspect the other student's pages at least two days before the deadline. Add the real reviewer name, date, findings and fixes after the review happens.
- Each student needs genuine commits from their own account on four different days. The existing history did not yet meet that condition when reviewed; no authors or dates were fabricated.
- Make final content corrections before the `midterm` tag. This prepared revision is not represented as a completed human review or final freeze.
