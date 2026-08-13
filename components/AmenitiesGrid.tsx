import type { Amenity } from "@/types/room";

interface AmenitiesGridProps { amenities: Amenity[] }

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => (
  <section className="py-6"><h2 className="mb-4 text-xl font-bold">What this place offers</h2><div className="grid grid-cols-2 gap-4">{amenities.map((amenity) => <div key={amenity.label} className="flex items-center gap-3"><span aria-hidden="true">{amenity.icon}</span><span className="text-sm">{amenity.label}</span></div>)}</div></section>
);
