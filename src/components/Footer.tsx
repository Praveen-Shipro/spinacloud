'use client';

import { Mail, Phone, ArrowRight, Heart, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo-white.png';
import { useDesign } from '@/context/DesignContext';

export default function Footer() {
  const { designVariant } = useDesign();

  if (designVariant === 'design2') {
    return (
      <footer className="py-20 px-4 bg-gradient-to-b from-[#0a090d] to-[#040406] border-t border-white/10 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl 2xl:max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-block">
                <Image src={logo} alt="Spin'A'Cloud™" width={200} height={40} className="mb-2" />
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
                  <Link href="/disclaimer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
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
                      <Link href="/wpcloud" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-1 transition-transform" /> WPCloud
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
                      <a href="mailto:mail@spinacloud.com" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm break-all">
                        <Mail className="w-4 h-4 text-neutral-500 shrink-0" /> mail@spinacloud.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+918105631983" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-neutral-500 shrink-0" /> +91 810-5631-983
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="https://maps.google.com/?q=MORE+Plaza,+College+Road,+Belagavi,+Karnataka+590001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors flex items-start gap-2 text-xs leading-relaxed max-w-xs"
                      >
                        <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                        <span>CTS No. 3439/1A &amp; 3439/2A, 4th Floor, MORE Plaza, College Road, Above Arena Animation Belagavi, Karnataka – 590001</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Spin&apos;A&apos;Cloud&trade;. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a
                href="https://www.shirish.productions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-400 transition-colors underline underline-offset-2"
              >
                Shirish Productions
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <footer className="pb-12 md:pb-24 mt-12 md:mt-24 px-4 bg-black/80 z-2">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl px-5 border-t border-dotted">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 ">
          
          <div className="md:col-span-4 lg:col-span-5 space-y-6 border-gray-300/40 border-dotted md:border-r pt-10">
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Spin'A'Cloud™" width={200} height={40} className="mb-4" />
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm max-w-sm">
              Move fast without over-investing in infrastructure. Hourly billing means you only pay for what you use. Scale when you need to - not before.
            </p>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 border-gray-300/40 border-dotted lg:border-r pt-10">
            <h4 className="text-white font-bold mb-6">Pages</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> Services
                </Link>
              </li>
              <li>
                <Link href="/wpcloud" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> WPCloud
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-4 ">
            <div className="grid grid-cols-2 gap-8 ">
              <div className='lg:border-r lg:border-gray-300/40 lg:border-dotted pt-10'>
                <h4 className="text-white font-bold mb-6">Quick links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/disclaimer" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" /> T&Cs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='pt-10'>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:mail@spinacloud.com" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm break-all">
                      <Mail className="w-4 h-4 text-primary shrink-0" /> mail@spinacloud.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918105631983" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary shrink-0" /> +91 810-5631-983
                    </a>
                  </li>
                  <li className="pt-1">
                    <a
                      href="https://maps.google.com/?q=MORE+Plaza,+College+Road,+Belagavi,+Karnataka+590001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary transition-colors flex items-start gap-2 text-xs leading-relaxed max-w-xs"
                    >
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>CTS No. 3439/1A &amp; 3439/2A, 4th Floor, MORE Plaza, College Road, Above Arena Animation Belagavi, Karnataka – 590001</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300/40 border-dotted flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Spin&apos;A&apos;Cloud&trade;. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.shirish.productions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors underline underline-offset-2"
            >
              Shirish Productions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
