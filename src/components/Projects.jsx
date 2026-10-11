import { useState } from 'react';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
import projectsData, { PROJECT_CATEGORIES } from '../data/projectsData';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      {/* Background Subtle Architectural Grid */}
      <div className="projects-bg-grid" aria-hidden="true"></div>
      <div className="projects-glow-orb" aria-hidden="true"></div>

      <div className="projects-container">
        {/* Header: Our Projects / OUR WORK / Projects that speak for themselves. */}
        <div className="projects-top-header">
          <div className="projects-pill-badge">
            <span className="pill-text">Our Projects</span>
          </div>
          <div className="projects-accent-bar"></div>

          <span className="projects-eyebrow">OUR WORK</span>
          <h2 className="projects-main-title">
            Projects that speak for themselves.
          </h2>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeFilter === category}
              className={`projects-filter-btn ${
                activeFilter === category ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="projects-gallery-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-media">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category} construction project in ${project.location}`}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="project-card-overlay"></div>
                <span className="project-category-badge">{project.category}</span>
                <span className="project-year-badge">
                  <CalendarDays size={13} />
                  {project.year}
                </span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.name}</h3>

                <div className="project-card-location">
                  <MapPin size={14} className="project-location-icon" />
                  <span>{project.location}</span>
                </div>

                <p className="project-card-desc">{project.description}</p>

                <button type="button" className="project-view-link">
                  <span>VIEW PROJECT</span>
                  <ArrowRight size={15} className="project-view-arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
