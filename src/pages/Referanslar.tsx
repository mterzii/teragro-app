import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PartnersScroll from '../components/PartnersScroll';

type Partner = {
  company: string;
  image: string;
  fallback?: string;
};

export default function Referanslar() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // public/partners içindeki dosyalar:
  // agrobestlogo.png, doktorlogo.jpg, gentalogo.png, gubretas.jpg,
  // igsaslogo.jpg, safalogo.png, toroslogo.jpg
  const references: Partner[] = [
    { company: 'Toros Tarım', image: '/partners/toroslogo.jpg', fallback: '/partners/toroslogo.jpg' },
    { company: 'Gübretaş', image: '/partners/gubretas.jpg', fallback: '/partners/gubretas.jpg' },
    { company: 'İGSAŞ', image: '/partners/igsaslogo.jpg', fallback: '/partners/igsaslogo.jpg' },
    { company: 'GENTA Tarım', image: '/partners/gentalogo.png', fallback: '/partners/gentalogo.png' },
    { company: 'Doktor Tarsa (DRT)', image: '/partners/doktorlogo.jpg', fallback: '/partners/doktorlogo.jpg' },
    { company: 'Agrobest', image: '/partners/agrobestlogo.png', fallback: '/partners/agrobestlogo.png' },
    { company: 'Safa Tarım', image: '/partners/safalogo.png', fallback: '/partners/safalogo.png' },
  ];

  return (
    <main className="pt-20 overflow-x-hidden w-full">
      <section className="relative h-64 md:h-80 overflow-hidden flex items-center bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100">
        {/* Geometric Shapes */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-400/40 to-teal-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-300/40 to-emerald-400/30 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            >
              Referanslarımız
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1a4d2e] to-teal-600 mt-6 origin-left"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">İş Ortaklarımız</h2>
            <p className="section-subtitle">Birlikte çalıştığımız güvenilir markalar</p>
          </motion.div>

          {/* PartnersScroll partner.image üzerinden render ediyor.
              Dış link yok, tamamı local /public/partners. */}
          <PartnersScroll partners={references} />
        </div>
      </section>

      <section
        ref={ctaRef}
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(135deg, #1a4d2e 0%, #0f2818 100%)' }}
      >
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-20 -left-20 bg-white rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-white rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight"
          >
            Bir Sonraki Proje Sizinki Olabilir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed"
          >
            Tarımsal üretiminizi bir üst seviyeye taşımak için bizimle iletişime geçin.
          </motion.p>

          <Link to="/iletisim">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 bg-white hover:bg-gray-100 text-[#1a4d2e] font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              İletişime Geçin
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}