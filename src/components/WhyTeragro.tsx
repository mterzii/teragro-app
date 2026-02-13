import { motion } from 'framer-motion';
import { Users, MapPin, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Uzman Kadro',
    description: 'Tarım mühendisleri ve agronomiyle 50+ yıllık birleşik tecrübeyle, her sorunun çözümü var.',
  },
  {
    icon: MapPin,
    title: 'Bölgesel Tecrübe',
    description: 'Yerel iklim, toprak ve ürün dinamiklerini bilir, uygulanabilir çözümler sunuz.',
  },
  {
    icon: Zap,
    title: 'Güçlü Tedarik Ağı',
    description: 'Ülkenin en büyük tarım şirketleriyle işbirliği yaparak daima stok garantisi sunuyoruz.',
  },
];

export default function WhyTeragro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Neden TERAGRO?</h2>
          <p className="section-subtitle">
            Bölgenin en güvenilir tarım çözüm ortağı olarak öne çıkan üç temel gücümüz
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 flex justify-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1a4d2e]/10 to-[#3d5a3d]/10 rounded-full flex items-center justify-center group hover:bg-gradient-to-br hover:from-[#1a4d2e] hover:to-[#3d5a3d] transition-all duration-300">
                    <Icon
                      size={32}
                      className="text-[#1a4d2e] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
