"use client";

import dynamic from "next/dynamic";
import type { Accommodation } from "@/types/accommodation";

const Map = dynamic(
  () => import("@/components/InteractiveMapContent").then((module) => module.InteractiveMapContent),
  { ssr: false, loading: () => <p className="grid h-full place-items-center text-sm text-zinc-600">Loading map…</p> },
);

interface InteractiveMapProps { accommodations: Accommodation[] }

export const InteractiveMap = ({ accommodations }: InteractiveMapProps) => (
  <section aria-label="Map of available stays" className="h-80 overflow-hidden rounded-3xl bg-zinc-200 md:sticky md:top-4 md:h-[620px]">
    <Map accommodations={accommodations} />
  </section>
);
