import { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import testimonialsData from '../data/testimonialsData';
import './Testimonials.css';

export default function Testimonials({ onOpenQuote }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = testimonialsData.length;
  const autoPlayRef = useRef(null);

  // Next Slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Previous Slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance carousel every 6.5 seconds when not hovered
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className="testimonials-bg-grid" aria-hidden="true"></div>
      <div className="testimonials-ambient-glow" aria-hidden="true"></div>

      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-top-header">
          <div className="testimonials-pill-badge">
            <span className="pill-text">Client Testimonials</span>
          </div>
          <div className="testimonials-accent-bar"></div>

          <span className="testimonials-eyebrow">VERIFIED REPUTATION</span>
          <h2 className="testimonials-main-title">
            What Our Clients Say About Building With Us
          </h2>
          <p className="testimonials-lead-subtitle">
            Authentic feedback from commercial developers, industrial leaders, and civic
            partners who trust BuildCraft to bring complex structures to life.
          </p>
        </div>

        {/* Interactive Carousel Wrapper */}
        <div
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Client Testimonials Carousel"
        >
          {/* Carousel Track & Cards */}
          <div className="testimonials-cards-container">
            {testimonialsData.map((item, index) => {
              // Calculate relative position for 3D/sliding carousel styling
              const position =
                index === currentIndex
                  ? 'active'
                  : index === (currentIndex - 1 + totalSlides) % totalSlides
                  ? 'prev'
                  : index === (currentIndex + 1) % totalSlides
                  ? 'next'
                  : 'hidden';

              return (
                <article
                  key={item.id}
                  className={`testimonial-card slide-${position}`}
                  aria-hidden={position !== 'active'}
                >
                  <div className="testimonial-card-inner">
                    {/* Top Row: Stars & Quote Icon */}
                    <div className="testimonial-card-top">
                      <div className="testimonial-stars" aria-label="5 star rating">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={18} className="star-icon filled" />
                        ))}
                      </div>

                      <div className="testimonial-quote-icon-box">
                        <Quote size={24} className="quote-icon" />
                      </div>
                    </div>

                    {/* Testimonial Quote Body */}
                    <blockquote className="testimonial-quote-text">
                      “{item.quote}”
                    </blockquote>

                    {/* Client & Project Attribution */}
                    <div className="testimonial-client-footer">
                      <div className="client-logo-avatar">
                        <span className="avatar-initials">{item.logoInitials}</span>
                      </div>

                      <div className="client-meta-info">
                        <h4 className="client-name">{item.clientName}</h4>
                        <span className="client-role">
                          {item.role}, <span className="client-company">{item.company}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="testimonials-controls">
            <button
              type="button"
              className="carousel-control-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Pagination Indicators */}
            <div className="carousel-dots" role="tablist" aria-label="Testimonial slides">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-control-btn next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Bottom Trust & Reassurance Dock */}
        <div className="testimonials-bottom-dock">
          <div className="testimonials-dock-metrics">
            <div className="testimonials-metric-item">
              <CheckCircle2 size={18} className="metric-icon" />
              <span>99.2% Client Satisfaction Rate</span>
            </div>
            <div className="testimonials-metric-item">
              <ShieldCheck size={18} className="metric-icon" />
              <span>Over $850M in Verified Project Deliveries</span>
            </div>
            <div className="testimonials-metric-item">
              <Star size={18} className="metric-icon" />
              <span>85% Repeat & Direct Referral Partnership</span>
            </div>
          </div>

          <div className="testimonials-dock-action">
            <button
              type="button"
              className="btn-primary testimonials-cta-btn"
              onClick={onOpenQuote}
            >
              <span>PARTNER ON YOUR NEXT BUILD</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
