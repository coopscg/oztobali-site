import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VisasResidency from './pages/VisasResidency';
import TaxAustralia from './pages/TaxAustralia';
import TaxIndonesia from './pages/TaxIndonesia';
import PropertyRenting from './pages/PropertyRenting';
import PropertyBuying from './pages/PropertyBuying';
import PropertyDevelopers from './pages/PropertyDevelopers';
import Culture from './pages/Culture';
import Holidays from './pages/Holidays';
import HolidayCategory from './pages/HolidayCategory';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Credits from './pages/Credits';
import Partner from './pages/Partner';
import TravelChecklist from './pages/TravelChecklist';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/visas-residency" element={<VisasResidency />} />
        <Route path="/taxation/australia" element={<TaxAustralia />} />
        <Route path="/taxation/indonesia" element={<TaxIndonesia />} />
        <Route path="/property/renting" element={<PropertyRenting />} />
        <Route path="/property/buying" element={<PropertyBuying />} />
        <Route path="/property/developers" element={<PropertyDevelopers />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/holidays/:category" element={<HolidayCategory />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/travel-checklist" element={<TravelChecklist />} />
      </Route>
    </Routes>
  );
};

export default App;
