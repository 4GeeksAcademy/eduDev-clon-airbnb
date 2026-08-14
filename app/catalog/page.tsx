"use client";
import { useMemo, useState } from "react";
import { AccommodationGrid } from "@/components/AccommodationGrid";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Navbar } from "@/components/Navbar";
import { SortControl, type SortDirection } from "@/components/SortControl";
import { accommodations } from "@/data/accommodations";

const CatalogPage = () => {
  const [direction, setDirection] = useState<SortDirection>("asc");
  const sortedStays = useMemo(() => [...accommodations].sort((a, b) => direction === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight), [direction]);
  return <><Navbar /><main className="mx-auto max-w-7xl px-4 py-7 md:px-8"><header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm text-zinc-500">Explore every destination</p><h1 className="text-2xl font-bold">{sortedStays.length} stays available</h1></div><SortControl direction={direction} onChange={setDirection} /></header><div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)]"><AccommodationGrid accommodations={sortedStays} /><InteractiveMap accommodations={sortedStays} /></div></main></>;
};

export default CatalogPage;
