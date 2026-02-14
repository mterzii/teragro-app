import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/teragrowhite1.png';


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHizmetlerDropdownOpen, setIsHizmetlerDropdownOpen] = useState(false);
  const [isKurumsalDropdownOpen, setIsKurumsalDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHizmetlerDropdownOpen(false);
    setIsKurumsalDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#1a4d2e] via-[#2d5a3d] to-[#1a4d2e] shadow-2xl'
          : 'bg-gradient-to-r from-[#1a4d2e]/90 via-[#2d5a3d]/85 to-[#1a4d2e]/90 backdrop-blur-sm'
      }`}
      style={{
        backgroundImage: isScrolled
          ? 'linear-gradient(135deg, #1a4d2e 0%, #2d5a3d 50%, #1a4d2e 100%)'
          : 'linear-gradient(135deg, rgba(26, 77, 46, 0.9) 0%, rgba(45, 90, 61, 0.85) 50%, rgba(26, 77, 46, 0.9) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
            <img src={Logo} alt="TERAGRO Logo" className="h-12 md:h-14 w-auto drop-shadow-lg" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-all font-semibold text-base tracking-wide ${
                isActive('/')
                  ? 'text-yellow-300 scale-105'
                  : 'text-white/90 hover:text-yellow-300 hover:scale-105'
              }`}
            >
              Anasayfa
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center gap-2 transition-all font-semibold text-base tracking-wide ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'text-yellow-300 scale-105'
                    : 'text-white/90 hover:text-yellow-300 hover:scale-105'
                }`}
              >
                Hizmetlerimiz
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5a3d] rounded-xl shadow-2xl py-2 w-52 border border-yellow-300/20">
                  <Link
                    to="/zirai-ilac"
                    className={`block px-5 py-3 transition-all font-medium ${
                      isActive('/zirai-ilac')
                        ? 'bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:bg-white/10 hover:text-yellow-300 hover:border-l-4 hover:border-yellow-300/50'
                    }`}
                  >
                    Zirai İlaç
                  </Link>
                  <Link
                    to="/damla-sulama"
                    className={`block px-5 py-3 transition-all font-medium ${
                      isActive('/damla-sulama')
                        ? 'bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:bg-white/10 hover:text-yellow-300 hover:border-l-4 hover:border-yellow-300/50'
                    }`}
                  >
                    Damla Sulama
                  </Link>
                  <Link
                    to="/faaliyetlerimiz"
                    className={`block px-5 py-3 transition-all font-medium ${
                      isActive('/faaliyetlerimiz')
                        ? 'bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:bg-white/10 hover:text-yellow-300 hover:border-l-4 hover:border-yellow-300/50'
                    }`}
                  >
                    Faaliyetlerimiz
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative group">
              <button
                className={`flex items-center gap-2 transition-all font-semibold text-base tracking-wide ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'text-yellow-300 scale-105'
                    : 'text-white/90 hover:text-yellow-300 hover:scale-105'
                }`}
              >
                Kurumsal
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1a4d2e] to-[#2d5a3d] rounded-xl shadow-2xl py-2 w-52 border border-yellow-300/20">
                  <Link
                    to="/hakkimizda"
                    className={`block px-5 py-3 transition-all font-medium ${
                      isActive('/hakkimizda')
                        ? 'bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:bg-white/10 hover:text-yellow-300 hover:border-l-4 hover:border-yellow-300/50'
                    }`}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/referanslar"
                    className={`block px-5 py-3 transition-all font-medium ${
                      isActive('/referanslar')
                        ? 'bg-yellow-300/20 text-yellow-300 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:bg-white/10 hover:text-yellow-300 hover:border-l-4 hover:border-yellow-300/50'
                    }`}
                  >
                    Referanslar
                  </Link>
                </div>
              </motion.div>
            </div>

            <Link
              to="/iletisim"
              className={`transition-all font-semibold text-base tracking-wide ${
                isActive('/iletisim')
                  ? 'text-yellow-300 scale-105'
                  : 'text-white/90 hover:text-yellow-300 hover:scale-105'
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-300 p-2 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-br from-[#1a4d2e] to-[#2d5a3d] border-t border-yellow-300/20"
            >
              <div className="flex flex-col gap-4 px-4 py-6">
                <Link
                  to="/"
                  className={`py-2 font-semibold transition-all ${
                    isActive('/')
                      ? 'text-yellow-300 pl-2 border-l-4 border-yellow-300'
                      : 'text-white/90 hover:text-yellow-300 hover:pl-2'
                  }`}
                >
                  Anasayfa
                </Link>

                <div>
                  <button
                    onClick={() => setIsHizmetlerDropdownOpen(!isHizmetlerDropdownOpen)}
                    className={`flex items-center gap-2 py-2 font-semibold w-full justify-between transition-all ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'text-yellow-300 pl-2 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:text-yellow-300'
                    }`}
                  >
                    Hizmetlerimiz
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isHizmetlerDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isHizmetlerDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-2 mt-2 ml-4 pl-4 border-l-2 border-white/20"
                      >
                        <Link
                          to="/zirai-ilac"
                          className={`py-2 transition-all ${
                            isActive('/zirai-ilac')
                              ? 'text-yellow-300 font-semibold'
                              : 'text-white/80 hover:text-yellow-300'
                          }`}
                        >
                          Zirai İlaç
                        </Link>
                        <Link
                          to="/damla-sulama"
                          className={`py-2 transition-all ${
                            isActive('/damla-sulama')
                              ? 'text-yellow-300 font-semibold'
                              : 'text-white/80 hover:text-yellow-300'
                          }`}
                        >
                          Damla Sulama
                        </Link>
                        <Link
                          to="/faaliyetlerimiz"
                          className={`py-2 transition-all ${
                            isActive('/faaliyetlerimiz')
                              ? 'text-yellow-300 font-semibold'
                              : 'text-white/80 hover:text-yellow-300'
                          }`}
                        >
                          Faaliyetlerimiz
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setIsKurumsalDropdownOpen(!isKurumsalDropdownOpen)}
                    className={`flex items-center gap-2 py-2 font-semibold w-full justify-between transition-all ${
                      isActive('/hakkimizda') || isActive('/referanslar')
                        ? 'text-yellow-300 pl-2 border-l-4 border-yellow-300'
                        : 'text-white/90 hover:text-yellow-300'
                    }`}
                  >
                    Kurumsal
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isKurumsalDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isKurumsalDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-2 mt-2 ml-4 pl-4 border-l-2 border-white/20"
                      >
                        <Link
                          to="/hakkimizda"
                          className={`py-2 transition-all ${
                            isActive('/hakkimizda')
                              ? 'text-yellow-300 font-semibold'
                              : 'text-white/80 hover:text-yellow-300'
                          }`}
                        >
                          Hakkımızda
                        </Link>
                        <Link
                          to="/referanslar"
                          className={`py-2 transition-all ${
                            isActive('/referanslar')
                              ? 'text-yellow-300 font-semibold'
                              : 'text-white/80 hover:text-yellow-300'
                          }`}
                        >
                          Referanslar
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/iletisim"
                  className={`py-2 font-semibold transition-all ${
                    isActive('/iletisim')
                      ? 'text-yellow-300 pl-2 border-l-4 border-yellow-300'
                      : 'text-white/90 hover:text-yellow-300 hover:pl-2'
                  }`}
                >
                  İletişim
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
