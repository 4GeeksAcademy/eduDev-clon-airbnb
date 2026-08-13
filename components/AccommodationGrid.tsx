import { AccommodationCard } from "@/components/AccommodationCard";
import type { Accommodation } from "@/types/accommodation";

interface AccommodationGridProps { accommodations: Accommodation[] }

export const AccommodationGrid = ({ accommodations }: AccommodationGridProps) => {
  if (!accommodations.length) return <p className="rounded-2xl bg-zinc-50 p-8 text-center text-zinc-600">No stays match your filters.</p>;
  return <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{accommodations.map((stay) => <AccommodationCard key={stay.id} accommodation={stay} />)}</div>;
};
