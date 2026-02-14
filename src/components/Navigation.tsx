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
          ? 'bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-2xl shadow-emerald-900/30'
          : 'bg-gradient-to-r from-emerald-700/98 via-green-700/98 to-teal-700/98 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group relative">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition-all duration-300" />
            <img
              src={Logo}
              alt="TERAGRO Logo"
              className="h-14 w-auto relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                isActive('/')
                  ? 'text-emerald-700 shadow-lg'
                  : 'text-white hover:text-white'
              }`}
            >
              <span className={`absolute inset-0 transition-all duration-300 ${
                isActive('/')
                  ? 'bg-white'
                  : 'bg-white/0 group-hover:bg-white/20'
              }`} />
              <span className="relative z-10">Anasayfa</span>
            </Link>

            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'text-emerald-700 shadow-lg'
                    : 'text-white hover:text-white'
                }`}
              >
                <span className={`absolute inset-0 transition-all duration-300 ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'bg-white'
                    : 'bg-white/0 group-hover:bg-white/20'
                }`} />
                <span className="relative z-10 flex items-center gap-2">
                  Hizmetlerimiz
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <div className="bg-white rounded-2xl shadow-2xl py-3 w-60 border border-emerald-100">
                  <Link
                    to="/zirai-ilac"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/zirai-ilac')
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/zirai-ilac')
                        ? 'bg-gradient-to-r from-emerald-700 to-green-700'
                        : 'bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover/item:opacity-100'
                    }`} />
                    <span className="relative z-10">Zirai İlaç</span>
                  </Link>
                  <Link
                    to="/damla-sulama"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/damla-sulama')
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/damla-sulama')
                        ? 'bg-gradient-to-r from-emerald-700 to-green-700'
                        : 'bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover/item:opacity-100'
                    }`} />
                    <span className="relative z-10">Damla Sulama</span>
                  </Link>
                  <Link
                    to="/faaliyetlerimiz"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/faaliyetlerimiz')
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/faaliyetlerimiz')
                        ? 'bg-gradient-to-r from-emerald-700 to-green-700'
                        : 'bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover/item:opacity-100'
                    }`} />
                    <span className="relative z-10">Faaliyetlerimiz</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'text-emerald-700 shadow-lg'
                    : 'text-white hover:text-white'
                }`}
              >
                <span className={`absolute inset-0 transition-all duration-300 ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'bg-white'
                    : 'bg-white/0 group-hover:bg-white/20'
                }`} />
                <span className="relative z-10 flex items-center gap-2">
                  Kurumsal
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <div className="bg-white rounded-2xl shadow-2xl py-3 w-60 border border-emerald-100">
                  <Link
                    to="/hakkimizda"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/hakkimizda')
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/hakkimizda')
                        ? 'bg-gradient-to-r from-emerald-700 to-green-700'
                        : 'bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover/item:opacity-100'
                    }`} />
                    <span className="relative z-10">Hakkımızda</span>
                  </Link>
                  <Link
                    to="/referanslar"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/referanslar')
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/referanslar')
                        ? 'bg-gradient-to-r from-emerald-700 to-green-700'
                        : 'bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover/item:opacity-100'
                    }`} />
                    <span className="relative z-10">Referanslar</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            <Link
              to="/iletisim"
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                isActive('/iletisim')
                  ? 'text-emerald-700 shadow-lg'
                  : 'text-white hover:text-white'
              }`}
            >
              <span className={`absolute inset-0 transition-all duration-300 ${
                isActive('/iletisim')
                  ? 'bg-white'
                  : 'bg-white/0 group-hover:bg-white/20'
              }`} />
              <span className="relative z-10">İletişim</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
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
              className="lg:hidden bg-gradient-to-br from-emerald-800 via-green-800 to-teal-800 border-t border-white/20"
            >
              <div className="flex flex-col gap-2 px-4 py-6">
                <Link
                  to="/"
                  className={`relative py-3 px-4 rounded-xl text-sm font-semibold transition-all overflow-hidden ${
                    isActive('/')
                      ? 'text-emerald-700'
                      : 'text-white'
                  }`}
                >
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isActive('/')
                      ? 'bg-white'
                      : 'bg-white/0 hover:bg-white/20'
                  }`} />
                  <span className="relative z-10">Anasayfa</span>
                </Link>

                <div>
                  <button
                    onClick={() => setIsHizmetlerDropdownOpen(!isHizmetlerDropdownOpen)}
                    className={`relative flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold w-full justify-between transition-all overflow-hidden ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'text-emerald-700'
                        : 'text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'bg-white'
                        : 'bg-white/0'
                    }`} />
                    <span className="relative z-10 flex items-center justify-between w-full">
                      Hizmetlerimiz
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isHizmetlerDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
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
                          className={`relative py-2.5 px-4 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                            isActive('/zirai-ilac')
                              ? 'text-white'
                              : 'text-white/80'
                          }`}
                        >
                          <span className={`absolute inset-0 transition-all duration-300 ${
                            isActive('/zirai-ilac')
                              ? 'bg-white/30'
                              : 'bg-white/0 hover:bg-white/10'
                          }`} />
                          <span className="relative z-10">Zirai İlaç</span>
                        </Link>
                        <Link
                          to="/damla-sulama"
                          className={`relative py-2.5 px-4 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                            isActive('/damla-sulama')
                              ? 'text-white'
                              : 'text-white/80'
                          }`}
                        >
                          <span className={`absolute inset-0 transition-all duration-300 ${
                            isActive('/damla-sulama')
                              ? 'bg-white/30'
                              : 'bg-white/0 hover:bg-white/10'
                          }`} />
                          <span className="relative z-10">Damla Sulama</span>
                        </Link>
                        <Link
                          to="/faaliyetlerimiz"
                          className={`relative py-2.5 px-4 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                            isActive('/faaliyetlerimiz')
                              ? 'text-white'
                              : 'text-white/80'
                          }`}
                        >
                          <span className={`absolute inset-0 transition-all duration-300 ${
                            isActive('/faaliyetlerimiz')
                              ? 'bg-white/30'
                              : 'bg-white/0 hover:bg-white/10'
                          }`} />
                          <span className="relative z-10">Faaliyetlerimiz</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setIsKurumsalDropdownOpen(!isKurumsalDropdownOpen)}
                    className={`relative flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold w-full justify-between transition-all overflow-hidden ${
                      isActive('/hakkimizda') || isActive('/referanslar')
                        ? 'text-emerald-700'
                        : 'text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      isActive('/hakkimizda') || isActive('/referanslar')
                        ? 'bg-white'
                        : 'bg-white/0'
                    }`} />
                    <span className="relative z-10 flex items-center justify-between w-full">
                      Kurumsal
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isKurumsalDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
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
                          className={`relative py-2.5 px-4 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                            isActive('/hakkimizda')
                              ? 'text-white'
                              : 'text-white/80'
                          }`}
                        >
                          <span className={`absolute inset-0 transition-all duration-300 ${
                            isActive('/hakkimizda')
                              ? 'bg-white/30'
                              : 'bg-white/0 hover:bg-white/10'
                          }`} />
                          <span className="relative z-10">Hakkımızda</span>
                        </Link>
                        <Link
                          to="/referanslar"
                          className={`relative py-2.5 px-4 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                            isActive('/referanslar')
                              ? 'text-white'
                              : 'text-white/80'
                          }`}
                        >
                          <span className={`absolute inset-0 transition-all duration-300 ${
                            isActive('/referanslar')
                              ? 'bg-white/30'
                              : 'bg-white/0 hover:bg-white/10'
                          }`} />
                          <span className="relative z-10">Referanslar</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/iletisim"
                  className={`relative py-3 px-4 rounded-xl text-sm font-semibold transition-all overflow-hidden ${
                    isActive('/iletisim')
                      ? 'text-emerald-700'
                      : 'text-white'
                  }`}
                >
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isActive('/iletisim')
                      ? 'bg-white'
                      : 'bg-white/0 hover:bg-white/20'
                  }`} />
                  <span className="relative z-10">İletişim</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
