import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  MapPin,
  DollarSign,
  Maximize2,
  Phone,
  Mail,
} from 'lucide-react';
import servicesData from '../data/servicesData';
import './ServiceDetail.css';

export default function ServiceDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const service = servicesData[slug];
  const [openFaq, setOpenFaq] = useState(null);
  const heroRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Parallax effect on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const heroImg = heroRef.current.querySelector('.sd-hero-bg-img');
        if (heroImg) {
          heroImg.style.transform = `scale(1.1) translateY(${scrolled * 0.25}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">
          <span>Return Home</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const IconComp = service.icon;
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // Get other services for related navigation
  const allSlugs = Object.keys(servicesData);
  const otherServices = allSlugs.filter((s) => s !== slug);

  return (
    <div className="sd-page">
      {/* ========== HERO SECTION ========== */}
      <section className="sd-hero" ref={heroRef}>
        <div className="sd-hero-bg">
          <img
            src={service.heroImage}
            alt={service.title}
            className="sd-hero-bg-img"
          />
          <div className="sd-hero-overlay" />
          <div className="sd-hero-gradient" />
        </div>

        {/* Back Navigation */}
        <div className="sd-hero-back-nav">
          <Link to="/" className="sd-back-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="sd-hero-content container">
          <div className="sd-hero-badge-wrap">
            <div className="sd-hero-icon-ring">
              <IconComp size={22} strokeWidth={2} />
            </div>
            <span className="sd-hero-badge-text">{service.badge}</span>
          </div>
          <h1 className="sd-hero-title">{service.title}</h1>
          <p className="sd-hero-subtitle">{service.subtitle}</p>
          <div className="sd-hero-actions">
            <button
              type="button"
              className="btn-primary sd-hero-cta"
              onClick={onOpenQuote}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
            <a href="#overview" className="btn-secondary sd-hero-explore">
              <span>Explore Service</span>
              <ChevronDown size={16} />
            </a>
          </div>
        </div>

        {/* Hero bottom stats bar */}
        <div className="sd-hero-stats-dock">
          <div className="sd-stats-inner container">
            {service.overview.stats.map((stat, i) => (
              <div key={i} className="sd-stat-item">
                <span className="sd-stat-value">{stat.value}</span>
                <span className="sd-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE OVERVIEW ========== */}
      <section className="sd-section sd-overview" id="overview">
        <div className="container">
          <div className="sd-overview-grid">
            <div className="sd-overview-text">
              <span className="sd-eyebrow">
                <span className="sd-eyebrow-line" />
                SERVICE OVERVIEW
              </span>
              <h2 className="sd-section-title">{service.overview.heading}</h2>
              <p className="sd-section-desc">{service.overview.text}</p>
              <button
                type="button"
                className="btn-primary sd-inline-cta"
                onClick={onOpenQuote}
              >
                <span>Get Started</span>
                <ArrowRight size={15} />
              </button>
            </div>
            <div className="sd-overview-image-wrap">
              <div className="sd-overview-image-frame">
                <img
                  src={service.overview.image}
                  alt={service.overview.heading}
                  className="sd-overview-img"
                />
                <div className="sd-image-accent-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT WE DELIVER ========== */}
      <section className="sd-section sd-deliverables">
        <div className="container">
          <div className="sd-section-header-center">
            <span className="sd-eyebrow">
              <span className="sd-eyebrow-line" />
              WHAT WE DELIVER
            </span>
            <h2 className="sd-section-title">Comprehensive Capabilities</h2>
          </div>
          <div className="sd-deliverables-grid">
            {service.deliverables.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="sd-deliver-card">
                  <div className="sd-deliver-icon-wrap">
                    <ItemIcon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="sd-deliver-title">{item.title}</h3>
                  <p className="sd-deliver-desc">{item.desc}</p>
                  <div className="sd-deliver-card-glow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CONSTRUCTION PROCESS ========== */}
      <section className="sd-section sd-process">
        <div className="container">
          <div className="sd-section-header-center">
            <span className="sd-eyebrow">
              <span className="sd-eyebrow-line" />
              OUR CONSTRUCTION PROCESS
            </span>
            <h2 className="sd-section-title">Engineered for Success</h2>
          </div>
          <div className="sd-process-timeline">
            {service.process.map((step, i) => (
              <div key={i} className="sd-process-step">
                <div className="sd-process-number-col">
                  <div className="sd-process-number">{step.step}</div>
                  {i < service.process.length - 1 && (
                    <div className="sd-process-connector" />
                  )}
                </div>
                <div className="sd-process-content">
                  <h3 className="sd-process-title">{step.title}</h3>
                  <p className="sd-process-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGIES & MATERIALS ========== */}
      <section className="sd-section sd-technologies">
        <div className="container">
          <div className="sd-section-header-center">
            <span className="sd-eyebrow">
              <span className="sd-eyebrow-line" />
              TECHNOLOGIES & MATERIALS
            </span>
            <h2 className="sd-section-title">Industry-Leading Tools & Methods</h2>
          </div>
          <div className="sd-tech-grid">
            {service.technologies.map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div key={i} className="sd-tech-card">
                  <div className="sd-tech-icon">
                    <TechIcon size={20} strokeWidth={1.8} />
                  </div>
                  <div className="sd-tech-info">
                    <h4 className="sd-tech-name">{tech.name}</h4>
                    <p className="sd-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="sd-section sd-projects">
        <div className="container">
          <div className="sd-section-header-center">
            <span className="sd-eyebrow">
              <span className="sd-eyebrow-line" />
              FEATURED PROJECTS
            </span>
            <h2 className="sd-section-title">Proven Track Record</h2>
          </div>
          <div className="sd-projects-grid">
            {service.projects.map((project, i) => (
              <div key={i} className="sd-project-card">
                <div className="sd-project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="sd-project-img"
                  />
                  <div className="sd-project-tag">{project.tag}</div>
                </div>
                <div className="sd-project-info">
                  <h3 className="sd-project-title">{project.title}</h3>
                  <div className="sd-project-meta">
                    <div className="sd-project-meta-item">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <div className="sd-project-meta-item">
                      <DollarSign size={14} />
                      <span>{project.value}</span>
                    </div>
                    <div className="sd-project-meta-item">
                      <Maximize2 size={14} />
                      <span>{project.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== KEY BENEFITS ========== */}
      <section className="sd-section sd-benefits">
        <div className="container">
          <div className="sd-section-header-center">
            <span className="sd-eyebrow">
              <span className="sd-eyebrow-line" />
              KEY BENEFITS
            </span>
            <h2 className="sd-section-title">Why Choose BuildCraft</h2>
          </div>
          <div className="sd-benefits-grid">
            {service.benefits.map((benefit, i) => {
              const BenIcon = benefit.icon;
              return (
                <div key={i} className="sd-benefit-card">
                  <div className="sd-benefit-icon">
                    <BenIcon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="sd-benefit-title">{benefit.title}</h3>
                  <p className="sd-benefit-desc">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FAQs ========== */}
      <section className="sd-section sd-faqs">
        <div className="container">
          <div className="sd-faqs-layout">
            <div className="sd-faqs-header-side">
              <span className="sd-eyebrow">
                <span className="sd-eyebrow-line" />
                FAQ
              </span>
              <h2 className="sd-section-title">Frequently Asked Questions</h2>
              <p className="sd-section-desc">
                Get answers to the most common questions about our{' '}
                {service.title.toLowerCase()} services.
              </p>
              <button
                type="button"
                className="btn-primary sd-inline-cta"
                onClick={onOpenQuote}
              >
                <span>Ask a Question</span>
                <ArrowRight size={15} />
              </button>
            </div>
            <div className="sd-faqs-list">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`sd-faq-item ${openFaq === i ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="sd-faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="sd-faq-q">{faq.q}</span>
                    <span className="sd-faq-chevron">
                      {openFaq === i ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>
                  <div className="sd-faq-answer-wrap">
                    <p className="sd-faq-answer">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA BANNER ========== */}
      <section className="sd-cta-banner">
        <div className="container">
          <div className="sd-cta-inner">
            <div className="sd-cta-content">
              <h2 className="sd-cta-title">
                Ready to Start Your{' '}
                {service.title
                  .split(' ')
                  .map(
                    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                  )
                  .join(' ')}{' '}
                Project?
              </h2>
              <p className="sd-cta-desc">
                Let's discuss your vision. Our team is ready to provide a
                detailed proposal tailored to your specific requirements.
              </p>
            </div>
            <div className="sd-cta-actions">
              <button
                type="button"
                className="btn-primary sd-cta-btn"
                onClick={onOpenQuote}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </button>
              <div className="sd-cta-contact">
                <div className="sd-cta-contact-item">
                  <Phone size={14} />
                  <span>+1 (800) 482-9102</span>
                </div>
                <div className="sd-cta-contact-item">
                  <Mail size={14} />
                  <span>projects@buildcraft.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER SERVICES NAV ========== */}
      <section className="sd-other-services">
        <div className="container">
          <h3 className="sd-other-heading">Explore Other Services</h3>
          <div className="sd-other-grid">
            {otherServices.map((otherSlug) => {
              const other = servicesData[otherSlug];
              const OtherIcon = other.icon;
              return (
                <Link
                  key={otherSlug}
                  to={`/services/${otherSlug}`}
                  className="sd-other-card"
                >
                  <div className="sd-other-icon">
                    <OtherIcon size={20} strokeWidth={2} />
                  </div>
                  <div className="sd-other-info">
                    <h4 className="sd-other-title">
                      {other.title
                        .split(' ')
                        .map(
                          (w) =>
                            w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                        )
                        .join(' ')}
                    </h4>
                    <span className="sd-other-badge">{other.badge}</span>
                  </div>
                  <ArrowRight size={16} className="sd-other-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
