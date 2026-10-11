import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ArrowRight,
  Shield,
  FileText,
  X,
} from 'lucide-react';
import {
  FOOTER_COLUMNS,
  FOOTER_CONTACT,
} from '../data/footerData';
import './Footer.css';

export default function Footer({ onOpenQuote }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Legal modal state for Privacy Policy and Terms & Conditions
  const [legalModal, setLegalModal] = useState(null);

  // Smooth scroll or navigation handler
  const handleLinkClick = (e, item) => {
    e.preventDefault();

    if (item.action === 'quote') {
      if (onOpenQuote) onOpenQuote();
      return;
    }

    if (item.path) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href) {
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      {/* Background Architectural Grid & Subtle Amber Glow */}
      <div className="footer-bg-grid" aria-hidden="true"></div>
      <div className="footer-ambient-glow" aria-hidden="true"></div>

      <div className="footer-container">
        {/* =========================================================================
           1. Top Brand & Newsletter / Social Strip
           ========================================================================= */}
        <div className="footer-brand-strip">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo" onClick={scrollToTop}>
              <div className="footer-logo-mark">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer-svg"
                >
                  <rect x="2" y="2" width="14" height="32" rx="2" fill="#FF5E14" />
                  <path
                    d="M16 2H27C31.4183 2 35 5.58172 35 10C35 14.4183 31.4183 18 27 18H16V2Z"
                    fill="#FF5E14"
                  />
                  <path
                    d="M16 18H28C32.4183 18 36 21.5817 36 26C36 30.4183 32.4183 34 28 34H16V18Z"
                    fill="#E04D09"
                  />
                  <rect
                    x="7"
                    y="7"
                    width="4"
                    height="22"
                    rx="1"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />
                  <path
                    d="M20 7H26C27.6569 7 29 8.34315 29 10C29 11.6569 27.6569 13 26 13H20V7Z"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />
                  <path
                    d="M20 23H27C28.6569 23 30 24.3431 30 26C30 27.6569 28.6569 29 27 29H20V23Z"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-title">BuildCraft</span>
                <span className="footer-brand-sub">CONSTRUCTIONS</span>
              </div>
            </Link>
            <p className="footer-brand-tagline">
              Engineering excellence, structural reliability, and sustainable construction
              solutions delivering landmark projects across the horn of Africa.
            </p>
          </div>

          <div className="footer-social-wrapper">
            <span className="footer-social-label">Follow Us</span>
            <div className="footer-social-links">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="BuildCraft LinkedIn Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="social-icon"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
                <span className="social-tooltip">LinkedIn</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="BuildCraft Facebook Page"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="social-icon"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.5 13.75 5.5c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
                <span className="social-tooltip">Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="BuildCraft Instagram Feed"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="social-icon"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span className="social-tooltip">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
           2. Multi-Column Navigation & Contact Grid
           ========================================================================= */}
        <div className="footer-columns-grid">
          {/* Column 1: Company */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span>{FOOTER_COLUMNS.company.title}</span>
              <span className="footer-col-line" aria-hidden="true"></span>
            </h3>
            <ul className="footer-nav-list">
              {FOOTER_COLUMNS.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <ArrowRight size={13} className="nav-arrow-icon" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span>{FOOTER_COLUMNS.services.title}</span>
              <span className="footer-col-line" aria-hidden="true"></span>
            </h3>
            <ul className="footer-nav-list">
              {FOOTER_COLUMNS.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <ArrowRight size={13} className="nav-arrow-icon" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span>{FOOTER_COLUMNS.projects.title}</span>
              <span className="footer-col-line" aria-hidden="true"></span>
            </h3>
            <ul className="footer-nav-list">
              {FOOTER_COLUMNS.projects.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <ArrowRight size={13} className="nav-arrow-icon" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span>{FOOTER_COLUMNS.support.title}</span>
              <span className="footer-col-line" aria-hidden="true"></span>
            </h3>
            <ul className="footer-nav-list">
              {FOOTER_COLUMNS.support.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path || link.href || '#quote'}
                    className={`footer-nav-link ${
                      link.action === 'quote' ? 'footer-quote-highlight' : ''
                    }`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <ArrowRight size={13} className="nav-arrow-icon" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Information */}
          <div className="footer-nav-col footer-contact-col">
            <h3 className="footer-col-title">
              <span>Contact Information</span>
              <span className="footer-col-line" aria-hidden="true"></span>
            </h3>
            <div className="footer-contact-items">
              {/* Office Address */}
              <div className="footer-contact-entry">
                <div className="entry-icon-box">
                  <MapPin size={17} />
                </div>
                <div className="entry-text">
                  <span className="entry-label">Office Address</span>
                  <p className="entry-val">{FOOTER_CONTACT.address.line1}</p>
                  <p className="entry-val sub">{FOOTER_CONTACT.address.line2}</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="footer-contact-entry">
                <div className="entry-icon-box">
                  <Phone size={17} />
                </div>
                <div className="entry-text">
                  <span className="entry-label">Phone Number</span>
                  <a
                    href={`tel:${FOOTER_CONTACT.phone.primary.replace(/\s+/g, '')}`}
                    className="entry-link"
                  >
                    {FOOTER_CONTACT.phone.primary}
                  </a>
                  <a
                    href={`tel:${FOOTER_CONTACT.phone.secondary.replace(/\s+/g, '')}`}
                    className="entry-link sub"
                  >
                    {FOOTER_CONTACT.phone.secondary}
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="footer-contact-entry">
                <div className="entry-icon-box">
                  <Mail size={17} />
                </div>
                <div className="entry-text">
                  <span className="entry-label">Email Address</span>
                  <a href={`mailto:${FOOTER_CONTACT.email}`} className="entry-link">
                    {FOOTER_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="footer-contact-entry">
                <div className="entry-icon-box">
                  <Clock size={17} />
                </div>
                <div className="entry-text">
                  <span className="entry-label">Business Hours</span>
                  <p className="entry-val">{FOOTER_CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           3. Bottom Footer Strip
           ========================================================================= */}
        <div className="footer-bottom-strip">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} BuildCraft Constructions. All Rights Reserved.
            </p>

            <div className="footer-legal-links">
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setLegalModal('privacy')}
              >
                Privacy Policy
              </button>
              <span className="legal-separator" aria-hidden="true">
                •
              </span>
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setLegalModal('terms')}
              >
                Terms & Conditions
              </button>
            </div>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <div className="back-to-top-icon">
                <ArrowUp size={15} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
         4. Privacy Policy & Terms Modal
         ========================================================================= */}
      {legalModal && (
        <div
          className="legal-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="legal-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-header">
              <div className="legal-modal-title-group">
                {legalModal === 'privacy' ? (
                  <Shield size={22} className="legal-modal-icon" />
                ) : (
                  <FileText size={22} className="legal-modal-icon" />
                )}
                <h4 className="legal-modal-title">
                  {legalModal === 'privacy'
                    ? 'Privacy Policy'
                    : 'Terms & Conditions'}
                </h4>
              </div>
              <button
                type="button"
                className="legal-modal-close-btn"
                onClick={() => setLegalModal(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="legal-modal-body">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>BuildCraft Constructions</strong> is committed to protecting the privacy and confidential technical specifications of our clients, sub-contractors, and engineering partners.
                  </p>
                  <h5>1. Information Collection</h5>
                  <p>
                    We collect personal information such as full name, email address, corporate entity, and contact numbers exclusively to prepare architectural proposals, project estimates, and contractual tender documents.
                  </p>
                  <h5>2. Technical Data & Non-Disclosure</h5>
                  <p>
                    All architectural blueprints, BIM models, site geotechnic surveys, and financial estimates submitted through our quotation portals are treated under strict proprietary confidentiality and protected against unauthorized disclosure.
                  </p>
                  <h5>3. Security Standards</h5>
                  <p>
                    Our digital systems maintain enterprise-grade encryption for all communication channels and secure cloud repositories. We do not sell or monetize personal or commercial client data.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>BuildCraft Constructions</strong>. By accessing our web application, digital tender tools, and quotation calculators, you agree to comply with our Terms & Conditions.
                  </p>
                  <h5>1. Scope of Estimates</h5>
                  <p>
                    All project estimates and budgetary calculations generated through our interactive Quote Calculator represent preliminary feasibility scoping and do not constitute a binding legal tender or guaranteed lump-sum quotation until verified by a signed EPC contract.
                  </p>
                  <h5>2. Intellectual Property</h5>
                  <p>
                    All design systems, architectural photography, technical renderings, case study documentation, and proprietary methodologies presented on this platform are the exclusive intellectual property of BuildCraft Constructions.
                  </p>
                  <h5>3. Regulatory Compliance</h5>
                  <p>
                    All physical construction operations adhere strictly to Ethiopian Ministry of Urban Development & Construction standards, international building codes (IBC), and certified OSHA workplace safety directives.
                  </p>
                </>
              )}
            </div>

            <div className="legal-modal-footer">
              <button
                type="button"
                className="btn-primary legal-modal-ok-btn"
                onClick={() => setLegalModal(null)}
              >
                <span>UNDERSTOOD</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
