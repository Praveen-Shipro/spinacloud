import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SpinACloud - Next Generation Cloud Infrastructure",
  description: "Spin up cloud resources in seconds.",
};

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
      <body className="min-h-screen flex flex-col selection:bg-blue-500/30 relative mx-auto bg-[#080808]">
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
            <main className="flex-1 flex flex-col relative z-[1]">
              {children}
            </main>
            <Footer />
          </DesignProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
