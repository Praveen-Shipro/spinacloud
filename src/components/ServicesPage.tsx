'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cloud,
  Server,
  HardDrive,
  Globe,
  Network,
  Cpu,
  Activity,
  ShieldCheck,
  Clock,
  PhoneCall,
  Infinity,
  CheckSquare,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { useDesign } from '@/context/DesignContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProvisionItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

function HorizontalProvisionScroll({
  items,
  variant,
  containerSpacing,
}: {
  items: ProvisionItem[];
  variant: 'design1' | 'design2';
  containerSpacing: string;
}) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current || !viewportRef.current) return;

      const track = trackRef.current;
      const viewport = viewportRef.current;

      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.8,
          start: 'top top+=96',
          end: () => `+=${Math.max(window.innerHeight * 1.5, getScrollAmount() + 400)}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [variant, items] }
  );

  if (variant === 'design2') {
    return (
      <section
        ref={sectionRef}
        className="relative w-full min-h-[calc(100vh-6rem)] py-12 md:py-16 flex flex-col justify-center overflow-hidden border-b border-white/10 z-10"
      >
        <div className={`container mx-auto max-w-6xl w-full px-4 ${containerSpacing}`}>
          {/* Header with scroll progress indicator */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-3">
                Infrastructure Breakdown
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                What we provision for you:
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">
                {Math.min(items.length, Math.max(1, Math.ceil(progress * items.length)))} / {items.length}
              </span>
              <div className="w-28 md:w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-75 ease-out rounded-full"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Horizontal Cards Viewport */}
          <div ref={viewportRef} className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4 md:gap-6 will-change-transform pr-12 md:pr-24"
            >
              {items.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-[82vw] sm:w-[340px] md:w-[380px] lg:w-[420px] shrink-0 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-bold font-mono text-orange-400 group-hover:scale-105 transition-transform">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                          <IconComp size={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                      <span>Provisioned in IXG Zone</span>
                      <span className="text-emerald-400 font-medium">Instant Spin Up</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-6rem)] py-12 md:py-16 flex flex-col justify-center overflow-hidden border-b border-gray-300/40 px-4"
    >
      <div className={`container mx-auto max-w-6xl w-full ${containerSpacing}`}>
        {/* Header with progress */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold font-montserrat text-[#F0E3DE] opacity-90">
              What we provision for you:
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              {Math.min(items.length, Math.max(1, Math.ceil(progress * items.length)))} / {items.length}
            </span>
            <div className="w-28 md:w-36 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-75 ease-out rounded-full"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Track Viewport */}
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-6 will-change-transform pr-12 md:pr-24"
          >
            {items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="w-[82vw] sm:w-[340px] md:w-[380px] lg:w-[420px] shrink-0 border border-gray-300/40 p-8 rounded-xl bg-[#0e0e0e] flex flex-col justify-between hover:border-primary/60 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-bold font-montserrat text-primary block">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg border border-primary/40 flex items-center justify-center text-primary">
                        <IconComp size={20} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>IXG DATA CENTRE</span>
                    <span className="text-primary">100% INDIAN INFRA</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { designVariant } = useDesign();
  const [activeTab, setActiveTab] = useState<'service1' | 'service2'>('service1');
  const containerSpacing = 'md:px-8 lg:px-10 xl:px-16';

  const provisionFeatures = [
    {
      num: '01',
      title: 'Virtual Machines',
      desc: 'Four compute types for every workload: Basic, General Purpose, CPU Optimised, and Memory Optimised. All VMs include unlimited bandwidth and run on Indian infrastructure.',
      icon: Server,
    },
    {
      num: '02',
      title: 'Volume Storage',
      desc: 'High-performance SSD block storage in two tiers: Enterprise NVMe M2 for maximum IOPS, and NVMe SSD for general-purpose storage. Available from 100 GB to 1,000 GB, directly attached to your VMs.',
      icon: HardDrive,
    },
    {
      num: '03',
      title: 'IP Addressing',
      desc: 'Static public IP allocation so your services are reachable at a consistent, publicly accessible address.',
      icon: Globe,
    },
    {
      num: '04',
      title: 'Networking',
      desc: 'Virtual Router for private inter-VM networking, and Load Balancer for distributing traffic across multiple servers to keep high-traffic applications online and responsive.',
      icon: Network,
    },
  ];

  const planInclusions = [
    {
      icon: Infinity,
      title: 'Unlimited bandwidth - no data transfer charges',
      desc: 'Zero hidden egress fees or traffic transfer limits.',
    },
    {
      icon: Activity,
      title: '99.9% uptime SLA',
      desc: 'Enterprise reliability backed by redundant power and networking.',
    },
    {
      icon: Server,
      title: 'Indian data centres - IXG-Belagavi zone',
      desc: 'Ultra-low latency routing directly across Indian networks.',
    },
    {
      icon: PhoneCall,
      title: '24×7 India-based support',
      desc: 'Local engineering experts available around the clock.',
    },
    {
      icon: Clock,
      title: 'Hourly billing - pay only for active hours',
      desc: 'Granular pay-as-you-go pricing for maximum cost efficiency.',
    },
    {
      icon: ShieldCheck,
      title: 'No lock-in contracts',
      desc: 'Cancel or scale your cloud servers anytime instantly.',
    },
  ];

  const targetAudiences = [
    { name: 'Startups & Growing Businesses', desc: 'Reliable infrastructure without the complexity or cost of AWS or Azure.' },
    { name: 'Developers & DevOps Teams', desc: 'Full root access, CLI deployment, SSH keys, and YAML configuration.' },
    { name: 'Agencies', desc: 'Managing multiple client environments with isolated compute instances.' },
    { name: 'E-commerce Businesses', desc: 'Elastic compute ready for seasonal traffic spikes and flash sales.' },
    { name: 'SaaS Companies', desc: 'Scalable backend compute with sub-millisecond local latency across India.' },
    { name: 'Enterprises', desc: 'High-availability Indian cloud hosting for strict compliance and data residency.' },
  ];

  // ==========================================
  // DESIGN 2: Modern 3D / Glassmorphic Layout
  // ==========================================
  if (designVariant === 'design2') {
    return (
      <div id="services" className="relative overflow-hidden bg-linear-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-orange-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

        {/* Hero Section */}
        <section className="px-4 pt-20 pb-16 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-6">
              Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#F0E3D3] opacity-75 mb-8 leading-tight tracking-tight font-inter">
              Everything Your Application Needs.<br />
              <span className="text-primary">Under One Indian Cloud.</span>
            </h1>
            <div className="max-w-4xl space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed mb-10">
              <p>
                SpinACloud does two things exceptionally well - and we believe in doing fewer things better rather than more things poorly.
              </p>
              <p className="text-neutral-400">
                Whether you need raw cloud infrastructure to run any application, or a fully managed WordPress environment that handles itself, SpinACloud has a service built around your actual need.
              </p>
              <p className="text-neutral-400">
                Both services run on Indian data centres, include unlimited bandwidth, bill by the hour, and come with 24×7 local support.
              </p>
            </div>

            {/* Service Toggle Tabs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setActiveTab('service1')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'service1'
                    ? 'bg-primary text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                <Cloud size={18} />
                <span>Service-1</span>
              </button>

              <button
                onClick={() => setActiveTab('service2')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'service2'
                    ? 'bg-primary text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">W</span>
                <span>Service-2</span>
              </button>
            </div>
          </div>
        </section>

        {/* Service 1 / Service 2 Overview Card */}
        <section className="px-4 py-20 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            {activeTab === 'service1' ? (
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block">
                    Service 1: Cloud Infrastructure Provisioning
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    The cloud your application runs on.
                  </h2>
                  <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                    <p>
                      SpinACloud provisions and manages the underlying cloud infrastructure your websites, applications, databases, and services need to run - reliably, at scale, and at a price that makes sense for Indian businesses.
                    </p>
                    <p className="text-neutral-400">
                      This is not shared hosting. This is not a VPS tied to a single physical machine. SpinACloud&apos;s cloud infrastructure distributes your workload across a resilient network of servers with Indian data centres at its core - so your applications stay online, stay fast, and scale when your business demands it.
                    </p>
                  </div>
                </div>

                {/* Dashboard Graphic Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 p-6 backdrop-blur-xl shadow-2xl shadow-black/60 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs text-neutral-400 font-mono">spinacloud-ixg-01</span>
                    </div>

                    {/* Instance Monitor Badges */}
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-sm font-semibold text-white">Basic Compute</span>
                        </div>
                        <span className="text-xs font-mono text-orange-400">₹6/hr</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-primary/10 border border-orange-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-sm font-semibold text-white">General Purpose</span>
                        </div>
                        <span className="text-xs font-mono text-orange-400">₹14/hr</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-sm font-semibold text-white">CPU Optimised</span>
                        </div>
                        <span className="text-xs font-mono text-orange-400">₹28/hr</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-sm font-semibold text-white">Memory Optimised</span>
                        </div>
                        <span className="text-xs font-mono text-orange-400">High-Cap</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                      <span>Datacenter: <strong>IXG Belagavi</strong></span>
                      <span className="text-emerald-400 font-medium">99.9% Uptime SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block">
                    Service 2: Managed WordPress Hosting
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    The WordPress environment that manages itself.
                  </h2>
                  <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                    <p>
                      Built on top of our enterprise Indian cloud infrastructure, our Managed WordPress hosting gives you automated updates, one-click staging, server-level caching (Redis & NGINX), and daily automated backups.
                    </p>
                    <p className="text-neutral-400">
                      No server administration needed. Focus on building content and growing your business while SpinACloud ensures lightning-fast load times for Indian visitors.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 p-6 backdrop-blur-xl shadow-2xl shadow-black/60 relative">
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                        <CheckSquare className="text-primary shrink-0" size={18} />
                        <span className="text-sm text-neutral-200">1-Click WordPress Setup</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                        <CheckSquare className="text-primary shrink-0" size={18} />
                        <span className="text-sm text-neutral-200">NVMe SSD Caching & Free SSL</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                        <CheckSquare className="text-primary shrink-0" size={18} />
                        <span className="text-sm text-neutral-200">Daily Automated Off-site Backups</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                        <CheckSquare className="text-primary shrink-0" size={18} />
                        <span className="text-sm text-neutral-200">Automatic Core & Plugin Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* What We Provision For You - Sticky Horizontal Scroll */}
        <HorizontalProvisionScroll
          items={provisionFeatures}
          variant="design2"
          containerSpacing={containerSpacing}
        />

        {/* Who This Service Is For */}
        <section className="px-4 py-20 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-8 md:p-12 backdrop-blur-xl">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Who this service is for:
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-4xl mb-8">
                Startups and growing businesses that need reliable infrastructure without the complexity or cost of AWS or Azure. Developers and DevOps teams who want full root access, CLI deployment, and YAML configuration. Agencies managing multiple client environments. E-commerce businesses needing traffic spike resilience. SaaS companies requiring elastic compute. Enterprises that need high-availability Indian cloud hosting for compliance and performance.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {targetAudiences.map((aud, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <CheckSquare size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{aud.name}</h4>
                      <p className="text-xs text-neutral-400">{aud.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included on Every Plan */}
        <section className="px-4 py-20 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-12 tracking-tight">
              What&apos;s included on every plan:
            </h2>

            {/* Desktop 3-Column Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planInclusions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Horizontally Scrollable Cards */}
            <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
              {planInclusions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="snap-start shrink-0 w-[280px] p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Which Service Do I Need? */}
        <section className="px-4 py-20 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tight">
              Which service do I need?
            </h2>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  If you want to host WordPress
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  choose <strong className="text-white">Managed WordPress Hosting</strong>. You get the cloud infrastructure plus WP Server Setup at no extra cost.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  If you want to host anything else
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  a SaaS app, an API, a database, a mobile backend, a custom application — choose <strong className="text-white">Cloud Infrastructure Provisioning</strong>. Full control, full root access, unlimited bandwidth.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  If you need multi-server or custom clusters
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  custom database clustering, private networking, or load-balanced infrastructure — choose <strong className="text-white">Cloud Infrastructure Provisioning</strong>. Full control, full root access, unlimited bandwidth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner & Follow Us */}
        <section className="px-4 py-20 relative z-10">
          <div className={`container mx-auto max-w-6xl space-y-12 ${containerSpacing}`}>
            {/* Desktop CTA Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-[#d85803] to-amber-600 p-8 md:p-14 text-center text-white shadow-2xl shadow-orange-500/20">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-8 font-medium">
                Talk To Our Team — We&apos;ll Recommend The Right Setup For Your Website And Budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 rounded-full bg-black text-white font-semibold hover:bg-neutral-900 transition-all text-sm shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/#pricing"
                  className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition-all text-sm shadow-md"
                >
                  View Plans
                </Link>
              </div>
            </div>

            {/* Mobile / Social Follow Card */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-xl mx-auto backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Follow Spin A Cloud</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Stay Updated With Hosting Tips, Downtime Alerts, And Product News:
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-orange-500 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-orange-500 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-orange-500 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-orange-500 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ==========================================
  // DESIGN 1: Figma Classic Layout (Original)
  // ==========================================
  return (
    <div id="services" className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="px-4 pt-12 md:pt-24">
        <div className={`${containerSpacing} container mx-auto max-w-6xl pb-12 border-b border-gray-300/40`}>
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-lg">
            Services
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-50 font-bold text-[#F0E3DE] mb-8 font-inter leading-tight max-w-4xl opacity-75">
            Everything Your Application Needs.<br />
            Under One Indian Cloud.
          </h1>
          <div className="space-y-4 max-w-4xl">
            <p className="text-[#FFFFFF] opacity-75 font-nunito font-extralight text-sm md:text-base leading-relaxed">
              SpinACloud does two things exceptionally well - and we believe in doing fewer things better rather than more things poorly.
            </p>
            <p className="text-[#FFFFFF] opacity-75 font-nunito font-extralight text-sm md:text-base leading-relaxed">
              Whether you need raw cloud infrastructure to run any application, or a fully managed WordPress environment that handles itself, SpinACloud has a service built around your actual need.
            </p>
            <p className="text-[#FFFFFF] opacity-75 font-nunito font-extralight text-sm md:text-base leading-relaxed">
              Both services run on Indian data centres, include unlimited bandwidth, bill by the hour, and come with 24×7 local support.
            </p>
          </div>


        </div>
      </section>

      {/* Service 1 / Service 2 Overview */}
      <section className="px-4">

        <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
          {/* Service Toggle Pills */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-15">
            <button
              onClick={() => setActiveTab('service1')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'service1'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-[#141414] border border-gray-700/60 text-neutral-300 hover:text-white'
                }`}
            >
              <Cloud size={16} />
              <span>Service-1</span>
            </button>

            <button
              onClick={() => setActiveTab('service2')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'service2'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-[#141414] border border-gray-700/60 text-neutral-300 hover:text-white'
                }`}
            >
              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">W</span>
              <span>Service-2</span>
            </button>
          </div>
          {activeTab === 'service1' ? (
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h3 className="text-primary font-semibold tracking-wider uppercase font-inter text-sm">
                  Service 1: Cloud Infrastructure Provisioning
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-[#F0E3DE] font-montserrat opacity-90 leading-tight">
                  The cloud your application runs on.
                </h2>
                <div className="space-y-4">
                  <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg leading-relaxed">
                    SpinACloud provisions and manages the underlying cloud infrastructure your websites, applications, databases, and services need to run - reliably, at scale, and at a price that makes sense for Indian businesses.
                  </p>
                  <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg leading-relaxed">
                    This is not shared hosting. This is not a VPS tied to a single physical machine. SpinACloud&apos;s cloud infrastructure distributes your workload across a resilient network of servers with Indian data centres at its core - so your applications stay online, stay fast, and scale when your business demands it.
                  </p>
                </div>
              </div>

              {/* Graphic container */}
              <div className="md:col-span-5">
                <div className="border border-gray-300/40 rounded-xl p-6 bg-[#0f0f0f]">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700/50 mb-4 text-xs font-mono text-neutral-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-primary font-bold">IXG-ZONE</span>
                  </div>
                  <div className="space-y-3">
                    {['Basic', 'General Purpose', 'CPU Optimised', 'Memory Optimised'].map((tier, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-black/60 border border-gray-800 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-sm font-medium text-white">{tier}</span>
                        </div>
                        <span className="text-xs text-primary font-mono font-semibold">Tier-{i + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-between text-xs text-neutral-400">
                    <span>Unlimited Bandwidth</span>
                    <span>100% Indian Infra</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h3 className="text-primary font-semibold tracking-wider uppercase font-inter text-sm">
                  Service 2: Managed WordPress Hosting Powered by WP Server Setup
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold text-[#F0E3DE] font-montserrat opacity-90 leading-tight">
                  The WordPress environment that manages itself.
                </h2>
                <div className="space-y-4">
                  <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg leading-relaxed">
                    Built on top of our enterprise Indian cloud infrastructure, our Managed WordPress hosting gives you automated updates, one-click staging, server-level caching (Redis & NGINX), and daily automated backups.
                  </p>
                  <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg leading-relaxed">
                    No server administration needed. Focus on building content and growing your business while SpinACloud ensures lightning-fast load times for Indian visitors.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="border border-gray-300/40 rounded-xl p-6 bg-[#0f0f0f] space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-black/60 border border-gray-800 rounded-lg">
                    <CheckSquare className="text-primary shrink-0" size={18} />
                    <span className="text-sm text-neutral-200">1-Click WordPress Setup</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/60 border border-gray-800 rounded-lg">
                    <CheckSquare className="text-primary shrink-0" size={18} />
                    <span className="text-sm text-neutral-200">NVMe SSD Caching & Free SSL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/60 border border-gray-800 rounded-lg">
                    <CheckSquare className="text-primary shrink-0" size={18} />
                    <span className="text-sm text-neutral-200">Daily Automated Off-site Backups</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/60 border border-gray-800 rounded-lg">
                    <CheckSquare className="text-primary shrink-0" size={18} />
                    <span className="text-sm text-neutral-200">Automatic Core & Plugin Updates</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What we provision for you - Sticky Horizontal Scroll */}
      <HorizontalProvisionScroll
        items={provisionFeatures}
        variant="design1"
        containerSpacing={containerSpacing}
      />

      {/* Who this service is for */}
      <section className="px-4">
        <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
          <div className="border border-gray-300/40 rounded-xl p-8 md:p-12 bg-[#0d0d0d]">
            <h2 className="text-xl md:text-2xl font-bold font-montserrat text-[#FFFFFF] mb-6">
              Who this service is for:
            </h2>
            <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg leading-relaxed max-w-4xl mb-8 opacity-80">
              Startups and growing businesses that need reliable infrastructure without the complexity or cost of AWS or Azure. 
              Developers and DevOps teams who want full root access, CLI deployment, and YAML configuration. 
              Agencies managing multiple client environments. E-commerce businesses needing traffic spike resilience. 
              SaaS companies requiring elastic compute. Enterprises that need high-availability Indian cloud hosting for compliance and performance.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {targetAudiences.map((aud, i) => (
                <div key={i} className="p-4 rounded-lg bg-black/60 border border-gray-800/80 flex items-start gap-3">
                  <CheckSquare size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold font-montserrat text-white mb-1">{aud.name}</h4>
                    <p className="text-xs text-[#F0E3DE] font-nunito font-extralight opacity-75">{aud.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included on every plan */}
      <section className="px-4">
        <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-[#F0E3DE] mb-12 opacity-90">
            What&apos;s included on every plan:
          </h2>

          {/* Desktop 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planInclusions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-gray-300/40 bg-[#0e0e0e] flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-lg border border-primary flex items-center justify-center text-primary mb-6 shrink-0">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#F0E3DE] font-nunito font-extralight opacity-80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontally Scrollable Cards */}
          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2">
            {planInclusions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="snap-start shrink-0 w-[280px] p-6 rounded-xl border border-gray-300/40 bg-[#0e0e0e] flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-lg border border-primary flex items-center justify-center text-primary mb-6 shrink-0">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-montserrat text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-[#F0E3DE] font-nunito font-extralight opacity-80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Which service do I need? */}
      <section className="px-4">
        <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
          <h2 className="text-2xl md:text-4xl font-bold font-montserrat text-[#F0E3DE] mb-12 opacity-90">
            Which service do I need?
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-300/40 rounded-xl p-6 md:p-8 bg-[#0d0d0d]">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                If you want to host WordPress
              </h3>
              <p className="text-[#F0E3DE] font-nunito font-extralight text-base opacity-80 leading-relaxed">
                choose <strong className="text-white font-medium">Managed WordPress Hosting</strong>. You get the cloud infrastructure plus WP Server Setup at no extra cost.
              </p>
            </div>

            <div className="border border-gray-300/40 rounded-xl p-6 md:p-8 bg-[#0d0d0d]">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                If you want to host anything else
              </h3>
              <p className="text-[#F0E3DE] font-nunito font-extralight text-base opacity-80 leading-relaxed">
                a SaaS app, an API, a database, a mobile backend, a custom application — choose <strong className="text-white font-medium">Cloud Infrastructure Provisioning</strong>. Full control, full root access, unlimited bandwidth.
              </p>
            </div>

            <div className="border border-gray-300/40 rounded-xl p-6 md:p-8 bg-[#0d0d0d]">
              <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                If you need multi-server or custom clusters
              </h3>
              <p className="text-[#F0E3DE] font-nunito font-extralight text-base opacity-80 leading-relaxed">
                custom database clustering, private networking, or load-balanced infrastructure — choose <strong className="text-white font-medium">Cloud Infrastructure Provisioning</strong>. Full control, full root access, unlimited bandwidth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner & Follow Us */}
      <section className="px-4 py-16">
        <div className={`container mx-auto max-w-6xl space-y-12 ${containerSpacing}`}>
          {/* Orange Gradient CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-[#d85803] to-amber-600 p-8 md:p-12 text-center text-white shadow-xl shadow-orange-500/10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat mb-4 tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto mb-8 font-nunito font-normal">
              Talk To Our Team — We&apos;ll Recommend The Right Setup For Your Website And Budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-3 rounded-full bg-black text-white font-montserrat font-semibold hover:bg-neutral-900 transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/#pricing"
                className="px-8 py-3 rounded-full bg-white text-black font-montserrat font-semibold hover:bg-neutral-100 transition-colors text-sm"
              >
                View Plans
              </Link>
            </div>
          </div>

          {/* Follow Spin A Cloud */}
          <div className="p-8 rounded-xl border border-gray-300/40 text-center max-w-xl mx-auto bg-[#0d0d0d]">
            <h3 className="text-lg font-bold font-montserrat text-white mb-2">Follow Spin A Cloud</h3>
            <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 mb-6">
              Stay Updated With Hosting Tips, Downtime Alerts, And Product News:
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
