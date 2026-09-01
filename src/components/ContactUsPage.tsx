'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus,
  CheckCircle2,
  Send,
  Sparkles,
  MessageSquare,
  Headphones,
  ShieldCheck
} from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

interface FAQItem {
  question: string;
  answer: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@spinacloud.in',
    href: 'mailto:hello@spinacloud.in',
    highlight: true,
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    value: 'hello@spinacloud.in',
    href: 'mailto:hello@spinacloud.in',
    highlight: false,
  },
  {
    icon: Headphones,
    title: 'Support Hours',
    value: '24×7, 365 days a year',
    href: null,
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Office Location',
    value: 'Belgaum (Belagavi), Karnataka, India',
    href: null,
    highlight: false,
  },
];

const faqs: FAQItem[] = [
  {
    question: 'How quickly will I get a response?',
    answer: 'Email queries are responded to within 2 business hours. Live chat and phone assistance is available 24×7 for immediate help.',
  },
  {
    question: 'Can SpinACloud help me migrate my existing WordPress site?',
    answer: 'Yes! We provide complimentary white-glove migration for all WordPress sites, databases, and custom applications with zero downtime.',
  },
  {
    question: "I'm not technical. Will the support team actually help me?",
    answer: 'Absolutely. Our India-based support engineering team assists with everything from DNS configuration and SSL certificates to plugin debugging and performance optimization.',
  },
  {
    question: 'Is SpinACloud good for beginners?',
    answer: 'Yes. With 1-Click WordPress installation, intuitive control panels, and automated updates, you get enterprise performance without needing sysadmin skills.',
  },
  {
    question: 'How does hourly billing work?',
    answer: 'You only pay for the exact hours your virtual machines and SSD storage volumes are active. Invoices are itemized transparently with zero hidden egress fees.',
  },
  {
    question: "Where are SpinACloud's data centres located?",
    answer: 'All our servers and networking infrastructure are physically located in Tier-4 Indian data centres in the IXG-Belagavi zone for 100% Indian data sovereignty.',
  },
];

