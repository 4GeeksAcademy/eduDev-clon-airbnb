import Image from "next/image";
import Link from "next/link";
import type { Accommodation } from "@/types/accommodation";

interface AccommodationCardProps { accommodation: Accommodation }

export const AccommodationCard = ({ accommodation }: AccommodationCardProps) => (
  <Link href={`/rooms/${accommodation.id}`} className="group block" aria-label={`View ${accommodation.title}`}>
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src={accommodation.image}
        alt={`${accommodation.title} in ${accommodation.location}`}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-cover transition-transform group-hover:scale-[1.01]"
      />
      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-sm">♡</span>
    </div>
    <div className="mt-3 flex items-start justify-between gap-2">
      <div><h3 className="font-semibold text-zinc-900">{accommodation.title}</h3><p className="text-sm text-zinc-500">{accommodation.location}</p></div>
      <span className="whitespace-nowrap text-sm">★ {accommodation.rating}</span>
    </div>
    <p className="mt-1 text-sm"><strong>${accommodation.pricePerNight}</strong> night</p>
  </Link>
);
