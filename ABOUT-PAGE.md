# About page

Open `/about` to see the combined Desktop 7 and Desktop 3 implementation.

## Run locally

```sh
npm ci
npm run dev
```

Visit http://localhost:3000/about. To check production output, run `npm run lint` and `npm run build`.

## Editing the page

- `src/app/about/page.jsx`: route and search metadata.
- `src/app/components/about/AboutPage.jsx`: section ordering.
- Every section has its own component. Paragraphs, images, experience cards, case studies, ecosystem cards, track-record cards, and future slides also have dedicated reusable components.
- Styling uses Tailwind CSS utility classes in the JSX components, including responsive layouts, hover/focus states, and reduced-motion variants. `globals.css` contains only the Tailwind import and `@theme inline` font configuration; there are no handwritten CSS selectors or media queries. `next/font/local` loads the supplied fonts in the root layout.
- `Reveal.jsx`: Framer Motion entrance animations. `StoryTimeline.jsx`: keyboard-accessible milestone buttons and animated timeline. Both respect the device's reduced-motion preference. Content remains readable before JavaScript loads.
- `public/images/about`: permanent copies of the supplied Figma assets.

## Design decisions

Source: TheUgroup (Copy), Desktop 7 (`170:46`) and Desktop 3 (`144:1178`). Combined into one page as requested. Desktop 7 supplies the timeline and single track-record layout; Desktop 3 supplies the founding story and case-study photo treatment.

The supplied typography guide takes precedence over Figma's substitute fonts: Liberation Sans regular/bold and DejaVu Sans Mono bold; H1 34/40, H2 24/30, H3 16/22, body 13/21. Phone headings adapt to the available width.

Designer commentary was omitted. Empty future image blocks became typographic panels. The same supplied photo is reused as in Desktop 3; replace `AboutImage.jsx` with specific images when those become available. Intermediate timeline years had no corresponding milestone copy, so no historical events were invented for them. The six-month RSVI turnaround is shown as an undated experience milestone.

The navbar/footer are the existing components with About links wired to `/about` and responsive wrapping added. Their other unfinished `#` destinations remain part of the original site's unfinished navigation. The previously empty homepage now links to About.

This directory was retrieved through the authorized GitHub connector because local Git authentication failed. It is a working source copy; GitHub changes are delivered on a separate review branch, not merged into main.

Motion reference: https://motion.dev/docs/react-scroll-animations and https://motion.dev/docs/react-accessibility.
