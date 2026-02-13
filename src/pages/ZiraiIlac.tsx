import { motion } from 'framer-motion';
import { Leaf, Shield, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

export default function ZiraiIlac() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[380px] overflow-hidden flex items-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                Hizmetlerimiz / Zirai İlaç
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
            >
              ZİRAİ İLAÇ
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-500 mb-6 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-700 max-w-2xl"
            >
              Kontrollü mücadele ve doğru analiz ile bitkilerinizi koruyun
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* SOL TARAF GÖRSEL */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/20280076/pexels-photo-20280076.jpeg?auto=compress&cs=tinysrgb&w=1200)",
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* SAĞ TARAF YAZI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                KONTROLLÜ <span className="text-[#1a4d2e]">MÜCADELE</span>
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Her tarla aynı değildir. Hastalık ve zararlı yönetiminde sonuç
                veren şey “ürün çokluğu” değil, doğru teşhis ve doğru uygulamadır.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Fungisit, herbisit ve insektisit gruplarında; ruhsatlı, güvenilir
                ürünlerle sahaya uygun planlama yaparız. Hedef: minimum kayıpla,
                sezon boyunca sürdürülebilir koruma.
              </p>

              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-[#1a4d2e]">
                  <Leaf size={24} />
                  <span className="font-semibold">Kontrollü Uygulama</span>
                </div>
                <div className="flex items-center gap-2 text-[#1a4d2e]">
                  <Sprout size={24} />
                  <span className="font-semibold">Ölçülebilir Sonuç</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doğru Analiz / Doğru Müdahale Section */}
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
                DOĞRU ANALİZ
              </h2>
              <h3 className="text-3xl font-bold text-[#1a4d2e] mb-6">
                DOĞRU MÜDAHALE
              </h3>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Rastgele uygulama maliyettir. Doğru etken madde, doğru doz ve
                doğru zaman; mücadelenin temelidir.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Bitkinin dönemi, iklim ve saha koşullarına göre program
                oluşturulur. Amaç sadece “müdahale” değil, rekolteyi güvence
                altına almaktır.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                İhtiyaca göre fungisit / herbisit / insektisit planlaması ile
                riskleri kontrol altına alırız.
              </p>

              {/* motion.a yerine MotionLink */}
              <MotionLink
                to="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#1a4d2e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0f2818] transition-colors"
              >
                UZMAN DESTEĞİ AL
              </MotionLink>
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
                  src="https://scdagriculture.com/wp-content/uploads/2024/08/gubre-1-1024x683.jpg"
                  alt="Tarla Uygulaması"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.pexels.com/photos/20280076/pexels-photo-20280076.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Ürün Grupları</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sahaya uygun koruma yaklaşımı için temel gruplar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fungisit',
                description:
                  'Mantar hastalıklarına karşı koruma ve programlı uygulama',
                icon: Shield,
              },
              {
                title: 'Herbisit',
                description: 'Yabancı ot kontrolü için doğru etken madde seçimi',
                icon: Leaf,
              },
              {
                title: 'İnsektisit',
                description:
                  'Zararlılara karşı hedef odaklı ve kontrollü mücadele',
                icon: Sprout,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1a4d2e] rounded-full flex items-center justify-center mb-6">
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}