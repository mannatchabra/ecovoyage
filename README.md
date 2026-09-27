# EcoVoyage: Proof, not promises

Capstone project for the AI-Powered Digital Marketing course. This fork of the EcoVoyage starter site was audited and rebuilt around one idea: sustainable travel you can verify. Live at https://eco-mannat.netlify.app/ (Netlify, publish directory `.`).

## Round 1: what changed and why

| # | Problem in the original site | What was changed | Why it matters |
|---|---|---|---|
| 1 | Unverifiable claims ("100% carbon offset", "carbon-neutral routes", "98% 5-star") | Removed. Every stay names its certifier and last audit date. The FAQ states plainly that trips are not carbon neutral. | Builds trust with sceptical travellers and follows the EU rules on generic environmental claims. |
| 2 | Prices in USD, destinations spread worldwide (including Las Vegas) | Localised for India: six Indian regions, prices in INR with taxes included. | Matches the India/INR campaign geography, the persona and the Google Ads targeting. |
| 3 | No way to see where the money goes | Added the Green Receipt: an itemised breakdown per package showing the certifier, audit date, each cost line and the share that stays local. | Answers the persona's top two challenges (greenwashing and unclear pricing) in one feature. |
| 4 | Weak conversion path ("Log in" as the only header button) | "Book a trip" in the header, "Book this trip" on every package, an enquiry form that pre-selects the package, and a thank-you page. | One primary action per screen, plus a thank-you page for the Google Ads conversion. |
| 5 | Accessibility gaps | Labelled fields, skip link, keyboard focus, mobile menu, 44px touch targets, reduced-motion support. | Emma researches on mobile. |
| 6 | Static filter pills | Working destination filters. | Emma named weak filters as a frustration. |

## Round 2: visual depth and SEO/AEO

**Design.** Dark forest hero with topographic contour lines (a field-guide map), a 3D stage where a destination photo, the Green Receipt and a spinning verification coin float at different depths and tilt with the pointer, a ticker of recently audited stays, an animated "where your money goes" split bar, scroll-reveal animations, photo cards with hover depth, and dark page headers. Verified Amber is still used only for proof elements. All motion switches off for visitors who prefer reduced motion.

**Keyword mapping (from the Ubersuggest Master Keyword List, India, English).**

| Page | Primary keyword | Supporting keywords |
|---|---|---|
| Home | eco tourism in India (720) | eco resorts in India, sustainable travel packages, sustainable homestays India, best eco tourism places in India |
| Destinations | eco tourism places in India (260) | eco tourism in India places, eco tourism sites in India, eco tourism in North East India, india eco friendly tourism destinations |
| Packages | sustainable travel packages | eco resorts in India, sustainable homestays India |
| Eco Tourism Guide (new pillar page) | what is eco tourism in India | examples of eco tourism in India, eco tourism example in India, first eco tourism in India, sustainable tourism India, green tourism India, nature tourism in India |
| About | eco certified hotels / eco resorts in India | sustainable tourism India |

**Technical SEO.** Unique titles and meta descriptions, canonical URLs, Open Graph and Twitter cards, `robots.txt`, `sitemap.xml`, breadcrumbs, one H1 per page, descriptive alt text, lazy-loaded images, preloaded hero image.

**Structured data (AEO/GEO).** TravelAgency and WebSite (home), FAQPage (home and guide), Article (guide), ItemList of TouristDestination (destinations), TouristTrip with INR offers (packages), BreadcrumbList (inner pages). The guide opens each section with a direct 40 to 60 word answer so AI answer engines can quote it.

## Tracking

- Paste the Google tag below the "Task 7" comment in the `<head>` of every page.
- `thanks.html` is the conversion page for enquiries.
- Forms use Netlify Forms (enable form detection under Site configuration, Forms).

EcoVoyage is a concept brand. Stays, reviews, audit dates and prices are illustrative. Destination photos are AI-generated.
