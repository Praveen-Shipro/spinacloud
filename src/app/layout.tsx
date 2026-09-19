import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Nunito, Inter, Roboto, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DesignProvider } from "@/context/DesignContext";
import DynamicAmbientGlow from "@/components/DynamicAmbientGlow";
import SmoothScroll from "@/components/SmoothScroll";
import VerticalDashedLines from "@/components/VerticalDashedLines";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spinacloud.in"),
  title: {
    default: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure",
    template: "%s | Spin'A'Cloud™",
  },
  description:
    "Spin up enterprise-grade cloud resources in seconds with Spin'A'Cloud™. High-frequency compute, bare metal servers, private cloud deployments, and managed WP Cloud with ultra-low latency.",
  applicationName: "Spin'A'Cloud™",
  authors: [{ name: "Spin'A'Cloud™", url: "https://spinacloud.in" }],
  creator: "Spin'A'Cloud™",
  publisher: "Spin'A'Cloud™",
  category: "technology",
  keywords: [
    "Spin'A'Cloud™",
    "cloud infrastructure",
    "bare metal servers",
    "cloud hosting india",
    "high frequency compute",
    "private cloud",
    "managed cloud",
    "GPU cloud",
    "WP Cloud",
    "WordPress cloud hosting",
    "cloud hosting",
    "enterprise cloud infrastructure"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spinacloud.in",
    siteName: "Spin'A'Cloud™",
    title: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure",
    description:
      "Spin up enterprise-grade cloud resources in seconds with Spin'A'Cloud™. High-frequency compute, bare metal servers, private cloud, and managed WP Cloud.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure & High-Performance Compute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spin'A'Cloud™ - Next Generation Cloud Infrastructure",
    description:
      "Spin up enterprise-grade cloud resources in seconds with Spin'A'Cloud™. High-frequency compute, bare metal servers, private cloud, and managed WP Cloud.",
    images: ["/og-image.png"],
    creator: "@spinacloud",
  },
  alternates: {
    canonical: "https://spinacloud.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spinacloud.in/#organization",
      "name": "Spin'A'Cloud™",
      "url": "https://spinacloud.in",
      "logo": "https://spinacloud.in/og-image.png",
      "description": "Next Generation Sovereign Cloud Infrastructure & High-Performance Compute",
      "sameAs": [
        "https://twitter.com/spinacloud",
        "https://www.linkedin.com/company/spinacloud"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CTS No. 3439/1A and 3439/2A, 4th Floor, MORE Plaza, College Road, Above Arena Animation",
        "addressLocality": "Belagavi",
        "addressRegion": "Karnataka",
        "postalCode": "590001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91-810-5631-983",
        "email": "mail@spinacloud.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://spinacloud.in/#website",
      "url": "https://spinacloud.in",
      "name": "Spin'A'Cloud™",
      "description": "Spin up enterprise-grade cloud resources in seconds.",
      "publisher": {
        "@id": "https://spinacloud.in/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
};

const GTM_ID = 'GTM-KTZ2KXZJ';
const isProduction = process.env.NODE_ENV === 'production';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${nunito.variable} ${inter.variable} ${roboto.variable} ${courierPrime.variable} antialiased`}
    >
      <head>
        {/* Google Tag Manager - Temporarily commented out for Render testing. Uncomment when deploying to cPanel production.
        {isProduction && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-blue-500/30 relative mx-auto bg-[#080808]">
        {/* Google Tag Manager (noscript) - Temporarily commented out for Render testing. Uncomment when deploying to cPanel production.
        {isProduction && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        */}
        <SmoothScroll>
          <DesignProvider>
            <div 
              className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-0 dot-grid-pattern opacity-90" />
              <DynamicAmbientGlow />
            </div>

            <VerticalDashedLines />

            <Header />
            <main className="flex-1 flex flex-col relative">
              {children}
            </main>
            <Footer />
          </DesignProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
