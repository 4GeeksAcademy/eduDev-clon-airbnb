"use client";
import { use, useEffect, useState } from "react";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BackToCatalog } from "@/components/BackToCatalog";
import { BookingCard } from "@/components/BookingCard";
import { HostInfo } from "@/components/HostInfo";
import { LoadingState } from "@/components/LoadingState";
import { Navbar } from "@/components/Navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { rooms } from "@/data/accommodations";
import type { Room } from "@/types/room";

const RoomDetailPage = ({ params }: PageProps<"/rooms/[id]">) => {
  const { id } = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = window.setTimeout(() => { setRoom(rooms.find((item) => item.id === id) ?? null); setLoading(false); }, 850);
    return () => window.clearTimeout(timeout);
  }, [id]);
  if (loading) return <><Navbar /><LoadingState message="Preparing your room…" /></>;
  if (!room) return <><Navbar /><main className="mx-auto max-w-4xl px-4 py-16 text-center"><h1 className="text-2xl font-bold">Room not found</h1><p className="my-4 text-zinc-500">This stay may no longer be available.</p><BackToCatalog /></main></>;
  return <><Navbar /><main className="mx-auto max-w-6xl px-4 py-6 md:px-8"><BackToCatalog /><PhotoGallery photos={room.photos} title={room.title} /><div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(280px,1.4fr)]"><div><RoomHeader title={room.title} rating={room.rating} reviews={room.reviews} location={room.location} /><HostInfo host={room.host} /><p className="border-b border-zinc-200 py-6 leading-7 text-zinc-600">{room.description}</p><AmenitiesGrid amenities={room.amenities} /></div><div className="py-6 md:sticky md:top-4 md:self-start"><BookingCard pricePerNight={room.pricePerNight} /></div></div></main></>;
};

export default RoomDetailPage;
