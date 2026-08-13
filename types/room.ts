import type { Accommodation } from "@/types/accommodation";

export interface Host {
  name: string;
  yearsHosting: number;
  initials: string;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Room extends Accommodation {
  reviews: number;
  description: string;
  host: Host;
  amenities: Amenity[];
  photos: string[];
}
