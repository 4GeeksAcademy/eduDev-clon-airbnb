import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => (
  <header className="border-b border-zinc-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 md:flex-nowrap md:px-8">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#FF385C]" aria-label="Staybnb home">
        <span className="grid size-8 place-items-center rounded-xl bg-[#FF385C] text-white">⌂</span>
        <span>staybnb</span>
      </Link>
      <nav className="ml-auto flex items-center gap-2 text-sm font-medium">
        <Link href="/catalog" className="rounded-full px-3 py-2 hover:bg-zinc-100">Browse stays</Link>
        <button type="button" aria-label="Open user menu" className="rounded-full border border-zinc-200 px-3 py-2">☰ &nbsp;●</button>
      </nav>
      {onSearchChange && searchQuery !== undefined && (
        <div className="order-3 w-full md:order-none md:mx-auto md:w-auto md:flex-1">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
      )}
    </div>
  </header>
);
