'use client';

import { Cloud, Shield, Cpu, Activity } from 'lucide-react';
import Image from 'next/image';
import { useDesign } from '@/context/DesignContext';

export default function AboutUs() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <section id="about" className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-orange-500/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Video container with modern glass frame */}
            <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-4 shadow-2xl group hover:border-orange-500/30 transition-all duration-500">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl opacity-90 mix-blend-screen"
              >
                <source src="/assets/videos/video-2.mp4" type="video/mp4" />
              </video>

              {/* Floating Stat Pills overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10">
                  <Activity className="text-primary shrink-0" size={18} />
                  <div>
                    <div className="text-xs text-neutral-500">Latency</div>
                    <div className="text-sm font-bold text-white">&lt; 5ms in India</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10">
                  <Shield className="text-neutral-400 shrink-0" size={18} />
                  <div>
                    <div className="text-xs text-neutral-400">Resilience</div>
                    <div className="text-sm font-bold text-white">Zero Single Fail</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="order-1 md:order-2 space-y-6 text-neutral-300">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
                  Architected for High Scale
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
                  Not a server.
                </h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary">
                  An entire cloud.
                </h3>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                Traditional hosting ties your website to one physical machine. If it fails, you are down. Cloud hosting distributes your workload across a self-healing network of Tier-4 nodes — so there&apos;s no single point of failure.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-neutral-400">
                SpinACloud gives you that enterprise-grade resilience without the complexity. Physically stationed close to your Indian audience for maximum speed and sub-second load times.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section id="about" className="px-4 relative">
      <div className="container mx-auto border-b border-gray-300/40 py-12 lg:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video — visible only on md+ (desktop side-by-side layout) */}
          <div className="hidden md:block md:order-1 relative ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="inset-0 object-cover mx-auto opacity-80 pointer-events-none mix-blend-screen px-4 "
            >
              <source src="/assets/videos/video-2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="order-1 md:order-2 space-y-6 text-lg text-neutral-400 lg:pe-8">
            <div className="mb-12">
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-lg">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F0E3DE] mb-2 font-montserrat opacity-75">Not a server.</h3>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F0E3DE] font-montserrat opacity-75">An entire cloud.</h3>
            </div>

            {/* Video — visible only on mobile (between headers and paragraphs) */}
            <div className="md:hidden relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="inset-0 object-cover mx-auto opacity-80 pointer-events-none mix-blend-screen px-4 "
              >
                <source src="/assets/videos/video-2.mp4" type="video/mp4" />
              </video>
            </div>

            <p className='text-[#F0E3DE] font-nunito font-extralight'>
              Traditional hosting ties your website to one physical machine. If it fails, you are down. Cloud hosting distributes your workload across a network of servers - so there&apos;s no single point of failure. Your app keeps running even if a machine goes offline.
            </p>
            <p className='text-[#F0E3DE] font-nunito font-extralight'>
              SpinACloud gives you that enterprise-grade resilience, without the enterprise-grade price tag and with infrastructure that&apos;s physically close to your Indian visitors, meaning faster load times and lower latency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
