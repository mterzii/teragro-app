import { motion } from 'framer-motion';
import { Droplets, TrendingUp } from 'lucide-react';

export default function DamlaSulama() {
  return (
    <main className="pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative h-64 md:h-[380px] overflow-hidden flex items-center">
        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/2260780/pexels-photo-2260780.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-cyan-800/70 to-teal-900/80"
        />

        {/* Water Droplet Particles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-32 w-28 h-28 bg-cyan-400/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-28 left-28 w-36 h-36 bg-blue-400/25 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="backdrop-blur-lg bg-white/15 border border-white/25 rounded-2xl p-6 md:p-8 max-w-3xl shadow-2xl"
            >
              {/* Top Accent Bar - Cyan/Blue theme */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-t-2xl"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 text-white drop-shadow-lg"
              >
                HASSAS DAMLA SULAMA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-base md:text-lg text-white/95 mb-1.5 drop-shadow"
              >
                Hizmetlerimiz / Sulama Teknolojileri
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-sm md:text-base text-white/90 max-w-2xl drop-shadow"
              >
                Suyu doğru noktaya, doğru dozda ulaştıran verimli sulama çözümleri.
              </motion.p>

              {/* Animated Corner Decorations */}
              <motion.div
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-28 h-28 bg-cyan-400/25 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -top-3 -left-3 w-20 h-20 bg-blue-400/20 rounded-full blur-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kontrollü Sulama Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.ardentplastik.com/storage/categories/vqTCS8TPFFs2XFdLYKhY21kLL5Ep9JQCXScYWlon.jpg"
                  alt="Damla Sulama Detay"
                  className="w-full h-[400px] object-cover"
                />
              
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                KONTROLLÜ <span className="text-[#1a4d2e]">SULAMA</span>
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Su, üretimin en kritik girdisidir. Damla sulama sistemlerimiz;
                suyu yüzeye değil, doğrudan kök bölgesine ulaştırarak kaybı
                minimuma indirir.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Arazi yapısı, ürün deseni ve basınç ihtiyacına göre sistem
                projelendirilir. Amaç yalnızca sulamak değil; sezon boyu stabil
                çalışan bir düzen kurmaktır.
              </p>

              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-[#1a4d2e]">
                  <Droplets size={24} />
                  <span className="font-semibold">Kök Bölgesi Besleme</span>
                </div>
                <div className="flex items-center gap-2 text-[#1a4d2e]">
                  <TrendingUp size={24} />
                  <span className="font-semibold">Kontrollü Dağıtım</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doğru Projelendirme / Stabil Sistem Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                DOĞRU PROJELENDİRME
              </h2>
              <h3 className="text-3xl font-bold text-[#1a4d2e] mb-6">
                STABİL SİSTEM
              </h3>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Damla sulamada farkı yaratan hortum değil; basınç dengesi,
                filtrasyon ve doğru hat planıdır.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Hat boyunca homojen dağılım sağlayarak bitkinin her noktasında
                dengeli gelişim oluşturursunuz. Bu da hem kaliteyi hem rekolteyi
                artırır.
              </p>

              
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/12734638/pexels-photo-12734638.jpeg"
                  alt="Sulama Sistemi"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}