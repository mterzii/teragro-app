import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Users, Target, Headphones } from 'lucide-react';

const stats = [
  { icon: ShoppingBag, value: 500, suffix: '+', label: 'Ürün' },
  { icon: Users, value: 1000, suffix: '+', label: 'Mutlu Üretici' },
  { icon: Target, value: 150, suffix: '+', label: 'Çözüm Uygulaması' },
  { icon: Headphones, value: 7, suffix: '/24', label: 'Danışmanlık' },
];

function Counter({ target, suffix, index }: { target: number; suffix: string; index: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref}>
      <span>{count}</span>
      {suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0d3b26] via-[#1a4d2e] to-[#0f5132] overflow-hidden border-t border-emerald-900/50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-green-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="stat-card text-center"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="mb-4 mx-auto w-16 h-16 md:w-18 md:h-18 bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-xl flex items-center justify-center">
                  <Icon size={28} className="text-emerald-300" strokeWidth={1.5} />
                </div>

                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  <Counter target={stat.value} suffix={stat.suffix} index={index} />
                </div>

                <p className="text-emerald-100 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-card {
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
