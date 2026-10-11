import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  CalendarDays,
  Clock,
  ShieldCheck,
  Building,
  CheckCircle2,
  Maximize2,
  AlertTriangle,
  Layers,
  HardHat,
  X,
  FileText,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import projectsData from '../data/projectsData';
import './ProjectDetail.css';

export default function ProjectDetail({ onOpenQuote }) {
  const { id } = useParams();
  const heroRef = useRef(null);

  // Find current project by id
  const project = projectsData.find((p) => p.id === id);

  // Find index for previous / next navigation
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  // Gallery active filter & lightbox modal state
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Scroll to top upon navigating to a new project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Subtle parallax on hero background image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const heroImg = heroRef.current.querySelector('.pd-hero-bg-img');
        if (heroImg) {
          heroImg.style.transform = `scale(1.08) translateY(${scrolled * 0.22}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLightboxImg(null);
      }
    };
    if (activeLightboxImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeLightboxImg]);

  // 404 Not Found State
  if (!project) {
    return (
      <div className="pd-page">
        <div className="pd-not-found">
          <div className="pd-not-found-badge">Project Not Found</div>
          <h2>Case Study Unavailable</h2>
          <p>
            The construction project record you requested could not be located in our portfolio.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Filter gallery photos
  const galleryItems = project.gallery || [];
  const galleryCategories = ['All', ...new Set(galleryItems.map((g) => g.stage))];
  const visibleGallery =
    galleryFilter === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.stage === galleryFilter);

  const scrollToGallery = () => {
    const el = document.getElementById('project-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pd-page">
      {/* =========================================================================
         1. HERO SECTION
         Large, high-quality, full-width image showcasing completed project
         ========================================================================= */}
      <section className="pd-hero" ref={heroRef}>
        <div className="pd-hero-bg">
          <img
            src={project.image}
            alt={`${project.name} completed structure`}
            className="pd-hero-bg-img"
            loading="eager"
          />
          <div className="pd-hero-overlay"></div>
          <div className="pd-hero-grid-pattern"></div>
          <div className="pd-hero-glow"></div>
        </div>

        {/* Back to Projects Breadcrumb Bar */}
        <div className="pd-hero-top-nav">
          <Link to="/" className="pd-back-link">
            <ArrowLeft size={16} />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>

        {/* Hero Headline Content */}
        <div className="pd-hero-container">
          <div className="pd-hero-content">
            <div className="pd-hero-badges">
              <span className="pd-type-pill">{project.projectType || project.category}</span>
              <span className="pd-status-pill">
                <CheckCircle2 size={13} />
                {project.info?.status || 'Completed'}
              </span>
            </div>

            <h1 className="pd-hero-title">{project.name.toUpperCase()}</h1>

            <p className="pd-hero-subtitle">
              {project.overview ? project.overview.split('.')[0] + '.' : project.description}
            </p>

            {/* Quick Meta Indicators */}
            <div className="pd-hero-meta-bar">
              <div className="pd-meta-item">
                <MapPin size={16} className="pd-meta-icon" />
                <span className="pd-meta-label">Location:</span>
                <span className="pd-meta-value">{project.location}</span>
              </div>

              <div className="pd-meta-divider"></div>

              <div className="pd-meta-item">
                <CalendarDays size={16} className="pd-meta-icon" />
                <span className="pd-meta-label">Completion Year:</span>
                <span className="pd-meta-value">{project.year}</span>
              </div>

              <div className="pd-meta-divider"></div>

              <div className="pd-meta-item">
                <Maximize2 size={16} className="pd-meta-icon" />
                <span className="pd-meta-label">Total Area:</span>
                <span className="pd-meta-value">{project.info?.area || 'Custom Build'}</span>
              </div>

              <div className="pd-meta-divider"></div>

              <div className="pd-meta-item">
                <Clock size={16} className="pd-meta-icon" />
                <span className="pd-meta-label">Duration:</span>
                <span className="pd-meta-value">{project.info?.duration || '18 Months'}</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pd-hero-actions">
              <button
                type="button"
                className="btn-primary pd-hero-btn"
                onClick={onOpenQuote}
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="btn-secondary pd-hero-btn"
                onClick={scrollToGallery}
              >
                <Layers size={16} />
                <span>VIEW PROJECT GALLERY</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         2. PROJECT OVERVIEW & PROJECT INFORMATION
         Structured two-column layout: Overview narrative & Essential Details Card
         ========================================================================= */}
      <section className="pd-section pd-overview-section" id="project-overview">
        <div className="pd-container">
          <div className="pd-overview-grid">
            {/* Left: Project Overview */}
            <div className="pd-overview-col">
              <div className="pd-section-header">
                <span className="pd-section-tag">CASE STUDY OVERVIEW</span>
                <h2 className="pd-section-title">
                  Architectural Precision & Construction Excellence
                </h2>
              </div>

              <p className="pd-lead-text">
                {project.overview || project.description}
              </p>

              <div className="pd-overview-highlights">
                <div className="pd-highlight-item">
                  <div className="pd-highlight-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="pd-highlight-text">
                    <h4>Rigorous Quality Assurance</h4>
                    <p>
                      Built with certified structural steel, tested high-tolerance concrete, and
                      strict compliance with international building codes.
                    </p>
                  </div>
                </div>

                <div className="pd-highlight-item">
                  <div className="pd-highlight-icon">
                    <HardHat size={22} />
                  </div>
                  <div className="pd-highlight-text">
                    <h4>Turnkey Multi-Discipline Coordination</h4>
                    <p>
                      End-to-end integration across geotechnical civil works, MEP rough-ins, and
                      fine architectural envelope assembly.
                    </p>
                  </div>
                </div>

                <div className="pd-highlight-item">
                  <div className="pd-highlight-icon">
                    <Building size={22} />
                  </div>
                  <div className="pd-highlight-text">
                    <h4>Sustainable Asset Longevity</h4>
                    <p>
                      Engineered to minimize life-cycle operating costs through thermal efficiency,
                      smart BMS management, and low-maintenance facade systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Information Card */}
            <div className="pd-info-col">
              <div className="pd-info-card">
                <div className="pd-info-card-header">
                  <FileText size={20} className="pd-info-header-icon" />
                  <h3 className="pd-info-card-title">PROJECT INFORMATION</h3>
                </div>

                <div className="pd-info-card-body">
                  <div className="pd-info-row">
                    <span className="pd-info-label">Client</span>
                    <span className="pd-info-value pd-info-highlight">
                      {project.info?.client || 'ABC Group'}
                    </span>
                  </div>

                  <div className="pd-info-row">
                    <span className="pd-info-label">Location</span>
                    <span className="pd-info-value">
                      {project.info?.location || project.location}
                    </span>
                  </div>

                  <div className="pd-info-row">
                    <span className="pd-info-label">Category</span>
                    <span className="pd-info-value">
                      {project.info?.category || project.category}
                    </span>
                  </div>

                  <div className="pd-info-row">
                    <span className="pd-info-label">Duration</span>
                    <span className="pd-info-value">
                      {project.info?.duration || '18 Months'}
                    </span>
                  </div>

                  <div className="pd-info-row">
                    <span className="pd-info-label">Status</span>
                    <span className="pd-info-value pd-status-badge">
                      <CheckCircle2 size={13} />
                      {project.info?.status || 'Completed'}
                    </span>
                  </div>

                  <div className="pd-info-row">
                    <span className="pd-info-label">Total Area</span>
                    <span className="pd-info-value">
                      {project.info?.area || '12,500 m²'}
                    </span>
                  </div>

                  {project.info?.value && (
                    <div className="pd-info-row">
                      <span className="pd-info-label">Contract Value</span>
                      <span className="pd-info-value">{project.info.value}</span>
                    </div>
                  )}

                  {project.info?.contractType && (
                    <div className="pd-info-row">
                      <span className="pd-info-label">Delivery Method</span>
                      <span className="pd-info-value">{project.info.contractType}</span>
                    </div>
                  )}

                  {project.info?.certification && (
                    <div className="pd-info-row">
                      <span className="pd-info-label">Certification</span>
                      <span className="pd-info-value pd-cert-value">
                        {project.info.certification}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pd-info-card-footer">
                  <button
                    type="button"
                    className="btn-primary pd-info-cta-btn"
                    onClick={onOpenQuote}
                  >
                    <span>REQUEST SIMILAR SPECS</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         3. PROJECT CHALLENGES & OUR SOLUTIONS
         Side-by-side engineering intelligence breakdown
         ========================================================================= */}
      <section className="pd-section pd-challenges-section">
        <div className="pd-container">
          <div className="pd-section-header pd-center-header">
            <span className="pd-section-tag">ENGINEERING INTELLIGENCE</span>
            <h2 className="pd-section-title">Project Challenges & Our Solutions</h2>
            <p className="pd-section-subtitle">
              How our structural and civil engineering teams tackled site constraints,
              geotechnical challenges, and demanding timelines.
            </p>
          </div>

          <div className="pd-cs-grid">
            {/* Column 1: Challenges */}
            <div className="pd-cs-col pd-challenges-col">
              <div className="pd-cs-header">
                <div className="pd-cs-header-icon pd-cs-challenge-icon">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="pd-cs-col-title">PROJECT CHALLENGES</h3>
                  <span className="pd-cs-col-desc">Obstacles & Site Constraints</span>
                </div>
              </div>

              <div className="pd-cs-list">
                {project.challenges?.map((item, idx) => (
                  <div key={idx} className="pd-cs-card pd-challenge-card">
                    <div className="pd-cs-number">0{idx + 1}</div>
                    <div className="pd-cs-body">
                      <h4 className="pd-cs-item-title">{item.title}</h4>
                      <p className="pd-cs-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="pd-cs-col pd-solutions-col">
              <div className="pd-cs-header">
                <div className="pd-cs-header-icon pd-cs-solution-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="pd-cs-col-title">OUR SOLUTIONS</h3>
                  <span className="pd-cs-col-desc">Innovative Engineering Delivery</span>
                </div>
              </div>

              <div className="pd-cs-list">
                {project.solutions?.map((item, idx) => (
                  <div key={idx} className="pd-cs-card pd-solution-card">
                    <div className="pd-cs-number pd-sol-number">0{idx + 1}</div>
                    <div className="pd-cs-body">
                      <h4 className="pd-cs-item-title">{item.title}</h4>
                      <p className="pd-cs-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         4. CONSTRUCTION PROCESS
         Phased execution stages from groundbreaking to commissioning
         ========================================================================= */}
      <section className="pd-section pd-process-section">
        <div className="pd-container">
          <div className="pd-section-header pd-center-header">
            <span className="pd-section-tag">DELIVERY TIMELINE</span>
            <h2 className="pd-section-title">Construction Process</h2>
            <p className="pd-section-subtitle">
              A methodical four-stage execution methodology ensuring schedule certainty,
              workforce safety, and quality control at every phase.
            </p>
          </div>

          <div className="pd-process-timeline">
            {project.process?.map((phase, idx) => (
              <div key={phase.step} className="pd-timeline-item">
                <div className="pd-timeline-marker">
                  <div className="pd-marker-dot">
                    <span>{phase.step}</span>
                  </div>
                  {idx < project.process.length - 1 && (
                    <div className="pd-timeline-connector"></div>
                  )}
                </div>

                <div className="pd-timeline-content">
                  <div className="pd-timeline-meta">
                    <span className="pd-timeline-phase">STAGE {phase.step}</span>
                    <span className="pd-timeline-time">
                      <Clock size={13} />
                      {phase.timeline}
                    </span>
                  </div>
                  <h3 className="pd-timeline-title">{phase.title}</h3>
                  <p className="pd-timeline-desc">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
         5. PROJECT RESULTS
         Measurable outcome metrics & performance milestones
         ========================================================================= */}
      <section className="pd-section pd-results-section">
        <div className="pd-container">
          <div className="pd-section-header pd-center-header">
            <span className="pd-section-tag">PROJECT RESULTS</span>
            <h2 className="pd-section-title">Measurable Delivery Milestones</h2>
            <p className="pd-section-subtitle">
              Concrete KPIs and verified benchmarks validating the success of the finished development.
            </p>
          </div>

          <div className="pd-results-grid">
            {project.results?.map((res, idx) => (
              <div key={idx} className="pd-result-card">
                <div className="pd-result-glow"></div>
                <div className="pd-result-metric">{res.metric}</div>
                <div className="pd-result-label">{res.label}</div>
                <p className="pd-result-desc">{res.desc}</p>
                <div className="pd-result-icon">
                  {idx === 0 && <Clock size={20} />}
                  {idx === 1 && <ShieldCheck size={20} />}
                  {idx === 2 && <TrendingUp size={20} />}
                  {idx === 3 && <Building size={20} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
         6. PROJECT GALLERY
         Stages of construction, structural details, and completed development
         ========================================================================= */}
      <section className="pd-section pd-gallery-section" id="project-gallery">
        <div className="pd-container">
          <div className="pd-section-header pd-center-header">
            <span className="pd-section-tag">VISUAL ARCHIVE</span>
            <h2 className="pd-section-title">Project Gallery</h2>
            <p className="pd-section-subtitle">
              Documenting key stages of construction, important structural details, and the
              completed development.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="pd-gallery-filter-bar">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pd-gallery-filter-btn ${
                  galleryFilter === cat ? 'active' : ''
                }`}
                onClick={() => setGalleryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="pd-gallery-grid">
            {visibleGallery.map((item, idx) => (
              <div
                key={idx}
                className="pd-gallery-card"
                onClick={() => setActiveLightboxImg(item)}
              >
                <div className="pd-gallery-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pd-gallery-img"
                    loading="lazy"
                  />
                  <div className="pd-gallery-overlay"></div>
                  <span className="pd-gallery-stage-badge">{item.stage}</span>
                </div>

                <div className="pd-gallery-info">
                  <h4 className="pd-gallery-item-title">{item.title}</h4>
                  <p className="pd-gallery-item-caption">{item.caption}</p>
                  <span className="pd-gallery-expand-hint">
                    <Maximize2 size={13} />
                    <span>Expand High-Res</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          className="pd-lightbox-backdrop"
          onClick={() => setActiveLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="pd-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pd-lightbox-close"
              onClick={() => setActiveLightboxImg(null)}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>

            <div className="pd-lightbox-media-wrapper">
              <img
                src={activeLightboxImg.image}
                alt={activeLightboxImg.title}
                className="pd-lightbox-img"
              />
            </div>

            <div className="pd-lightbox-details">
              <span className="pd-lightbox-stage">{activeLightboxImg.stage}</span>
              <h3 className="pd-lightbox-title">{activeLightboxImg.title}</h3>
              <p className="pd-lightbox-caption">{activeLightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         7. FINAL CALL TO ACTION
         "Have a similar project? → GET A QUOTE"
         ========================================================================= */}
      <section className="pd-cta-section">
        <div className="pd-cta-bg-glow"></div>
        <div className="pd-container">
          <div className="pd-cta-card">
            <div className="pd-cta-content">
              <span className="pd-cta-eyebrow">START YOUR BUILD</span>
              <h2 className="pd-cta-headline">Have a similar project?</h2>
              <p className="pd-cta-desc">
                Partner with our multidisciplinary construction engineers to turn your vision
                into a lasting, high-performance architectural landmark.
              </p>

              <div className="pd-cta-actions">
                <button
                  type="button"
                  className="btn-primary pd-cta-primary-btn"
                  onClick={onOpenQuote}
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={18} />
                </button>

                <Link to="/" className="btn-secondary pd-cta-secondary-btn">
                  <span>VIEW ALL PROJECTS</span>
                </Link>
              </div>

              <div className="pd-cta-chips">
                <div className="pd-cta-chip">
                  <ShieldCheck size={16} />
                  <span>Licensed General Contractor</span>
                </div>
                <div className="pd-cta-chip">
                  <DollarSign size={16} />
                  <span>Guaranteed Maximum Price (GMP)</span>
                </div>
                <div className="pd-cta-chip">
                  <CalendarDays size={16} />
                  <span>Rapid Turnaround Feasibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         8. PREV / NEXT PROJECT NAVIGATION STRIP
         ========================================================================= */}
      <nav className="pd-project-nav-strip" aria-label="Adjacent project navigation">
        <div className="pd-container">
          <div className="pd-nav-strip-inner">
            <Link
              to={`/projects/${prevProject.id}`}
              className="pd-nav-prev-link"
            >
              <ArrowLeft size={16} />
              <div className="pd-nav-link-text">
                <span className="pd-nav-dir">PREVIOUS PROJECT</span>
                <span className="pd-nav-name">{prevProject.name}</span>
              </div>
            </Link>

            <Link to="/" className="pd-nav-all-link">
              <Layers size={16} />
              <span>All Projects</span>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="pd-nav-next-link"
            >
              <div className="pd-nav-link-text pd-text-right">
                <span className="pd-nav-dir">NEXT PROJECT</span>
                <span className="pd-nav-name">{nextProject.name}</span>
              </div>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
