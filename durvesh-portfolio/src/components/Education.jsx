import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const educations = [
    {
      degree: 'PG Diploma in Advanced Computing',
      institution: 'CDAC ACTs, Pune',
      period: 'Sep 2021 – May 2022',
      icon: 'fas fa-graduation-cap',
      bgColor: 'rgba(34,211,238,0.1)',
      iconColor: 'var(--cyan)',
    },
    {
      degree: 'Bachelor of Engineering — Mechanical',
      institution: 'SKNCOE, Pune',
      period: 'June 2014 – June 2018',
      icon: 'fas fa-gear',
      bgColor: 'rgba(129,140,248,0.1)',
      iconColor: 'var(--purple)',
    },
  ];

  return (
    <section className="section-alt" id="education">
      <div className="inner">
        <div className="section-header fade-in">
          <div className="section-eyebrow">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="edu-grid">
          {educations.map((edu, index) => (
            <div key={index} className={`edu-card fade-in ${index > 0 ? 'fade-in-d1' : ''}`}>
              <div className="edu-icon-wrap" style={{ background: edu.bgColor }}>
                <i className={edu.icon} style={{ color: edu.iconColor }}></i>
              </div>
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
