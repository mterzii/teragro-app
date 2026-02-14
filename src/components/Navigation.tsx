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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl shadow-blue-500/30 border-b border-blue-500/20'
          : 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group relative">
            <motion.div
              className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={Logo}
              alt="TERAGRO Logo"
              className="h-14 w-auto relative z-10 drop-shadow-2xl"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                isActive('/')
                  ? 'text-slate-900 shadow-lg shadow-blue-500/50'
                  : 'text-white hover:text-white'
              }`}
            >
              <motion.span
                className={`absolute inset-0 ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                    : 'bg-white/0'
                }`}
                whileHover={!isActive('/') ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  scale: 1.05
                } : {}}
                transition={{ duration: 0.2 }}
              />
              <span className="relative z-10">Anasayfa</span>
            </Link>

            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                  isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                    ? 'text-slate-900 shadow-lg shadow-blue-500/50'
                    : 'text-white hover:text-white'
                }`}
              >
                <motion.span
                  className={`absolute inset-0 ${
                    isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                      : 'bg-white/0'
                  }`}
                  whileHover={!(isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')) ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    scale: 1.05
                  } : {}}
                  transition={{ duration: 0.2 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Hizmetlerimiz
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl py-3 w-60 border border-blue-500/30 backdrop-blur-xl">
                  <Link
                    to="/zirai-ilac"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/zirai-ilac')
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/zirai-ilac')
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0'
                      }`}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">Zirai İlaç</span>
                  </Link>
                  <Link
                    to="/damla-sulama"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/damla-sulama')
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/damla-sulama')
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0'
                      }`}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">Damla Sulama</span>
                  </Link>
                  <Link
                    to="/faaliyetlerimiz"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/faaliyetlerimiz')
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/faaliyetlerimiz')
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0'
                      }`}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">Faaliyetlerimiz</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative group">
              <button
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                  isActive('/hakkimizda') || isActive('/referanslar')
                    ? 'text-slate-900 shadow-lg shadow-blue-500/50'
                    : 'text-white hover:text-white'
                }`}
              >
                <motion.span
                  className={`absolute inset-0 ${
                    isActive('/hakkimizda') || isActive('/referanslar')
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                      : 'bg-white/0'
                  }`}
                  whileHover={!(isActive('/hakkimizda') || isActive('/referanslar')) ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    scale: 1.05
                  } : {}}
                  transition={{ duration: 0.2 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Kurumsal
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl py-3 w-60 border border-blue-500/30 backdrop-blur-xl">
                  <Link
                    to="/hakkimizda"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/hakkimizda')
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/hakkimizda')
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0'
                      }`}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">Hakkımızda</span>
                  </Link>
                  <Link
                    to="/referanslar"
                    className={`relative block px-4 py-3 text-sm font-medium transition-all overflow-hidden group/item ${
                      isActive('/referanslar')
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/referanslar')
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0'
                      }`}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">Referanslar</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            <Link
              to="/iletisim"
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                isActive('/iletisim')
                  ? 'text-slate-900 shadow-lg shadow-blue-500/50'
                  : 'text-white hover:text-white'
              }`}
            >
              <motion.span
                className={`absolute inset-0 ${
                  isActive('/iletisim')
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                    : 'bg-white/0'
                }`}
                whileHover={!isActive('/iletisim') ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  scale: 1.05
                } : {}}
                transition={{ duration: 0.2 }}
              />
              <span className="relative z-10">İletişim</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-blue-500/30"
            >
              <div className="flex flex-col gap-2 px-4 py-6">
                <Link
                  to="/"
                  className={`relative py-3 px-4 rounded-xl text-sm font-semibold transition-all overflow-hidden ${
                    isActive('/')
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  <motion.span
                    className={`absolute inset-0 ${
                      isActive('/')
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                        : 'bg-white/0'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  />
                  <span className="relative z-10">Anasayfa</span>
                </Link>

                <div>
                  <button
                    onClick={() => setIsHizmetlerDropdownOpen(!isHizmetlerDropdownOpen)}
                    className={`relative flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold w-full justify-between transition-all overflow-hidden ${
                      isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                        ? 'text-slate-900'
                        : 'text-white'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/zirai-ilac') || isActive('/damla-sulama') || isActive('/faaliyetlerimiz')
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                          : 'bg-white/0'
                      }`}
                    />
                    <span className="relative z-10 flex items-center justify-between w-full">
                      Hizmetlerimiz
                      <motion.div
                        animate={{ rotate: isHizmetlerDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
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
                          <motion.span
                            className={`absolute inset-0 ${
                              isActive('/zirai-ilac')
                                ? 'bg-blue-500/40'
                                : 'bg-white/0'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          />
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
                          <motion.span
                            className={`absolute inset-0 ${
                              isActive('/damla-sulama')
                                ? 'bg-blue-500/40'
                                : 'bg-white/0'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          />
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
                          <motion.span
                            className={`absolute inset-0 ${
                              isActive('/faaliyetlerimiz')
                                ? 'bg-blue-500/40'
                                : 'bg-white/0'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          />
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
                        ? 'text-slate-900'
                        : 'text-white'
                    }`}
                  >
                    <motion.span
                      className={`absolute inset-0 ${
                        isActive('/hakkimizda') || isActive('/referanslar')
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                          : 'bg-white/0'
                      }`}
                    />
                    <span className="relative z-10 flex items-center justify-between w-full">
                      Kurumsal
                      <motion.div
                        animate={{ rotate: isKurumsalDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
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
                          <motion.span
                            className={`absolute inset-0 ${
                              isActive('/hakkimizda')
                                ? 'bg-blue-500/40'
                                : 'bg-white/0'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          />
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
                          <motion.span
                            className={`absolute inset-0 ${
                              isActive('/referanslar')
                                ? 'bg-blue-500/40'
                                : 'bg-white/0'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          />
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
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}
                >
                  <motion.span
                    className={`absolute inset-0 ${
                      isActive('/iletisim')
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                        : 'bg-white/0'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  />
                  <span className="relative z-10">İletişim</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
