import { ArrowRight, ShieldCheck, Award, CheckCircle2, HardHat } from 'lucide-react';
import safetyFocusAreas from '../data/safetyData';
import './SafetyQuality.css';

export default function SafetyQuality({ onOpenQuote }) {
  return (
    <section className="sq-section" id="safety-quality">
      {/* Background Architectural Grid & Ambient Safety Glow */}
      <div className="sq-bg-grid" aria-hidden="true"></div>
      <div className="sq-ambient-glow" aria-hidden="true"></div>

      <div className="sq-container">
        {/* =========================================================================
           1. Header Section
           ========================================================================= */}
        <div className="sq-top-header">
          <div className="sq-pill-badge">
            <span className="pill-text">Safety & Quality</span>
          </div>
          <div className="sq-accent-bar"></div>

          <span className="sq-eyebrow">OUR UNCOMPROMISING COMMITMENT</span>
          <h2 className="sq-main-title">
            SAFETY. QUALITY. RESPONSIBILITY.
          </h2>
          <p className="sq-lead-subtitle">
            We believe successful construction is not only about completing a project, but
            about delivering every project safely, responsibly, and to the highest possible
            standards.
          </p>
        </div>

        {/* =========================================================================
           2. Visual Showcase: Engineers & Workers with PPE on Site
           ========================================================================= */}
        <div className="sq-visual-showcase">
          <div className="sq-visual-media">
            <img
              src="/safety-quality.jpg"
              alt="Civil engineers and construction supervisors wearing high-visibility PPE reviewing blueprints at an active commercial construction site"
              className="sq-visual-img"
              loading="lazy"
            />
            <div className="sq-visual-overlay"></div>

            {/* Floating Reassurance Badges on Image */}
            <div className="sq-visual-floating-badge sq-badge-left">
              <div className="sq-badge-icon">
                <HardHat size={20} />
              </div>
              <div className="sq-badge-text">
                <span className="sq-badge-title">100% PPE Mandatory</span>
                <span className="sq-badge-sub">Zero-tolerance on-site compliance</span>
              </div>
            </div>

            <div className="sq-visual-floating-badge sq-badge-right">
              <div className="sq-badge-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="sq-badge-text">
                <span className="sq-badge-title">ISO 9001 & OSHA Verified</span>
                <span className="sq-badge-sub">Certified quality management</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           3. Key Focus Areas Grid (6 Structured Cards)
           ========================================================================= */}
        <div className="sq-focus-grid">
          {safetyFocusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="sq-focus-card">
                <div className="sq-card-top">
                  <div className="sq-icon-box">
                    <Icon size={24} className="sq-card-icon" />
                  </div>
                  <span className="sq-card-tag">{item.tag}</span>
                </div>

                <div className="sq-card-body">
                  <h3 className="sq-card-title">{item.title}</h3>
                  <p className="sq-card-desc">{item.description}</p>
                </div>

                <div className="sq-card-footer">
                  <div className="sq-highlight-wrap">
                    <CheckCircle2 size={14} className="sq-highlight-check" />
                    <span className="sq-highlight-text">{item.highlight}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================================================
           4. Bottom Assurance & Action Dock
           ========================================================================= */}
        <div className="sq-bottom-dock">
          <div className="sq-dock-indicators">
            <div className="sq-indicator-item">
              <ShieldCheck size={20} className="indicator-icon" />
              <div className="indicator-copy">
                <span className="indicator-val">Zero-Incident Culture</span>
                <span className="indicator-label">Proactive hazard management</span>
              </div>
            </div>

            <div className="sq-indicator-divider"></div>

            <div className="sq-indicator-item">
              <Award size={20} className="indicator-icon" />
              <div className="indicator-copy">
                <span className="indicator-val">Tier-1 Material Audits</span>
                <span className="indicator-label">100% Certified batch tracing</span>
              </div>
            </div>

            <div className="sq-indicator-divider"></div>

            <div className="sq-indicator-item">
              <CheckCircle2 size={20} className="indicator-icon" />
              <div className="indicator-copy">
                <span className="indicator-val">Full Code Compliance</span>
                <span className="indicator-label">Rigorous municipal inspection sign-offs</span>
              </div>
            </div>
          </div>

          <div className="sq-dock-action">
            <button
              type="button"
              className="btn-primary sq-cta-btn"
              onClick={onOpenQuote}
            >
              <span>REQUEST PROJECT QA PROTOCOLS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
