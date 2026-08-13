import type { Category } from "@/types/accommodation";

interface CategoryFilterProps {
  categories: { label: Category; icon: string }[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onSelect }: CategoryFilterProps) => (
  <div className="flex gap-7 overflow-x-auto border-b border-zinc-100 py-4" aria-label="Accommodation categories">
    {categories.map(({ label, icon }) => {
      const active = label === activeCategory;
      return (
        <button key={label} type="button" onClick={() => onSelect(label)} aria-pressed={active}
          className={`flex min-w-16 flex-col items-center gap-1 border-b-2 pb-2 text-xs font-medium transition ${active ? "border-[#FF385C] text-[#FF385C]" : "border-transparent text-zinc-500 hover:text-zinc-900"}`}>
          <span className="text-xl" aria-hidden="true">{icon}</span>{label}
        </button>
      );
    })}
  </div>
);
