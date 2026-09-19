import type { Metadata } from 'next';
import ContactUsPage from '@/components/ContactUsPage';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Cloud Specialists',
  description:
    "Connect with Spin'A'Cloud™ sales and engineering teams for custom cloud deployments, enterprise migration, pricing inquiries, and 24/7 technical support.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Us - Get in Touch with Cloud Specialists | Spin'A'Cloud™",
    description:
      "Connect with Spin'A'Cloud™ sales and engineering teams for custom cloud deployments, enterprise migration, pricing inquiries, and 24/7 technical support.",
    url: 'https://spinacloud.in/contact',
  },
};

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden relative">
      <ContactUsPage />
    </div>
  );
}
