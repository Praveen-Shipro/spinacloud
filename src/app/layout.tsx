import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Nunito, Inter, Roboto, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DesignProvider } from "@/context/DesignContext";

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
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${nunito.variable} ${inter.variable} ${roboto.variable} ${courierPrime.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-blue-500/30 relative mx-auto">
        <DesignProvider>
          <div className="hidden lg:flex fixed inset-0 pointer-events-none justify-center z-40 ">
            <div className="w-full max-w-6xl h-full relative ">
              <div 
                className="absolute top-0 left-0 h-full w-[1px]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg width='2' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='1' y1='0' x2='1' y2='100%25' stroke='%23d4d4d4' stroke-opacity='0.5' stroke-width='1' stroke-dasharray='10%2c 14' stroke-linecap='square'/%3e%3c/svg%3e\")", backgroundRepeat: 'repeat-y' }}
              />
              <div 
                className="absolute top-0 right-0 h-full w-[1px]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg width='2' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='1' y1='0' x2='1' y2='100%25' stroke='%23d4d4d4'  stroke-width='1' stroke-dasharray='10%2c 14' stroke-linecap='square'/%3e%3c/svg%3e\")", backgroundRepeat: 'repeat-y' }}
              />
            </div>
          </div>

          <Header />
          <main className="flex-1 flex flex-col relative z-[1]">
            {children}
          </main>
          <Footer />
        </DesignProvider>
      </body>
    </html>
  );
}
