import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const stats = [
    {
      number: '4+',
      label: 'Years Dev Exp',
      icon: '📅',
    },
    {
      number: '6+',
      label: 'Projects Built',
      icon: '💼',
    },
    {
      number: '2',
      label: 'Awards Won',
      icon: '🏆',
    },
    {
      number: '10+',
      label: 'Technologies',
      icon: '⚙️',
    },
  ];

  return (
    <div className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
