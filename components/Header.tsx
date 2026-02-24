'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const SECTION_IDS = ['hakkimda', 'hizmetler', 'blog', 'sss', 'iletisim'] as const;

const navLinks: { href: string; label: string; sectionId?: string }[] = [
  { href: '/#hakkimda', label: 'Hakkımda', sectionId: 'hakkimda' },
  { href: '/#hizmetler', label: 'Hizmetler', sectionId: 'hizmetler' },
  { href: '/balikesir-avukat', label: 'Balıkesir Avukat' },
  { href: '/#blog', label: 'Blog', sectionId: 'blog' },
  { href: '/#sss', label: 'S.S.S.', sectionId: 'sss' },
  { href: '/#iletisim', label: 'İletişim', sectionId: 'iletisim' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) {
              setActiveSection(id);
            }
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const getLinkActive = useMemo(() => {
    return (link: (typeof navLinks)[number]) => {
      if (link.sectionId) {
        if (!isHome) return false;
        return activeSection === link.sectionId;
      }
      return pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
    };
  }, [isHome, activeSection, pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-white">
              Ece Nalbant
            </span>
            <span className="text-accent font-serif text-sm hidden sm:inline">
              Avukat
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Ana menü">
            {navLinks.map((link) => {
              const isActive = getLinkActive(link);
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  scroll={link.href.startsWith('/#')}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-accent underline underline-offset-4' : 'text-cream/90 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/ecenalbant_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              style={{ fontSize: '22px' }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/905533704571"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-primary font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <nav className="flex flex-col px-4 py-4 gap-2" aria-label="Mobil menü">
              {navLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  scroll={link.href.startsWith('/#')}
                  className={`py-2 transition-colors ${getLinkActive(link) ? 'text-accent font-medium' : 'text-cream hover:text-accent'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/ecenalbant_/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-cream hover:text-accent flex items-center gap-2 transition-colors"
              >
                <FaInstagram style={{ fontSize: '22px' }} />
                Instagram
              </a>
              <a
                href="https://wa.me/905533704571"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-accent font-medium"
              >
                WhatsApp ile İletişim
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
