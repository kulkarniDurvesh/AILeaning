import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const experiences = [
    {
      company: 'Saviant Consulting',
      role: 'Solution Engineer',
      status: 'Current',
      duration: 'Apr 2025 – Present · Pune, India',
      projects: [
        {
          name: 'eCommerce Recommendation System',
          dotClass: '',
          tech: 'Angular · ASP.NET Core · Azure · SQL Server · Bootstrap',
          highlights: [
            'Developed AI-powered product recommendation and prediction features to boost engagement',
            'Designed scalable Web APIs using ASP.NET Core and Entity Framework',
            'Built business analytics dashboards for click-through and buy-ratio visualization',
            'Deployed and integrated services using Microsoft Azure cloud platform',
          ],
        },
        {
          name: 'Water Scope Project (USA Client)',
          dotClass: 'purple',
          tech: 'ASP.NET Core · Angular · Entity Framework · SQL Server · Kendo UI',
          highlights: [
            'Built interactive dashboards for real-time environmental and water sensor data',
            'Integrated Angular components with .NET APIs for live data visualization',
            'Improved responsiveness and data-binding efficiency across critical modules',
          ],
        },
        {
          name: 'Automation System',
          dotClass: 'green',
          tech: 'Selenium · C# · Azure DevOps · Jenkins',
          highlights: [
            'Built Selenium automation framework testing 3 production apps — reduced manual testing by 70%',
            'Automated end-to-end regression, functional, and smoke test cases',
            'Integrated scripts into CI/CD pipeline (Azure DevOps/Jenkins) for continuous testing',
            'Delivered 90% faster validation of business-critical workflows',
          ],
        },
      ],
      award: '🏆 Spot Light Award — Saviant Consulting',
    },
    {
      company: 'IKS Health, Mumbai',
      role: 'Product Engineer',
      status: 'Previous',
      duration: '3 Years · Mumbai, India',
      duration_: 'May 2022 – Apr 2025',
      projects: [
        {
          name: 'EVE Project — US Healthcare Automation',
          dotClass: '',
          tech: 'ASP.NET Core · JS · jQuery · MySQL · GCP · Bootstrap · AJAX',
          highlights: [
            'Built full-stack web application automating US healthcare workflows end-to-end',
            'Optimized server-side logic, data models and controllers using design patterns',
            'Implemented email functionality for automated daily report delivery',
            'Optimized performance with minification, compression, and async loading',
          ],
        },
        {
          name: 'Manual Data Loader',
          dotClass: 'purple',
          tech: 'Entity Framework Core · JavaScript · jQuery · MySQL',
          highlights: [
            'Built robust data loader to manage healthcare appointment data',
            'Improved appointment data mapping accuracy by 80%, enhancing patient care',
            'Collaborated with health experts to accurately map appointments to visit reasons',
          ],
        },
        {
          name: 'G-Central Project',
          dotClass: 'green',
          tech: 'Angular · ASP.NET Core API · MySQL · AWS EC2 · S3 · JWT',
          highlights: [
            'Built centralized system to eliminate data duplication and manage client-vendor mappings',
            'Developed backend services on AWS EC2 and managed storage using S3',
          ],
        },
      ],
      award: '🏆 Value Champion Award — IKS Health',
    },
  ];

  return (
    <section className="section-alt" id="experience">
      <div className="inner">
        <div className="section-header fade-in">
          <div className="section-eyebrow">Experience</div>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-sub">From healthcare automation to AI-powered commerce — here's my professional journey.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`tl-item fade-in ${idx > 0 ? 'fade-in-d1' : ''}`}>
              <div className={`tl-dot ${idx === 1 ? 'purple' : ''}`}></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-company">{exp.company}</div>
                  <span className={`exp-badge ${exp.status === 'Current' ? 'badge-now' : 'badge-prev'}`}>
                    {exp.status === 'Current' ? 'Current' : exp.duration_}
                  </span>
                </div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-duration">
                  <i className="fas fa-calendar-alt"></i>
                  {exp.status === 'Current' ? exp.duration : exp.duration_}
                </div>

                <div className="exp-projects">
                  {exp.projects.map((proj, pidx) => (
                    <div key={pidx} className="exp-project">
                      <div className="exp-project-name">
                        <span className={`proj-dot ${proj.dotClass}`}></span>
                        {proj.name}
                      </div>
                      <div className="exp-project-tech">{proj.tech}</div>
                      <ul className="exp-bullets">
                        {proj.highlights.map((highlight, hidx) => (
                          <li key={hidx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {exp.award && (
                  <div className="exp-award">
                    <span style={{ marginRight: '6px' }}>{exp.award.split(' ')[0]}</span>
                    {exp.award.split(' ').slice(1).join(' ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
