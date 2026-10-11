import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import processSteps from '../data/processData';
import './OurProcess.css';

export default function OurProcess({ onOpenQuote }) {
  return (
    <section className="process-section" id="process">
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className="process-bg-grid" aria-hidden="true"></div>
      <div className="process-ambient-glow" aria-hidden="true"></div>

      <div className="process-container">
        {/* Section Header */}
        <div className="process-top-header">
          <div className="process-pill-badge">
            <span className="pill-text">Our Process</span>
          </div>
          <div className="process-accent-bar"></div>

          <span className="process-eyebrow">HOW WE BUILD</span>
          <h2 className="process-main-title">
            From Blueprint to Handover, Step by Step.
          </h2>
          <p className="process-lead-subtitle">
            A disciplined, transparent project management framework engineered to guarantee
            budget certainty, structural integrity, and milestone adherence at every phase.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="process-timeline-wrapper">
          {/* Continuous Connecting Beam (Desktop Horizontal Track) */}
          <div className="process-track-line" aria-hidden="true">
            <div className="process-track-glow"></div>
          </div>

          {/* Process Steps Track */}
          <div className="process-steps-track">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="process-step-card">
                  {/* Step Connector Node */}
                  <div className="process-node-wrapper">
                    <div className="process-node-circle">
                      <span className="process-node-number">{item.step}</span>
                    </div>
                    {/* Mobile vertical line connector */}
                    {index < processSteps.length - 1 && (
                      <div className="process-mobile-connector" aria-hidden="true"></div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="process-card-inner">
                    <div className="process-card-header">
                      <div className="process-icon-box">
                        <Icon size={24} className="process-step-icon" />
                      </div>
                      <span className="process-step-tag">{item.tag}</span>
                    </div>

                    <div className="process-card-body">
                      <h3 className="process-step-title">{item.title}</h3>
                      <p className="process-step-desc">{item.description}</p>
                    </div>

                    <div className="process-card-footer">
                      <span className="process-deliverable-label">Key Deliverable:</span>
                      <span className="process-deliverable-val">{item.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Process Reassurance & Action Dock */}
        <div className="process-bottom-dock">
          <div className="process-dock-reassurances">
            <div className="process-reassurance-item">
              <ShieldCheck size={18} className="reassurance-icon" />
              <span>Full OSHA & ISO Quality Compliance</span>
            </div>
            <div className="process-reassurance-item">
              <Clock size={18} className="reassurance-icon" />
              <span>100% Real-Time Milestone Tracking</span>
            </div>
            <div className="process-reassurance-item">
              <Award size={18} className="reassurance-icon" />
              <span>Guaranteed Maximum Price (GMP)</span>
            </div>
          </div>

          <div className="process-dock-cta">
            <span className="process-cta-text">
              Ready to discuss your project parameters?
            </span>
            <button
              type="button"
              className="btn-primary process-cta-btn"
              onClick={onOpenQuote}
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
