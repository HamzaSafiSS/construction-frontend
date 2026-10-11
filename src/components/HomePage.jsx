import Hero from './Hero';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Projects from './Projects';
import OurProcess from './OurProcess';
import Industries from './Industries';
import SafetyQuality from './SafetyQuality';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      {/* 3. Hero Section with Trust Statistics Dock */}
      <Hero />

      {/* 5. About Us Section */}
      <AboutUs />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Services Section (Curved Showcase & 2-Column Disciplines) */}
      <Services onOpenQuote={onOpenQuote} />

      {/* 9. Our Projects Section (Filterable Gallery) */}
      <Projects />

      {/* 11. Industries / Sector Expertise Section */}
      <Industries onOpenQuote={onOpenQuote} />

      {/* 12. Our Process Section (6-Stage Construction Timeline) */}
      <OurProcess onOpenQuote={onOpenQuote} />

      {/* 13. Safety & Quality Section */}
      <SafetyQuality onOpenQuote={onOpenQuote} />

      {/* 16. Client Testimonials Section */}
      <Testimonials onOpenQuote={onOpenQuote} />

      {/* Phase Anchor Containers for Seamless Link Navigation */}
      <div id="team" className="section-anchor"></div>
      <div id="news" className="section-anchor"></div>
      <div id="faqs" className="section-anchor"></div>

      {/* 20. Contact Us Section */}
      <Contact onOpenQuote={onOpenQuote} />
    </>
  );
}
