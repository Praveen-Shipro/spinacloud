import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: "Disclaimer | Spin'A'Cloud™",
  description: "Please read this Disclaimer carefully before using the Spin'A'Cloud™ website, Portal, or services. By accessing any part of Spin'A'Cloud™'s digital properties, you acknowledge and agree to the terms of this Disclaimer.",
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    title: "Disclaimer | Spin'A'Cloud™",
    description: "Please read this Disclaimer carefully before using the Spin'A'Cloud™ website, Portal, or services.",
    url: 'https://spinacloud.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      badge="Legal Disclaimer"
      title="Disclaimer"
      dateInfo="Effective date: 1 July 2025 | Last updated: 1 July 2025"
    >
      {/* Intro Callout Box */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#FF6600]/40 bg-[#FF6600]/5 text-neutral-200 text-sm sm:text-base leading-relaxed">
        Please read this Disclaimer carefully before using the Spin'A'Cloud™ website, Portal, or
        services. By accessing any part of Spin'A'Cloud™&apos;s digital properties, you acknowledge and
        agree to the terms of this Disclaimer.
      </div>

      {/* 1. General Information Only */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          1. General Information Only
        </h2>
        <p>
          The content published on the Spin'A'Cloud™ website (spinacloud.in) - including blog posts,
          knowledge base articles, help guides, pricing illustrations, technical documentation, and
          marketing materials - is provided for general informational purposes only. While we make
          every effort to keep this information accurate and up to date, we make no representations or
          warranties of any kind, express or implied, about the completeness, accuracy, reliability,
          suitability, or availability of any information, products, services, or related graphics on our
          website.
        </p>
      </section>

      {/* 2. Pricing Estimates */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          2. Pricing Estimates
        </h2>
        <p>
          Any pricing estimates, calculators, or cost illustrations displayed on our website or within the
          Spin'A'Cloud™ Pricing Calculator are provided as indicative guides only. Actual charges will
          depend on your specific configuration, usage, billing cycle, and applicable taxes at the time
          of use. All confirmed pricing is displayed within the Portal at the time of provisioning.
          Spin'A'Cloud™ reserves the right to change its pricing at any time subject to the notice
          provisions in its Terms and Conditions.
        </p>
      </section>

      {/* 3. Technical Advice and Guidance */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          3. Technical Advice and Guidance
        </h2>
        <p>
          Any technical guidance, recommendations, or best practices published on our website or
          provided by our support team are provided in good faith based on general knowledge and
          our experience with our platform. They do not constitute professional IT, legal, financial, or
          compliance advice. You should always engage qualified professionals for critical
          infrastructure, security, or compliance decisions specific to your business.
        </p>
      </section>

      {/* 4. Uptime and Availability */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          4. Uptime and Availability
        </h2>
        <p>
          While Spin'A'Cloud™ targets 99.9% monthly uptime and operates on Indian data centre
          infrastructure, we do not guarantee uninterrupted, error-free, or perpetually available access
          to our services. Factors beyond our control - including internet infrastructure issues,
          third-party service failures, force majeure events, and acts of government - may affect
          availability. We are not liable for any loss or damage arising from downtime or unavailability
          of the service.
        </p>
      </section>

      {/* 5. Third-Party Content and Links */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          5. Third-Party Content and Links
        </h2>
        <p>
          Our website and documentation may reference, link to, or embed content from third-party
          websites, tools, plugins, or platforms (including WordPress.org, plugin marketplaces, and
          developer resources). Spin'A'Cloud™ does not endorse, control, or take responsibility for the
          content, privacy practices, or reliability of any third-party website or service. Links are
          provided for convenience only.
        </p>
      </section>

      {/* 6. Security */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          6. Security
        </h2>
        <p>
          While Spin'A'Cloud™ implements industry-standard security measures including SSL/TLS
          encryption, DDoS protection, and access controls, no internet-based platform can guarantee
          absolute security. You are responsible for securing your own WordPress installation,
          choosing strong passwords, keeping plugins and themes updated, and implementing
          appropriate security measures within your own hosted environment. Spin'A'Cloud™ is not liable
          for security breaches arising from vulnerabilities in software or configurations within your
          control.
        </p>
      </section>

      {/* 7. Data Loss */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          7. Data Loss
        </h2>
        <p>
          Spin'A'Cloud™ provides snapshot, backup, and volume services as optional add-ons. However,
          the availability of these tools does not release you from your own responsibility to maintain
          independent, off-platform backups of critical data. Spin'A'Cloud™ is not liable for any loss of
          data arising from hardware failure, software issues, accidental deletion, account suspension,
          or any other cause, except where directly attributable to our gross negligence.
        </p>
      </section>

      {/* 8. Intellectual Property of Third Parties */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          8. Intellectual Property of Third Parties
        </h2>
        <p>
          Spin'A'Cloud™&apos;s infrastructure is designed to host your content and applications. We do not
          monitor or control what you host. You are solely responsible for ensuring that any content,
          software, themes, plugins, or code you deploy on our platform does not infringe the
          intellectual property rights of any third party.
        </p>
      </section>

      {/* 9. Regulatory Compliance */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          9. Regulatory Compliance
        </h2>
        <p>
          Spin'A'Cloud™ provides cloud hosting infrastructure. We do not provide legal, regulatory, or
          compliance advisory services. It is your sole responsibility to ensure that your use of our
          Services and the data you process, store, or transmit through our platform complies with all
          applicable laws and regulations, including but not limited to the Digital Personal Data
          Protection Act 2023, the Information Technology Act 2000, the Companies Act 2013, and
          any sector-specific regulations applicable to your business.
        </p>
      </section>

      {/* 10. Limitation */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          10. Limitation
        </h2>
        <p>
          To the fullest extent permitted by law, Spin'A'Cloud™ excludes all liability for any loss or
          damage, whether direct, indirect, incidental, consequential, or punitive, arising from your use
          of or reliance on information published on our website or from use of our services, except as
          specifically provided in our Terms and Conditions.
        </p>
      </section>

      {/* 11. Contact */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          11. Contact
        </h2>
        <p>If you have questions about this Disclaimer, please contact us:</p>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5 text-sm text-neutral-300">
          <p className="font-bold text-white">Shirish Productions (operating as Spin'A'Cloud™)</p>
          <p>
            <span className="text-neutral-400">Address:</span> CTS No. 3439/1A and 3439/2A, 4th Floor, MORE Plaza, College Road, Above Arena Animation Belagavi, Karnataka – 590001
          </p>
          <p>
            <span className="text-neutral-400">Phone:</span>{' '}
            <a href="tel:+918105631983" className="text-primary hover:underline">
              +91 810-5631-983
            </a>
          </p>
          <p>
            <span className="text-neutral-400">Email:</span>{' '}
            <a href="mailto:mail@spinacloud.com" className="text-primary hover:underline">
              mail@spinacloud.com
            </a>
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
