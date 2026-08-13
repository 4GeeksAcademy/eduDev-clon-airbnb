export type Category = "All" | "Beach" | "Cabins" | "City" | "Countryside";

export interface Accommodation {
  id: string;
  title: string;
  location: string;
  category: Exclude<Category, "All">;
  pricePerNight: number;
  rating: number;
  image: string;
}
