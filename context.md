# Airbnb Frontend Clone Context

This academic project recreates the essential Airbnb browsing experience for travelers who want to discover, compare, and inspect short-term accommodations. It prioritizes a clear search flow, responsive layouts, typed mock data, and approachable component design over production services or advanced booking features.

## Product goal

The application lets a visitor browse featured stays, narrow them by text and category, sort a catalog by price, and review the details of an individual room. The interface is mobile-first at 375px and expands into multi-column layouts at 768px and above.

## Pages

| Route | Purpose | Primary interaction |
|---|---|---|
| `/` | Discover accommodations from a search-focused home page. | Live text search and category filtering. |
| `/catalog` | Review the complete accommodation inventory. | Sort results and inspect all stays on an interactive map. |
| `/rooms/[id]` | Inspect one room before booking. | Select dates and guests and review the calculated total. |

## Shared component model

- `Navbar` provides the brand, navigation, search entry point, and profile controls.
- `AccommodationCard` presents one typed accommodation and links to its detail route.
- `AccommodationGrid` supplies the responsive list relationship used by Home and Catalog.
- `LoadingState` communicates simulated asynchronous loading.
- Room-specific components separate gallery, header, host, amenities, and booking responsibilities.

## Screenshot-derived specifications

### Home reference

**Source:** `references/screenshots/airbnb-home-375.png`

| Component | Props | Layout relationship |
|---|---|---|
| `Navbar` | `searchQuery`, `onSearchChange` | Sits at the top of the page and contains a prominent pill-shaped `SearchBar`; desktop navigation expands while mobile controls stay compact. |
| `SearchBar` | `value`, `onChange` | Full-width mobile search control beneath/within the navigation region. |
| `CategoryFilter` | `categories`, `activeCategory`, `onSelect` | Horizontally scrollable row directly below the navigation. The active category uses the coral accent and stronger contrast. |
| `AccommodationGrid` | `accommodations` | Responsive grid below filters: one column on mobile and multiple columns on wider screens. |
| `AccommodationCard` | `accommodation` | Repeated grid item with a large visual, title/location, nightly price, and rating; the whole card leads to room details. |
| `LoadingState` | `message?` | Temporarily replaces the accommodation grid while initial mock data loads. |

### Catalog reference

**Source:** `references/screenshots/airbnb-catalog-375.png`

| Component | Props | Layout relationship |
|---|---|---|
| `Navbar` | no required page-specific props | Shared page header above the catalog content. |
| `SortControl` | `direction`, `onChange` | Shares the catalog heading row with the result count and controls price ordering. |
| `AccommodationGrid` | `accommodations` | Reuses the same `AccommodationCard` as Home. It occupies the main results column. |
| `AccommodationCard` | `accommodation` | Compact result representation on mobile and repeated cards in the desktop results region. |
| `InteractiveMap` | `accommodations` | OpenStreetMap companion below results on mobile and to their right on desktop, with a marker and detail link per stay. |

### Room detail reference

**Source:** `references/screenshots/airbnb-room-detail-375.png`

| Component | Props | Layout relationship |
|---|---|---|
| `BackToCatalog` | no props | Breadcrumb-style `Link` above the room content. |
| `PhotoGallery` | `photos`, `title` | Large leading visual with previous/next controls and a visible position indicator. |
| `RoomHeader` | `title`, `rating`, `reviews`, `location` | Immediately follows the gallery and establishes room identity. |
| `HostInfo` | `host` | Profile summary below the room header with avatar, name, and hosting tenure. |
| `AmenitiesGrid` | `amenities` | Two-column icon-and-label list in the main detail column. |
| `BookingCard` | `pricePerNight` | Companion panel containing the date range, nightly-price total, `GuestCounter`, and reservation call to action. |
| `GuestCounter` | `guests`, `onDecrease`, `onIncrease`, `min`, `max` | Inline counter inside the booking card with explicit limits. |
| `LoadingState` | `message?` | Replaces room content while the route id is resolved through simulated loading. |

## Stitch prototype direction

Two generated mobile prototypes were compared in Stitch project `11964619897969737320`:

- **Selected:** Search-Focused Home Screen, screen `2241bc6350c64d9788eb86828ce175aa`.
- **Alternative:** Visual-First Home Screen, screen `f6360469b5c947fe9c747466ac0d8bce`.

The Search-Focused direction was selected because it gives search and categories the clearest hierarchy, aligns more closely with the required learning outcomes, and can be implemented with fewer decorative abstractions. The visual language uses white surfaces, dark text, coral `#FF385C`, subtle gray borders, a prominent search pill, horizontal categories, image-led cards, simple typography, and minimal shadows.

## Scope boundaries

The project remains frontend-only with local typed mock data. Its optional scope includes React Leaflet with public OpenStreetMap tiles and React DayPicker for local date-range totals; it still excludes a backend, authentication, a database, private APIs, and global state.
