import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface Reference {
  id: string;
  name: string;
  category: string;
  logo_url: string;
  display_order: number;
}

export default function InfiniteReferences() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    loadAllReferences();
  }, []);

  const loadAllReferences = async () => {
    try {
      const { data, error } = await supabase
        .from('company_references')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        setReferences([...data, ...data, ...data]);
      }
    } catch (error) {
      console.error('Error loading references:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || references.length === 0) return;

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
  }, [references]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-2 text-[#1a4d2e]">
          <div className="w-8 h-8 border-3 border-[#1a4d2e] border-t-transparent rounded-full animate-spin"></div>
          <span className="font-medium text-sm">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {references.map((ref, index) => (
          <motion.div
            key={`${ref.id}-${index}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 1) }}
            className="bg-gradient-to-br from-white to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 w-72 group border border-slate-200"
          >
            <div className="p-6">
              <div className="h-28 flex items-center justify-center mb-4 bg-white rounded-lg group-hover:bg-slate-50 transition-colors">
                <img
                  src={ref.logo_url}
                  alt={ref.name}
                  className="max-w-[120px] max-h-[70px] object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 text-center">
                {ref.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{ref.category}</p>
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
