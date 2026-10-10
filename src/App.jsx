import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import QuoteModal from './components/QuoteModal';
import './App.css';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* 2. Global Navigation */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="main-content">
        {/* 3. Hero Section with Trust Statistics Dock */}
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 5. About Us Section */}
        <AboutUs />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Services Section (Curved Showcase & 2-Column Disciplines) */}
        <Services onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Phase Anchor Containers for Seamless Link Navigation */}
        <div id="projects" className="section-anchor"></div>
        <div id="industries" className="section-anchor"></div>
        <div id="team" className="section-anchor"></div>
        <div id="news" className="section-anchor"></div>
        <div id="faqs" className="section-anchor"></div>
        <div id="contact" className="section-anchor"></div>
      </main>

      {/* Interactive Project Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
