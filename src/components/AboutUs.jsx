import React from 'react';
import './AboutUs.css';
import { CheckCircle2, Briefcase, Users, MapPin, CalendarDays, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { id: 1, label: 'Years of Experience', value: '28+', icon: <CalendarDays size={24} /> },
    { id: 2, label: 'Projects Completed', value: '500+', icon: <Briefcase size={24} /> },
    { id: 3, label: 'Expert Professionals', value: '150+', icon: <Users size={24} /> },
    { id: 4, label: 'Geographic Coverage', value: 'Nationwide', icon: <MapPin size={24} /> },
  ];

  const values = [
    'Uncompromising Safety Standards',
    'Exceptional Quality Control',
    'Integrity & Transparency',
    'Modern Construction Technology',
  ];

  return (
    <section className="about-us-section" id="about">
      <div className="about-us-container">
        <div className="about-us-image-wrapper">
          <div className="image-overlay"></div>
          <img src="/about-us-image.jpg" alt="Construction Site" className="about-us-image" />
          <div className="experience-badge">
            <span className="badge-number">28+</span>
            <span className="badge-text">Years of<br/>Excellence</span>
          </div>
        </div>

        <div className="about-us-content">
          <div className="section-header">
            <span className="section-subtitle">BUILT ON EXPERIENCE.</span>
            <h2 className="section-title">Construction expertise you can trust.</h2>
          </div>
          
          <p className="company-story">
            We are a construction company committed to delivering high-quality projects through experienced teams, reliable processes, modern technology, and uncompromising safety standards. Since our establishment in 1995, we have been building structures that define progress and stand the test of time.
          </p>



          <div className="core-values">
            <h3 className="values-title">Core Values</h3>
            <ul className="values-list">
              {values.map((value, index) => (
                <li key={index} className="value-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="company-stats">
            {stats.map(stat => (
              <div key={stat.id} className="stat-item">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="learn-more-btn">
            <span>Learn More About Us</span>
            <ArrowRight size={18} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="mission-vision-wrapper">
        <div className="mission-vision">
          <div className="mv-box">
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">To provide exceptional construction services that exceed client expectations through innovation, dedication, and superior craftsmanship.</p>
          </div>
          <div className="mv-box">
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">To be the leading construction firm globally, recognized for reliability, premium quality, and sustainable building practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
