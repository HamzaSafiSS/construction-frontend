import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Industries', href: '#industries' },
  { name: 'Team', href: '#team' },
  { name: 'News', href: '#news' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (linkName, href) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="navbar-brand" onClick={() => setActiveLink('Home')}>
            <div className="brand-logo-mark">
              {/* Construction geometric 'B' mark */}
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
                <rect x="2" y="2" width="14" height="32" rx="2" fill="#FF5E14" />
                <path d="M16 2H27C31.4183 2 35 5.58172 35 10C35 14.4183 31.4183 18 27 18H16V2Z" fill="#FF5E14" />
                <path d="M16 18H28C32.4183 18 36 21.5817 36 26C36 30.4183 32.4183 34 28 34H16V18Z" fill="#E04D09" />
                <rect x="7" y="7" width="4" height="22" rx="1" fill="#FFFFFF" opacity="0.9" />
                <path d="M20 7H26C27.6569 7 29 8.34315 29 10C29 11.6569 27.6569 13 26 13H20V7Z" fill="#FFFFFF" opacity="0.9" />
                <path d="M20 23H27C28.6569 23 30 24.3431 30 26C30 27.6569 28.6569 29 27 29H20V23Z" fill="#FFFFFF" opacity="0.9" />
              </svg>
            </div>
            <div className="brand-text-group">
              <span className="brand-title">BuildCraft</span>
              <span className="brand-subtitle">CONSTRUCTIONS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${activeLink === link.name ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.name, link.href);
                    }}
                  >
                    {link.name}
                    {activeLink === link.name && <span className="active-pill" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action CTA */}
          <div className="header-actions">
            <button
              type="button"
              className="btn-quote"
              onClick={onOpenQuote}
              aria-label="Get a Quote"
            >
              <span>GET A QUOTE</span>
              <ArrowRight size={17} className="btn-arrow" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <aside
          className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile Navigation Drawer"
        >
          <div className="drawer-header">
            <div className="navbar-brand">
              <div className="brand-logo-mark small">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
                  <rect x="2" y="2" width="14" height="32" rx="2" fill="#FF5E14" />
                  <path d="M16 2H27C31.4183 2 35 5.58172 35 10C35 14.4183 31.4183 18 27 18H16V2Z" fill="#FF5E14" />
                  <path d="M16 18H28C32.4183 18 36 21.5817 36 26C36 30.4183 32.4183 34 28 34H16V18Z" fill="#E04D09" />
                </svg>
              </div>
              <div className="brand-text-group">
                <span className="brand-title">BuildCraft</span>
                <span className="brand-subtitle">CONSTRUCTIONS</span>
              </div>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="drawer-body">
            <nav className="drawer-nav">
              <ul>
                {NAV_LINKS.map((link, index) => (
                  <li key={link.name} style={{ animationDelay: `${index * 40}ms` }}>
                    <a
                      href={link.href}
                      className={`drawer-link ${activeLink === link.name ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.name, link.href);
                      }}
                    >
                      <span className="drawer-link-num">0{index + 1}</span>
                      <span className="drawer-link-text">{link.name}</span>
                      <ArrowRight size={16} className="drawer-link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="drawer-footer">
              <button
                type="button"
                className="drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                <span>GET A QUOTE</span>
                <ArrowRight size={18} />
              </button>

              <div className="drawer-quick-contacts">
                <div className="contact-item">
                  <Phone size={15} className="contact-icon" />
                  <span>+1 (800) 482-9102</span>
                </div>
                <div className="contact-item">
                  <Mail size={15} className="contact-icon" />
                  <span>contact@buildcraftconstructions.com</span>
                </div>
                <div className="contact-item">
                  <Clock size={15} className="contact-icon" />
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
