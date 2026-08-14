# Airbnb Frontend Clone

An academic, responsive recreation of Airbnb's core accommodation browsing experience. The project demonstrates component-based UI design, typed mock data, client-side filtering and sorting, dynamic routes, and responsive layouts without a backend.

## Stack

- Next.js 16.3.0 with the App Router
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 with `eslint-config-next` 16.3.0

## Features and routes

- `/` — browse stays with live text search and category filtering.
- `/catalog` — view all stays and sort them by nightly price.
- `/catalog` includes an interactive OpenStreetMap with one marker per stay.
- `/rooms/[id]` — inspect room details and select booking dates, guests, and a nightly-price total.
- Responsive, reusable components backed by local typed mock data.
- Stock photos are stored locally for demonstration.
- Date ranges disable past dates and calculate the booking total by number of nights.

## Installation and development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
```

## Project structure

```text
app/                    Pages, layouts, and route entry points
components/             Reusable interface components
data/                   Typed accommodation mock data
public/images/stays/    Local demonstration images
references/screenshots/ Required visual reference evidence
types/                  Shared TypeScript models
```

`context.md` documents the vision-to-component workflow, route requirements, screenshot-derived specifications, and project scope.
