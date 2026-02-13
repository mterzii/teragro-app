import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QualityPolicy() {
  const principles = [
    'Müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunmak',
    'Çevre ve insan sağlığına duyarlı ürünler temin etmek',
    'Sürekli gelişim ve yenilikçi çözümler üretmek',
    'Tarımsal sürdürülebilirliğe katkı sağlamak',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://smart-match.net/wp-content/uploads/2023/04/SMM_AP_23_0056_web_makale_gorselleri_3nisan_Ziraat-Muhendisi_030423.png"
              alt="Kalite Politikamız"
              className="rounded-2xl w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kalite Politikamız
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              TERAGRO olarak, tarım sektöründe en yüksek standartları hedefleyerek,
              üreticilerimize güvenilir, etkili ve çevre dostu çözümler sunmayı taahhüt ediyoruz.
            </p>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={24}
                    className="text-[#1a4d2e] flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-700 text-base md:text-lg">
                    {principle}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link to="/hakkimizda">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 btn-primary bg-[#1a4d2e] text-white px-8 py-3 rounded-lg font-semibold"
              >
                Detaylı Bilgi
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
