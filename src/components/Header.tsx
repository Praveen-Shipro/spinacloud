'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Layers } from 'lucide-react';
import logo from '../assets/images/logo-1.png';
import { useDesign } from '@/context/DesignContext';

export default function Header() {
  const { designVariant, setDesignVariant } = useDesign();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'WP CloudOps', href: '/wpcloud' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/wpcloud') return pathname === '/wpcloud' || pathname === '/wp-cloud';
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 w-full mx-auto px-4 backdrop-blur-md ${isHomepage ? '' : 'border-dashed'}`}>
      <div className={`mx-auto max-w-6xl 2xl:max-w-7xl ${isHomepage ? '' : 'lg:border-x border-dashed'}`}>
        <div className="container mx-auto lg:px-4 flex items-center justify-between h-24 gap-4 relative">
            <Link href="/" className="flex items-center gap-2 shrink-0 z-10">
              <Image src={logo} alt="Spin'A'Cloud™" width={260} height={45} className="w-auto h-8 sm:h-9 md:h-10 lg:h-11" priority />
            </Link>

            <nav className="hidden lg:flex gap-6 items-center font-medium text-sm px-5 py-2.5 border rounded-3xl border-white/20 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isLinkActive(link.href)
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Calculator button hidden as requested */}

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-4 text-base font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors py-1 ${
                      isLinkActive(link.href)
                        ? 'text-primary font-semibold'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
    </header>
  );
}

