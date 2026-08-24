'use client';

import { useState } from 'react';
import { Terminal, CheckCircle2, Copy, Check } from 'lucide-react';
import { useDesign } from '@/context/DesignContext';

export default function HowItWorks() {
  const { designVariant } = useDesign();
  const [copied, setCopied] = useState(false);

  const commandText = "spinacloud deploy --region in-mumbai-1 --type c2.2xlarge --yes";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (designVariant === 'design2') {
    return (
      <section className="py-28 px-4 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0a090d] via-[#0e111a] to-[#0a090d]">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-20 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Streamlined Provisioning
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
              From Zero To Live In <span className="text-primary">Three Steps</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Design 2 Interactive CLI Terminal */}
            <div className="rounded-2xl overflow-hidden bg-[#0d0f14] border border-white/10 shadow-2xl font-mono text-sm group hover:border-orange-500/30 transition-all duration-300">
              <div className="bg-black/60 px-4 py-3 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-neutral-400 font-sans ml-2 flex items-center gap-1.5">
                    <Terminal size={12} className="text-neutral-500" />
                    bash - spinacloud-cli
                  </span>
                </div>

                <button 
                  onClick={handleCopy}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
                >
                  {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-6 text-neutral-300 space-y-3 leading-relaxed text-xs md:text-sm">
                <div className="flex items-center text-neutral-400">
                  <span className="text-primary font-bold mr-2">dev@spinacloud</span>
                  <span className="text-neutral-600 mr-2">~/app %</span>
                  <span className="text-white font-medium">{commandText}</span>
                </div>

                <div className="text-neutral-500 pt-1">
                  {"[1/3] Resolving node specs in region 'in-mumbai-1'..."}
                </div>
                <div className="text-neutral-300">
                  {"✔ Tier-4 Mumbai Data Centre allocated (Sub-5ms response)"}
                </div>
                <div className="text-neutral-500">
                  {"[2/3] Provisioning NVMe Block Volume (50GB attached)..."}
                </div>
                <div className="text-neutral-300">
                  {"✔ Hourly billing active at ₹6.00/hr"}
                </div>
                <div className="text-neutral-500">
                  {"[3/3] Assigning Static IPv4 + IPv6 address..."}
                </div>
                <div className="text-white font-bold pt-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Deployment Complete! Server live at 103.18.42.109</span>
                </div>

                <div className="flex items-center pt-2">
                  <span className="text-primary font-bold mr-2">dev@spinacloud</span>
                  <span className="text-neutral-600 mr-2">~/app %</span>
                  <span className="w-2 h-4 bg-white animate-pulse ml-1" />
                </div>
              </div>
            </div>

            {/* Design 2 Step Cards with Connecting Line */}
            <div className="space-y-8 relative">
              <div className="relative flex gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-neutral-400 flex items-center justify-center font-bold text-lg group-hover:text-white transition-all">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Step 1: Instant Registration
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Sign up in under 60 seconds. Zero upfront payment or credit card required to explore the control panel.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-neutral-400 flex items-center justify-center font-bold text-lg group-hover:text-white transition-all">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Step 2: Configure Compute & Storage
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Select vCPU cores, RAM size, NVMe storage volumes, and optional features like auto-snapshots and load balancers.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-neutral-400 flex items-center justify-center font-bold text-lg group-hover:text-white transition-all">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Step 3: One-Click Deploy & Go Live
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Your VM instance boots up in under two minutes. Connect your domain, deploy your code via Git or SSH, and you&apos;re live!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Design 1 Figma Classic Variant
  return (
    <section className=" px-4 relative">
      <div className="container mx-auto max-w-6xl border-b border-gray-300/40 py-24">
        <div className="grid lg:grid-cols-2 gap-8 px-4 items-center">
          {/* Terminal Mockup */}
          <div className="rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl font-mono text-sm leading-relaxed">
            <div className="bg-white/5 px-4 py-2 flex gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 text-neutral-300">
              <div className="flex text-green-400">
                <span className="mr-2">alganov@user-2JL20VG2X2-DS</span>
                <span className="text-blue-400">~ %</span>
                <span className="text-white ml-2">brew install --cask 4k-video-to-mp3</span>
              </div>
              <div className="text-neutral-500 mt-1">
                {"==> Downloading https://dl.4kdownload.com/app/4kvideotomp3_3.0..."}
              </div>
              <div className="mt-1">
                {"Already downloaded: /Users/alganov/Library/Caches/Homebrew/downloads/50862468000b112b378e388ef9979aafb5ce1752ea370cd4960cd40e89be8f3--4kvideotomp3_3.0.1.dmg"}
              </div>
              <div className="text-blue-400 mt-1">
                {"==> Installing Cask 4k-video-to-mp3"}
              </div>
              <div className="mt-1">
                {"==> Moving App '4K Video to MP3.app' to '/Applications/4K Video to MP3.app'"}
              </div>
              <div className="text-green-400 font-bold mt-1">
                🍺  4k-video-to-mp3 was successfully installed!
              </div>
              <div className="flex text-green-400 mt-2">
                <span className="mr-2">alganov@user-2JL20VG2X2-DS</span>
                <span className="text-blue-400">~ %</span>
                <span className="w-2 h-4 bg-white animate-pulse ml-2" />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            <div className="mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">Deploy In Three Simple Phases</h2>
          <h3 className="text-xl md:text-2xl font-bold font-montserrat mb-6 text-[#F0E3DE] opacity-75 max-w-2xl">From Zero To Live In Three Steps</h3>
        </div>
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent border border-white/20 text-white flex items-center justify-center font-bold z-10 relative mt-1">
                1
              </div>
              <div>
                <h4 className="text-base font-bold font-montserrat text-white mb-0.5">Step 1: Create Your Account</h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-normal font-nunito">
                  Sign Up In Minutes. No Credit Card Required To Explore The Dashboard.
                </p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent border border-white/20 text-white flex items-center justify-center font-bold z-10 relative mt-1">
                2
              </div>
              <div>
                <h4 className="text-base font-bold font-montserrat text-white mb-0.5">Step 2: Choose Your Configuration</h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-normal font-nunito">
                  Pick A VM Plan, Add Storage Volumes, Assign An IP, And Add Any Features You Need - Virtual Router, Load Balancer, Snapshots, Backups.
                </p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-transparent border border-white/20 text-white flex items-center justify-center font-bold z-10 relative mt-1">
                3
              </div>
              <div>
                <h4 className="text-base font-bold font-montserrat text-white mb-0.5">Step 3: Deploy And Go Live</h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-normal font-nunito">
                  Your Infrastructure Is Ready In Under Two Minutes. Point Your Domain, Deploy Your App, And You Are Live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
