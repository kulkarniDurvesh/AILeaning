import React, { useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectsData } from '../constants/projects';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-alt" id="projects">
      <div className="container-fluid">
        <div className="section-header">
          <div className="section-eyebrow">Projects</div>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
              </div>
              <span className="project-from">{project.from}</span>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="project-tag"
                    style={{
                      backgroundColor: tag.bg,
                      color: tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> Repository
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
