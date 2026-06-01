import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { awardsData } from '../constants/awards';

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section" id="awards">
      <div className="container-fluid">
        <div className="section-header">
          <div className="section-eyebrow">Recognition</div>
          <h2 className="section-title">Awards & Achievements</h2>
        </div>

        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div key={award.id} className="award-card">
              <div className="award-emoji-large">{award.emoji}</div>
              <h3 className="award-name">{award.name}</h3>
              <p className="award-from">{award.from}</p>
              <p className="award-year">{award.year}</p>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
