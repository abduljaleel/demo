Demo: HESTA‑style Landing Page

Overview

This is a modern, responsive landing page inspired by the structure and UX of large Australian super funds (e.g., navigation, hero, benefits, performance/trust signals, resources, FAQs, and contact CTA). It is a static site built with semantic HTML, custom CSS, and a small amount of vanilla JavaScript for interactivity.

Features

- Responsive layout with mobile‑first design
- Sticky, accessible header with mobile navigation
- Hero section with primary CTAs and trust badges
- Benefits/features grid and performance/trust stats
- Resources/cards section for tools and guides
- Accessible FAQ accordion (keyboard and screen reader friendly)
- Simple, client‑side contact form handler (demo only)
- Clean, high‑contrast theme with CSS variables for easy theming

Project Structure

- index.html – page structure and content
- styles.css – theming, layout, and component styles
- script.js – mobile nav toggle, FAQ accordion, simple form handler

Quick Start

1. Open index.html directly in your browser, or
2. Serve the folder with a static server to enable proper routing/headers:
   - VS Code Live Server, or
   - Node: npx serve .

Customization Guide

Brand and typography

- Update the site name by changing the logo text in index.html (header and footer).
- Update the Google Font in index.html if needed (default is Inter).

Colors and theme

- All colors live in styles.css under :root CSS variables. Adjust brand color by changing --primary and --primary-600. Accent, positive, warning, and danger are available for highlighting.

Layout and sections

- Hero: edit the copy and CTAs within the .hero section.
- Features: modify the items under #features .features grid.
- Trust/Performance: edit statistics under #trust .stat blocks and the disclaimer text.
- Resources: update the card list under #resources.
- FAQs: edit question/answer pairs in #faqs .accordion-item.
- Contact: adjust form fields and helper text in #contact. The current handler is demo‑only.

Components and behavior

- Header/nav: the hamburger button toggles aria-expanded and the .open class on the nav for mobile.
- Accordion: each button with .accordion-trigger toggles aria-expanded and the associated panel’s hidden attribute.
- Form: the submit handler prevents default, shows a simple alert, and resets the form. Replace with real submission logic if needed.

Accessibility Notes

- Skip link provided to jump to #main content.
- Header nav button uses aria-expanded for state; nav is operable with keyboard.
- Accordion uses buttons with aria-expanded and panels that toggle hidden for screen reader compatibility.
- Colors and contrast favor readability; test changes with a contrast checker.

SEO Basics

- Update <title> and meta description in index.html.
- Use meaningful headings: one <h1> in hero, followed by semantic <h2>/<h3>.
- Replace placeholder text with real, keyword‑relevant content.

Performance Tips

- Keep images optimized (WebP/AVIF) and sized appropriately.
- Use preconnect for fonts (already included) and limit font weights to what you need.
- Consider inlining critical CSS for production if needed.

Deployment

- GitHub Pages: commit and push, then enable Pages for the repository’s main branch.
- Netlify: drag‑and‑drop the folder or connect the repository (build command not required).
- Vercel: import the project; framework preset: Other; output directory: root.

Roadmap (optional)

- Replace demo stats with live data via API.
- Add real calculator and comparison tools.
- Integrate analytics and tag management.
- Add multi‑page navigation (About, Fees, Performance) with a static site generator.

Legal/Content Disclaimer

- This is a demo and not affiliated with any actual fund. All content and figures are illustrative only and not financial advice.
