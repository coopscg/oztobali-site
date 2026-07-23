import React, { useState } from 'react';
import { Palmtree, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navItems } from '../data/nav';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'top-4 mx-4 md:mx-auto md:max-w-6xl rounded-full bg-[#062420]/85 backdrop-blur-xl border border-[#E3A857]/15 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
        : 'top-0 px-6 py-6 bg-transparent'
        }`}>
        <div className={`flex items-center justify-between ${isScrolled ? 'px-6 py-3' : 'max-w-7xl mx-auto'}`}>
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={closeMobileMenu}>
            <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-8 h-8 rounded-lg' : 'w-10 h-10 rounded-xl'
              } bg-[#E3A857] group-hover:rotate-12`}>
              <Palmtree className={`text-[#062420] transition-all ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`} strokeWidth={2.5} />
            </div>
            <span className={`font-black tracking-tight text-[#F6EFE4] transition-all ${isScrolled ? 'text-lg' : 'text-xl'
              }`}>OZTOBALI</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDesktopGroup(item.label)}
                onMouseLeave={() => item.children && setOpenDesktopGroup(null)}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className="px-3 py-2 text-sm font-medium text-[#B9CFC9] hover:text-[#E3A857] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 text-sm font-medium text-[#B9CFC9] hover:text-[#E3A857] transition-colors inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                <AnimatePresence>
                  {item.children && openDesktopGroup === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 w-72"
                    >
                      <div className="bg-[#0B3833] border border-[#E3A857]/15 rounded-2xl shadow-2xl overflow-hidden p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            className="block px-4 py-2.5 rounded-xl hover:bg-[#0F4A43] transition-colors"
                          >
                            <div className="text-sm font-semibold text-[#F6EFE4]">{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-[#8FA69E] mt-0.5">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-[#E3A857] text-[#062420] font-bold text-sm rounded-full hover:bg-[#F6EFE4] transition-all transform active:scale-95 whitespace-nowrap"
            >
              Start Planning
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F6EFE4] p-2 relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div>
                <div className="w-6 h-0.5 bg-[#F6EFE4] mb-1.5 rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#F6EFE4] mb-1.5 rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#F6EFE4] rounded-full"></div>
              </div>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#062420]/98 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 px-6 py-28 max-w-md mx-auto">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2">
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block py-3 text-xl font-bold text-[#F6EFE4] hover:text-[#E3A857] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 text-xl font-bold text-[#F6EFE4]"
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openMobileGroup === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openMobileGroup === item.label && item.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                onClick={closeMobileMenu}
                                className="block py-2.5 text-base font-medium text-[#B9CFC9] hover:text-[#E3A857]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-4 px-8 py-4 bg-[#E3A857] text-[#062420] font-bold text-lg rounded-full text-center hover:bg-[#F6EFE4] transition-all"
              >
                Start Planning
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
