'use client';

import { Star, ShieldCheck, Quote } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

const testimonials = [
  {
    rating: 5,
    text: "Hourly billing is a game changer for freelancers like me. I only pay for what I use and the performance is top notch.",
    author: "Priya Mehta",
    role: "Freelance Full-Stack Developer",
    badge: "Verified Customer"
  },
  {
    rating: 5,
    text: "SpinACloud is incredibly fast and reliable. Our website loading speed improved instantly and deployment became super easy.",
    author: "Rahul Sharma",
    role: "Founder, TechSpire India",
    badge: "Enterprise User"
  },
  {
    rating: 5,
    text: "Excellent uptime and support team. The dashboard is simple, modern, and very easy to manage across all client servers.",
    author: "Arjun Verma",
    role: "DevOps Lead",
    badge: "Agency Partner"
  }
];

export default function Testimonials() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/[0.08] rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Community Love
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto">
              Trusted By Indian <span className="text-primary">Developers & Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <Quote size={40} className="absolute top-6 right-6 text-white/[0.03] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                      {t.badge}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-8 font-normal italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm flex items-center gap-1">
                      <span>{t.author}</span>
                      <ShieldCheck size={14} className="text-neutral-500" />
                    </p>
                    <p className="text-neutral-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section className="px-4 relative">
      <div className="container mx-auto max-w-6xl py-24 border-b border-gray-300/40">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-4">Testimonials Section</h2>
          <h3 className="text-xl md:text-2xl font-bold font-montserrat text-[#F0E3DE] opacity-75l mx-auto">
            Trusted By Indian Freelancers, Businesses & Developers
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-neutral-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
