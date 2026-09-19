import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import UseCases from '@/components/UseCases';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
// import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure & High-Performance Compute",
  description:
    "Spin up enterprise-grade cloud resources in seconds with Spin'A'Cloud™. High-frequency compute, bare metal servers, private cloud deployments, and managed WP Cloud with ultra-low latency.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure & High-Performance Compute",
    description:
      "Spin up enterprise-grade cloud resources in seconds with Spin'A'Cloud™. High-frequency compute, bare metal servers, private cloud deployments, and managed WP Cloud.",
    url: 'https://spinacloud.in',
  },
};

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <Hero />
      <AboutUs />
      <UseCases />
      <Features />
      <Benefits />
      <HowItWorks />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
    </div>
  );
}
