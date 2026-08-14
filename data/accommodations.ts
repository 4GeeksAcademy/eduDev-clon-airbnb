import type { Accommodation, Category } from "@/types/accommodation";
import type { Room } from "@/types/room";

export const categories: { label: Category; icon: string }[] = [
  { label: "All", icon: "⌂" },
  { label: "Beach", icon: "☀" },
  { label: "Cabins", icon: "△" },
  { label: "City", icon: "▦" },
  { label: "Countryside", icon: "♧" },
];

export const accommodations: Accommodation[] = [
  { id: "1", title: "Sunlit loft with city views", location: "Montevideo, Uruguay", category: "City", pricePerNight: 118, rating: 4.96, image: "/images/stays/sunlit-loft.jpg", coordinates: [-34.9011, -56.1645] },
  { id: "2", title: "Quiet cabin among the pines", location: "Bariloche, Argentina", category: "Cabins", pricePerNight: 92, rating: 4.88, image: "/images/stays/pine-cabin.jpg", coordinates: [-41.1335, -71.3103] },
  { id: "3", title: "Oceanfront retreat", location: "Punta del Este, Uruguay", category: "Beach", pricePerNight: 164, rating: 4.91, image: "/images/stays/oceanfront-retreat.jpg", coordinates: [-34.967, -54.95] },
  { id: "4", title: "Design apartment downtown", location: "Buenos Aires, Argentina", category: "City", pricePerNight: 106, rating: 4.84, image: "/images/stays/design-apartment.jpg", coordinates: [-34.6037, -58.3816] },
  { id: "5", title: "Country house with a pool", location: "Colonia, Uruguay", category: "Countryside", pricePerNight: 137, rating: 4.93, image: "/images/stays/country-house.jpg", coordinates: [-34.4714, -57.8442] },
  { id: "6", title: "Minimal cabin by the lake", location: "Villa La Angostura, Argentina", category: "Cabins", pricePerNight: 125, rating: 4.97, image: "/images/stays/lakeside-cabin.jpg", coordinates: [-40.7627, -71.6463] },
];

const interiorPhotos = [
  "/images/stays/interior-living-room.jpg",
  "/images/stays/interior-bedroom.jpg",
  "/images/stays/interior-kitchen.jpg",
];

const sharedAmenities = [
  { icon: "♨", label: "Kitchen" }, { icon: "⌁", label: "Wi-Fi" },
  { icon: "▣", label: "Free parking" }, { icon: "❄", label: "Air conditioning" },
  { icon: "▤", label: "Workspace" }, { icon: "✓", label: "Essentials" },
];

export const rooms: Room[] = accommodations.map((stay, index) => ({
  ...stay,
  reviews: 84 + index * 23,
  description: "A comfortable, thoughtfully designed stay with everything you need to explore the area and unwind at the end of the day.",
  host: { name: index % 2 ? "Mateo" : "Carmen", yearsHosting: 5 + index, initials: index % 2 ? "MA" : "CA" },
  amenities: sharedAmenities,
  photos: [stay.image, ...interiorPhotos],
}));
