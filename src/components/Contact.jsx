import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { CONTACT_INFO, PROJECT_TYPES } from '../data/contactData';
import './Contact.css';

export default function Contact({ onOpenQuote, isPage = false }) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial Construction',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top if accessed as dedicated standalone page route
  useEffect(() => {
    if (isPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [isPage]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify the subject of your inquiry.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or inquiry.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // Reset Form for another inquiry
  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Commercial Construction',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className={`contact-section ${isPage ? 'is-page-view' : ''}`} id="contact">
      {/* Background Architectural Grid & Subtle Amber Glow */}
      <div className="contact-bg-grid" aria-hidden="true"></div>
      <div className="contact-ambient-glow" aria-hidden="true"></div>

      {/* =========================================================================
         1. Hero Section
         ========================================================================= */}
      <div className="contact-hero-banner">
        <div className="contact-hero-bg-media">
          <img
            src="/commercial-hero.jpg"
            alt="Modern architectural construction project at dusk"
            className="contact-hero-img"
            loading="lazy"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="contact-hero-container">
          <div className="contact-pill-badge">
            <span className="pill-text">Contact Us</span>
          </div>
          <div className="contact-accent-bar"></div>

          <span className="contact-eyebrow">START THE CONVERSATION</span>
          <h1 className="contact-main-title">
            LET&apos;S BUILD SOMETHING GREAT.
          </h1>
          <p className="contact-lead-subtitle">
            Have a project in mind? Tell us about it, and our team will get in touch.
          </p>
        </div>
      </div>

      {/* =========================================================================
         2. Main Content: Side-by-Side Contact Info & Contact Form
         ========================================================================= */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Contact Information Cards */}
          <div className="contact-info-col">
            <div className="contact-info-header">
              <span className="info-tag">COMMUNICATION CHANNELS</span>
              <h2 className="info-title">Connect With Our Team</h2>
              <p className="info-desc">
                Whether you need preliminary project feasibility, technical architectural consultation,
                or a formal tender proposal, our senior engineering staff is available.
              </p>
            </div>

            <div className="contact-cards-stack">
              {/* Office Address */}
              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <MapPin size={22} className="contact-card-icon" />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-heading">Office</h3>
                  <p className="contact-card-text">{CONTACT_INFO.office.address}</p>
                  <p className="contact-card-subtext">{CONTACT_INFO.office.city}</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <Phone size={22} className="contact-card-icon" />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-heading">Phone</h3>
                  <p className="contact-card-text">
                    <a href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, '')}`} className="contact-link">
                      {CONTACT_INFO.phone.primary}
                    </a>
                  </p>
                  <p className="contact-card-subtext">
                    <a href={`tel:${CONTACT_INFO.phone.secondary.replace(/\s+/g, '')}`} className="contact-link">
                      {CONTACT_INFO.phone.secondary}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <Mail size={22} className="contact-card-icon" />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-heading">Email</h3>
                  <p className="contact-card-text">
                    <a href={`mailto:${CONTACT_INFO.email.primary}`} className="contact-link">
                      {CONTACT_INFO.email.primary}
                    </a>
                  </p>
                  <p className="contact-card-subtext">
                    Estimates: <a href={`mailto:${CONTACT_INFO.email.estimates}`} className="contact-link">
                      {CONTACT_INFO.email.estimates}
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <Clock size={22} className="contact-card-icon" />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-heading">Business Hours</h3>
                  <p className="contact-card-text">{CONTACT_INFO.hours.days}, {CONTACT_INFO.hours.time}</p>
                  <p className="contact-card-subtext">{CONTACT_INFO.hours.note}</p>
                </div>
              </div>
            </div>

            {/* Request a Quote Side Dock Card */}
            <div className="contact-quote-cta-box">
              <div className="quote-cta-header">
                <Building size={20} className="quote-cta-icon" />
                <div>
                  <h4 className="quote-cta-title">Need a Rapid Project Estimate?</h4>
                  <p className="quote-cta-desc">
                    Use our interactive multi-step project calculator for immediate budget scoping.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn-secondary contact-quote-trigger-btn"
                onClick={onOpenQuote}
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="contact-trust-strip">
              <div className="trust-strip-item">
                <ShieldCheck size={16} className="trust-strip-icon" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <div className="trust-strip-item">
                <CheckCircle2 size={16} className="trust-strip-icon" />
                <span>24-Hour Inquiry Response SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper">
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h3 className="form-title">Send Us a Direct Message</h3>
                    <p className="form-subtitle">
                      Complete the form below and an engineering project director will contact you directly.
                    </p>
                  </div>

                  {/* Name & Company Grid */}
                  <div className="form-row-grid">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Samuel Yohannes"
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      />
                      {errors.fullName && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company Name <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Holdings Ltd"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="form-row-grid">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. samuel@example.com"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                      />
                      {errors.email && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="required-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +251 91 123 4567"
                        className={`form-input ${errors.phone ? 'has-error' : ''}`}
                      />
                      {errors.phone && (
                        <div className="form-error-msg">
                          <AlertCircle size={14} />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Type Select Dropdown */}
                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      Project Type <span className="required-star">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Request for Proposal — Commercial Office Tower"
                      className={`form-input ${errors.subject ? 'has-error' : ''}`}
                    />
                    {errors.subject && (
                      <div className="form-error-msg">
                        <AlertCircle size={14} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details & Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project scope, location, expected timeframe, or specific engineering requirements..."
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                    />
                    {errors.message && (
                      <div className="form-error-msg">
                        <AlertCircle size={14} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Form Action Buttons */}
                  <div className="form-actions-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="btn-spinner" aria-hidden="true"></div>
                          <span>SUBMITTING INQUIRY...</span>
                        </>
                      ) : (
                        <span>SEND INQUIRY →</span>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn-secondary form-quote-btn"
                      onClick={onOpenQuote}
                    >
                      <span>REQUEST A QUOTE</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Feedback State */
                <div className="form-success-card" role="alert">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Inquiry Submitted Successfully!</h3>
                  <p className="success-message">
                    Thank you, <strong>{formData.fullName}</strong>. Your project inquiry regarding{' '}
                    <strong>{formData.projectType}</strong> has been logged in our system.
                  </p>
                  <div className="success-details-box">
                    <div className="success-detail-row">
                      <span className="detail-label">Subject:</span>
                      <span className="detail-value">{formData.subject}</span>
                    </div>
                    <div className="success-detail-row">
                      <span className="detail-label">Confirmation Email Sent To:</span>
                      <span className="detail-value">{formData.email}</span>
                    </div>
                    <div className="success-detail-row">
                      <span className="detail-label">Response Time:</span>
                      <span className="detail-value">Within 24 business hours</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-primary success-reset-btn"
                    onClick={handleReset}
                  >
                    <span>SEND ANOTHER INQUIRY</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
