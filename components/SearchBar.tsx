interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="relative block w-full md:max-w-md">
    <span className="sr-only">Search accommodations</span>
    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">⌕</span>
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search destinations or stays"
      className="h-12 w-full rounded-full border border-zinc-200 bg-white pl-12 pr-5 text-sm shadow-sm outline-none transition focus:border-[#FF385C] focus:ring-2 focus:ring-rose-100"
    />
  </label>
);
