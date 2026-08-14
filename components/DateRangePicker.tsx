"use client";

import { format } from "date-fns";
import { DayPicker, type DateRange } from "react-day-picker";

interface DateRangePickerProps {
  range: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

const displayDate = (date?: Date) => date ? format(date, "MMM d, yyyy") : "Select date";

export const DateRangePicker = ({ range, onChange }: DateRangePickerProps) => (
  <section aria-label="Choose check-in and check-out dates" className="rounded-xl border border-zinc-300 p-3">
    <div className="mb-3 grid grid-cols-2 gap-3 text-sm">
      <div><p className="font-semibold uppercase">Check-in</p><p>{displayDate(range?.from)}</p></div>
      <div><p className="font-semibold uppercase">Check-out</p><p>{displayDate(range?.to)}</p></div>
    </div>
    <DayPicker
      mode="range"
      selected={range}
      onSelect={onChange}
      disabled={{ before: new Date() }}
      excludeDisabled
      min={1}
      resetOnSelect
      className="mx-auto"
    />
    {range && <button type="button" onClick={() => onChange(undefined)} className="mt-2 text-sm font-semibold text-rose-600 underline">Clear dates</button>}
  </section>
);
