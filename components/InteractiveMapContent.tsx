"use client";

import Link from "next/link";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import type { Accommodation } from "@/types/accommodation";

interface InteractiveMapContentProps { accommodations: Accommodation[] }

export const InteractiveMapContent = ({ accommodations }: InteractiveMapContentProps) => (
  <MapContainer
    bounds={accommodations.map(({ coordinates }) => coordinates)}
    boundsOptions={{ padding: [28, 28] }}
    className="h-full w-full"
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {accommodations.map((stay) => (
      <CircleMarker
        key={stay.id}
        center={stay.coordinates}
        radius={9}
        pathOptions={{ color: "#be123c", fillColor: "#FF385C", fillOpacity: 0.9, weight: 2 }}
      >
        <Popup>
          <strong>{stay.title}</strong><br />
          {stay.location}<br />
          ${stay.pricePerNight} per night<br />
          <Link href={`/rooms/${stay.id}`} className="font-semibold text-rose-600 underline">View stay</Link>
        </Popup>
      </CircleMarker>
    ))}
  </MapContainer>
);
