import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #1a4d2e 0%, #0f2818 100%)',
      }}
    >
      {/* Parallax background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
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
          Üretiminizi Güçlendirmeye Hazırız
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed"
        >
         Uzman ekibimizle ihtiyaçlarınıza özel, sürdürülebilir tarım çözümleri sunuyoruz.
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
            Bizimle İletişime Geçin
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
