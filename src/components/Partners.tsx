import { motion } from 'framer-motion';
import { useState } from 'react';

const logos = [
  { name: 'Partner 1', color: 'bg-blue-600' },
  { name: 'Partner 2', color: 'bg-green-600' },
  { name: 'Partner 3', color: 'bg-red-600' },
  { name: 'Partner 4', color: 'bg-purple-600' },
  { name: 'Partner 5', color: 'bg-yellow-600' },
  { name: 'Partner 6', color: 'bg-indigo-600' },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const LogoItem = ({ logo, index }: { logo: typeof logos[0]; index: number }) => (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className={`w-20 h-20 md:w-28 md:h-28 rounded-lg transition-all duration-300 ${
          hoveredIndex === index ? logo.color : 'bg-gray-300'
        }`}
      />
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 bg-[#1a4d2e] transition-opacity duration-300" />
    </motion.div>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Güvenilen Partnerler</h2>
          <p className="section-subtitle">
            Bölge genelinde önde gelen tarım işletmeleri ve perakendeciler bize güven duyuyor
          </p>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Slider container */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1200 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-6 md:gap-8"
            onHoverStart={function(e) {
              (e.currentTarget as any).style.animationPlayState = 'paused';
            }}
          >
            {/* Original set */}
            {logos.map((logo, index) => (
              <LogoItem key={`original-${index}`} logo={logo} index={index} />
            ))}
            {/* Duplicate set for infinite loop */}
            {logos.map((logo, index) => (
              <LogoItem key={`duplicate-${index}`} logo={logo} index={index + logos.length} />
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-8 md:mt-12"
        >
          Hobnob üzerine geliniz - Markalar renkli görünür
        </motion.p>
      </div>
    </section>
  );
}
