import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { useState } from 'react';

export default function İletişim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  
  const WHATSAPP_PHONE_E164 = '905349765239'; 
  const WHATSAPP_MESSAGE =
    'Merhaba TERAGRO, web siteniz üzerinden iletişime geçiyorum. Bilgi almak istiyorum.';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const INSTAGRAM_URL = 'https://www.instagram.com/teragroziraat/';

  const MAPS_EMBED_URL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.475538262541!2d35.34739597644327!3d36.950698072204716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1528855d4b36600b%3A0x61ccbd7947156d7f!2sTeragro%20Ziraat!5e0!3m2!1str!2str!4v1770925034465!5m2!1str!2str';

  const MAPS_DIRECT_URL = 'https://maps.app.goo.gl/Gq5FPKZWugqQYLCe6';

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden flex items-center bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        {/* Animated Background Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-300/20 to-emerald-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/15 to-emerald-300/15 rounded-full blur-2xl"
        />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">
                7/24 Destek
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
            >
              <span className="bg-gradient-to-r from-[#1a4d2e] to-teal-600 bg-clip-text text-transparent">
                İletişim
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
            >
              Tarımsal çözümlerimiz hakkında detaylı bilgi almak için{' '}
              <span className="font-semibold text-[#1a4d2e]">
                bize ulaşın
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-32 h-1.5 bg-gradient-to-r from-[#1a4d2e] via-teal-500 to-emerald-400 mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-20 h-20 border-4 border-emerald-400/30 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-16 h-16 border-4 border-teal-400/30 rounded-full"
        />
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: 'Telefon',
                value: '+0534 976 52 39',
                link: 'tel:+905349765239',
                clickable: true,
              },
              {
                icon: Mail,
                title: 'Email',
                value: 'info@teragro.com',
                link: 'mailto:info@teragro.com',
                clickable: true,
              },
              {
                icon: MapPin,
                title: 'Adres',
                value: 'Teragro Ziraat',
                link: MAPS_DIRECT_URL,
                clickable: true,
              },
              {
                icon: Clock,
                title: 'Çalışma Saatleri',
                value: 'Pzt-Cum: 09:00-18:00',
                link: '',
                clickable: false,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const Component = item.clickable ? motion.a : motion.div;
              const extraProps = item.clickable
                ? {
                    href: item.link,
                    target: item.icon === MapPin ? '_blank' : undefined,
                    rel: item.icon === MapPin ? 'noopener noreferrer' : undefined,
                  }
                : {};

              return (
                <Component
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={item.clickable ? { scale: 1.03, y: -5 } : {}}
                  className={`bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 ${
                    item.clickable
                      ? 'hover:bg-[#1a4d2e] hover:shadow-xl cursor-pointer group'
                      : 'hover:bg-[#1a4d2e]/5'
                  }`}
                  {...extraProps}
                >
                  <Icon
                    size={32}
                    className={`mx-auto mb-3 transition-colors duration-300 ${
                      item.clickable
                        ? 'text-[#1a4d2e] group-hover:text-white'
                        : 'text-[#1a4d2e]'
                    }`}
                  />
                  <h3
                    className={`font-bold mb-2 transition-colors duration-300 ${
                      item.clickable
                        ? 'text-gray-900 group-hover:text-white'
                        : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      item.clickable
                        ? 'text-gray-600 group-hover:text-emerald-50'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.value}
                  </p>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bize Ulaşın

              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Adınız"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a4d2e] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a4d2e] focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a4d2e] focus:outline-none transition-colors"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Konu"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a4d2e] focus:outline-none transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a4d2e] focus:outline-none transition-colors resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#1a4d2e] text-white font-bold py-3 rounded-lg hover:bg-[#0f2818] transition-colors"
                >
                  Gönder
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={MAPS_EMBED_URL}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Teragro Ziraat Konum"
                />
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sosyal Medya
                </h3>

                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: Instagram,
                      link: INSTAGRAM_URL,
                      label: 'Instagram',
                      hoverBg: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D]',
                      color: 'text-gray-700',
                    },
                    {
                      icon: Linkedin,
                      link: '#',
                      label: 'LinkedIn',
                      hoverBg: 'hover:bg-[#0A66C2]',
                      color: 'text-gray-700',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 bg-gray-100 rounded-lg ${item.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-xl ${item.hoverBg}`}
                        aria-label={item.label}
                        title={item.label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1a4d2e] text-white font-semibold hover:bg-[#0f2818] transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp’tan yaz
                  </a>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors z-40"
        aria-label="WhatsApp ile iletişime geç"
        title="WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </main>
  );
}