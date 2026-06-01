// Experience data
export const experienceData = [
  {
    id: 1,
    company: 'Saviant Consulting',
    role: 'Solution Engineer',
    badge: 'Current',
    badgeType: 'now',
    duration: 'Apr 2025 – Present',
    location: 'Pune, India',
    dotColor: 'cyan',
    projects: [
      {
        name: 'eCommerce Recommendation System',
        dotColor: 'cyan',
        tech: 'Angular · ASP.NET Core · Azure · SQL Server · Bootstrap',
        bullets: [
          'Developed AI-powered product recommendation and prediction features to boost engagement',
          'Designed scalable Web APIs using ASP.NET Core and Entity Framework',
          'Built business analytics dashboards for click-through and buy-ratio visualization',
          'Deployed and integrated services using Microsoft Azure cloud platform',
        ],
      },
      {
        name: 'Water Scope Project (USA Client)',
        dotColor: 'purple',
        tech: 'ASP.NET Core · Angular · Entity Framework · SQL Server · Kendo UI',
        bullets: [
          'Built interactive dashboards for real-time environmental and water sensor data',
          'Integrated Angular components with .NET APIs for live data visualization',
          'Improved responsiveness and data-binding efficiency across critical modules',
        ],
      },
      {
        name: 'Automation System',
        dotColor: 'green',
        tech: 'Selenium · C# · Azure DevOps · Jenkins',
        bullets: [
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
    id: 2,
    company: 'IKS Health, Mumbai',
    role: 'Product Engineer',
    badge: 'May 2022 – Apr 2025',
    badgeType: 'prev',
    duration: '3 Years',
    location: 'Mumbai, India',
    dotColor: 'purple',
    projects: [
      {
        name: 'EVE Project — US Healthcare Automation',
        dotColor: 'cyan',
        tech: 'ASP.NET Core · JS · jQuery · MySQL · GCP · Bootstrap · AJAX',
        bullets: [
          'Built full-stack web application automating US healthcare workflows end-to-end',
          'Optimized server-side logic, data models and controllers using design patterns',
          'Implemented email functionality for automated daily report delivery',
          'Optimized performance with minification, compression, and async loading',
        ],
      },
      {
        name: 'Manual Data Loader',
        dotColor: 'purple',
        tech: 'Entity Framework Core · JavaScript · jQuery · MySQL',
        bullets: [
          'Built robust data loader to manage healthcare appointment data',
          'Improved appointment data mapping accuracy by 80%, enhancing patient care',
          'Collaborated with health experts to accurately map appointments to visit reasons',
        ],
      },
      {
        name: 'G-Central Project',
        dotColor: 'green',
        tech: 'Angular · ASP.NET Core API · MySQL · AWS EC2 · S3 · JWT',
        bullets: [
          'Built centralized system to eliminate data duplication and manage client-vendor mappings',
          'Developed backend services on AWS EC2 and managed storage using S3',
        ],
      },
    ],
    award: '🏆 Value Champion Award — IKS Health',
  },
];

export default experienceData;
