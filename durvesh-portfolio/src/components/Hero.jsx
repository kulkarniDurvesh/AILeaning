import React, { useEffect } from 'react';
import { startTypingEffect } from '../utils/typing';

const Hero = () => {
  useEffect(() => {
    startTypingEffect('typing');
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Open to Solution Architect Roles
          </div>

          <h1 className="hero-name">
            Durvesh<br />
            <span className="line2">Kulkarni</span>
          </h1>

          <div className="hero-typing">
            <span id="typing"></span><span className="cursor"></span>
          </div>

          <p className="hero-desc">
            Mechanical Engineer turned Full Stack Developer & AI Enthusiast. Building scalable enterprise solutions with .NET, Angular, and Azure — architecting tomorrow's systems today.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-rocket"></i> View My Work
            </button>
            <button className="btn-secondary" onClick={() => window.open('/DurveshKulkarni_Resume.pdf', '_blank')}>
              <i className="fas fa-download"></i> Download Resume
            </button>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img 
              className="hero-photo" 
              src="/OfficialPhoto.png"
              alt="Durvesh Kulkarni"
            />
          </div>
          <div className="hero-photo-badge">
            <i className="fas fa-map-marker-alt" style={{color: 'var(--cyan)', marginRight: '5px'}}></i>Nashik, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
