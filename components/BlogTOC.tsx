'use client';

import { useState, useEffect } from 'react';

export interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function BlogTOC({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0% -70% 0%', threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  if (items.length === 0) return null;

  return (
    <>
      <button
        type="button"
        className="lg:hidden w-full flex items-center justify-between py-3 px-4 bg-white border border-primary/10 rounded-lg text-primary font-medium mb-4"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        İçindekiler
        <span className={mobileOpen ? 'rotate-180' : ''}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <nav
        className={`lg:sticky lg:top-24 ${mobileOpen ? 'block' : 'hidden lg:block'} bg-white rounded-xl p-4 border border-primary/5 shadow-sm`}
        aria-label="İçindekiler"
      >
        <h3 className="font-serif text-sm font-semibold text-primary mb-3">İçindekiler</h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={`w-full text-left py-1.5 px-2 rounded text-sm transition-colors ${
                  item.level === 3 ? 'pl-4' : ''
                } ${activeId === item.id ? 'bg-primary text-white' : 'text-primary-dark/80 hover:text-primary hover:bg-cream'}`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
