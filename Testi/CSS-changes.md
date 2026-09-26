# CSS migration

| Removed Assignment 2 rules | Bootstrap replacement |
| --- | --- |
| Custom page widths and centering | `container`, `container-fluid`, `row justify-content-center`, `col-12 col-lg-8` |
| Header flex layout and mobile menu media queries | `navbar`, `navbar-expand-lg`, `navbar-toggler`, `collapse navbar-collapse` |
| Navigation dropdown positioning and display rules | `dropdown`, `dropdown-menu`, Bootstrap bundle |
| Devices and gallery grid-template-columns | `row g-4` / `row g-3`, `col-12 col-md-6 col-lg-4` |
| Footer flex rules and mobile overrides | `row g-4`, responsive columns, `text-center text-md-start` |
| Float image and clear element | `row g-4 align-items-center`, `col-12 col-md-6` |
| Manual section spacing and paragraph alignment | `py-4 py-md-5`, `my-4`, `mb-0`, `text-center text-md-start` |
| Custom button padding, borders, shapes and hover rules | `btn`, `btn-primary`, `btn-outline-light`, `btn-secondary`, `btn-sm`, `btn-lg` |
| Fixed minimum table width and manual table spacing | `table table-borderless align-middle text-center`; brand colours remain in CSS |
| Radio-based slider states and manual positioning | `carousel`, `carousel-inner`, `carousel-item`, standard previous/next controls |
| Fixed photo heights and gallery spacing | `ratio ratio-4x3`, `img-fluid`, `w-100`, gutters |
| Manual heading sizes and paragraph styles | `display-2`, `display-6`, `lead`, `small`, `text-body-secondary` |
| Inline styles, internal CSS and important declarations | Bootstrap text utilities and brand colour variables |

The two remaining stylesheets contain only local font definitions, brand colour tokens, photo backgrounds and small visual corrections. There are no custom layout rules or custom breakpoints.
