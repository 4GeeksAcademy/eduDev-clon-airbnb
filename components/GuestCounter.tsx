interface GuestCounterProps { guests: number; onDecrease: () => void; onIncrease: () => void; min: number; max: number }

export const GuestCounter = ({ guests, onDecrease, onIncrease, min, max }: GuestCounterProps) => (
  <div className="flex items-center justify-between rounded-xl border border-zinc-300 p-3">
    <div><p className="text-sm font-semibold">Guests</p><p className="text-xs text-zinc-500">Maximum {max}</p></div>
    <div className="flex items-center gap-3"><button type="button" onClick={onDecrease} disabled={guests === min} aria-label="Remove guest" className="size-8 rounded-full border disabled:opacity-30">−</button><output aria-live="polite" className="w-4 text-center">{guests}</output><button type="button" onClick={onIncrease} disabled={guests === max} aria-label="Add guest" className="size-8 rounded-full border disabled:opacity-30">+</button></div>
  </div>
);
