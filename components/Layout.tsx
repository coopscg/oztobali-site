import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { easeSoft } from '../lib/motion';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-cream selection:bg-gold selection:text-ink font-sans overflow-x-clip">
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        {hasMounted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: easeSoft }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;
