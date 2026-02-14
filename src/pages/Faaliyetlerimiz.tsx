import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

type CategoryId =
  | 'pestisit'
  | 'gubre'
  | 'meyve-sebze'
  | 'tarla-bitkileri'
  | 'sera-uretimi'
  | 'bag-bahce';

type Item = {
  name: string;
  subcategory?: string;
  image?: string; // sadece meyve/sebze + tarla vb. için kullanılacak
};

type Category = {
  id: CategoryId;
  name: string;
  image?: string; // hero image (pestisit/gubre aynı kalacak: undefined)
  description: string;
  subcategories: string[];
  items: Item[];
};

const pexels = (url?: string, w = 800) => {
  if (!url) return undefined;
  const base = url.split('?')[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
};

const categories: Category[] = [
  // ✅ BUNLARA DOKUNMADIK
  {
    id: 'pestisit',
    name: 'Zirai İlaçlar',
    image: undefined,
    description:
      'Bitki hastalık ve zararlılarına karşı kontrollü ve profesyonel koruma çözümleri',
    subcategories: ['Fungisit', 'Herbisit', 'İnsektisit'],
    items: [
      { name: 'Premium Fungisit', subcategory: 'Fungisit' },
      { name: 'Geniş Spektrumlu Herbisit', subcategory: 'Herbisit' },
      { name: 'Etkili İnsektisit', subcategory: 'İnsektisit' },
      { name: 'Koruma Fungisiti', subcategory: 'Fungisit' },
    ],
  },
  {
    id: 'gubre',
    name: 'Gübre Çözümleri',
    image: undefined,
    description:
      'Toprak verimliliğini artıran, bitki beslenimini optimize eden gübreleme çözümleri',
    subcategories: ['Klasik', 'Sıvı', 'Mikro Element'],
    items: [
      { name: 'NPK Klasik Gübre', subcategory: 'Klasik' },
      { name: 'Sıvı Gübre 20-20-20', subcategory: 'Sıvı' },
      { name: 'Mikro Element Paketi', subcategory: 'Mikro Element' },
      { name: 'Organik Gübre', subcategory: 'Klasik' },
    ],
  },

  // ✅ SENİN GÖNDERDİĞİN LİNKLER BURADA
  {
    id: 'meyve-sebze',
    name: 'Meyve & Sebze Üretimi',
    image: 'https://images.pexels.com/photos/5945759/pexels-photo-5945759.jpeg',
    description:
      'Meyve ve sebze üretiminde besleme, koruma ve verim artırmaya yönelik saha çözümleri',
    subcategories: ['Sebzeler', 'Meyveler'],
    items: [
      // Sebzeler
      { name: 'Domates', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg' },
      { name: 'Salatalık', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/17975573/pexels-photo-17975573.jpeg' },
      { name: 'Biber', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/68170/paprika-green-red-vegetables-68170.jpeg' },
      { name: 'Patlıcan', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/16732700/pexels-photo-16732700.jpeg' },
      { name: 'Kabak', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/1366883/pexels-photo-1366883.jpeg' },
      { name: 'Marul', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/11679740/pexels-photo-11679740.jpeg' },
      { name: 'Ispanak', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/750952/pexels-photo-750952.jpeg' },
      { name: 'Soğan', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/6316540/pexels-photo-6316540.jpeg' },
      { name: 'Havuç', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/7457465/pexels-photo-7457465.jpeg' },
      { name: 'Patates', subcategory: 'Sebzeler', image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg' },

      // Meyveler
      { name: 'Elma', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/28710026/pexels-photo-28710026.jpeg' },
      { name: 'Armut', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/33007012/pexels-photo-33007012.jpeg' },
      // Şeftali: iki link vardı, birini seçtim (istersen ikisini de ayrı item yaparız)
      { name: 'Şeftali', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/10700362/pexels-photo-10700362.jpeg' },
      { name: 'Kiraz', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/27773744/pexels-photo-27773744.jpeg' },
      { name: 'Üzüm', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/30396718/pexels-photo-30396718.jpeg' },
      { name: 'Çilek', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg' },
      { name: 'Portakal', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/15685827/pexels-photo-15685827.jpeg' },
      { name: 'Limon', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/33272894/pexels-photo-33272894.jpeg' },
      { name: 'Zeytin', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/33534079/pexels-photo-33534079.jpeg' },
      { name: 'Avokado', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/17975547/pexels-photo-17975547.jpeg' },
      { name: 'Muz', subcategory: 'Meyveler', image: 'https://images.pexels.com/photos/5692410/pexels-photo-5692410.jpeg' },
    ],
  },

  {
    id: 'tarla-bitkileri',
    name: 'Tarla Bitkileri',
    image: 'https://images.pexels.com/photos/158603/wheat-wheat-field-cereals-field-158603.jpeg',
    description: 'Geniş alan üretimlerinde koruma ve besleme planlaması',
    subcategories: [],
    items: [
      { name: 'Buğday', image: 'https://images.pexels.com/photos/158603/wheat-wheat-field-cereals-field-158603.jpeg' },
      { name: 'Mısır', image: 'https://images.pexels.com/photos/24595910/pexels-photo-24595910.jpeg' },
      { name: 'Ayçiçeği', image: 'https://images.pexels.com/photos/34313647/pexels-photo-34313647.jpeg' },
      { name: 'Pamuk', image: 'https://images.pexels.com/photos/32729995/pexels-photo-32729995.jpeg' },
      { name: 'Yer Fıstığı', image: 'https://images.pexels.com/photos/7717463/pexels-photo-7717463.jpeg' },
    ],
  },

  // ✅ SERA/BAĞ-BAHÇE kalsın istiyorsan: aynı linklerden birkaçını koydum (istersen ayrı linkler bulup değiştirirsin)
  {
    id: 'sera-uretimi',
    name: 'Sera Üretimi',
    image: 'https://images.pexels.com/photos/17975573/pexels-photo-17975573.jpeg',
    description: 'Kontrollü ortam üretimlerinde üretim odaklı saha çözümleri',
    subcategories: [],
    items: [
      { name: 'Domates', image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg' },
      { name: 'Salatalık', image: 'https://images.pexels.com/photos/17975573/pexels-photo-17975573.jpeg' },
      { name: 'Biber', image: 'https://images.pexels.com/photos/68170/paprika-green-red-vegetables-68170.jpeg' },
      { name: 'Marul', image: 'https://images.pexels.com/photos/11679740/pexels-photo-11679740.jpeg' },
      { name: 'Çilek', image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg' },
    ],
  },

  {
    id: 'bag-bahce',
    name: 'Bağ & Bahçe',
    image: 'https://images.pexels.com/photos/30396718/pexels-photo-30396718.jpeg',
    description: 'Bahçe üretimlerinde sezonluk koruma ve verim planlaması',
    subcategories: [],
    items: [
      { name: 'Üzüm', image: 'https://images.pexels.com/photos/30396718/pexels-photo-30396718.jpeg' },
      { name: 'Elma', image: 'https://images.pexels.com/photos/28710026/pexels-photo-28710026.jpeg' },
      { name: 'Armut', image: 'https://images.pexels.com/photos/33007012/pexels-photo-33007012.jpeg' },
      { name: 'Şeftali', image: 'https://images.pexels.com/photos/10700362/pexels-photo-10700362.jpeg' },
      { name: 'Kiraz', image: 'https://images.pexels.com/photos/27773744/pexels-photo-27773744.jpeg' },
      { name: 'Portakal', image: 'https://images.pexels.com/photos/15685827/pexels-photo-15685827.jpeg' },
      { name: 'Limon', image: 'https://images.pexels.com/photos/33272894/pexels-photo-33272894.jpeg' },
      { name: 'Zeytin', image: 'https://images.pexels.com/photos/33534079/pexels-photo-33534079.jpeg' },
      { name: 'Avokado', image: 'https://images.pexels.com/photos/17975547/pexels-photo-17975547.jpeg' },
      { name: 'Muz', image: 'https://images.pexels.com/photos/5692410/pexels-photo-5692410.jpeg' },
    ],
  },
];

export default function Faaliyetlerimiz() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(categories[0].id);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const categoryMap: Record<string, CategoryId> = {
      'zirai-ilaclar': 'pestisit',
      'gubre-cozumleri': 'gubre',
      'damla-sulama': 'meyve-sebze',
      'tarim-danismanligi': 'pestisit',
    };

    if (hash && categoryMap[hash]) {
      setSelectedCategory(categoryMap[hash]);
      setSelectedSubcategory(null);
    }
  }, [location]);

  const currentCategory = useMemo(
    () => categories.find((cat) => cat.id === selectedCategory)!,
    [selectedCategory]
  );

  const filteredItems = useMemo(() => {
    if (!selectedSubcategory) return currentCategory.items;
    return currentCategory.items.filter((item) => item.subcategory === selectedSubcategory);
  }, [currentCategory.items, selectedSubcategory]);

  const heroBg = currentCategory.image
    ? `linear-gradient(rgba(15, 40, 24, 0.7), rgba(15, 40, 24, 0.7)), url(${pexels(
        currentCategory.image,
        1600
      )})`
    : `linear-gradient(rgba(15, 40, 24, 0.92), rgba(15, 40, 24, 0.92))`;

  const showImages = currentCategory.id !== 'pestisit' && currentCategory.id !== 'gubre';

  return (
    <main className="pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section
        className="relative h-80 md:h-96 bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: heroBg }}
      >
        {/* Animated Background Pattern for Pestisit & Gubre */}
        {!currentCategory.image && (
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ backgroundPosition: '0% 0%' }}
              animate={{ backgroundPosition: '100% 100%' }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                backgroundSize: '100% 100%',
              }}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Unified Glassmorphism Container for All Categories */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl max-w-3xl"
            >
              {/* Gradient Accent Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-t-2xl"
              />

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              >
                {currentCategory.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow"
              >
                {currentCategory.description}
              </motion.p>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 md:mb-16">
            <h2 className="section-title mb-8">Hizmet Alanlarımız</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedSubcategory(null);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#1a4d2e] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Subcategory Filter */}
          {currentCategory.subcategories.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filtreleme</h3>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => setSelectedSubcategory(null)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedSubcategory === null
                      ? 'bg-[#1a4d2e] text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Tümü
                </motion.button>

                {currentCategory.subcategories.map((subcategory) => (
                  <motion.button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedSubcategory === subcategory
                        ? 'bg-[#1a4d2e] text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {subcategory}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#1a4d2e] hover:shadow-lg transition-all duration-300"
              >
                {/* ✅ sadece meyve/sebze ve diğer tarla/sera/bahçe kategorilerinde görsel göster */}
                {showImages && item.image && (
                  <div className="w-full h-40 rounded-lg mb-4 overflow-hidden bg-gray-100">
                    <img
                      src={pexels(item.image, 800)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>

                {item.subcategory && (
                  <p className="text-sm text-gray-600">{item.subcategory}</p>
                )}

              
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}