import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Factory, Home, Landmark, Wrench } from 'lucide-react';
import './QuoteModal.css';

const PROJECT_TYPES = [
  { id: 'commercial', label: 'Commercial Building', icon: Building },
  { id: 'industrial', label: 'Industrial & Warehouse', icon: Factory },
  { id: 'residential', label: 'Residential Development', icon: Home },
  { id: 'infrastructure', label: 'Civil Infrastructure', icon: Landmark },
  { id: 'renovation', label: 'Retrofit & Renovation', icon: Wrench },
];

export default function QuoteModal({ isOpen, onClose }) {
  const [projectType, setProjectType] = useState('commercial');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    timeline: 'Immediate (Within 30 Days)',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="quote-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="quote-modal-close" onClick={onClose} aria-label="Close quote modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="quote-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="success-icon" />
            </div>
            <h3 className="success-title">Project Inquiry Received</h3>
            <p className="success-message">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. Our senior engineering estimator
              is reviewing your specifications and will deliver a preliminary proposal within 24 business hours.
            </p>
            <div className="success-summary">
              <div><strong>Project Type:</strong> {PROJECT_TYPES.find(p => p.id === projectType)?.label}</div>
              <div><strong>Timeline:</strong> {formData.timeline}</div>
            </div>
            <button type="button" className="btn-primary" onClick={handleReset}>
              Close & Return to Site
            </button>
          </div>
        ) : (
          <div className="quote-form-content">
            <div className="quote-header">
              <div className="quote-badge">PRELIMINARY ESTIMATION</div>
              <h2 className="quote-title">Request a Project Quotation</h2>
              <p className="quote-subtitle">
                Provide your structural requirements for an engineering review and accurate project estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              {/* Project Type Selector */}
              <div className="form-group">
                <label className="form-label">Select Project Category</label>
                <div className="project-type-grid">
                  {PROJECT_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        type="button"
                        key={type.id}
                        className={`type-pill ${projectType === type.id ? 'active' : ''}`}
                        onClick={() => setProjectType(type.id)}
                      >
                        <Icon size={16} className="type-icon" />
                        <span>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-name">Full Name *</label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-company">Company / Organization</label>
                  <input
                    id="quote-company"
                    type="text"
                    placeholder="e.g. Apex Developments LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-email">Work Email *</label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-phone">Direct Phone *</label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Location & Timeline */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-location">Project Site / City</label>
                  <input
                    id="quote-location"
                    type="text"
                    placeholder="City, State or Region"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-timeline">Estimated Timeline</label>
                  <select
                    id="quote-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="form-select"
                  >
                    <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                    <option value="1 - 3 Months">1 – 3 Months</option>
                    <option value="3 - 6 Months">3 – 6 Months</option>
                    <option value="Future Planning (6+ Months)">Future Planning (6+ Months)</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="form-group">
                <label className="form-label" htmlFor="quote-details">Project Scope & Specifications</label>
                <textarea
                  id="quote-details"
                  rows={3}
                  placeholder="Outline square footage, structural materials, site conditions, or special engineering requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-primary quote-submit-btn">
                  <span>SUBMIT QUOTATION REQUEST</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
