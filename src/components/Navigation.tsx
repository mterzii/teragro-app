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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
  <img src={Logo} alt="TERAGRO Logo" className="h-10 w-auto" />
</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-[#1a4d2e]' : 'text-gray-700 hover:text-[#1a4d2e]'
              }`}
            >
              Anasayfa
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center gap-2 transition-colors font-medium ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'text-[#1a4d2e]'
                    : 'text-gray-700 hover:text-[#1a4d2e]'
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
                <div className="bg-white rounded-lg shadow-xl py-2 w-48">
                  <Link
                    to="/zirai-ilac"
                    className={`block px-4 py-3 transition-colors ${
                      isActive('/zirai-ilac')
                        ? 'bg-gray-50 text-[#1a4d2e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Zirai İlaç
                  </Link>
                  <Link
                    to="/damla-sulama"
                    className={`block px-4 py-3 transition-colors ${
                      isActive('/damla-sulama')
                        ? 'bg-gray-50 text-[#1a4d2e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Damla Sulama
                  </Link>
                  <Link
                    to="/faaliyetlerimiz"
                    className={`block px-4 py-3 transition-colors ${
                      isActive('/faaliyetlerimiz')
                        ? 'bg-gray-50 text-[#1a4d2e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Faaliyetlerimiz
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative group">
              <button
                className={`flex items-center gap-2 transition-colors font-medium ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'text-[#1a4d2e]'
                    : 'text-gray-700 hover:text-[#1a4d2e]'
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
                <div className="bg-white rounded-lg shadow-xl py-2 w-48">
                  <Link
                    to="/hakkimizda"
                    className={`block px-4 py-3 transition-colors ${
                      isActive('/hakkimizda')
                        ? 'bg-gray-50 text-[#1a4d2e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/referanslar"
                    className={`block px-4 py-3 transition-colors ${
                      isActive('/referanslar')
                        ? 'bg-gray-50 text-[#1a4d2e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Referanslar
                  </Link>
                </div>
              </motion.div>
            </div>

            <Link
              to="/iletisim"
              className={`transition-colors font-medium ${
                isActive('/iletisim')
                  ? 'text-[#1a4d2e]'
                  : 'text-gray-700 hover:text-[#1a4d2e]'
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#1a4d2e] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="flex flex-col gap-4 px-4 py-6">
                <Link
                  to="/"
                  className={`py-2 font-medium transition-colors ${
                    isActive('/') ? 'text-[#1a4d2e]' : 'text-gray-700'
                  }`}
                >
                  Anasayfa
                </Link>

                <div>
                  <button
                    onClick={() => setIsHizmetlerDropdownOpen(!isHizmetlerDropdownOpen)}
                    className={`flex items-center gap-2 py-2 font-medium w-full justify-between transition-colors ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'text-[#1a4d2e]'
                        : 'text-gray-700'
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
                        className="flex flex-col gap-2 mt-2 ml-4"
                      >
                        <Link
                          to="/zirai-ilac"
                          className={`py-2 transition-colors ${
                            isActive('/zirai-ilac')
                              ? 'text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Zirai İlaç
                        </Link>
                        <Link
                          to="/damla-sulama"
                          className={`py-2 transition-colors ${
                            isActive('/damla-sulama')
                              ? 'text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Damla Sulama
                        </Link>
                        <Link
                          to="/faaliyetlerimiz"
                          className={`py-2 transition-colors ${
                            isActive('/faaliyetlerimiz')
                              ? 'text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:text-[#1a4d2e]'
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
                    className={`flex items-center gap-2 py-2 font-medium w-full justify-between transition-colors ${
                      isActive('/hakkimizda') || isActive('/referanslar')
                        ? 'text-[#1a4d2e]'
                        : 'text-gray-700'
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
                        className="flex flex-col gap-2 mt-2 ml-4"
                      >
                        <Link
                          to="/hakkimizda"
                          className={`py-2 transition-colors ${
                            isActive('/hakkimizda')
                              ? 'text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Hakkımızda
                        </Link>
                        <Link
                          to="/referanslar"
                          className={`py-2 transition-colors ${
                            isActive('/referanslar')
                              ? 'text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:text-[#1a4d2e]'
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
                  className={`py-2 font-medium transition-colors ${
                    isActive('/iletisim')
                      ? 'text-[#1a4d2e]'
                      : 'text-gray-700'
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
