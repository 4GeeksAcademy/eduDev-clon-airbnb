export type SortDirection = "asc" | "desc";

interface SortControlProps { direction: SortDirection; onChange: (direction: SortDirection) => void }

export const SortControl = ({ direction, onChange }: SortControlProps) => (
  <label className="flex items-center gap-2 text-sm font-medium">
    <span>Sort by price</span>
    <select aria-label="Sort accommodations by price" value={direction} onChange={(event) => onChange(event.target.value as SortDirection)} className="rounded-xl border border-zinc-200 bg-white px-3 py-2 outline-none focus:border-[#FF385C]">
      <option value="asc">Low to high</option><option value="desc">High to low</option>
    </select>
  </label>
);
