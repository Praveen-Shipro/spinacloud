import type { Metadata } from 'next';
import ServicesPage from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Cloud Services & Solutions - Bare Metal, Compute & Private Cloud',
  description:
    "Explore Spin'A'Cloud™’s cloud solutions: bare metal servers, private cloud deployments, managed orchestration, high-speed networking, and enterprise NVMe storage.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Cloud Services & Solutions | Spin'A'Cloud™",
    description:
      "Explore Spin'A'Cloud™’s cloud solutions: bare metal servers, private cloud deployments, managed orchestration, high-speed networking, and enterprise NVMe storage.",
    url: 'https://spinacloud.in/services',
  },
};

export default function Services() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <ServicesPage />
    </div>
  );
}
