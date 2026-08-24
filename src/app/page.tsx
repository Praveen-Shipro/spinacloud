import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import UseCases from '@/components/UseCases';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <Hero />
      <AboutUs />
      <UseCases />
      <Features />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
}
