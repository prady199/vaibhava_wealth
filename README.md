# Vaibhava Wealth — Website

A premium corporate website for Vaibhava Wealth, a wealth & investment consultancy, built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, and React Hook Form.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/pages/` — Home, About Founder, About Company, Services (list + dynamic detail), Testimonials, Blog (list + dynamic post), Contact, legal pages
- `src/components/` — Navbar, Footer, FloatingButtons (WhatsApp/Call/Back-to-top), SectionHeading, Reveal (scroll animation wrapper), Layout
- `src/data/` — `services.ts` (all 10 services with full detail-page content), `content.ts` (testimonials, blog posts, process steps, why-choose-us)
- `tailwind.config.js` — brand tokens (emerald / gold / cream / charcoal, Playfair Display / Poppins / Montserrat)

## Before going live

1. **Contact form**: `src/pages/Contact.tsx` currently logs submissions to the console. Wire it to FormSubmit (`https://formsubmit.co/your@email.com`) or EmailJS — replace the `onSubmit` handler.
2. **Phone numbers / WhatsApp**: replace the placeholder `+919800000000` in `Contact.tsx` and `FloatingButtons.tsx`.
3. **Google Maps embed**: replace the generic Chennai query in `Contact.tsx`'s iframe `src` with your exact office address/coordinates.
4. **Founder photo**: the site currently uses a monogram avatar ("RS") instead of a real photo. Replace the avatar elements in `Home.tsx` and `AboutFounder.tsx` with an actual professional photograph.
5. **Legal pages**: `src/pages/Legal.tsx` contains placeholder Privacy Policy / Terms content — have compliance review before publishing.
6. **ARN number & registration details**: add your actual AMFI ARN number wherever "AMFI Registered" is mentioned.
7. **Blog content**: `BlogPost.tsx` renders placeholder body copy — add full article content per post (or wire to a CMS).
