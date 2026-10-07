import React from 'react';
import { ArrowRight, ShieldAlert, Award, Compass } from 'lucide-react';
import TrustStats from './TrustStats';
import './Hero.css';

export default function Hero({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Image with layered industrial gradient overlays */}
      <div className="hero-bg-media">
        <img
          src="/hero-construction.jpg"
          alt="Heavy industrial excavator actively digging foundation trenches at a commercial construction site with structural steel and cranes at dusk"
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Eyebrow Tagline */}
          <div className="hero-eyebrow">
            <span className="eyebrow-accent-bar"></span>
            <span className="eyebrow-text">WE BUILD MORE THAN STRUCTURES.</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            <span className="headline-line headline-white">WE BUILD</span>
            <span className="headline-line headline-accent">WHAT LASTS.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-description">
            Delivering high-quality construction solutions with precision, safety, and reliability
            across residential, commercial, industrial, and infrastructure projects.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary hero-btn"
              onClick={() => scrollToSection('services')}
              aria-label="View our construction services"
            >
              <span>OUR SERVICES</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-secondary hero-btn"
              onClick={() => scrollToSection('projects')}
              aria-label="View our completed projects"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="hero-trust-chips">
            <div className="trust-chip">
              <ShieldAlert size={16} className="chip-icon" />
              <span>ISO 9001 & OSHA Certified</span>
            </div>
            <div className="trust-chip">
              <Award size={16} className="chip-icon" />
              <span>Tier-1 Engineering Standard</span>
            </div>
            <div className="trust-chip">
              <Compass size={16} className="chip-icon" />
              <span>Full-Cycle Project Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Statistics Dock */}
      <div className="hero-stats-dock-container">
        <TrustStats />
      </div>
    </section>
  );
}
