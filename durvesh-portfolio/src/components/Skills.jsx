import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'Java', 'SQL'],
      icon: 'fas fa-code',
      bgColor: 'rgba(34,211,238,0.1)',
      iconColor: 'var(--cyan)',
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['ASP.NET Core', '.NET MVC', 'Angular 16+', 'ReactJS', 'Entity Framework', 'jQuery', 'Bootstrap', 'Spring Boot'],
      icon: 'fas fa-layer-group',
      bgColor: 'rgba(129,140,248,0.1)',
      iconColor: 'var(--purple)',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'GCP', 'AWS EC2', 'AWS S3', 'Azure DevOps', 'CI/CD', 'Jenkins'],
      icon: 'fas fa-cloud',
      bgColor: 'rgba(52,211,153,0.1)',
      iconColor: 'var(--green)',
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'SQL Server', 'Azure Table Storage', 'AWS S3'],
      icon: 'fas fa-database',
      bgColor: 'rgba(251,191,36,0.1)',
      iconColor: 'var(--amber)',
    },
    {
      category: 'AI & Testing',
      skills: ['LLMs', 'OpenAI Whisper', 'Pandas', 'Selenium', 'Recommendation Engines'],
      icon: 'fas fa-robot',
      bgColor: 'rgba(244,114,182,0.1)',
      iconColor: 'var(--pink)',
    },
    {
      category: 'Tools & Auth',
      skills: ['JIRA', 'Bitbucket', 'Git', 'Visual Studio', 'VS Code', 'JWT', 'REST APIs'],
      icon: 'fas fa-tools',
      bgColor: 'rgba(34,211,238,0.1)',
      iconColor: 'var(--cyan)',
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="inner">
        <div className="section-header fade-in">
          <div className="section-eyebrow">Skills</div>
          <h2 className="section-title">Technical Arsenal</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className={`skill-card fade-in ${index > 0 ? `fade-in-d${Math.min(index, 4)}` : ''}`}>
              <div className="skill-card-header">
                <div className="skill-icon" style={{ background: cat.bgColor }}>
                  <i className={cat.icon} style={{ color: cat.iconColor }}></i>
                </div>
                <div className="skill-cat">{cat.category}</div>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
