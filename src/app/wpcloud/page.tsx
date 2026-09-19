import type { Metadata } from 'next';
import WpCloudPage from '@/components/WpCloudPage';

export const metadata: Metadata = {
  title: 'WP CloudOps - Fully Managed WordPress Cloud Hosting',
  description:
    "With Spin'A'Cloud™'s built-in WP CloudOps, your WordPress infrastructure is fully managed with high-frequency NVMe compute, automatic scaling, isolated environments, and 99.99% uptime.",
  alternates: {
    canonical: '/wpcloud',
  },
  openGraph: {
    title: "WP CloudOps - Fully Managed WordPress Cloud Hosting | Spin'A'Cloud™",
    description:
      "Enterprise-grade managed WordPress hosting powered by high-frequency NVMe compute, automatic scaling, and 99.99% uptime on Spin'A'Cloud™.",
    url: 'https://spinacloud.in/wpcloud',
  },
};

export default function WpCloud() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <WpCloudPage />
    </div>
  );
}
