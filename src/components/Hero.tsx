import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.7]);

  const [headlineText, setHeadlineText] = useState('');
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const headline = 'Tarımda Güvenilir Çözüm Ortağınız';
  const subtext = 'Zirai ilaçtan damla sulama sistemlerine kadar, entegre çözümlerle tarımınızı güçlü temele oturtuyoruz.';

  useEffect(() => {
    const words = headline.split(' ');
    let wordIndex = 0;

    const wordInterval = setInterval(() => {
      if (wordIndex < words.length) {
        setHeadlineText(words.slice(0, wordIndex + 1).join(' '));
        wordIndex++;
      } else {
        clearInterval(wordInterval);
        setShowSubtext(true);
        setTimeout(() => {
          setShowButtons(true);
        }, 400);
      }
    }, 150);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/16547162/pexels-photo-16547162.jpeg)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        className="relative h-full flex items-center justify-center px-4 md:px-8"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center text-white">
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight min-h-[120px] md:min-h-[160px] bg-gradient-to-r from-[#e6c77a] via-[#c9a961] to-[#a6843a] bg-clip-text text-transparent">
    {/* <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight min-h-[120px] md:min-h-[160px] text-[#f5f1e8]"> */}
    <span className="animate-fade-in-word">{headlineText}</span>
    </h1>

          <p className={`text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed min-h-[80px] md:min-h-[100px] transition-all duration-700 ease-out ${showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {subtext}
          </p>

          <div
            className={`flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-700 ease-out ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link to="/faaliyetlerimiz" className="bg-[#c9a961] hover:bg-[#b8954e] text-gray-900 px-8 md:px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Ürünleri İncele
            </Link>

            <Link to="/iletisim" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 md:px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Uzmanımıza Danış
            </Link>
          </div>
        </div>
      </motion.div>

      <style>{`
        .animate-fade-in-word {
          display: inline-block;
          animation: smoothFadeIn 0.4s ease-out;
        }

        @keyframes smoothFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
