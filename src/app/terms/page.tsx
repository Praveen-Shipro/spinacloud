import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: "Terms and Conditions | Spin'A'Cloud™",
  description: "These Terms and Conditions govern your use of Spin'A'Cloud™'s cloud hosting platform and services.",
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: "Terms and Conditions | Spin'A'Cloud™",
    description: "These Terms and Conditions govern your use of Spin'A'Cloud™'s cloud hosting platform and services.",
    url: 'https://spinacloud.in/terms',
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Terms of Service"
      title="Terms and Conditions"
      dateInfo="Effective date: 1 July 2025 | Last updated: 1 July 2025"
    >
      {/* Intro Callout Box */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#FF6600]/40 bg-[#FF6600]/5 text-neutral-200 text-sm sm:text-base leading-relaxed">
        These Terms and Conditions govern your use of Spin'A'Cloud™&apos;s cloud hosting platform and
        services. By creating an account or using any Spin'A'Cloud™ service, you agree to these terms
        in full. If you do not agree, please do not use our services.
      </div>

      {/* 1. About Us */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          1. About Us
        </h2>
        <p>
          Spin'A'Cloud™ is a cloud hosting platform operated by Shirish Productions (operating as
          Spin'A'Cloud™), registered and based in Belgaum (Belagavi), Karnataka, India. We provide
          managed WordPress cloud hosting, virtual machine infrastructure, storage volumes, IP
          addressing, and related add-on services to individuals, businesses, and developers across
          India.
        </p>
        <p>
          For any queries relating to these Terms, contact us at{' '}
          <a href="mailto:legal@spinacloud.in" className="text-primary hover:underline">
            legal@spinacloud.in
          </a>
          .
        </p>
      </section>

      {/* 2. Definitions */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          2. Definitions
        </h2>
        <p>In these Terms:</p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
          <li>
            <strong className="text-white">&ldquo;Spin'A'Cloud™&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;</strong> refers to Shirish Productions (operating as Spin'A'Cloud™).
          </li>
          <li>
            <strong className="text-white">&ldquo;You&rdquo; or &ldquo;the Customer&rdquo;</strong> refers to any individual or entity accessing or using our services.
          </li>
          <li>
            <strong className="text-white">&ldquo;Services&rdquo;</strong> means the cloud hosting infrastructure, VM plans, Volume plans, IP addressing, add-on features, and the Spin'A'Cloud™ web portal and dashboard.
          </li>
          <li>
            <strong className="text-white">&ldquo;Portal&rdquo;</strong> means the Spin'A'Cloud™ customer account and management dashboard accessible at{' '}
            <a href="https://spinacloud.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://spinacloud.in
            </a>
            .
          </li>
          <li>
            <strong className="text-white">&ldquo;Content&rdquo;</strong> means any data, files, code, databases, or other material you upload, store, or transmit through our Services.
          </li>
          <li>
            <strong className="text-white">&ldquo;Billing Cycle&rdquo;</strong> means the hourly, monthly, or annual billing period applicable to your chosen plan.
          </li>
        </ul>
      </section>

      {/* 3. Account Registration and Eligibility */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          3. Account Registration and Eligibility
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            3.1 Eligibility
          </h3>
          <p>
            You must be at least 18 years of age and capable of entering into a legally binding contract
            under Indian law to create an account and use our Services. By registering, you represent
            and warrant that you meet these requirements.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            3.2 Account Responsibility
          </h3>
          <p>
            You are solely responsible for maintaining the confidentiality of your account credentials. You
            must notify us immediately at{' '}
            <a href="mailto:legal@spinacloud.in" className="text-primary hover:underline">
              legal@spinacloud.in
            </a>{' '}
            if you suspect any unauthorised access to your account. Spin'A'Cloud™ will not be liable for any loss
            or damage arising from your failure to safeguard your credentials.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            3.3 Accurate Information
          </h3>
          <p>
            You agree to provide accurate, current, and complete information during registration and to
            update it promptly if it changes. We reserve the right to suspend or terminate accounts
            where false or misleading information is provided.
          </p>
        </div>
      </section>

      {/* 4. Services and Plans */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          4. Services and Plans
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            4.1 Description of Services
          </h3>
          <p>
            Spin'A'Cloud™ offers cloud infrastructure services including Virtual Machine (VM) plans across
            Basic, General Purpose, CPU Optimised, and Memory Optimised categories; Volume (SSD
            disk) plans; IP address allocation; and optional add-on features including Virtual Router,
            Load Balancer, VM Snapshots, Volume Snapshots, VM Backups, and Templates. Full details
            of all services, configurations, and current pricing are available in the Portal.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            4.2 Service Changes
          </h3>
          <p>
            We reserve the right to modify, update, or discontinue any Service or plan at any time.
            Where material changes affect active plans, we will provide at least 30 days&apos; notice via email
            to your registered address. Your continued use of the Service after the effective date of any
            change constitutes your acceptance of the revised terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            4.3 Fair Use
          </h3>
          <p>
            Services are provided for lawful purposes only. You must not use our infrastructure to send
            spam, host malware, conduct DDoS attacks, engage in cryptocurrency mining without prior
            written consent, or undertake any activity that breaches applicable Indian or international
            law.
          </p>
        </div>
      </section>

      {/* 5. Billing and Payment */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          5. Billing and Payment
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.1 Hourly Billing
          </h3>
          <p>
            Spin'A'Cloud™ operates primarily on an hourly billing model. You are charged for each hour (or
            part thereof) that a resource (VM, Volume, IP, or add-on) is active in your account.
            Resources are charged from the moment they are provisioned until they are deleted - not
            merely stopped or paused.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.2 Monthly and Annual Plans
          </h3>
          <p>
            Where monthly or annual plans are offered, the full period fee is payable in advance.
            Monthly plans auto-renew at the prevailing rate unless cancelled before the renewal date.
            Annual plans are non-refundable after the first 7 days.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.3 Taxes
          </h3>
          <p>
            All prices are exclusive of Goods and Services Tax (GST) unless otherwise stated. GST and
            any other applicable taxes will be added to your invoice at the prevailing rate. It is your
            responsibility to ensure your GST details provided to us are accurate.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.4 Failed Payments
          </h3>
          <p>
            If a payment fails, we will retry for up to 3 days. If payment is not received, we reserve the
            right to suspend your Services. Data associated with suspended accounts is retained for 30
            days, after which it may be permanently deleted. We are not liable for data loss resulting
            from account suspension due to non-payment.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.5 Pricing Changes
          </h3>
          <p>
            We may revise our pricing at any time. For existing active plans, price changes will take
            effect at the next renewal with at least 14 days&apos; notice. Continued use after a price change
            constitutes acceptance of the new rate.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.6 Refunds
          </h3>
          <p>
            Hourly-billed resources are non-refundable once consumed. Prepaid monthly or annual
            plans may be refunded on a pro-rata basis within 7 days of the billing date, less any hours
            already consumed. Refund requests should be submitted to{' '}
            <a href="mailto:legal@spinacloud.in" className="text-primary hover:underline">
              legal@spinacloud.in
            </a>
            . We reserve the right to decline refunds where we reasonably believe the Services have been
            abused.
          </p>
        </div>
      </section>

      {/* 6. Customer Responsibilities */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          6. Customer Responsibilities
        </h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
          <li>
            Ensure your use of the Services complies with all applicable laws and regulations in
            India and in the jurisdiction of your end users.
          </li>
          <li>Not upload or transmit illegal, infringing, defamatory, or harmful content.</li>
          <li>
            Maintain adequate backups of your data. While Spin'A'Cloud™ offers backup and
            snapshot add-ons, these are supplementary tools and do not substitute your own
            data protection obligations.
          </li>
          <li>
            Ensure your WordPress installation, plugins, and themes are kept up to date.
            Spin'A'Cloud™ provides automatic updates as part of managed hosting plans, but is not
            liable for vulnerabilities arising from third-party themes or plugins you install
            independently.
          </li>
          <li>
            Not attempt to access, interfere with, or reverse-engineer Spin'A'Cloud™&apos;s
            infrastructure, network, or systems beyond what is ordinarily permitted for your use of
            the Portal.
          </li>
        </ul>
      </section>

      {/* 7. Intellectual Property */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          7. Intellectual Property
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            7.1 Spin'A'Cloud™&apos;s IP
          </h3>
          <p>
            All content on the Spin'A'Cloud™ website, Portal, marketing materials, branding, software, and
            underlying cloud infrastructure belongs to Spin'A'Cloud™ or its licensors. You may not copy,
            reproduce, distribute, or create derivative works without our prior written consent.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            7.2 Your Content
          </h3>
          <p>
            You retain all ownership of the Content you upload to our Services. By using our Services,
            you grant Spin'A'Cloud™ a limited, non-exclusive licence to host, store, and transmit your
            Content solely for the purpose of providing the Services to you. We will not access, use, or
            disclose your Content except as necessary to provide the Services or as required by law.
          </p>
        </div>
      </section>

      {/* 8. Uptime and Service Levels */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          8. Uptime and Service Levels
        </h2>
        <p>
          Spin'A'Cloud™ targets 99.9% monthly uptime for its infrastructure. This equates to a maximum
          of approximately 8.7 hours of planned or unplanned downtime per year. Uptime is measured
          at the infrastructure level and excludes scheduled maintenance windows (of which we will
          provide at least 24 hours&apos; notice where possible), events beyond our reasonable control, and
          issues arising from your own configuration.
        </p>
        <p>
          In the event of significant unplanned downtime attributable to Spin'A'Cloud™, we may, at our
          discretion, offer service credits. Credits will not exceed the fees paid for the affected period
          and are your sole remedy for downtime.
        </p>
      </section>

      {/* 9. Limitation of Liability */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          9. Limitation of Liability
        </h2>
        <p>To the maximum extent permitted by applicable Indian law:</p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
          <li>
            Spin'A'Cloud™&apos;s total liability to you for any claim arising under or in connection with
            these Terms will not exceed the total fees paid by you to Spin'A'Cloud™ in the 3 months
            preceding the event giving rise to the claim.
          </li>
          <li>
            We are not liable for indirect, incidental, special, consequential, or punitive damages,
            including loss of data, loss of business, loss of revenue, or loss of profit, even if we
            have been advised of the possibility of such damages.
          </li>
          <li>
            We are not liable for losses arising from circumstances beyond our reasonable
            control including acts of God, natural disasters, power outages, government action,
            internet disruptions, or third-party service failures.
          </li>
        </ul>
        <p>
          Nothing in these Terms limits liability for death or personal injury caused by our negligence,
          fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under
          Indian law.
        </p>
      </section>

      {/* 10. Termination */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          10. Termination
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            10.1 By You
          </h3>
          <p>
            You may close your account at any time via the Portal. Upon account closure, all active
            resources will be terminated and data may be deleted after a 30-day retention period.
            Prepaid amounts are subject to the refund policy in Clause 5.6.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            10.2 By Spin'A'Cloud™
          </h3>
          <p>
            We may suspend or terminate your account immediately without notice if you: breach these
            Terms; engage in fraudulent activity; fail to pay amounts due after the grace period; or if we
            are required to do so by law. We may also terminate accounts with 30 days&apos; notice for any
            other reason, including business decisions to discontinue a service.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            10.3 Effect of Termination
          </h3>
          <p>
            Upon termination, your right to use the Services ceases immediately. Spin'A'Cloud™ may
            delete all data associated with your account after the applicable retention period. Clauses
            relating to intellectual property, liability, disputes, and payment obligations that accrued
            before termination will survive termination.
          </p>
        </div>
      </section>

      {/* 11. Governing Law and Disputes */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          11. Governing Law and Disputes
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any
          dispute, controversy, or claim arising out of or relating to these Terms or our Services shall
          be subject to the exclusive jurisdiction of the courts located in Belagavi, Karnataka, India.
        </p>
        <p>
          We encourage you to contact us at{' '}
          <a href="mailto:legal@spinacloud.in" className="text-primary hover:underline">
            legal@spinacloud.in
          </a>{' '}
          before initiating any formal legal proceedings, as most issues can be resolved amicably.
        </p>
      </section>

      {/* 12. Changes to These Terms */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          12. Changes to These Terms
        </h2>
        <p>
          We may update these Terms at any time. The revised Terms will be posted on our website
          with an updated effective date. For material changes, we will notify you by email at least 14
          days in advance. Your continued use of the Services after the effective date constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      {/* 13. Contact */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          13. Contact
        </h2>
        <p>For any queries about these Terms and Conditions, please contact:</p>
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
