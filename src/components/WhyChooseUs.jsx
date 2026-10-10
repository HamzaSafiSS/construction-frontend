import React from 'react';
import './WhyChooseUs.css';
import { 
  HardHat, 
  Award, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Handshake,
  Check
} from 'lucide-react';

const reasons = [
  {
    id: '01',
    title: 'Experienced Team',
    description: 'Skilled professionals with extensive industry experience leading every build.',
    icon: HardHat,
    metric: 'Certified Specialists',
    badge: 'Field Expertise'
  },
  {
    id: '02',
    title: 'Quality Construction',
    description: 'High standards maintained with precision from initial planning through final delivery.',
    icon: Award,
    metric: 'ISO Certified Standards',
    badge: 'Premium Materials'
  },
  {
    id: '03',
    title: 'Safety First',
    description: 'Safety is integrated into every stage of our operations with zero-compromise protocols.',
    icon: ShieldCheck,
    metric: 'OSHA Compliant',
    badge: 'Zero-Incident Focus'
  },
  {
    id: '04',
    title: 'Reliable Delivery',
    description: 'Structured project management strictly focused on milestone deadlines and exact results.',
    icon: Clock,
    metric: 'On-Schedule Rate',
    badge: 'Strict Milestones'
  },
  {
    id: '05',
    title: 'Modern Technology',
    description: 'Using modern tools, materials, BIM modeling, and cutting-edge construction practices.',
    icon: Cpu,
    metric: 'Digital BIM Integration',
    badge: 'Next-Gen Methods'
  },
  {
    id: '06',
    title: 'Client Focus',
    description: 'Transparent communication, regular reporting, and customized solutions designed around client needs.',
    icon: Handshake,
    metric: 'Dedicated Liaison',
    badge: 'Complete Transparency'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section" id="why-choose-us">
      {/* Background architectural grid texture */}
      <div className="why-bg-grid" aria-hidden="true"></div>
      <div className="why-glow-orb" aria-hidden="true"></div>

      <div className="why-container">
        {/* Section Header */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">THE BUILDCRAFT ADVANTAGE</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="why-title">Why Choose Us Instead of Another Contractor?</h2>
          <p className="why-subtitle">
            Choosing the right construction partner defines the success, longevity, and cost-efficiency of your project. 
            Here is how we set the benchmark for commercial and industrial craftsmanship.
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="why-cards-grid">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div key={reason.id} className="why-card">
                {/* Subtle card architectural corner accent */}
                <div className="card-corner-accent" aria-hidden="true"></div>

                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComponent className="why-industrial-icon" size={26} strokeWidth={2} />
                  </div>
                  <span className="why-card-number">{reason.id}</span>
                </div>

                <div className="why-card-body">
                  <h3 className="why-card-title">{reason.title}</h3>
                  <p className="why-card-description">{reason.description}</p>
                </div>

                <div className="why-card-footer">
                  <span className="why-badge">
                    <Check size={13} className="why-badge-check" strokeWidth={2.5} />
                    {reason.badge}
                  </span>
                  <span className="why-metric">{reason.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Assurance Banner */}
        <div className="why-assurance-banner">
          <div className="assurance-left">
            <span className="assurance-tag">CONTRACTOR COMMITMENT</span>
            <h4 className="assurance-heading">Ready to discuss your project specifications?</h4>
          </div>
          <div className="assurance-right">
            <p className="assurance-text">
              We provide comprehensive feasibility analyses, transparent budget allocations, and scheduled milestone guarantees before any contract signing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
