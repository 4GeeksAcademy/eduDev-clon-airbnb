import type { Host } from "@/types/room";

interface HostInfoProps { host: Host }

export const HostInfo = ({ host }: HostInfoProps) => (
  <section className="flex items-center gap-4 border-b border-zinc-200 py-6">
    <div aria-label={`${host.name} avatar placeholder`} className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-rose-200 to-[#FF385C] font-bold text-white">{host.initials}</div>
    <div><h2 className="font-bold">Hosted by {host.name}</h2><p className="text-sm text-zinc-500">{host.yearsHosting} years hosting</p></div>
  </section>
);
