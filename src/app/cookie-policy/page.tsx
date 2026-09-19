import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: "Cookie Policy | Spin'A'Cloud™",
  description: "This Cookie Policy explains how Spin'A'Cloud™ uses cookies and similar tracking technologies on spinacloud.in and the Spin'A'Cloud™ Portal.",
  alternates: {
    canonical: '/cookie-policy',
  },
  openGraph: {
    title: "Cookie Policy | Spin'A'Cloud™",
    description: "This Cookie Policy explains how Spin'A'Cloud™ uses cookies and similar tracking technologies on spinacloud.in and the Spin'A'Cloud™ Portal.",
    url: 'https://spinacloud.in/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      badge="Cookies & Storage"
      title="Cookie Policy"
      dateInfo="Effective date: 1 July 2025 | Last updated: 1 July 2025"
    >
      {/* Intro Callout Box */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#FF6600]/40 bg-[#FF6600]/5 text-neutral-200 text-sm sm:text-base leading-relaxed">
        This Cookie Policy explains how Spin'A'Cloud™ uses cookies and similar tracking technologies on
        spinacloud.in and the Spin'A'Cloud™ Portal. It should be read alongside our Privacy Policy.
      </div>

      {/* 1. What Are Cookies? */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small text files placed on your device (computer, tablet, or mobile) when you
          visit a website. They allow the website to recognise your device and remember certain
          information about your visit - such as your login status, preferences, and how you navigated
          the site. Cookies cannot access other files on your device and do not contain viruses.
        </p>
        <p>
          We also use similar technologies such as web beacons, pixel tags, and local storage where
          relevant. For simplicity, we refer to all of these collectively as &apos;cookies&apos; in this Policy.
        </p>
      </section>

      {/* 2. Cookies We Use */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          2. Cookies We Use
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            2.1 Strictly Necessary Cookies
          </h3>
          <p>
            These cookies are essential for the Spin'A'Cloud™ website and Portal to function correctly.
            Without them, services such as logging in, accessing your dashboard, and processing
            payments cannot work. They do not require your consent and cannot be disabled.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-300">
            <li>
              <strong className="text-white">Session authentication cookie</strong> - keeps you logged in to the Portal during your session.
            </li>
            <li>
              <strong className="text-white">CSRF protection cookie</strong> - prevents cross-site request forgery attacks on form submissions.
            </li>
            <li>
              <strong className="text-white">Load balancing cookie</strong> - ensures your session is routed consistently to the same server.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            2.2 Performance and Analytics Cookies
          </h3>
          <p>
            These cookies help us understand how visitors interact with our website so we can improve
            it. All data collected is aggregated and anonymised - we cannot identify you personally from
            analytics data.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-300">
            <li>
              <strong className="text-white">Page view and session analytics</strong> - we use analytics tools (such as Google Analytics 4 or Plausible Analytics) to measure visitor counts, popular pages, traffic sources, and session duration.
            </li>
            <li>
              <strong className="text-white">Error tracking</strong> - tools that help us identify technical issues on the website or Portal.
            </li>
          </ul>
          <p className="text-sm text-neutral-400">
            These cookies require your consent and are only placed if you accept them via our cookie consent banner.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            2.3 Functional Cookies
          </h3>
          <p>
            These cookies allow our website to remember choices you make and provide enhanced,
            personalised features.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-300">
            <li>Language or region preference cookies.</li>
            <li>
              Cookie consent preference cookie - records whether you have accepted or declined optional cookies, so we do not ask you again on every visit.
            </li>
            <li>Theme or display preference cookies (e.g. if a dark mode option is introduced).</li>
          </ul>
          <p className="text-sm text-neutral-400">
            These cookies require your consent where they process personal data beyond what is strictly necessary.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            2.4 Marketing and Targeting Cookies
          </h3>
          <p>
            Currently, Spin'A'Cloud™ does not use marketing or advertising cookies on its website. We do
            not use retargeting pixels or share data with advertising networks. If this changes in the
            future, we will update this Policy and obtain your explicit consent before placing any such
            cookies.
          </p>
        </div>
      </section>

      {/* 3. Third-Party Cookies */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          3. Third-Party Cookies
        </h2>
        <p>
          Some third-party services embedded in our website or Portal may set their own cookies.
          These include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
          <li>
            <strong className="text-white">Payment gateways (e.g. Razorpay):</strong> may set functional cookies necessary to process payments securely.
          </li>
          <li>
            <strong className="text-white">Support chat tools:</strong> if a live chat widget is present, it may set cookies to manage the chat session.
          </li>
          <li>
            <strong className="text-white">Analytics providers:</strong> where used, subject to your consent.
          </li>
        </ul>
        <p className="text-sm text-neutral-400">
          We do not control third-party cookies. Please refer to the privacy and cookie policies of the
          relevant third parties for more information.
        </p>
      </section>

      {/* 4. Cookie Duration */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          4. Cookie Duration
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-300">
          <li>
            <strong className="text-white">Session cookies:</strong> deleted automatically when you close your browser.
          </li>
          <li>
            <strong className="text-white">Persistent cookies:</strong> remain on your device for the period set in the cookie, or until you delete them manually. Most of our persistent cookies expire between 30 days and 12 months.
          </li>
        </ul>
      </section>

      {/* 5. Managing Your Cookie Preferences */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          5. Managing Your Cookie Preferences
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.1 Cookie Consent Banner
          </h3>
          <p>
            When you first visit the Spin'A'Cloud™ website, you will be shown a cookie consent banner. You
            can choose to accept all cookies, accept only necessary cookies, or customise your
            preferences. You can change your preferences at any time by clicking the &apos;Cookie Settings&apos;
            link in the footer of our website.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.2 Browser Settings
          </h3>
          <p>You can also control cookies through your browser settings. Most browsers allow you to:</p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-300">
            <li>See what cookies are installed on your device and delete individual cookies.</li>
            <li>Block third-party cookies.</li>
            <li>Block cookies from specific websites.</li>
            <li>Block all cookies from being set.</li>
            <li>Delete all cookies when you close your browser.</li>
          </ul>
          <p className="text-sm text-neutral-400">
            Please note that blocking strictly necessary cookies may prevent parts of the Spin'A'Cloud™
            website or Portal from functioning correctly. To manage cookies in popular browsers, visit the
            help pages for Chrome, Firefox, Safari, Edge, or your preferred browser.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold font-inter text-[#FF6600]">
            5.3 Opt-Out Tools
          </h3>
          <p>
            For analytics tools such as Google Analytics, you can install the Google Analytics Opt-Out
            Browser Add-on available at{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            . For Plausible Analytics, data is inherently anonymised and privacy-friendly.
          </p>
        </div>
      </section>

      {/* 6. Do Not Track */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          6. Do Not Track
        </h2>
        <p>
          Some browsers send a &apos;Do Not Track&apos; (DNT) signal to websites. Currently, there is no
          universally accepted standard for how websites should respond to DNT signals. At present,
          Spin'A'Cloud™ does not alter its data collection practices in response to DNT signals, but we
          respect your ability to manage cookies directly through your browser and our consent tool.
        </p>
      </section>

      {/* 7. Changes to This Cookie Policy */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          7. Changes to This Cookie Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the cookies we
          use, changes in technology, or changes in applicable law. The updated Policy will be posted
          on our website with a revised effective date. Where material changes are made, we will
          notify you via our cookie consent banner or by email.
        </p>
      </section>

      {/* 8. Contact */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold font-inter text-white">
          8. Contact
        </h2>
        <p>If you have any questions about our use of cookies, please contact:</p>
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
          <p>
            Website:{' '}
            <a
              href="https://spinacloud.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://spinacloud.in
            </a>
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
