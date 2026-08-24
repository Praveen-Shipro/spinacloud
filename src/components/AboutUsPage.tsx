'use client';

import { Cloud, Shield, Cpu, Activity, CheckSquare, Server, DollarSign, PhoneCall, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';
import { useDesign } from '@/context/DesignContext';
import MissionGlobe from './3d/MissionGlobe';

export default function AboutUs() {
    const { designVariant } = useDesign();
    const containerSpacing = 'md:px-8 lg:px-10 xl:px-16'
    if (designVariant === 'design2') {
        return (
            <div id="about" className="relative overflow-hidden bg-linear-to-b from-[#0a090d] via-[#10131a] to-[#0a090d]">
                {/* Subtle radial glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

                {/* Hero Section */}
                <section className="px-4 pt-20 pb-16 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <span className="text-lg font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-6">
                            About us
                        </span>
                        <h1 className="text-xl md:text-3xl font-extrabold text-white mb-8 leading-tight max-w-4xl tracking-tight">
                            We Are <span className="text-primary">SPIN &apos;A&apos; CLOUD</span><br />
                            And We Are Spinning The Future Of Hosting In India
                        </h1>
                    </div>
                </section>
                <section className="px-4 pt-20 pb-16 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <p className="text-neutral-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
                            Indian businesses have been paying for overseas cloud infrastructure for too long. Servers in other countries. Support in time zones that don&apos;t match yours. Bills that require a spreadsheet to understand. Pricing designed for Fortune 500 companies - not Indian startups, agencies, and enterprises.
                        </p>
                        <p className="text-neutral-400 text-lg md:text-xl max-w-3xl leading-relaxed">
                            SpinACloud was built to fix that. We are a cloud hosting platform based in Belagavi, Karnataka - operated by Shirish Productions - with infrastructure in Indian data centres, unlimited bandwidth on every plan, billing that is genuinely transparent, and a support team that is right here when you need them.
                        </p>
                    </div>
                </section>


                {/* Mission Section */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 flex justify-center relative">
                                <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[100px]" />
                                <MissionGlobe designVariant="design2" />
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block">
                                    Our Mission
                                </span>
                                <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                                    Making enterprise-grade cloud accessible to every Indian business.
                                </h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    To make reliable, high-performance cloud infrastructure accessible to every Indian business - from a solo developer&apos;s first project to an enterprise&apos;s production environment - with pricing that is honest, support that is human, unlimited bandwidth that removes the traffic ceiling, and servers that are close to home.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
                            Our Values
                        </h2>
                        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                            {/* Transparency */}
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">Transparency</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">clear pricing, honest SLAs, no hidden bandwidth charges or egress fees</p>
                            </div>
                            {/* Reliability */}
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">Reliability</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">99.9% uptime backed by redundant Indian infrastructure</p>
                            </div>
                            {/* Simplicity */}
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">Simplicity</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">enterprise features without enterprise complexity</p>
                            </div>
                            {/* Proximity */}
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">Proximity</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">built in Belgaum, rooting for Indian businesses everywhere</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Problem We Saw Section */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">The Problem We Saw</h2>
                            <p className="text-neutral-400 text-lg">For most Indian businesses looking to move to the cloud, the options were:</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">Global Giants</span>
                                <h3 className="text-2xl font-bold text-white mb-3">AWS, Azure, GCP</h3>
                                <p className="text-neutral-400 leading-relaxed">Powerful, but complex to set up, expensive to run, billed in dollars, supported from overseas, and built around infrastructure needs most Indian businesses simply don&apos;t have.</p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">Budget Shared Hosting</span>
                                <h3 className="text-2xl font-bold text-white mb-3">Cheap, but a ceiling</h3>
                                <p className="text-neutral-400 leading-relaxed">Easy and cheap, but a single physical machine shared with hundreds of other websites — no real scalability, and a ceiling you hit the moment traffic picks up.</p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">Overseas VPS</span>
                                <h3 className="text-2xl font-bold text-white mb-3">Closer, but still far</h3>
                                <p className="text-neutral-400 leading-relaxed">Better than shared hosting, but servers sitting in Singapore or the US add unnecessary latency for Indian visitors — and support treats you like a ticket number.</p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-orange-500/[0.1] to-transparent border border-orange-500/20 text-center">
                            <p className="text-neutral-300 text-lg md:text-xl mb-4">For most Indian businesses looking to move to the cloud, the options were:</p>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-primary">Spin A Cloud is.</h3>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">What Makes Us Different</h2>
                        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform shrink-0">
                                    <Server size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Indian data centres - not a distant second.</h3>
                                <p className="text-neutral-400 leading-relaxed">Our infrastructure is physically in India, in the IXG-Belagavi zone. That means lower latency for your Indian visitors, no cross-border data concerns, and a platform that understands Indian internet conditions - not one that was built elsewhere and retrofitted for this market.</p>
                            </div>

                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform shrink-0">
                                    <DollarSign size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Billing that reflects reality</h3>
                                <p className="text-neutral-400 leading-relaxed">Cloud hosting should scale with your business, not against it. SpinACloud&apos;s hourly billing means a quiet month costs less. A product launch month scales up automatically. You&apos;re never paying for headroom you don&apos;t need.</p>
                            </div>

                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform shrink-0">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Depth without complexity.</h3>
                                <p className="text-neutral-400 leading-relaxed">We built SpinACloud so a developer can access it via CLI with full root control, and a business owner can deploy a server through a clean dashboard without touching a terminal. The same platform serves both — you access as much or as little of its power as your needs require.</p>
                            </div>

                            <div className="w-[85vw] md:w-auto shrink-0 snap-start p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform shrink-0">
                                    <PhoneCall size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">A team that&apos;s actually here.</h3>
                                <p className="text-neutral-400 leading-relaxed">Our support team is based in India, available 24×7. Not a global ticket queue. Not a bot that escalates to a human three days later. Real engineers who know the platform and understand the context of Indian businesses.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What SpinACloud Provides Section */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
                            What SpinACloud Provides
                        </span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-12 leading-tight max-w-3xl tracking-tight">
                            Core infrastructure - the <span className="text-primary">three</span> essentials for any cloud setup:
                        </h3>

                        <div className="mb-16">
                            <h4 className="text-2xl font-bold text-white mb-6">Core infrastructure</h4>
                            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
                                    <h5 className="text-lg font-bold text-white mb-4">Virtual Machines</h5>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Four categories covering every workload — Basic, General Purpose, CPU Optimised, and Memory Optimised — from a startup&apos;s first server to an enterprise&apos;s production database cluster.</p>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
                                    <h5 className="text-lg font-bold text-white mb-4">Volume Storage</h5>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Enterprise SSD NVMe (M.2) and NVMe SSD disk options, from 100 GB to 1,000 GB. High-performance persistent block storage that attaches directly to your VMs.</p>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
                                    <h5 className="text-lg font-bold text-white mb-4">IP Addresses</h5>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Static public IP allocation to make your servers reachable on the internet with a consistent address.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-white mb-6">Optional add-ons</h4>
                            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">01</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Virtual Router</h5>
                                        <p className="text-neutral-400 text-sm">private networking between your VMs</p>
                                    </div>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">02</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Load Balancer</h5>
                                        <p className="text-neutral-400 text-sm">distribute traffic for high availability</p>
                                    </div>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">03</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">VM Snapshots</h5>
                                        <p className="text-neutral-400 text-sm">point-in-time server recovery</p>
                                    </div>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">04</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Volume Snapshots</h5>
                                        <p className="text-neutral-400 text-sm">lightweight storage backups</p>
                                    </div>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">05</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">VM Backups</h5>
                                        <p className="text-neutral-400 text-sm">standalone disaster-recovery copies</p>
                                    </div>
                                </div>
                                <div className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start bg-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                                    <span className="text-orange-400 font-bold text-xl">06</span>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Templates</h5>
                                        <p className="text-neutral-400 text-sm">save and relaunch identical environments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Serve Section */}
                <section className="px-4 py-20 border-b border-white/10 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-16 max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
                                Who We Serve
                            </span>
                            <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                                SpinACloud is built for Indian businesses across the full spectrum of technical maturity and scale:
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Startups', desc: 'that need reliable infrastructure without an upfront commitment — pay for what you use, scale as you grow.' },
                                { title: 'E-Commerce Businesses', desc: 'that need to handle traffic spikes during festive sales and product launches without going down.' },
                                { title: 'Developers And DevOps Teams', desc: 'who want full control: CLI access, YAML configuration, SSH, Git workflows, and real-time monitoring.' },
                                { title: 'SaaS Companies', desc: 'building products on elastic infrastructure that scales with their user base.' },
                                { title: 'Agencies And Freelancers', desc: 'managing multiple client environments — separate VMs per client, reusable templates, and a single dashboard for everything.' },
                                { title: 'Enterprises', desc: 'needing high availability, Memory Optimised and CPU Optimised VM configurations, and Indian data centre hosting for compliance and performance requirements.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-xl p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 group">
                                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckSquare size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-4 py-20 relative z-10">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link href="#get-started" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 w-full sm:w-auto text-center">
                            Start Hosting on SpinACloud
                        </Link>
                        <Link href="#plans" className="px-8 py-4 bg-white/[0.05] border border-white/10 text-white font-bold rounded-full hover:bg-white/[0.1] transition-all backdrop-blur-md w-full sm:w-auto text-center">
                            See Our Plans
                        </Link>
                    </div>
                </section>
            </div>
        );
    }


    // Design 1 Figma Classic Variant
    return (
        <div id="about" className="bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="px-4 pt-12 md:pt-24">
                <div className= {`${containerSpacing} container mx-auto max-w-6xl pb-12 border-b border-gray-300/40`}>
                    <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-lg">About us</h2>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F0E3DE] mb-8 font-inter leading-tight max-w-4xl">
                        We Are <span className="text-primary">SPIN &apos;A&apos; CLOUD</span><br />
                        And We Are Spinning The Future Of Hosting In India
                    </h1>
                </div>
            </section>

            <section className="px-4  ">
                <div className={`container mx-auto max-w-6xl flex flex-col items-start border-b border-gray-300/40 py-12 ${containerSpacing}`}>
                    <p className="text-[#F0E3DE] font-roboto font-extralight text-base md:text-lg  leading-relaxed mb-6 ">
                        Indian businesses have been paying for overseas cloud infrastructure for too long. Servers in other countries. Support in time zones that don&apos;t match yours. Bills that require a spreadsheet to understand. Pricing designed for Fortune 500 companies - not Indian startups, agencies, and enterprises.
                    </p>
                    <p className="text-[#F0E3DE] font-nunito font-extralight text-base md:text-lg  leading-relaxed ">
                        SpinACloud was built to fix that. We are a cloud hosting platform based in Belagavi, Karnataka - operated by Shirish Productions - with infrastructure in Indian data centres, unlimited bandwidth on every plan, billing that is genuinely transparent, and a support team that is right here when you need them.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="px-4 ">
                <div className={`container mx-auto max-w-6xl py-12 md:py-24  border-b border-gray-300/40 ${containerSpacing}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 flex justify-start">
                            {/* Map representation placeholder for Design 1 */}
                            <MissionGlobe designVariant="design1" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-sm xl:text-lg">Our Mission</h2>
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#F0E3DE] mb-6 font-montserrat leading-tight opacity-90">
                                Making enterprise-grade cloud accessible to every Indian business.
                            </h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight text-base leading-relaxed">
                                To make reliable, high-performance cloud infrastructure accessible to every Indian business - from a solo developer&apos;s first project to an enterprise&apos;s production environment - with pricing that is honest, support that is human, unlimited bandwidth that removes the traffic ceiling, and servers that are close to home..
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-4 relative">
                <div className={`container mx-auto max-w-6xl border-b border-gray-300/40 py-12 md:py-24 ${containerSpacing}`}>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-[#F0E3DE] mb-16 font-montserrat tracking-widest uppercase opacity-90">
                        Our Values
                    </h2>

                    {/* Desktop: X-Y Axis Grid Container (md and above) */}
                    <div className="relative max-w-4xl mx-auto py-4 hidden md:block">
                        {/* Vertical Y-Axis Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/60 pointer-events-none z-10" />

                        {/* Horizontal X-Axis Line */}
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/4 h-px bg-white/60 pointer-events-none z-10" />

                        {/* Grid Layout (4 Quadrants on 4 sides of X-Y Axis) */}
                        <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10">
                            {/* Quadrant 1 (Top-Left) */}
                            <div className="md:pr-4">
                                <h3 className="text-lg md:text-xl font-bold font-montserrat text-white mb-3">
                                    Transparency
                                </h3>
                                <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">
                                    clear pricing, honest SLAs, no hidden bandwidth charges or egress fees
                                </p>
                            </div>

                            {/* Quadrant 2 (Top-Right) */}
                            <div className="md:pl-4">
                                <h3 className="text-lg md:text-xl font-bold font-montserrat text-white mb-3">
                                    Reliability
                                </h3>
                                <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">
                                    99.9% uptime backed by redundant Indian infrastructure
                                </p>
                            </div>

                            {/* Quadrant 3 (Bottom-Left) */}
                            <div className="md:pr-4 md:pt-8">
                                <h3 className="text-lg md:text-xl font-bold font-montserrat text-white mb-3">
                                    Simplicity
                                </h3>
                                <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">
                                    enterprise features without enterprise complexity
                                </p>
                            </div>

                            {/* Quadrant 4 (Bottom-Right) */}
                            <div className="md:pl-4 md:pt-8">
                                <h3 className="text-lg md:text-xl font-bold font-montserrat text-white mb-3">
                                    Proximity
                                </h3>
                                <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">
                                    built in Belgaum, rooting for Indian businesses everywhere
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile: horizontally scrollable value cards (below md) */}
                    <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-2 px-2">
                        <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
                            <h3 className="text-lg font-bold font-montserrat text-white">
                                Transparency
                            </h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight opacity-80 text-sm leading-relaxed">
                                clear pricing, honest SLAs, no hidden bandwidth charges or egress fees
                            </p>
                        </div>
                        <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
                            <h3 className="text-lg font-bold font-montserrat text-white">
                                Reliability
                            </h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight opacity-80 text-sm leading-relaxed">
                                99.9% uptime backed by redundant Indian infrastructure
                            </p>
                        </div>
                        <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
                            <h3 className="text-lg font-bold font-montserrat text-white">
                                Simplicity
                            </h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight opacity-80 text-sm leading-relaxed">
                                enterprise features without enterprise complexity
                            </p>
                        </div>
                        <div className="snap-start shrink-0 w-[280px] bg-white/[0.03] border border-white/10 rounded-xl p-5 space-y-3">
                            <h3 className="text-lg font-bold font-montserrat text-white">
                                Proximity
                            </h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight opacity-80 text-sm leading-relaxed">
                                built in Belgaum, rooting for Indian businesses everywhere
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem We Saw Section */}
            <section className="px-4   ">
                <div className={`max-w-6xl mx-auto py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
                    <div className="container mx-auto ">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F0E3DE] mb-6 font-montserrat tracking-widest uppercase opacity-90">
                            The Problem We Saw
                        </h2>
                        <p className="text-[#F0E3DE] font-nunito font-extralight text-lg opacity-80">
                            For most Indian businesses looking to move to the cloud, the options were:
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="border-b border-gray-300/40  pb-12 relative">
                            <h4 className="text-neutral-500 font-courier-prime text-sm tracking-widest uppercase mb-2">Global Giants</h4>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F0E3DE] mb-4 font-courier-prime tracking-wide">AWS, Azure, GCP</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight text-lg leading-relaxed opacity-80">
                                Powerful, but complex to set up, expensive to run, billed in dollars, supported from overseas, and built around infrastructure needs most Indian businesses simply don&apos;t have.
                            </p>
                        </div>

                        <div className="border-b border-gray-300/40  pb-12 relative">
                            <h4 className="text-neutral-500 font-courier-prime text-sm tracking-widest uppercase mb-2">Budget Shared Hosting</h4>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F0E3DE] mb-4 font-courier-prime tracking-wide">Cheap, but a ceiling</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight text-lg leading-relaxed opacity-80">
                                Easy and cheap, but a single physical machine shared with hundreds of other websites — no real scalability, and a ceiling you hit the moment traffic picks up.
                            </p>
                        </div>

                        <div className="border-b border-gray-300/40  pb-12 relative">
                            <h4 className="text-neutral-500 font-courier-prime text-sm tracking-widest uppercase mb-2">Overseas VPS</h4>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F0E3DE] mb-4 font-courier-prime tracking-wide">Closer, but still far</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight text-lg leading-relaxed opacity-80">
                                Better than shared hosting, but servers sitting in Singapore or the US add unnecessary latency for Indian visitors — and support treats you like a ticket number.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 md:p-12 bg-white/8     rounded-2xl text-center">
                        <p className="text-[#F0E3DE] font-nunito font-extralight text-lg md:text-xl mb-4 opacity-80">
                            For most Indian businesses looking to move to the cloud, the options were:
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-primary font-montserrat">
                            Spin A Cloud is.
                        </h3>
                    </div>
                </div>
                </div>
                
            </section>

            {/* What Makes Us Different */}
            <section className="px-4 ">
                <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F0E3DE] mb-16 font-montserrat tracking-widest uppercase opacity-90">
                        What Makes Us Different
                    </h2>
                    <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8  pb-4 md:pb-0">
                        <div className=" md:w-auto shrink-0 snap-start p-8 border border-gray-300/40 hover:bg-white/5 transition-colors flex flex-col gap-6 rounded-xl md:rounded-none">
                            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary shrink-0">
                                <Server size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#F0E3DE] font-montserrat">Indian data centres - not a distant second.</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight leading-relaxed opacity-80">
                                Our infrastructure is physically in India, in the IXG-Belagavi zone. That means lower latency for your Indian visitors, no cross-border data concerns, and a platform that understands Indian internet conditions - not one that was built elsewhere and retrofitted for this market.
                            </p>
                        </div>

                        <div className=" md:w-auto shrink-0 snap-start p-8 border border-gray-300/40 hover:bg-white/5 transition-colors flex flex-col gap-6 rounded-xl md:rounded-none">
                            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary shrink-0">
                                <DollarSign size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#F0E3DE] font-montserrat">Billing that reflects reality</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight leading-relaxed opacity-80">
                                Cloud hosting should scale with your business, not against it. SpinACloud&apos;s hourly billing means a quiet month costs less. A product launch month scales up automatically. You&apos;re never paying for headroom you don&apos;t need.
                            </p>
                        </div>

                        <div className=" md:w-auto shrink-0 snap-start p-8 border border-gray-300/40 hover:bg-white/5 transition-colors flex flex-col gap-6 rounded-xl md:rounded-none">
                            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary shrink-0">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#F0E3DE] font-montserrat">Depth without complexity.</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight leading-relaxed opacity-80">
                                We built SpinACloud so a developer can access it via CLI with full root control, and a business owner can deploy a server through a clean dashboard without touching a terminal. The same platform serves both — you access as much or as little of its power as your needs require.
                            </p>
                        </div>

                        <div className=" md:w-auto shrink-0 snap-start p-8 border border-gray-300/40 hover:bg-white/5 transition-colors flex flex-col gap-6 rounded-xl md:rounded-none">
                            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary shrink-0">
                                <PhoneCall size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#F0E3DE] font-montserrat">A team that&apos;s actually here.</h3>
                            <p className="text-[#F0E3DE] font-nunito font-extralight leading-relaxed opacity-80">
                                Our support team is based in India, available 24×7. Not a global ticket queue. Not a bot that escalates to a human three days later. Real engineers who know the platform and understand the context of Indian businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What SpinACloud Provides Section */}
            <section className="px-4  ">
                <div className={`container mx-auto max-w-6xl py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
                    <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-sm">What SpinACloud Provides</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#F0E3DE] mb-12 font-montserrat leading-tight max-w-3xl opacity-90">
                        Core infrastructure - the <span className="text-primary">three</span> essentials for any cloud setup:
                    </h3>

                    <div className="mb-12">
                        <h4 className="text-xl text-[#F0E3DE] mb-6 font-montserrat">Core infrastructure</h4>
                        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-[#121212] p-8 border border-gray-300/20 rounded-xl md:rounded-none">
                                <h5 className="text-lg font-bold text-[#F0E3DE] mb-4 font-montserrat">Virtual Machines</h5>
                                <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 leading-relaxed">
                                    Four categories covering every workload — Basic, General Purpose, CPU Optimised, and Memory Optimised — from a startup&apos;s first server to an enterprise&apos;s production database cluster.
                                </p>
                            </div>
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-[#121212] p-8 border border-gray-300/20 rounded-xl md:rounded-none">
                                <h5 className="text-lg font-bold text-[#F0E3DE] mb-4 font-montserrat">Volume Storage</h5>
                                <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 leading-relaxed">
                                    Enterprise SSD NVMe (M.2) and NVMe SSD disk options, from 100 GB to 1,000 GB. High-performance persistent block storage that attaches directly to your VMs.
                                </p>
                            </div>
                            <div className="w-[85vw] md:w-auto shrink-0 snap-start bg-[#121212] p-8 border border-gray-300/20 rounded-xl md:rounded-none">
                                <h5 className="text-lg font-bold text-[#F0E3DE] mb-4 font-montserrat">IP Addresses</h5>
                                <p className="text-[#F0E3DE] font-nunito font-extralight text-sm opacity-80 leading-relaxed">
                                    Static public IP allocation to make your servers reachable on the internet with a consistent address.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl text-[#F0E3DE] mb-6 font-montserrat mt-16">Optional add-ons</h4>
                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-12 md:gap-y-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
                            {[
                                { num: '01', title: 'Virtual Router', desc: 'private networking between your VMs' },
                                { num: '02', title: 'Load Balancer', desc: 'distribute traffic for high availability' },
                                { num: '03', title: 'VM Snapshots', desc: 'point-in-time server recovery' },
                                { num: '04', title: 'Volume Snapshots', desc: 'lightweight storage backups' },
                                { num: '05', title: 'VM Backups', desc: 'standalone disaster-recovery copies' },
                                { num: '06', title: 'Templates', desc: 'save and relaunch identical environments' }
                            ].map((addon, i) => (
                                <div key={i} className="w-[85vw] md:w-auto shrink-0 snap-start flex gap-4 items-start border border-gray-300/20 md:border-0 md:border-b md:border-gray-300/20 p-6 md:p-0 md:pb-4 rounded-xl md:rounded-none bg-[#121212] md:bg-transparent">
                                    <span className="text-primary font-mono text-xl">{addon.num}</span>
                                    <div>
                                        <h5 className="text-[#F0E3DE] font-semibold font-montserrat">{addon.title}</h5>
                                        <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 mt-1">{addon.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="px-4 ">
                <div className={`container mx-auto max-w-6xl  py-12 md:py-24 border-b border-gray-300/40 ${containerSpacing}`}>
                    <div className="mb-12 max-w-2xl">
                        <h2 className="text-primary font-semibold tracking-wider uppercase mb-4 font-montserrat text-sm">Who We Serve</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#F0E3DE] font-montserrat leading-tight opacity-90">
                            SpinACloud is built for Indian businesses across the full spectrum of technical maturity and scale:
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px border border-gray-300/40 border-dashed">
                        {[
                            { title: 'Startups', desc: 'that need reliable infrastructure without an upfront commitment — pay for what you use, scale as you grow.' },
                            { title: 'E-Commerce Businesses', desc: 'that need to handle traffic spikes during festive sales and product launches without going down.' },
                            { title: 'Developers And DevOps Teams', desc: 'who want full control: CLI access, YAML configuration, SSH, Git workflows, and real-time monitoring.' },
                            { title: 'SaaS Companies', desc: 'building products on elastic infrastructure that scales with their user base.' },
                            { title: 'Agencies And Freelancers', desc: 'managing multiple client environments — separate VMs per client, reusable templates, and a single dashboard for everything.' },
                            { title: 'Enterprises', desc: 'needing high availability, Memory Optimised and CPU Optimised VM configurations, and Indian data centre hosting for compliance and performance requirements.' }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-[#0a0a0a] p-8 flex items-start gap-4 hover:bg-white/5 transition-colors ${idx % 2 === 0 ? 'md:border-r border-gray-300/40 border-dashed' : ''} ${idx < 4 ? 'border-b border-gray-300/40 border-dashed' : ''}`}>
                                <CheckSquare className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <h4 className="text-[#F0E3DE] font-bold mb-2 font-montserrat">{item.title}</h4>
                                    <p className="text-[#F0E3DE] text-sm font-nunito font-extralight opacity-80 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 text-center">
                <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link href="#get-started" className="px-8 py-4 bg-primary text-white font-bold font-montserrat rounded-full hover:bg-orange-600 transition-colors w-full sm:w-auto">
                        Start Hosting on SpinACloud
                    </Link>
                    <Link href="#plans" className="px-8 py-4 bg-white text-black font-bold font-montserrat rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
                        See Our Plans
                    </Link>
                </div>
            </section>
        </div>
    );
}
