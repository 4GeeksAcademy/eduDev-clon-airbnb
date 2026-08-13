export const MapPlaceholder = () => (
  <section aria-label="Map placeholder" className="sticky top-4 grid min-h-72 place-items-center overflow-hidden rounded-3xl bg-zinc-200 md:min-h-[620px]">
    <div className="absolute h-px w-full rotate-12 bg-white/80" /><div className="absolute h-full w-px -rotate-12 bg-white/80" />
    <div className="z-10 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">⌖ Map preview</div>
  </section>
);
