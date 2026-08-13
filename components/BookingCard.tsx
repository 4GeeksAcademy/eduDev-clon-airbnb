"use client";
import { useState } from "react";
import { GuestCounter } from "@/components/GuestCounter";

interface BookingCardProps { pricePerNight: number }

export const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg">
      <p className="mb-5 text-lg"><strong className="text-2xl">${pricePerNight}</strong> night</p>
      <GuestCounter guests={guests} min={1} max={8} onDecrease={() => setGuests((value) => Math.max(1, value - 1))} onIncrease={() => setGuests((value) => Math.min(8, value + 1))} />
      <button type="button" className="mt-4 w-full rounded-xl bg-[#FF385C] px-5 py-3 font-bold text-white hover:bg-rose-600">Reserve</button>
      <p className="mt-3 text-center text-xs text-zinc-500">You will not be charged yet</p>
    </aside>
  );
};
