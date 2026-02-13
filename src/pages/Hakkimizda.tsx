import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Hakkimizda() {
  const sections = [
    {
      id: 'about',
      title: 'Hakkımızda',
      image: 'https://images.pexels.com/photos/8411350/pexels-photo-8411350.jpeg',
      content:
        'TERAGRO, tarımsal üretimin her alanında şekillendirici rol oynayan bir bölgesel otoritedir. Gıda güvenliğinden çevre koruma ndan verimlilik artışına kadar, bütün çözümlerimiz deneyim ve teknolojinin buluştuğu noktada oluşturulmuştur.',
    },
    {
      id: 'vision',
      title: 'Vizyon',
      image: 'https://images.pexels.com/photos/539282/pexels-photo-539282.jpeg',
      content:
        'Tarımsal kalkınmaya katkı sağlayan, bölgesel ve uluslararası standartlardaki ürün ve hizmetlerle üreticilik artışının öncüsü olmak.',
    },
    {
      id: 'mission',
      title: 'Misyon',
      image: 'https://images.pexels.com/photos/33881124/pexels-photo-33881124.jpeg',
      content:
        'Üreticilerimizin kaliteli ve güvenilir ürünlere erişimini sağlamak, onları en son tarım teknolojileri hakkında bilgilendirmek ve sürdürülebilir tarım uygulamalarını yaygınlaştırmak.',
    },
  ];

  const values = [
    'Kalite ve Güvenilirlik',
    'Yenilik ve Teknoloji',
    'Müşteri Memnuniyeti',
    'Sürdürülebilirlik',
    'Bölgesel Sorumluluk',
    'Etik ve Şeffaflık',
  ];

  const certifications = [
    'ISO 9001 Kalite Yönetim Sistemi',
    'ISO 14001 Çevre Yönetim Sistemi',
    'Gıda Güvenliği Sertifikası',
    'Organik Ürün Sertifikası',
  ];

  return (
    <main className="pt-20">
      <section className="relative h-80 overflow-hidden flex items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/40 to-emerald-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/30 to-green-300/20 rounded-full blur-3xl"
        />

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
              <span className="px-4 py-2 bg-[#1a4d2e] text-white text-sm font-semibold rounded-full">
                TERAGRO'nun vizyonu, misyonu ve değerleri
              </span>
            </motion.div>
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              Hakkımızda
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1a4d2e] to-green-600 mt-6 origin-left"
            />
          </motion.div>
          
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`section-padding ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-2xl w-full h-96 object-cover shadow-xl"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-2xl w-full h-96 object-cover shadow-xl"
                    />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

     

     
    </main>
  );
}
