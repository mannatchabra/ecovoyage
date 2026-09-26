# EcoVoyage: Proof, not promises

Capstone project for the AI-Powered Digital Marketing course. This fork of the EcoVoyage starter site was audited and rebuilt around one idea: sustainable travel you can verify. Deployed on Netlify from this repository (publish directory `.`).

## What changed and why

| # | Problem in the original site | What was changed | Why it matters |
|---|---|---|---|
| 1 | Unverifiable claims ("100% carbon offset", "carbon-neutral routes", "98% 5-star") | Removed. Every stay now names its certifier and last audit date. The FAQ states plainly that trips are not carbon neutral. | Builds trust with sceptical travellers and follows the EU Green Claims rules on generic environmental claims. |
| 2 | Prices in USD, destinations spread worldwide (including Las Vegas) | Localised for India: six Indian regions, prices in INR with taxes included. | Matches the India/INR campaign geography, the persona and the Google Ads targeting. |
| 3 | No way to see where the money goes | Added the Green Receipt: an itemised breakdown per package showing the certifier, audit date, each cost line and the share that stays local. | Answers the persona's top two challenges (greenwashing and unclear pricing) in one feature. |
| 4 | Weak conversion path ("Log in" as the only header button, "Book now" links went nowhere) | "Book a trip" in the header, "Book this trip" on every package, and a working enquiry form that pre-selects the chosen package and lands on a thank-you page. | One primary action per screen, plus a thank-you page to use as the Google Ads conversion. |
| 5 | Missing SEO and AEO basics | Unique titles and meta descriptions built from the keyword research, Open Graph tags, TravelAgency and FAQPage structured data, one H1 per page, alt text on every image. | Helps both search engines and AI answer engines understand and quote the site. |
| 6 | Accessibility gaps (no labels on inputs, no alt text, nav overflowing on mobile) | Labelled form fields, skip link, visible keyboard focus, mobile menu, 44px touch targets, reduced-motion support. | Emma researches on mobile; the site must work there first. |
| 7 | Generic look with no brand system | Applied the brand board: Deep Forest #1F4D3A, Sage Mist #E8F0EA, Verified Amber #B8862B (used only for proof elements), Fraunces and Inter, and the leaf-seal wordmark. | Consistent brand across site, ads and social. |
| 8 | Static filter pills that did nothing | Working destination filters (landscape, solar-powered, family-friendly, under Rs 5,000 a night). | Emma named weak filters as a frustration in the persona. |

## Tracking

- Paste the Google tag directly below the comment in the `<head>` of every page (marked "Task 7").
- `thanks.html` is the conversion page for enquiries.
- Forms use Netlify Forms. Enable form detection in Netlify under Site configuration, Forms.

EcoVoyage is a concept brand. Stays, reviews, audit dates and prices are illustrative.
