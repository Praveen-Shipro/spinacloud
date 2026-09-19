'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, FileText, Cookie, AlertCircle, ArrowLeft, Mail } from 'lucide-react';
import DynamicAmbientGlow from '@/components/DynamicAmbientGlow';

interface LegalLayoutProps {
  badge: string;
  title: string;
  dateInfo?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ 
  badge, 
  title, 
  dateInfo = 'Effective date: 1 July 2025 | Last updated: 1 July 2025', 
  children 
}: LegalLayoutProps) {
  const pathname = usePathname();
  const containerSpacing = 'md:px-8 lg:px-10 xl:px-16';

  const navItems = [
    { name: 'Disclaimer', href: '/disclaimer', icon: AlertCircle },
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
    { name: 'Cookie Policy', href: '/cookie-policy', icon: Cookie },
    { name: 'Terms & Conditions', href: '/terms', icon: FileText },
  ];

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-hidden">
      <DynamicAmbientGlow />

      {/* Hero Header */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-amber-900/10 border-b border-white/10">
        <div className="absolute bottom-0 -right-16 w-[500px] h-[500px] bg-[#FF6600]/[0.1] rounded-full blur-[140px] pointer-events-none" />

        <div className={`container mx-auto max-w-5xl ${containerSpacing} relative z-10`}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-primary px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
            {badge}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter text-[#F0E3DE] mb-4">
            {title}
          </h1>

          <p className="text-sm font-nunito text-neutral-400">
            {dateInfo}
          </p>
        </div>
      </section>

      {/* Main Content Area with Navigation Tabs */}
      <section className="px-4 py-12 md:py-16">
        <div className={`container mx-auto max-w-5xl ${containerSpacing}`}>
          {/* Quick Legal Switcher Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-8 mb-12 border-b border-white/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-orange-500/20'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Legal Document Content */}
          <div className="prose prose-invert max-w-none text-neutral-300 font-nunito leading-relaxed space-y-10">
            {children}
          </div>

          {/* Support / Questions Contact Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-1">
                Have questions about our policies?
              </h3>
              <p className="text-sm text-neutral-400 font-nunito">
                Our legal and support team is here to assist with any clarifications.
              </p>
            </div>
            <a
              href="mailto:mail@spinacloud.com"
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-orange-600 text-white text-sm font-montserrat font-semibold transition-colors shrink-0 flex items-center gap-2"
            >
              <Mail size={16} /> Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
