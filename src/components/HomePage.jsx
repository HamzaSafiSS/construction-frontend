import Hero from './Hero';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Projects from './Projects';

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

      {/* Phase Anchor Containers for Seamless Link Navigation */}
      <div id="industries" className="section-anchor"></div>
      <div id="team" className="section-anchor"></div>
      <div id="news" className="section-anchor"></div>
      <div id="faqs" className="section-anchor"></div>
      <div id="contact" className="section-anchor"></div>
    </>
  );
}
