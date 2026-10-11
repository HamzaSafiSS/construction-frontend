import { ArrowRight } from 'lucide-react';
import industriesData from '../data/industriesData';
import './Industries.css';

export default function Industries({ onOpenQuote }) {
  return (
    <section className="industries-section" id="industries">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="industries-bg-grid" aria-hidden="true"></div>
      <div className="industries-ambient-glow" aria-hidden="true"></div>

      <div className="industries-container">
        {/* Header: Industries We Serve / SECTOR EXPERTISE */}
        <div className="industries-top-header">
          <div className="industries-pill-badge">
            <span className="pill-text">Industries We Serve</span>
          </div>
          <div className="industries-accent-bar"></div>

          <span className="industries-eyebrow">SECTOR EXPERTISE</span>
          <h2 className="industries-main-title">
            Built for Every Industry. Proven Across Every Sector.
          </h2>
          <p className="industries-lead-subtitle">
            Rather than a one-size-fits-all model, we bring specialized engineering standards,
            sector-specific safety protocols, and proven delivery methods to every market.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {industriesData.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="industry-card">
                <div className="industry-card-media">
                  <img
                    src={item.image}
                    alt={`${item.title} construction sector`}
                    className="industry-card-img"
                    loading="lazy"
                  />
                  <div className="industry-card-overlay"></div>
                  <div className="industry-card-badges">
                    <span className="industry-tag-badge">{item.tag}</span>
                  </div>
                </div>

                <div className="industry-card-body">
                  <div className="industry-card-header">
                    <div className="industry-icon-box">
                      <Icon size={22} className="industry-icon" />
                    </div>
                    <h3 className="industry-card-title">{item.title}</h3>
                  </div>

                  <p className="industry-card-desc">{item.description}</p>

                  <div className="industry-card-examples">
                    <span className="examples-text">{item.examples}</span>
                  </div>

                  <button
                    type="button"
                    className="industry-consult-btn"
                    onClick={onOpenQuote}
                    aria-label={`Inquire about ${item.title} construction solutions`}
                  >
                    <span>CONSULT ON {item.title.toUpperCase()}</span>
                    <ArrowRight size={14} className="industry-btn-arrow" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Industry Consultation Banner */}
        <div className="industries-bottom-banner">
          <div className="industries-banner-content">
            <h3 className="industries-banner-title">
              Operating in one of these specialized sectors?
            </h3>
            <p className="industries-banner-desc">
              Our multidisciplinary engineering teams offer tailored feasibility reviews,
              zoning analysis, and cost estimates customized to your industry’s operational standards.
            </p>
          </div>

          <button
            type="button"
            className="btn-primary industries-banner-btn"
            onClick={onOpenQuote}
          >
            <span>DISCUSS YOUR SECTOR SPECS</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
