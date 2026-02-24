'use client';

import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export function BlogShare({ title, url }: { title: string; url: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
    },
    {
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaTwitter,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: FaWhatsapp,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-primary-dark/80">Paylaş:</span>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors"
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
