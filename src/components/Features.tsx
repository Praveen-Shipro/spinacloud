'use client';

import { CheckSquare } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

const features = [
  {
    title: 'WordPress Websites',
    description: 'From single business sites to large multi-tenant or high-traffic corporate installations.'
  },
  {
    title: 'Development And Staging Environments',
    description: 'spin up and tear down in minutes'
  },
  {
    title: 'E-Commerce Stores',
    description: 'WooCommerce, custom storefronts, high-traffic product catalogues'
  },
  {
    title: 'Business Applications',
    description: 'CRMs, ERPs, internal tools'
  },
  {
    title: 'SaaS Applications',
    description: 'APIs, user management, backend services'
  },
  {
    title: 'Databases',
    description: 'MySQL, PostgreSQL, Redis on your own configured VM'
  },
  {
    title: 'Mobile App Backends',
    description: 'authentication, push notifications, real-time data'
  },
  {
    title: 'Media Platforms',
    description: 'high-bandwidth applications, file hosting, CDN-ready setups'
  }
];

export default function Features() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Supported Workloads
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              What Can You Host On <span className="text-primary">Spin A Cloud?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="mt-1 flex-shrink-0 p-2.5 rounded-xl bg-orange-500/10 text-orange-400 group-hover:scale-105 transition-transform">
                  <CheckSquare className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
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
    <section className="max-w-6xl mx-auto px-4 pt-5 md:pt-12">
      <div className="px-1 md:px-8 border-y border-gray-300/40 lg:border-0 py-12 lg:py-0">
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-montserrat mb-16 text-[#F0E3DE] opacity-75 ">
          What Can You Host On Spin A Cloud?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-xl bg-white/5 border-none hover:bg-white/10 transition-colors">
              <div className="mt-1 flex-shrink-0 text-primary">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 font-montserrat select-none">{feature.title}</h4>
                <p className="text-neutral-400 text-sm select-none">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
