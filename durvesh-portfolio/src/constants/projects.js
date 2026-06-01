// Projects data
export const projectsData = [
  {
    id: 1,
    from: 'IKS Health',
    name: 'EVE — US Healthcare Automation',
    description:
      'Full-stack healthcare automation platform managing complex US billing, claim, and workflow processes. Integrated GCP functions and implemented performance optimizations.',
    tags: [
      { label: 'Healthcare', bg: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee' },
      { label: 'Automation', bg: 'rgba(52, 211, 153, 0.1)', color: '#34d399' },
    ],
    tech: ['ASP.NET Core', 'jQuery', 'GCP', 'MySQL'],
    accent: 'linear-gradient(to right, #22d3ee, #818cf8)',
  },
  {
    id: 2,
    from: 'Saviant Consulting',
    name: 'eCommerce Recommendation Engine',
    description:
      'AI-powered product recommendation system with analytics dashboards tracking click-through and buy ratios. Deployed on Microsoft Azure.',
    tags: [
      { label: 'AI/ML', bg: 'rgba(129, 140, 248, 0.1)', color: '#818cf8' },
      { label: 'eCommerce', bg: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee' },
    ],
    tech: ['Angular', 'ASP.NET Core', 'Azure', 'SQL Server'],
    accent: 'linear-gradient(to right, #818cf8, #f472b6)',
  },
  {
    id: 3,
    from: 'Personal Project',
    name: 'MHCMS — Mental Health Care System',
    description:
      'Full-stack mental health care management system with JWT authentication, chart libraries for data visualization, and email notification system.',
    tags: [
      { label: 'Healthcare', bg: 'rgba(52, 211, 153, 0.1)', color: '#34d399' },
      { label: 'Open Source', bg: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' },
    ],
    tech: ['Java Spring Boot', 'ReactJS', 'MySQL', 'Maven'],
    accent: 'linear-gradient(to right, #34d399, #22d3ee)',
    link: 'https://github.com/kulkarniDurvesh',
  },
  {
    id: 4,
    from: 'Personal Project',
    name: 'ESTORE — eCommerce Platform',
    description:
      'Modular e-commerce application with JWT authentication, RESTful APIs, and a fully responsive UI. Built with Angular and NodeJS backend.',
    tags: [
      { label: 'eCommerce', bg: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' },
      { label: 'Full Stack', bg: 'rgba(244, 114, 182, 0.1)', color: '#f472b6' },
    ],
    tech: ['Angular', 'NodeJS', 'MySQL', 'JWT'],
    accent: 'linear-gradient(to right, #fbbf24, #f472b6)',
    link: 'https://github.com/kulkarniDurvesh',
  },
];

export default projectsData;
