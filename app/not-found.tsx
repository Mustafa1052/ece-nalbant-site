import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-cream">
      <h1 className="font-serif text-6xl md:text-8xl font-semibold text-primary mb-2">404</h1>
      <p className="text-primary-dark/80 text-lg mb-8 text-center">
        Aradığınız sayfa bulunamadı.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
