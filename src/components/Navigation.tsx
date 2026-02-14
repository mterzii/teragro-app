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
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img
              src={Logo}
              alt="TERAGRO Logo"
              className="h-14 w-auto filter brightness-0 group-hover:brightness-100 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'bg-[#1a4d2e] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Anasayfa
            </Link>

            <div className="relative group">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'bg-[#1a4d2e] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Hizmetlerimiz
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl py-2 w-56 border border-gray-200/50">
                  <Link
                    to="/zirai-ilac"
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive('/zirai-ilac')
                        ? 'bg-[#1a4d2e] text-white mx-2 rounded-lg'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Zirai İlaç
                  </Link>
                  <Link
                    to="/damla-sulama"
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive('/damla-sulama')
                        ? 'bg-[#1a4d2e] text-white mx-2 rounded-lg'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Damla Sulama
                  </Link>
                  <Link
                    to="/faaliyetlerimiz"
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive('/faaliyetlerimiz')
                        ? 'bg-[#1a4d2e] text-white mx-2 rounded-lg'
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'bg-[#1a4d2e] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kurumsal
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl py-2 w-56 border border-gray-200/50">
                  <Link
                    to="/hakkimizda"
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive('/hakkimizda')
                        ? 'bg-[#1a4d2e] text-white mx-2 rounded-lg'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d2e]'
                    }`}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/referanslar"
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive('/referanslar')
                        ? 'bg-[#1a4d2e] text-white mx-2 rounded-lg'
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/iletisim')
                  ? 'bg-[#1a4d2e] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#1a4d2e] p-2 transition-colors"
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
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              <div className="flex flex-col gap-2 px-4 py-4">
                <Link
                  to="/"
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                    isActive('/')
                      ? 'bg-[#1a4d2e] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Anasayfa
                </Link>

                <div>
                  <button
                    onClick={() => setIsHizmetlerDropdownOpen(!isHizmetlerDropdownOpen)}
                    className={`flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium w-full justify-between transition-all ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'bg-[#1a4d2e] text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Hizmetlerimiz
                    <ChevronDown
                      size={16}
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
                        className="flex flex-col gap-1 mt-2 ml-4"
                      >
                        <Link
                          to="/zirai-ilac"
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            isActive('/zirai-ilac')
                              ? 'bg-gray-100 text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Zirai İlaç
                        </Link>
                        <Link
                          to="/damla-sulama"
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            isActive('/damla-sulama')
                              ? 'bg-gray-100 text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Damla Sulama
                        </Link>
                        <Link
                          to="/faaliyetlerimiz"
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            isActive('/faaliyetlerimiz')
                              ? 'bg-gray-100 text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a4d2e]'
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
                    className={`flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium w-full justify-between transition-all ${
                      isActive('/hakkimizda') || isActive('/referanslar')
                        ? 'bg-[#1a4d2e] text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Kurumsal
                    <ChevronDown
                      size={16}
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
                        className="flex flex-col gap-1 mt-2 ml-4"
                      >
                        <Link
                          to="/hakkimizda"
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            isActive('/hakkimizda')
                              ? 'bg-gray-100 text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a4d2e]'
                          }`}
                        >
                          Hakkımızda
                        </Link>
                        <Link
                          to="/referanslar"
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            isActive('/referanslar')
                              ? 'bg-gray-100 text-[#1a4d2e] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a4d2e]'
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
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                    isActive('/iletisim')
                      ? 'bg-[#1a4d2e] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
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
