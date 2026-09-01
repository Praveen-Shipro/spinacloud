'use client';

import { Mail, Phone, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo-1.png';
import { useDesign } from '@/context/DesignContext';

export default function Footer() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <footer className="py-20 px-4 bg-gradient-to-b from-[#0a090d] to-[#040406] border-t border-white/10 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-block">
                <Image src={logo} alt="SpinACloud" width={200} height={40} className="mb-2" />
              </Link>
              <p className="text-neutral-400 leading-relaxed text-sm max-w-sm">
                Next-generation cloud compute infrastructure hosted in Tier-4 Indian data centers with transparent hourly billing and sub-millisecond local routing.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Made for Indian Developers & Enterprises</span>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider text-orange-400">Legal & Policies</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider text-orange-400">Quick Navigation</h4>
                  <ul className="space-y-3.5">
                    <li>
                      <Link href="/" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/#pricing" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Pricing Plans
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider text-orange-400">Direct Support</h4>
                  <ul className="space-y-3.5">
                    <li>
                      <a href="mailto:info@spinacloud.com" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm break-all">
                        <Mail className="w-4 h-4 text-neutral-500 shrink-0" /> info@spinacloud.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+910011001101" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-neutral-500 shrink-0" /> +91 0011001101
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} SpinACloud Technologies India. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Engineered with precision for high availability</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <footer className="py-24 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-4 lg:col-span-5 space-y-6 border-r border-gray-300/40 border-dashed">
            <Link href="/" className="inline-block">
              <Image src={logo} alt="SpinACloud" width={200} height={40} className="mb-4" />
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm max-w-sm">
              Move fast without over-investing in infrastructure. Hourly billing means you only pay for what you use. Scale when you need to - not before.
            </p>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 lg:border-r lg:border-gray-300/40 lg:border-dashed">
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> T&Cs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-4 ">
            <div className="grid grid-cols-2 gap-8 ">
              <div className='lg:border-r lg:border-gray-300/40 lg:border-dashed'>
                <h4 className="text-white font-bold mb-6">Quick links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> T&Cs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:info@gmail.com" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm break-all">
                      <Mail className="w-4 h-4 text-primary shrink-0" /> info@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+910011001101" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary shrink-0" /> +91 0011001101
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
