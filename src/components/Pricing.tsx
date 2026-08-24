'use client';

import { useState } from 'react';
import { Check, ArrowRight, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';
import { Geist, Geist_Mono, Montserrat, Nunito, Inter } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plans = [
  {
    name: 'STARTER',
    tagline: 'Personal & Staging',
    description: 'Ideal for personal sites, staging & early prototypes',
    hourlyPrice: '₹6.00/hr',
    monthlyPrice: '₹4,320/mo',
    highlighted: false,
    icon: ShieldCheck,
    features: [
      '2 vCPU Cores',
      '4GB DDR5 RAM',
      '50GB NVMe SSD Storage',
      '1TB Bandwidth Transfer',
      'Free Automatic Backups',
    ]
  },
  {
    name: 'GROWTH',
    tagline: 'Most Popular for SaaS',
    description: 'Engineered for scaling SaaS apps & e-commerce stores',
    hourlyPrice: '₹14.00/hr',
    monthlyPrice: '₹10,080/mo',
    highlighted: true,
    icon: Zap,
    features: [
      '4 vCPU Cores',
      '8GB DDR5 RAM',
      '120GB NVMe SSD Storage',
      '3TB Bandwidth Transfer',
      'Free Load Balancer & SSL',
    ]
  },
  {
    name: 'BUSINESS',
    tagline: 'Enterprise Performance',
    description: 'High-availability compute for mission-critical enterprise workloads',
    hourlyPrice: '₹28.00/hr',
    monthlyPrice: '₹20,160/mo',
    highlighted: false,
    icon: Sparkles,
    features: [
      '8 vCPU Cores',
      '16GB DDR5 RAM',
      '250GB NVMe SSD Storage',
      '8TB Bandwidth Transfer',
      '24×7 Phone & Dedicated Account Manager',
    ]
  }
];

export default function Pricing() {
  const { designVariant } = useDesign();
  const [billingCycle, setBillingCycle] = useState<'hourly' | 'monthly'>('hourly');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  if (designVariant === 'design2') {
    return (
      <section id="pricing" className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#140e0a] to-[#0a090d]">
        {/* Subtle dynamic glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/[0.08] rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Simple & Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto mb-6 leading-tight">
              Trusted By Indian Freelancers, <span className="text-primary">Businesses & Developers</span>
            </h2>

            {/* Interactive Billing Toggle Switch */}
            <div className="inline-flex items-center p-1.5 bg-white/[0.04] border border-white/10 rounded-full text-xs font-semibold backdrop-blur-md shadow-xl">
              <button
                onClick={() => setBillingCycle('hourly')}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 relative ${
                  billingCycle === 'hourly'
                    ? 'bg-primary text-white shadow-lg shadow-orange-500/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Hourly Billing
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-white shadow-lg shadow-orange-500/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>Monthly Estimated</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-green-500/20 text-green-400 font-bold border border-green-500/30">
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => {
              const IconComp = plan.icon;
              const isHovered = hoveredCard === idx;
              const isOtherHovered = hoveredCard !== null && hoveredCard !== idx;

              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group/card rounded-3xl p-8 border backdrop-blur-2xl transition-all duration-500 relative flex flex-col justify-between cursor-pointer ${
                    isOtherHovered ? 'opacity-70 scale-[0.98]' : 'opacity-100'
                  } ${
                    plan.highlighted 
                      ? 'border-orange-500/60 bg-gradient-to-b from-orange-500/[0.12] via-white/[0.03] to-white/[0.01] shadow-2xl shadow-orange-500/15 lg:-translate-y-2' 
                      : 'border-white/10 bg-white/[0.02] hover:border-orange-500/40 hover:bg-white/[0.04]'
                  } ${
                    isHovered ? '-translate-y-3 shadow-[0_25px_60px_-15px_rgba(232,93,4,0.3)] border-orange-500' : ''
                  }`}
                >
                  {/* Top Ambient Glow on Card Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-500/20 to-transparent rounded-t-3xl transition-opacity duration-500 pointer-events-none ${isHovered || plan.highlighted ? 'opacity-100' : 'opacity-0'}`} />

                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5 z-20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400/90 block mb-1">
                          {plan.tagline}
                        </span>
                        <h4 className="text-2xl font-black text-white uppercase tracking-wider group-hover/card:text-primary transition-colors duration-300">
                          {plan.name}
                        </h4>
                      </div>
                      <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 group-hover/card:scale-110 group-hover/card:bg-orange-500/20 transition-all duration-300">
                        <IconComp size={22} />
                      </div>
                    </div>

                    <p className="text-neutral-400 mb-6 text-xs leading-relaxed font-nunito">{plan.description}</p>
                    
                    <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover/card:border-orange-500/20 transition-colors duration-300">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white tracking-tight group-hover/card:scale-105 transition-transform duration-300 origin-left inline-block">
                          {billingCycle === 'hourly' ? plan.hourlyPrice : plan.monthlyPrice}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 block mt-1">
                        No setup fees • Billed transparently
                      </span>
                    </div>
                    
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm group/item">
                          <div className="p-1 rounded-full bg-white/5 text-neutral-400 group-hover/card:bg-orange-500/20 group-hover/card:text-orange-400 transition-all duration-300 shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </div>
                          <span className="text-neutral-300 font-medium group-hover/card:text-white transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className={`group/btn w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden z-10 ${
                      plan.highlighted 
                        ? 'bg-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 active:scale-95' 
                        : 'bg-white/5 text-white hover:bg-primary hover:text-white border border-white/10 hover:border-primary shadow-md active:scale-95'
                    }`}
                  >
                    <span>Deploy {plan.name} Node</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section className=" px-4 relative">
      <div className="container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-4">Built for everyone</h2>
          <h3 className="text-xl md:text-2xl font-bold font-montserrat text-[#F0E3DE] opacity-75 mx-auto">
            Trusted By Indian Freelancers, Businesses & Developers
          </h3>
        </div>

        {/* Desktop: original grid (md and above) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 px-4">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-2xl p-8 border transition-all duration-200 ease-out transform ${
                plan.highlighted 
                  ? 'border-primary bg-white/[0.03] scale-105 hover:scale-[1.08] hover:-translate-y-2.5 shadow-[0_0_30px_rgba(232,93,4,0.15)] hover:shadow-[0_20px_50px_rgba(232,93,4,0.3)] z-10' 
                  : 'border-white/10 bg-black hover:border-primary/60 hover:bg-white/[0.02] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
              }`}
            >
              {/* Subtle top inner hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h4 className="text-3xl font-bold text-white mb-2 font-montserrat uppercase tracking-wider text-center group-hover:text-primary transition-colors duration-300">{plan.name}</h4>
              <p className="text-neutral-400 mb-6 text-sm text-center font-nunito">{plan.description}</p>
              
              <div className="mb-8 text-center">
                <span className="text-2xl font-inter font-bold text-white inline-block group-hover:scale-105 transition-transform duration-300">{plan.hourlyPrice}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300 shrink-0" strokeWidth={3} />
                    <span className="text-neutral-300 text-xs font-inter group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlighted 
                    ? 'bg-primary text-white hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(232,93,4,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20 hover:border-white/30'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Mobile: Swiper cards effect slider (below md) */}
        <div className="md:hidden flex justify-center">
          <div className="w-[300px]">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              pagination={{ clickable: true }}
              initialSlide={1}
              className="pricing-swiper"
            >
              {plans.map((plan, idx) => (
                <SwiperSlide key={idx} className="!rounded-2xl">
                  <div 
                    className={`relative rounded-2xl p-8 border ${
                      plan.highlighted 
                        ? 'border-primary bg-[#0a0a0a] shadow-[0_0_30px_rgba(232,93,4,0.15)]' 
                        : 'border-white/10 bg-[#0a0a0a]'
                    }`}
                  >
                    <h4 className="text-2xl font-bold text-white mb-2 font-montserrat uppercase tracking-wider text-center">{plan.name}</h4>
                    <p className="text-neutral-400 mb-6 text-sm text-center font-nunito">{plan.description}</p>
                    
                    <div className="mb-8 text-center">
                      <span className="text-2xl font-inter font-bold text-white">{plan.hourlyPrice}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={3} />
                          <span className="text-neutral-300 text-xs font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        plan.highlighted 
                          ? 'bg-primary text-white' 
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
