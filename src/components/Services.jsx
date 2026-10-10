import React from 'react';
import './Services.css';
import { 
  Building, 
  Factory, 
  HardHat, 
  Compass, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const FOUR_SERVICES = [
  // Column 1
  [
    {
      id: '01',
      title: 'Commercial Construction',
      description: 'Modern commercial spaces designed for functionality, durability and long-term asset value.',
      icon: Building,
      badge: 'Corporate & Retail'
    },
    {
      id: '02',
      title: 'General Construction',
      description: 'Complete construction services from site preparation and foundation to final turnkey delivery.',
      icon: HardHat,
      badge: 'Turnkey Delivery'
    }
  ],
  // Column 2
  [
    {
      id: '03',
      title: 'Industrial Construction',
      description: 'Heavy manufacturing plants, logistics warehouses, and demanding industrial facilities.',
      icon: Factory,
      badge: 'Heavy Industrial'
    },
    {
      id: '04',
      title: 'Engineering & Planning',
      description: 'Technical coordination, 3D BIM modeling, and structural engineering ensuring peak precision.',
      icon: Compass,
      badge: 'BIM & Structural'
    }
  ]
];

export default function Services({ onOpenQuote }) {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Header on Top: Our Services / OUR EXPERTISE / Construction solutions built around your project */}
        <div className="services-top-header">
          <div className="services-pill-badge">
            <span className="pill-text">Our Services</span>
          </div>
          <div className="services-accent-bar"></div>

          <span className="services-eyebrow">OUR EXPERTISE</span>
          <h2 className="services-main-title">
            Construction solutions built around your project.
          </h2>
        </div>

        {/* Compact Split Showcase with Minimized Image */}
        <div className="services-split-wrapper">
          
          {/* Left Content Area: Exactly 4 Services (2x2 Grid) */}
          <div className="services-left-content">
            <div className="services-columns-grid">
              
              {/* Column 1 */}
              <div className="services-column">
                {FOUR_SERVICES[0].map((service) => {
                  const IconComp = service.icon;
                  return (
                    <div key={service.id} className="service-item-row">
                      <div className="service-icon-outer-ring">
                        <div className="service-icon-inner-disc">
                          <IconComp size={19} className="service-lucide-icon" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="service-info-block">
                        <div className="service-title-row">
                          <h3 className="service-row-title">{service.title}</h3>
                          <span className="service-row-badge">{service.badge}</span>
                        </div>
                        <p className="service-row-desc">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Vertical Dashed Divider (From Reference Image) */}
              <div className="services-vertical-divider" aria-hidden="true"></div>

              {/* Column 2 */}
              <div className="services-column">
                {FOUR_SERVICES[1].map((service) => {
                  const IconComp = service.icon;
                  return (
                    <div key={service.id} className="service-item-row">
                      <div className="service-icon-outer-ring">
                        <div className="service-icon-inner-disc">
                          <IconComp size={19} className="service-lucide-icon" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="service-info-block">
                        <div className="service-title-row">
                          <h3 className="service-row-title">{service.title}</h3>
                          <span className="service-row-badge">{service.badge}</span>
                        </div>
                        <p className="service-row-desc">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compact CTA Footer */}
            <div className="services-left-footer">
              <button 
                type="button"
                className="btn-primary services-quote-btn"
                onClick={onOpenQuote}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </button>

              <div className="services-trust-tag">
                <ShieldCheck size={15} className="trust-icon" />
                <span>Licensed, Bonded & ISO 9001 Certified</span>
              </div>
            </div>
          </div>

          {/* Right Side: Clearly Visible Minimized Curved Photo Frame */}
          <div className="services-right-showcase">
            <div className="curved-ribbon-border" aria-hidden="true"></div>
            
            <div className="curved-photo-frame">
              <img 
                src="/service-section.png" 
                alt="BuildCraft Heavy Construction & Commercial Engineering" 
                className="showcase-photo-img"
              />
              
              <div className="photo-clean-tag">
                <span className="clean-tag-dot"></span>
                <span>Heavy Civil & Commercial Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
