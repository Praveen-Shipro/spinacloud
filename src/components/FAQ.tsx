'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

const faqs = [
  {
    question: 'What is WordPress cloud hosting?',
    answer: 'Cloud hosting runs your website or application across a network of interconnected virtual servers, rather than on a single physical machine. If one server fails, your workload shifts automatically to another - keeping you online. It also means resources can scale up or down based on demand.'
  },
  {
    question: 'Is SpinACloud good for beginners?',
    answer: 'Yes, SpinACloud is designed to be intuitive for beginners while offering advanced capabilities for seasoned developers.'
  },
  {
    question: 'How does hourly billing work?',
    answer: 'You are only charged for the exact number of hours your resources are active. If you delete a resource halfway through the month, you only pay for the time it existed.'
  },
  {
    question: 'Where are SpinACloud\'s data centres located?',
    answer: 'Our main data centres are located across major hubs in India to ensure the lowest latency and highest performance for Indian visitors.'
  }
];

export default function FAQ() {
  const { designVariant } = useDesign();
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#120d0a] to-[#0a090d]">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/[0.08] rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = idx === openIndex;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-gradient-to-r from-orange-500/[0.06] via-white/[0.03] to-transparent border-orange-500/30 shadow-xl shadow-orange-500/5' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4 group"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span className="font-bold text-white text-base md:text-lg flex items-center gap-3">
                      <HelpCircle size={18} className={isOpen ? 'text-orange-400' : 'text-neutral-500'} />
                      <span>{faq.question}</span>
                    </span>
                    
                    <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'bg-orange-500/20 text-orange-400 rotate-180' : 'bg-white/5 text-neutral-400'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-neutral-300 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4 pl-13">
                      {faq.answer}
                    </div>
                  )}
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
      <div className='container mx-auto max-w-6xl border-b border-gray-300/40 py-24'>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-4">Faq Section</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div 
                key={idx} 
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isOpen ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
      
    </section>
  );
}
