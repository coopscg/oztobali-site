import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#062420] text-[#F6EFE4] selection:bg-[#E3A857] selection:text-[#062420] font-sans overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;
