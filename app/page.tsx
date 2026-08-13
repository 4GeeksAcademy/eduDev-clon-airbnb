"use client";
import { useEffect, useState } from "react";
import { AccommodationGrid } from "@/components/AccommodationGrid";
import { CategoryFilter } from "@/components/CategoryFilter";
import { LoadingState } from "@/components/LoadingState";
import { Navbar } from "@/components/Navbar";
import { accommodations, categories } from "@/data/accommodations";
import type { Accommodation, Category } from "@/types/accommodation";

const HomePage = () => {
  const [loadedStays, setLoadedStays] = useState<Accommodation[]>([]);
  const [filteredStays, setFilteredStays] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    const timeout = window.setTimeout(() => { setLoadedStays(accommodations); setFilteredStays(accommodations); setLoading(false); }, 850);
    return () => window.clearTimeout(timeout);
  }, []);

  const filterStays = (searchQuery: string, category: Category) => loadedStays.filter((stay) => {
    const matchesQuery = `${stay.title} ${stay.location}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All" || stay.category === category;
    return matchesQuery && matchesCategory;
  });

  const handleSearchChange = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilteredStays(filterStays(searchQuery, activeCategory));
  };

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category);
    setFilteredStays(filterStays(query, category));
  };

  return <><Navbar searchQuery={query} onSearchChange={handleSearchChange} /><main className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-8"><CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={handleCategorySelect} /><section className="py-7"><div className="mb-6"><p className="text-sm font-semibold text-[#FF385C]">Handpicked stays</p><h1 className="mt-1 text-2xl font-bold md:text-3xl">Find a place that feels like yours</h1></div>{loading ? <LoadingState /> : <AccommodationGrid accommodations={filteredStays} />}</section></main></>;
};

export default HomePage;
