import type { Metadata } from 'next';
import AboutUsPage from '@/components/AboutUsPage';

export const metadata: Metadata = {
  title: 'About Us - Our Mission, Vision & Infrastructure',
  description:
    "Learn about Spin'A'Cloud™'s mission to deliver sovereign, ultra-low-latency, next-generation cloud infrastructure and high-frequency compute across India.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Us - Our Mission, Vision & Infrastructure | Spin'A'Cloud™",
    description:
      "Learn about Spin'A'Cloud™'s mission to deliver sovereign, ultra-low-latency, next-generation cloud infrastructure and high-frequency compute across India.",
    url: 'https://spinacloud.in/about',
  },
};

export default function About() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <AboutUsPage />
    </div>
  );
}
