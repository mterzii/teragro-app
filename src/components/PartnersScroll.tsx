import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Partner {
  company: string;
  image: string;
}

interface PartnersScrollProps {
  partners: Partner[];
}

export default function PartnersScroll({ partners }: PartnersScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || partners.length === 0) return;

    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (container) {
        scrollPos += scrollSpeed;

        const maxScroll = container.scrollWidth / 3;

        if (scrollPos >= maxScroll) {
          scrollPos = 0;
        }

        container.scrollLeft = scrollPos;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [partners]);

  const triplePartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {triplePartners.map((partner, index) => (
          <motion.div
            key={`${partner.company}-${index}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 1) }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 w-64 group border border-gray-100"
          >
            <div className="p-6">
              <div className="h-32 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                <img
                  src={partner.image}
                  alt={partner.company}
                  className="max-w-[160px] max-h-[90px] object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mt-4 text-center">
                {partner.company}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
