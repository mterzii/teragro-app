import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectsShowcase() {
  const sections = [
    {
      title: 'Gerçek Sahadaki Çalışmalarımız',
      description:
        'Bölge genelinde pek çok farklı projenin imalatını yaptık. Tamamlanan ve üretim devam eden projelerine gözatmak için...',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imagePosition: 'right',
    },
    {
      title: 'Çözüm Alanlarımız',
      description:
        '1972\'den bu yana çeşitli tarım sektöründe iş yapan firmalara. Teknik servis, danışmanlık, makine revizyonlarına üretimlerinin kalitesini üretim hızını artırma vb. konularda destek vermekteyiz.',
      image: 'https://images.pexels.com/photos/539282/pexels-photo-539282.jpeg',
      imagePosition: 'left',
    },
  ];

  return (
    <section className="bg-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`py-12 md:py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {section.imagePosition === 'right' ? (
                <>
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="w-20 h-1 bg-[#c9a961]" />
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {section.description}
                    </p>
                    
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <div className="mb-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="w-20 h-1 bg-[#c9a961]" />
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {section.description}
                    </p>
                    
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
