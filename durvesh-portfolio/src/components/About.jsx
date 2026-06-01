import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section" id="about">
      <div className="container-fluid">
        <div className="section-header">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-title">The Engineer Behind the Code</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>I'm a <strong>Mechanical Engineer (2018)</strong> who discovered a passion for software development and never looked back. After completing my <strong>Post Graduate Diploma in Advanced Computing at CDAC Pune (2021–22)</strong>, I've been building enterprise-grade solutions that sit at the intersection of clean architecture and AI innovation.</p>
            <p>With 4+ years of professional experience at <strong>IKS Health</strong> and <strong>Saviant Consulting</strong>, I've shipped production systems in US healthcare, environmental tech, eCommerce, and enterprise automation — always with an eye toward scalability and maintainability.</p>
            <p>My goal: grow into a <strong>Solution Architect</strong> who bridges the gap between business problems and elegant technical systems.</p>
            <div class="about-facts">
              <div class="about-fact"><i class="fas fa-envelope"></i> durveshkulkarni55@gmail.com</div>
              <div class="about-fact"><i class="fas fa-phone"></i> +91 70669 16579</div>
              <div class="about-fact"><i class="fab fa-github"></i> kulkarniDurvesh</div>
              <div class="about-fact"><i class="fab fa-linkedin"></i> durvesh-kulkarni</div>
            </div>
          </div>

          <div>
            <div className="about-card">
              <div className="about-card-label">Certifications</div>
              <div className="cert-item">
                <i className="fas fa-certificate cert-icon"></i>
                <div>
                  ASP.NET Core 9 (.NET 9) — True Ultimate Guide
                  <br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>Udemy · Harsha Vardhan</span>
                </div>
              </div>
              <div className="cert-item">
                <i className="fas fa-certificate cert-icon"></i>
                <div>
                  Mastering Angular
                  <br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>Udemy · Nirmal Joshi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
