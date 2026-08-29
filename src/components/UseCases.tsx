'use client';

import rocket from '@/assets/images/rocket-icon.svg';
import terminal from '@/assets/images/code-icon.svg';
import users from '@/assets/images/profile-icon.svg';
import shoppingCart from '@/assets/images/cart-icon.svg';
import infinity from '@/assets/images/saas-icon.svg';
import shieldCheck from '@/assets/images/breifcase-icon.svg';
import { useDesign } from '@/context/DesignContext';
import Image from 'next/image';

const useCases = [
  {
    icon: rocket,
    title: 'Startup',
    description: 'Move fast without over-investing in infrastructure. Hourly billing means you only pay for what you use. Scale when you need to - not before.',
    tag: 'Pay As You Go'
  },
  {
    icon: terminal,
    title: 'Developer / DevOps',
    description: 'Deploy via CLI, configure with YAML, access via WP-CLI or SSH. Full root access, Git-based workflows, and real-time build logs.',
    tag: 'Full Root Access'
  },
  {
    icon: users,
    title: 'Agency / Freelancer',
    description: 'Manage multiple client environments under one account. Separate billing, separate dashboards, one powerful control panel.',
    tag: 'Multi-Tenant'
  },
  {
    icon: shoppingCart,
    title: 'E-commerce',
    description: 'Handle traffic spikes during sales and festive seasons without crashing. Auto-scaling infrastructure that grows with your store.',
    tag: 'Spike Protection'
  },
  {
    icon: infinity,
    title: 'SaaS Company',
    description: 'Elastic compute for growing user bases. Spin up new environments for testing, staging, and production - independently.',
    tag: 'Elastic Compute'
  },
  {
    icon: shieldCheck,
    title: 'Enterprise',
    description: 'High availability, redundancy, Memory Optimised and CPU Optimised VM configurations, and dedicated Indian data centre hosting for compliance and performance.',
    tag: 'ISO Compliant'
  }
];

export default function UseCases() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#120d0a] to-[#0a090d]">
        {/* Subtle glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/[0.09] blur-[160px] pointer-events-none rounded-full" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
              Built for Every Scale
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              One Platform, <span className="text-primary">Every Use Case</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              SpinACloud delivers tailored compute environments for solo developers, agencies, and hyper-growth enterprises across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/20 hover:shadow-orange-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-orange-500/10 border border-white/10 group-hover:scale-105 transition-all duration-300">
                      <Image alt='icon' src={useCase.icon} height={38} width={38}/>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {useCase.tag}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {useCase.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-orange-400 group-hover:text-amber-300 transition-colors">
                  <span>Explore Workflow</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
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
    <section className="py-16 lg:py-24 px-4 bg-[#282828] border-y border-gray-800/80 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-lg uppercase mb-4 font-montserrat">Choose Your Path</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#F0E3DE] mb-6 font-montserrat">One Platform, Every Use Case</h3>
          <p className="text-neutral-300 max-w-4xl mx-auto text-base font-nunito font-light">
            SpinACloud is built for a wide range of cloud users - from solo developers to large enterprises. Choose the path that fits you:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-[#1c1d22] border border-gray-700/60 p-8 rounded-xl hover:border-primary/60 hover:bg-[#22242a] transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#272830] border border-gray-700/60 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                    <Image alt='icon' src={useCase.icon} height={32} width={32} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 px-2.5 py-1 rounded bg-[#272830] border border-gray-700/60">
                    {useCase.tag}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-montserrat text-white mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h4>
                <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
