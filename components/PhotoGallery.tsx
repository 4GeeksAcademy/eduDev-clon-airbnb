"use client";
import Image from "next/image";
import { useState } from "react";

interface PhotoGalleryProps { photos: string[]; title: string }

export const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const move = (amount: number) => setIndex((index + amount + photos.length) % photos.length);
  const descriptions = ["accommodation view", "living room", "bedroom", "kitchen"];
  return (
    <section aria-label={`${title} photo gallery`} className="relative mt-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[2/1]">
        <Image
          src={photos[index]}
          alt={`${title} ${descriptions[index] ?? `photo ${index + 1}`}`}
          fill
          sizes="(max-width: 767px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">←</button>
      <button type="button" onClick={() => move(1)} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">→</button>
      <span className="absolute bottom-3 right-3 rounded-full bg-zinc-900/75 px-3 py-1 text-xs text-white">{index + 1} / {photos.length}</span>
    </section>
  );
};
