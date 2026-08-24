'use client';

import Image from 'next/image';
import dataCentreIcon from '@/assets/images/data-centre-icon.svg';
import uptimeIcon from '@/assets/images/uptime-icon.svg';
import billingIcon from '@/assets/images/billing-icon.svg';
import customerSupportIcon from '@/assets/images/customer-support.svg';
import paymentIcon from '@/assets/images/payment-icon.svg';
import { useDesign } from '@/context/DesignContext';
import HeroCloudScene from '@/components/3d/HeroCloudScene';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { designVariant } = useDesign();

  // Design 2 Modern UI Variant
  if (designVariant === 'design2') {
    return (
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#130e0b] to-[#0a090d]">
        {/* Subtle warm ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-orange-500/[0.12] blur-[160px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12">
            
            {/* Left Text Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Next-Gen Indian Cloud Infrastructure</span>
              </div>

              <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                Spin the<br />
                Future of<br />
                <span className="text-primary">
                  Cloud Reality
                </span>
              </h1>

              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Deploy high-performance cloud servers across Tier-4 data centers in India with zero lock-in, sub-millisecond latency, and hourly billing.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 active:scale-95 group">
                  <span>Get Started Free</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 rounded-full transition-all active:scale-95">
                  <span>Learn More</span>
                </button>
              </div>
            </div>

            {/* Right 3D Interactive Three.js Scene */}
            <div className="flex-1 w-full relative">
              <HeroCloudScene />
            </div>
          </div>
        </div>

        {/* Design 2 Enhanced Glassmorphic Ribbon */}
        <div className="w-full border-y border-white/10 bg-white/[0.02] backdrop-blur-xl relative z-10 py-8">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-black/20">
                <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:scale-105 transition-transform">
                  <Image alt='icon' src={dataCentreIcon} width={36} height={36}/>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">Indian Data<br/>Centres</span>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-black/20">
                <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:scale-105 transition-transform">
                  <Image alt='icon' src={uptimeIcon} width={36} height={36}/>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">99.9% Uptime<br/>SLA</span>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-black/20">
                <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:scale-105 transition-transform">
                  <Image alt='icon' src={billingIcon} width={36} height={36}/>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">Hourly Billing</span>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-black/20">
                <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:scale-105 transition-transform">
                  <Image alt='icon' src={customerSupportIcon} width={36} height={36}/>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">24×7 Expert<br/>Local Support</span>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg shadow-black/20">
                <div className="p-2.5 rounded-xl bg-orange-500/10 group-hover:scale-105 transition-transform">
                  <Image alt='icon' src={paymentIcon} width={36} height={36}/>
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">No Lock-in<br/>Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant (Exact Original Layout)
  return (
    <section className="relative lg:pb-12 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 object-cover max-w-6xl mx-auto opacity-80 pointer-events-none mix-blend-screen px-4 h-3/4"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-500/10 via-[#0a0a0a]/60 to-[#0a0a0a] opacity-90 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-6xl" >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 lg:mb-16">
          <div className="flex-1 space-y-8 text-center lg:text-left py-12 md:py-24 lg:pt-36 md:ps-14">
            <h1 className="font-montserrat text-5xl lg:text-50 font-bold tracking-tight text-[# F0E3DE] opacity-75 uppercase leading-[1.1]">
              Spin the<br />
              Future of<br />
              <span className="">Cloud Reality</span>
            </h1>
            <button className="mx-auto lg:mx-0 flex items-center justify-center gap-2 px-6 py-2 bg-transparent text-white border-2 border-primary rounded-full font-medium hover:bg-white/5 transition-all text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Ribbon */}
      <div className="w-full relative z-10 px-4">
        <div className="container mx-auto px-4 max-w-6xl border-y border-gray-300/40 py-6">
          {/* Desktop: original grid (lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 md:ps-10">
            <div className="flex items-center gap-3 lg:border-r pr-4">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={dataCentreIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">Indian Data<br/>Centres</span>
            </div>
            <div className="flex items-center gap-3 lg:border-r pr-4">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={uptimeIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">99.9% Uptime<br/>SLA</span>
            </div>
            <div className="flex items-center gap-3 lg:border-r pr-4">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={billingIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">Hourly Billing</span>
            </div>
            <div className="flex items-center gap-3 lg:border-r pr-4">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={customerSupportIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">24×7 Expert<br/>Local Support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={paymentIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">No Lock-in<br/>Contracts</span>
            </div>
          </div>

          {/* Mobile/Tablet: horizontally scrollable cards (below lg) */}
          <div className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-2 px-2">
            <div className="flex items-center gap-3 snap-start shrink-0 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-xl p-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={dataCentreIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">Indian Data<br/>Centres</span>
            </div>
            <div className="flex items-center gap-3 snap-start shrink-0 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-xl p-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={uptimeIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">99.9% Uptime<br/>SLA</span>
            </div>
            <div className="flex items-center gap-3 snap-start shrink-0 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-xl p-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={billingIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">Hourly Billing</span>
            </div>
            <div className="flex items-center gap-3 snap-start shrink-0 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-xl p-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={customerSupportIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">24×7 Expert<br/>Local Support</span>
            </div>
            <div className="flex items-center gap-3 snap-start shrink-0 min-w-[200px] bg-white/[0.03] border border-white/10 rounded-xl p-3">
              <div className="p-2 rounded-lg ">
                <Image alt='icon' src={paymentIcon} width={48} height={48}/>
              </div>
              <span className="text-sm font-medium text-neutral-300">No Lock-in<br/>Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
