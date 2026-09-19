'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Terminal,
  UploadCloud,
  HardDrive,
  Activity,
  ShieldAlert,
  Server,
  ShieldCheck,
  Bell,
  Check,
  Plus,
  Minus
} from 'lucide-react';
import DynamicAmbientGlow from '@/components/DynamicAmbientGlow';
import cloudOps from '@/assets/images/cloudOps.png'
import freepaid from '@/assets/images/free-paid.png'
import pageSetting from '@/assets/images/page-setting.svg'
import cloud from '@/assets/images/cloud1.svg'
import cloud2 from '@/assets/images/cloud2.svg'
import support247 from '@/assets/images/24x7.svg'
import caution from '@/assets/images/caution.svg'
import location from '@/assets/images/location-icon.svg'
import sheild from '@/assets/images/sheild.svg'
import bell from '@/assets/images/bell.svg'
import check from '@/assets/images/check-square.svg'

import Image from 'next/image';
export default function WpCloudPage() {
  const containerSpacing = 'md:px-8 lg:px-10 xl:px-16';
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default as in Figma

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featureCards = [
    {
      title: 'Automated Setup & Configuration',
      desc: 'One-click automated provisioning with hardened OpenLiteSpeed, PHP 8.3, MariaDB, and Redis caching.',
      icon: pageSetting,
    },
    {
      title: 'Free Site Migration',
      desc: 'Expert hands-on migration handled cleanly by our engineering team with zero downtime.',
      icon: cloud,
    },
    {
      title: 'Automatic Backups - Three Layers of Protection',
      desc: 'Backups duplicated across local server vault, Cloudflare R2 / AWS S3, and Google Drive.',
      icon: cloud2,
    },
    {
      title: '24×7 Site Health Monitoring',
      desc: 'Origin-level checks every minute bypassing CDN cache, with auto-remediation before alerting you.',
      icon: support247,
    },
    {
      title: 'Malware Detection & Quarantine',
      desc: 'AI-assisted heuristic scanner auditing files at the server level before WordPress even loads.',
      icon: caution,
    },
    {
      title: 'Multi-Site Support',
      desc: 'Additive-aware isolation ensuring a problem on one site never impacts any other site.',
      icon: location,
    },
    {
      title: 'Cloudflare Security Integration',
      desc: 'Native Cloudflare Zero Trust integration with automated DNS management and hardened WAF rules.',
      icon: sheild,
    },
    {
      title: 'Email Alerts & Notifications',
      desc: 'Intelligent alerts delivered to your inbox only when an issue requires human attention.',
      icon: bell,
    },
  ];

  const featureSlides = [
    featureCards.slice(0, 2),
    featureCards.slice(2, 4),
    featureCards.slice(4, 6),
    featureCards.slice(6, 8),
  ];

  const comparisonItems = [
    'Backups stored in three independent locations - not just one',
    'Site health monitoring every minute - not a daily check',
    'AI-assisted malware scanning - not just signature-based detection that misses new threats',
    'Automatic remediation - the system fixes common failures before alerting you, rather than just sending an email',
    'Per-site isolation on multi-site servers - a problem on one site cannot affect others',
    'Free site migration included - not an add-on service charged separately',
    'Runs at the server level - not a plugin that can be disabled or circumvented by malware',
  ];

  const remediationSteps = [
    "We migrate your site to Spin'A'Cloud™ at no additional cost",
    'WP CloudOps scans and cleans the environment on arrival',
    'Your site is set up with hardened security rules from day one',
    'Three-tier automated backups start running immediately',
    'You get a personalised onboarding call with our India-based team',
  ];

  const faqs = [
    {
      question: 'Is WP CloudOps free?',
      answer:
        "Yes. WP CloudOps is included at no additional cost with any Spin'A'Cloud™ hosting plan where you choose to host WordPress. There is no separate subscription, no per-site fee, and no premium tier required to access the features described on this page.",
    },
    {
      question: 'Does WP CloudOps work as a WordPress plugin?',
      answer:
        "No. WP CloudOps runs directly at the server level on your Spin'A'Cloud™ VM, not as a WordPress plugin. This means it can perform deep security scans before WordPress initializes, auto-remediate server failures, and maintain strict isolated sandboxing that cannot be bypassed by WordPress vulnerabilities.",
    },
    {
      question: "Can I migrate my existing WordPress site to Spin'A'Cloud™?",
      answer:
        'Yes! Our engineering team handles migration for you with zero downtime and at no additional cost. We assess your site, migrate all databases and files, harden security configurations, verify uptime, and hand it back ready for production.',
    },
    {
      question: 'How does the three-tier backup work?',
      answer:
        'WP CloudOps automatically backs up your WordPress data across three independent locations: a high-speed local server vault for instantaneous rollbacks, Cloudflare R2 or AWS S3 object storage for geographical redundancy, and Google Drive for an isolated disaster recovery copy.',
    },
  ];

  return (
    <div id="wpcloud" className="relative w-full overflow-hidden">
      {/* Background dynamic ambient glow */}
      <DynamicAmbientGlow />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="px-4 py-16 md:py-24 relative overflow-hidden">
        <div className={`${containerSpacing} container mx-auto max-w-6xl 2xl:max-w-7xl relative z-10`}>
          {/* Logo / Badge with Subtle Elliptical Glow */}
          <div className="relative inline-block mb-4 md:mb-6 isolate">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[540px] md:w-[620px] h-[100px] sm:h-[125px] md:h-[145px] pointer-events-none rounded-[100%] blur-2xl sm:blur-3xl z-0"
              style={{
                background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 102, 0, 0.75) 0%, rgba(255, 102, 0, 0.35) 45%, rgba(255, 102, 0, 0.08) 68%, rgba(255, 102, 0, 0) 85%)',
              }}
            />
            <Image
              src={cloudOps}
              alt="WP CloudOps"
              className="relative z-10 w-[200px] sm:w-[220px] md:w-[240px] h-auto object-contain"
              width={240}
              height={34}
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[41px] font-bold font-inter text-[#F0E3DE] mb-6 leading-tight max-w-4xl opacity-95">
            With Our WP CloudOps
            <br />
            <span className="text-white">Your WordPress Site Is Fully Managed. Free.</span>
          </h1>

          {/* Subparagraph 1 */}
          <p className="text-neutral-300 font-questrial text-sm sm:text-base md:text-base max-w-3xl mb-4 leading-relaxed">
            WP CloudOps is Spin&apos;A&apos;Cloud&trade;&apos;s built-in WordPress management tool - included at no extra cost with your hosting plan
          </p>

          {/* Subparagraph 2 (Orange Highlight) */}
          <p className="text-[#FF6600] font-medium font-nunito text-sm sm:text-base md:text-base max-w-3xl mb-10 leading-relaxed">
            WP CloudOps is available free of charge to all Spin&apos;A&apos;Cloud&trade; customers hosting WordPress on our platform. No additional subscription. No hidden fees.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-linear-to-r from-[#FF6600]/50 to-[#FF9752] hover:bg-orange-600 text-white font-montserrat font-semibold transition-all duration-100 shadow-lg shadow-orange-500/25  active:scale-95 text-center text-sm md:text-base"
            >
              Get Started with Spin&apos;A&apos;Cloud&trade;
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-black hover:bg-neutral-200 border border-white/20 font-montserrat font-semibold transition-all duration-100  active:scale-95 text-center text-sm md:text-base"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT IS WP CLOUDOPS?                                           */}
      {/* ========================================================================= */}
      <section className="px-4 bg-[#222222]">
        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl pt-16 md:pt-24 ${containerSpacing}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-primary font-semibold tracking-wider uppercase mb-3 font-montserrat text-sm md:text-base">
                  What is WP CloudOps?
                </h3>
                <h2 className="text-base sm:text-lg md:text-lg lg:text-2xl font-bold font-inter text-[#F0E3DE] leading-tight opacity-95">
                  The cloud your application runs on.
                </h2>
              </div>

              {/* Mobile display of architecture diagram right below heading */}
              <div className="lg:hidden my-6">
                <Image alt="architecture" src={freepaid} width={500} height={500} className="w-full max-w-[420px] mx-auto h-auto rounded-xl" />
              </div>

              <div className="space-y-4 text-[#FFFFFF]/80 font-nunito font-light text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  WP CloudOps is a WordPress orchestration tool built by Spin&apos;A&apos;Cloud&trade;. When you choose to host a WordPress site on Spin&apos;A&apos;Cloud&trade;&apos;s infrastructure, WP CloudOps takes over the technical side of running it - from the initial server setup to ongoing security, backups, and performance monitoring.
                </p>
                <p>
                  Think of it as having a dedicated server administrator working in the background, 24 hours a day, making sure your WordPress site is always fast, always secure, and always recoverable if anything goes wrong - without you having to do anything.
                </p>
                <p>
                  It runs directly on your Spin&apos;A&apos;Cloud&trade; server, not as a plugin inside WordPress, which means it can do things that plugins simply cannot - like scanning for malware before WordPress even loads, or recovering your server if the database crashes.
                </p>
              </div>
            </div>

            {/* Right Architecture Graphic (Desktop) */}
            <div className="hidden lg:block lg:col-span-4">
              {/* <OrchestrationGraphic /> */}
              <Image alt='architecture' src={freepaid} width={500} height={500} />
            </div>
          </div>
        </div>

        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl py-16 md:py-24 ${containerSpacing}`}>
          <div className="mb-12">
            <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-primary py-1.5 ">
              FEATURES
            </span>
            <h2 className="text-base sm:text-xl md:text-2xl font-bold font-inter text-[#F0E3DE] opacity-95 mt-4">
              What does WP CloudOps do for your site?
            </h2>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="px-4 py-3 h-16 min-h-[64px] rounded-md bg-transparent border border-white/40 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 flex items-center justify-start"
              >
                <div className="flex gap-4 items-center w-full">
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                    <Image alt="icon" width={32} height={32} src={card.icon} className="object-contain" />
                  </div>
                  <h3 className="text-sm font-normal font-montserrat text-white/80 leading-snug line-clamp-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scrollable View: 4 Slides (2 cards stacked per slide, second slide partly visible, no dots) */}
          <div className="md:hidden">
            <div
              data-lenis-prevent="true"
              className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {featureSlides.map((slide, slideIdx) => (
                <div
                  key={slideIdx}
                  className={`w-[74vw] sm:w-[290px] shrink-0 snap-start flex flex-col gap-3 ${slideIdx === 0 ? 'ps-4' : ''}`}
                >
                  {slide.map((card, cardIdx) => (
                    <div
                      key={cardIdx}
                      className="px-4 py-3 h-16 min-h-[64px] rounded-md bg-transparent border border-white/40 hover:border-orange-500/40 transition-all duration-300 flex items-center justify-start"
                    >
                      <div className="flex gap-4 items-center w-full">
                        <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                          <Image alt="icon" width={32} height={32} src={card.icon} className="object-contain" />
                        </div>
                        <h3 className="text-sm font-normal font-montserrat text-white/80 leading-snug line-clamp-2">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IS WP CLOUDOPS DIFFERENT FROM MANAGED WP HOSTING?          */}
      {/* ========================================================================= */}
      <section className="px-4">
        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl py-16 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
          <div className="max-w-4xl mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-inter text-[#F0E3DE] mb-4 opacity-80 leading-tight">
              How Is WP CloudOps Different From Standard Managed WordPress Hosting?
            </h2>
            <p className="text-neutral-400 font-nunito font-light text-sm sm:text-md md:text-base leading-relaxed">
              Most managed WordPress hosting packages include a control panel, some automated updates, and maybe a basic backup. WP CloudOps goes significantly further
            </p>
          </div>

          <div className="space-y-3.5">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-[#4C4C4C]/90 hover:bg-[#4C4C4C] transition-all duration-200 group"
              >
                <Image alt='icon' width={32} height={32} src={check}/>
                <span className="text-sm sm:text-base md:text-lg text-neutral-200 font-nunito font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: HAS YOUR WORDPRESS SITE BEEN HACKED OR COMPROMISED?            */}
      {/* ========================================================================= */}
      <section className="px-4 bg-[#222222]">
        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl py-16 md:py-24  ${containerSpacing}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-inter text-[#F0E3DE] mb-10 opacity-95">
            Has your WordPress site been hacked or compromised? 
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <p className="text-neutral-300 font-montserrat font-light text-base sm:text-lg leading-relaxed">
                If your current WordPress site has been hacked, infected with malware, or is loading slowly because of a bad hosting environment, Spin&apos;A&apos;Cloud&trade; and WP CloudOps offer a clean way out.
              </p>
            </div>

            {/* Right Column: Monospace guarantees */}
            <div className="lg:col-span-7 space-y-0 divide-y divide-white/30 border-t border-b border-white/30">
              {remediationSteps.map((step, idx) => (
                <div key={idx} className="py-4.5 flex items-center justify-between group">
                  <span className="text-sm sm:text-base font-courier-prime text-[#F0E3DE] opacity-90 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
      {/* SECTION 6: ORANGE GRADIENT CTA BANNER                                     */}
      {/* ========================================================================= */}
      <section className="px-4 py-12 md:pb-24">
        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl ${containerSpacing}`}>
          <div className="rounded-3xl bg-linear-to-r from-[#FF6600]/50 via-[#FF7A00] to-[#FF9752] p-8 md:p-14 text-center text-white shadow-2xl shadow-orange-500/20">
            <h2 className="text-base lg:text-xl font-normal font-montserrat max-w-4xl mx-auto mb-8 leading-snug"> 
              Migration is handled by our team, not an automated tool. We assess your site first, move it cleanly, and confirm everything is working before we hand it back to you.
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-black text-white font-montserrat font-medium hover:bg-neutral-900 transition-all text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              Contact Us to Discuss Migration
            </Link>
          </div>
        </div>
      </section>
      </section>

      

      {/* ========================================================================= */}
      {/* SECTION 7: FAQ ACCORDION                                                  */}
      {/* ========================================================================= */}
      <section className="px-4">
        <div className={`container mx-auto max-w-6xl 2xl:max-w-7xl  ${containerSpacing}`}>
          <div className="text-center mb-12">
            <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-primary inline-block mb-3 mt-10 md:mt-14">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-[#F0E3DE] opacity-95">
              Frequently asked questions about WP CloudOps
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border border-gray-700/40 bg-[#0d0d0d] overflow-hidden ${isOpen ? 'bg-[#4C4C4C]' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-semibold font-montserrat text-white">
                      {faq.question}
                    </span>
                    <span className="">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-nunito font-light text-neutral-300 leading-relaxed bg-[#4C4C4C]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
