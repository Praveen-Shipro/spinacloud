'use client';

import { PhoneCall, DollarSign, Zap, ShieldCheck } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

export default function Benefits() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#140e0a] to-[#0a090d]">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/[0.09] rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Local Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Why <span className="text-primary">Spin A Cloud</span>
            </h2>
          </div>

          {/* Highlighted Spotlight Glass Box */}
          <div className="max-w-4xl mx-auto border border-orange-500/30 rounded-3xl bg-gradient-to-r from-orange-500/[0.08] via-white/[0.02] to-transparent backdrop-blur-2xl p-8 md:p-12 relative mb-12 shadow-2xl shadow-orange-500/5 group hover:border-orange-500/50 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-orange-500/20 text-orange-400 shrink-0 mt-1">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Data Sovereign & Physically Indian</h3>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                  Our servers are housed in Tier-4 Indian data centres. Your content, customer records, and databases never leave Indian jurisdiction — essential for regulatory compliance, data privacy, and sub-5ms local response times.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-orange-400">
                <PhoneCall size={22} />
                <h3 className="text-xl font-bold text-white">Support that calls you back</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                No tickets lost in overseas queue hell. Our support engineering team is based in India, available 24×7, and reachable directly over phone and chat.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-orange-400">
                <DollarSign size={22} />
                <h3 className="text-xl font-bold text-white">Bills you can actually predict</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                AWS invoices are famously cryptic. SpinACloud features itemised hourly billing with no egress surprises or hidden transfer markups.
              </p>
            </div>

            <div className="md:col-span-2 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-amber-400">
                <Zap size={22} />
                <h3 className="text-xl font-bold text-white">No minimum spend. No reserved instances required.</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Spin up a compute instance for ₹6/hour. Scale instance specs or add block storage when traffic demands it — not because an annual contract forces you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section className=" px-4 relative">
      <div className="container mx-auto max-w-6xl border-b border-gray-300/40 py-12 md:py-24">
        <h2 className="text-4xl font-bold text-center font-montserrat mb-16 text-[#F0E3DE] opacity-75">
          Why Spin A Cloud
        </h2>

        {/* Desktop: X-Y Axis Grid Container (md and above) */}
        <div className="relative max-w-4xl mx-auto py-4 hidden md:block">
          {/* Vertical Y-Axis Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/60 pointer-events-none z-10" />

          {/* Horizontal X-Axis Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/4 h-px bg-white/60 pointer-events-none z-10" />

          {/* Grid Layout (4 Quadrants on 4 sides of X-Y Axis) */}
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            {/* Quadrant 1 (Top-Left) */}
            <div className="md:pr-4 ">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                Physically Indian Data Centres
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Our servers are in Indian data centres. Your content, customer data, and applications never leave the country - critical for compliance, speed, and trust.
              </p>
            </div>

            {/* Quadrant 2 (Top-Right) */}
            <div className="md:pl-4 ">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                Support that calls you back
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                No tickets lost in overseas queues. Our support team is India-based, available 24×7, and trained on the infrastructure you&apos;re actually using.
              </p>
            </div>

            {/* Quadrant 3 (Bottom-Left) */}
            <div className="md:pr-4 md:pt-8">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                Bills you can actually predict
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                AWS bills are famously complex. SpinACloud&apos;s hourly billing is transparent and itemised. You know exactly what you are paying for before the invoice arrives.
              </p>
            </div>

            {/* Quadrant 4 (Bottom-Right) */}
            <div className="md:pl-4 md:pt-8">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                No minimum spends. No reserved instances. No egress surprises.
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Start with a single VM at a few rupees per hour. Scale when your business demands it - not when your contract forces you to.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: horizontally scrollable benefit cards (below md) */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2">
          <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-bold font-montserrat text-white">
              Physically Indian Data Centres
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Our servers are in Indian data centres. Your content, customer data, and applications never leave the country - critical for compliance, speed, and trust.
            </p>
          </div>
          <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-bold font-montserrat text-white">
              Support that calls you back
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No tickets lost in overseas queues. Our support team is India-based, available 24×7, and trained on the infrastructure you&apos;re actually using.
            </p>
          </div>
          <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-bold font-montserrat text-white">
              Bills you can actually predict
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              AWS bills are famously complex. SpinACloud&apos;s hourly billing is transparent and itemised. You know exactly what you are paying for before the invoice arrives.
            </p>
          </div>
          <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-bold font-montserrat text-white">
              No minimum spends. No reserved instances. No egress surprises.
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Start with a single VM at a few rupees per hour. Scale when your business demands it - not when your contract forces you to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
