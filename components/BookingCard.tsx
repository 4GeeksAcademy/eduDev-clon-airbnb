"use client";
import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/DateRangePicker";
import { GuestCounter } from "@/components/GuestCounter";

interface BookingCardProps { pricePerNight: number }

export const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [range, setRange] = useState<DateRange>();
  const nights = range?.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;
  const total = nights > 0 ? pricePerNight * nights : 0;
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg">
      <p className="mb-5 text-lg"><strong className="text-2xl">${pricePerNight}</strong> night</p>
      <DateRangePicker range={range} onChange={setRange} />
      {nights > 0 && <div className="my-4 space-y-2 border-y border-zinc-200 py-4 text-sm"><p className="flex justify-between"><span>${pricePerNight} × {nights} nights</span><span>${total}</span></p><p className="flex justify-between font-bold"><span>Total</span><span>${total}</span></p></div>}
      <div className="mt-4">
        <GuestCounter guests={guests} min={1} max={8} onDecrease={() => setGuests((value) => Math.max(1, value - 1))} onIncrease={() => setGuests((value) => Math.min(8, value + 1))} />
      </div>
      <button type="button" disabled={nights <= 0} className="mt-4 w-full rounded-xl bg-[#FF385C] px-5 py-3 font-bold text-white hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-zinc-300">{nights > 0 ? "Reserve" : "Select dates"}</button>
      <p className="mt-3 text-center text-xs text-zinc-500">You will not be charged yet</p>
    </aside>
  );
};
