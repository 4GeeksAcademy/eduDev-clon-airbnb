interface RoomHeaderProps { title: string; rating: number; reviews: number; location: string }

export const RoomHeader = ({ title, rating, reviews, location }: RoomHeaderProps) => (
  <header className="border-b border-zinc-200 py-6">
    <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
    <p className="mt-2 flex flex-wrap gap-2 text-sm"><strong>★ {rating}</strong><span>·</span><span>{reviews} reviews</span><span>·</span><span className="underline">{location}</span></p>
  </header>
);
