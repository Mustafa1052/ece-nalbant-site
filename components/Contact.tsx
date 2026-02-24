'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.4347094199697!2d27.889162400000004!3d39.6174149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b70127f647d0a7%3A0x90bfefbaaad0b30!2sAvukat%20Ece%20NALBANT%20Hukuk%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k!5e0!3m2!1str!2str!4v1771787158085!5m2!1str!2str';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gönderim başarısız.');
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-primary text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              İletişim
            </h2>
            <p className="text-cream/80 mb-8">
              Hukuki danışmanlık talebi veya randevu için aşağıdaki formu doldurabilir veya iletişim bilgilerinden bize ulaşabilirsiniz.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+905533704571" className="hover:text-accent transition-colors">
                  +90 553 370 45 71
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:av.ecenalbant@gmail.com" className="hover:text-accent transition-colors">
                  av.ecenalbant@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <a
                  href="https://wa.me/905533704571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp ile yazın
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="bg-cream rounded-xl p-4 w-full max-w-full overflow-hidden shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                  Balıkesir&apos;de Ofisimiz
                </h3>
                <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Balıkesir ofis konumu - Av. Ece Nalbant"
                />
                <p className="text-primary-dark/80 text-sm mt-3">
                  Balıkesir merkezde bulunan ofisimizde hukuki danışmanlık hizmeti verilmektedir.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-6 md:p-8 text-primary-dark"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="text-center py-8">
                <p className="text-primary font-medium mb-2">Mesajınız alındı.</p>
                <p className="text-sm text-primary-dark/70">En kısa sürede size dönüş yapacağım.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Ad Soyad</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition resize-none"
                    placeholder="Konu ve kısa açıklama..."
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/90 disabled:opacity-70 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    'Gönder'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