export default function ContactUsPage() {
  const { designVariant } = useDesign();
  const containerSpacing = 'md:px-8 lg:px-10 xl:px-16';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State (first item open by default as in Figma)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
      });
    }, 1000);
  };

  // ==========================================
  // DESIGN 2: Modern 3D / Glassmorphic Layout
  // ==========================================
  if (designVariant === 'design2') {
    return (
      <div id="contact" className="relative overflow-hidden bg-linear-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-orange-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

        {/* Hero Section */}
        <section className="px-4 pt-20 pb-16 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl text-center ${containerSpacing}`}>
            <span className="text-xs font-bold font-montserrat uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-6">
              Contact us
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              We Are Here When <span className="text-primary">You Need Us</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-300 text-base md:text-lg leading-relaxed">
              Got a question about plans? Need help migrating your existing WordPress site? Or just want to know if SpinACloud is the right fit for you? Our India-based team is available 24×7 - reach us any way you prefer.
            </p>
          </div>
        </section>

        {/* Main 2-Column Section: Get in Touch & Contact Form */}
        <section className="px-4 py-16 md:py-24 border-b border-white/10 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Get in Touch */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 inline-block mb-2">
                    Direct Channels
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    Get in Touch
                  </h2>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => {
                    const IconComp = info.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl transition-all duration-300 backdrop-blur-xl flex items-start gap-4 ${
                          info.highlight
                            ? 'bg-gradient-to-br from-orange-500/[0.08] to-white/[0.02] border border-orange-500/40 shadow-lg shadow-orange-500/5'
                            : 'bg-white/[0.02] border border-white/10 hover:border-orange-500/30'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          info.highlight ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-neutral-300'
                        }`}>
                          <IconComp size={22} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                            {info.title}
                          </h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-base font-bold text-white hover:text-orange-400 transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base font-bold text-white">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/60 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    Fill in the form below and one of our team members will get back to you within 2 business hours.
                  </p>

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                      <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
                      <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                      <p className="text-neutral-300 text-sm max-w-md mx-auto">
                        Thank you for reaching out. Our engineering support team in Belagavi will respond to your inquiry shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                        />
                      </div>

                      <div className="relative">
                        <select
                          name="topic"
                          value={formData.topic}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-[#141414] text-neutral-500">
                            Topic
                          </option>
                          <option value="general" className="bg-[#141414] text-white">General Inquiry</option>
                          <option value="migration" className="bg-[#141414] text-white">WordPress / Site Migration</option>
                          <option value="support" className="bg-[#141414] text-white">Technical Support</option>
                          <option value="enterprise" className="bg-[#141414] text-white">Custom Infrastructure / Enterprise</option>
                          <option value="billing" className="bg-[#141414] text-white">Billing & Invoices</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                      </div>

                      <div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Message"
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-orange-600 via-primary to-amber-600 text-white hover:opacity-95 transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>SENDING...</span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Follow Spin A Cloud Gradient Banner */}
        <section className="px-4 py-16 relative z-10">
          <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
            <div className="rounded-3xl bg-[linear-gradient(to_right,#FF6600_55%,#FF9752_100%)] p-8 md:p-14 text-center text-white shadow-2xl shadow-orange-500/25">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight font-montserrat">
                Follow Spin A Cloud
              </h2>
              <p className="text-white/95 text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
                Stay Updated With Hosting Tips, Downtime Alerts, And Product News:
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answers (Accordion FAQs) */}
        <section className="px-4 py-20 relative z-10">
          <div className={`container mx-auto max-w-4xl ${containerSpacing}`}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 tracking-tight">
              Quick Answers
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                      isOpen
                        ? 'bg-white/[0.04] border-orange-500/40 shadow-lg shadow-orange-500/5'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-base md:text-lg font-bold text-white">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-neutral-400'
                      }`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-neutral-300 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 pt-4">
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

  // ==========================================
  // DESIGN 1: Figma Classic Layout
  // ==========================================
  return (
    <div id="contact" className="min-h-screen bg-black text-[#F0E3DE]">
      
      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12 border-b border-gray-300/40">
        <div className={`container mx-auto max-w-6xl text-center ${containerSpacing}`}>
          <h2 className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase mb-3 font-montserrat">
            Contact us
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-[#F0E3DE] mb-6">
            We Are Here When You Need Us
          </h1>
          <p className="max-w-4xl mx-auto text-[#F0E3DE] font-nunito font-extralight text-sm md:text-base leading-relaxed opacity-80">
            Got a question about plans? Need help migrating your existing WordPress site? Or just want to know if SpinACloud is the right fit for you? Our India-based team is available 24×7 - reach us any way you prefer.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="px-4 py-16 md:py-24 border-b border-gray-300/40">
        <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Get in Touch Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold font-montserrat text-[#F0E3DE] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const IconComp = info.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-xl border transition-colors flex items-start gap-4 ${
                        info.highlight
                          ? 'border-primary bg-[#0d0d0d]'
                          : 'border-gray-300/40 bg-[#0a0a0a] hover:border-gray-500'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg border border-primary/40 flex items-center justify-center text-primary shrink-0">
                        <IconComp size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold font-montserrat text-white mb-1">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-[#F0E3DE] font-nunito font-extralight opacity-80 hover:opacity-100 hover:text-primary transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#F0E3DE] font-nunito font-extralight opacity-80">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Send Us a Message Form */}
            <div className="lg:col-span-7">
              <div className="border border-gray-300/40 rounded-xl p-8 md:p-10 bg-[#0d0d0d]">
                <h2 className="text-2xl font-bold font-montserrat text-[#F0E3DE] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#F0E3DE] font-nunito font-extralight text-xs md:text-sm opacity-80 mb-8">
                  Fill in the form below and one of our team members will get back to you within 2 business hours.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-xl border border-primary/40 bg-black/60 text-center space-y-4 animate-in fade-in duration-300">
                    <CheckCircle2 size={44} className="text-primary mx-auto" />
                    <h3 className="text-xl font-bold font-montserrat text-white">Message Sent!</h3>
                    <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 max-w-md mx-auto">
                      Thank you for contacting SpinACloud. A representative from our Belagavi office will reach out shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#141414] border border-gray-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors text-sm font-nunito"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#141414] border border-gray-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors text-sm font-nunito"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#141414] border border-gray-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors text-sm font-nunito"
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 rounded-lg bg-[#141414] border border-gray-700/60 text-white focus:outline-none focus:border-primary transition-colors text-sm font-nunito appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#141414] text-neutral-500">
                          Topic
                        </option>
                        <option value="general" className="bg-[#141414] text-white">General Inquiry</option>
                        <option value="migration" className="bg-[#141414] text-white">WordPress / Site Migration</option>
                        <option value="support" className="bg-[#141414] text-white">Technical Support</option>
                        <option value="enterprise" className="bg-[#141414] text-white">Custom Infrastructure / Enterprise</option>
                        <option value="billing" className="bg-[#141414] text-white">Billing & Invoices</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#141414] border border-gray-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors text-sm font-nunito resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-lg font-bold font-montserrat uppercase tracking-wider text-sm bg-primary hover:bg-[#ea580c] text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? <span>SENDING...</span> : <span>SEND MESSAGE</span>}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Follow Spin A Cloud Gradient Banner */}
      <section className="px-4 py-16 border-b border-gray-300/40">
        <div className={`container mx-auto max-w-6xl ${containerSpacing}`}>
          <div className="rounded-2xl bg-[linear-gradient(to_right,#FF6600_55%,#FF9752_100%)] p-8 md:p-14 text-center text-white shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-3 text-white">
              Follow Spin A Cloud
            </h2>
            <p className="text-white font-nunito text-sm md:text-base max-w-xl mx-auto mb-8 font-light">
              Stay Updated With Hosting Tips, Downtime Alerts, And Product News:
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF6600] flex items-center justify-center transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers (Accordion FAQs) */}
      <section className="px-4 py-16 md:py-24">
        <div className={`container mx-auto max-w-4xl ${containerSpacing}`}>
          <h2 className="text-2xl md:text-4xl font-bold font-montserrat text-[#F0E3DE] text-center mb-12">
            Quick Answers
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-300/40 bg-[#0d0d0d] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm md:text-base font-semibold font-montserrat text-white">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded border border-gray-700 flex items-center justify-center shrink-0 text-neutral-400">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-[#F0E3DE] font-nunito font-extralight text-sm leading-relaxed opacity-80 border-t border-gray-800/80 mt-2 pt-4">
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
