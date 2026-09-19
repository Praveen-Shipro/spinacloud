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
    { name: 'WPCloud', href: '/wpcloud' },
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
        <div className="container mx-auto lg:px-4 flex items-center justify-between h-24 gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src={logo} alt="Spin'A'Cloud™" width={200} height={25} className="w-auto h-6 md:h-7" />
            </Link>

            <nav className="hidden lg:flex gap-6 items-center font-medium text-sm px-5 py-2.5 border rounded-3xl border-white/20">
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
              {/* Design Variant Segmented Switch */}
              {/* <div className="flex items-center p-1 bg-black/50 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-md shadow-inner">
                <button
                  onClick={() => setDesignVariant('design1')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    designVariant === 'design1'
                      ? 'bg-neutral-800 text-white shadow-md border border-white/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Figma Classic Design"
                >
                  <Layers size={13} className={designVariant === 'design1' ? 'text-primary' : ''} />
                  <span>Design 1</span>
                </button>
                
                <button
                  onClick={() => setDesignVariant('design2')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    designVariant === 'design2'
                      ? 'bg-primary text-white border border-white/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Modern 3D Design"
                >
                  <Layers size={13} className={designVariant === 'design2' ? 'text-white' : ''} />
                  <span>Design 2</span>
                </button>
              </div> */}

              <button className="hidden sm:flex px-4 py-2 text-xs font-semibold bg-[#D85803] border-2 border-primary text-white rounded-full hover:cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 transition-all active:scale-95">
                Calculator
              </button>

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

