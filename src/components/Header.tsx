'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Layers } from 'lucide-react';
import logo from '../assets/images/logo-1.png';
import { useDesign } from '@/context/DesignContext';

export default function Header() {
  const { designVariant, setDesignVariant } = useDesign();

  return (
    <header className="sticky top-0 z-50 w-full mx-auto px-4 backdrop-blur-md border-b border-dashed">
      <div className="mx-auto max-w-6xl border-l border-dashed">
        <div className="border-r border-dashed">
          <div className="container mx-auto lg:px-4 flex items-center justify-between h-24 gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src={logo} alt="logo" width={200} height={25} className="w-auto h-6 md:h-7" />
            </Link>

            <nav className="hidden lg:flex gap-6 items-center font-medium text-sm text-foreground/80 px-5 py-2.5 border rounded-3xl border-white/20">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/#features" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/#pricing" className="hover:text-primary transition-colors">Plans</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Design Variant Segmented Switch */}
              <div className="flex items-center p-1 bg-black/50 border border-white/15 rounded-full text-xs font-semibold backdrop-blur-md shadow-inner">
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
              </div>

              <button className="hidden sm:flex px-4 py-2 text-xs font-semibold bg-transparent border-2 border-primary text-white rounded-full hover:bg-primary/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all active:scale-95">
                Get Started
              </button>

              <button className="lg:hidden p-2 text-foreground">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
