import { motion } from 'framer-motion';
import { Droplet, Leaf, Wind, Bug, Zap, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bug,
    title: 'Zirai İlaçlar',
    description: 'Fungisit, herbisit ve insektisit ürünleriyle bitki sağlığını koruyan çevre dostu çözümler.',
    link: '/faaliyetler#zirai-ilaclar',
  },
  {
    icon: Leaf,
    title: 'Gübre Çözümleri',
    description: 'Klasik, sıvı ve mikro element gübrelerle toprak verimliliğini artıran özel formülasyonlar.',
    link: '/faaliyetler#gubre-cozumleri',
  },
  {
    icon: Wind,
    title: 'Tohum & Aşılama',
    description: 'Sebze ve tarla ürünlerine özel, yüksek çimlenme oranına sahip kaliteli tohum seçkisi.',
    link: '/faaliyetler#tohum-asilama',
  },
  {
    icon: Droplet,
    title: 'Damla Sulama Sistemleri',
    description: 'Su tasarrufu sağlayan, verim arttıran modern damla sulama teknolojisi çözümleri.',
    link: '/faaliyetler#damla-sulama',
  },
  {
    icon: Zap,
    title: 'Tarım Danışmanlığı',
    description: 'Uzman ekibimizle tarım planlama, ürün seçimi ve yönetim konularında profesyonel rehberlik.',
    link: '/faaliyetler#tarim-danismanligi',
  },
  {
    icon: Sprout,
    title: 'Organik Ürünler',
    description: 'Doğal ve organik sertifikalı ürünlerle sürdürülebilir tarım için çevre dostu çözümler.',
    link: '/faaliyetler#organik-urunler',
  },
];

export default function Services() {
  const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const Icon = service.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex-shrink-0 w-80 md:w-96"
      >
        <Link
          to={service.link}
          className="block bg-gradient-to-br from-[#1a4d2e] to-[#2d5a3d] hover:bg-white hover:from-white hover:to-white rounded-2xl p-6 md:p-8 border border-[#1a4d2e] shadow-lg hover:shadow-2xl transition-all duration-100 ease-in-out group"
        >
          <div className="mb-4 w-12 h-12 bg-white group-hover:bg-gradient-to-br group-hover:from-[#1a4d2e] group-hover:to-[#2d5a3d] rounded-xl flex items-center justify-center transition-all duration-150 ease-in-out group-hover:rotate-12">

            <Icon size={24} className="text-gray-900 group-hover:text-white transition-colors duration-300 ease-in-out" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300 ease-in-out">
            {service.title}
          </h3>
          <p className="text-gray-100 group-hover:text-gray-600 leading-relaxed transition-colors duration-300 ease-in-out">
            {service.description}
          </p>
        </Link>
      </motion.div>
    );
  };

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Hizmet Alanlarımız</h2>
          <p className="section-subtitle">
            Tarımın her alanında kapsamlı, bütünleşik ve profesyonel çözümler sunuyoruz
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrollable container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 md:gap-8 px-4 animate-marquee has-[:hover]:[animation-play-state:paused]"
          >
            {/* First set */}
            {services.map((service, index) => (
              <ServiceCard key={`set1-${index}`} service={service} index={index} />
            ))}
            {/* Second set */}
            {services.map((service, index) => (
              <ServiceCard key={`set2-${index}`} service={service} index={index} />
            ))}
            {/* Third set */}
            {services.map((service, index) => (
              <ServiceCard key={`set3-${index}`} service={service} index={index} />
            ))}
            {/* Fourth set */}
            {services.map((service, index) => (
              <ServiceCard key={`set4-${index}`} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
