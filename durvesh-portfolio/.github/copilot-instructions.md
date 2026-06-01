# Durvesh Portfolio - Development Guidelines

## Project Overview
React-based personal portfolio website showcasing Durvesh Kulkarni's professional experience, skills, and projects.

## Technology Stack
- React 18.2.0
- Bootstrap 5.3.0
- AOS for scroll animations
- React Icons
- React Router DOM

## Development Commands
```bash
npm start      # Start development server (port 3000)
npm run build  # Build for production
npm run deploy # Deploy to GitHub Pages
npm test       # Run tests
```

## Key Features
- Responsive design (mobile-first)
- Dark navbar with sticky scroll
- Smooth scroll animations
- Timeline-based experience section
- Multiple contact channels
- Back to top floating button

## Project Structure
- `/src/components/` - All UI components
- `/src/App.jsx` - Main application
- `/src/App.css` - Global styling with CSS variables
- `/public/index.html` - HTML template

## Component Details
1. **Navbar** - Fixed navigation with mobile hamburger menu
2. **Hero** - Animated introduction section with CTAs
3. **About** - Bio and award cards
4. **Skills** - Categorized skill tags
5. **Experience** - Timeline with job details
6. **Education** - Educational background cards
7. **Contact** - Contact links with icons
8. **Footer** - Copyright information
9. **BackToTop** - Scroll to top button

## Customization
- Update personal info in component files
- Modify colors via CSS variables in `/src/App.css`
- Add images to `/public/` folder
- Update contact links in Contact component

## Deployment
- **GitHub Pages**: `npm run deploy`
- **Vercel**: Connect GitHub repo
- **Netlify**: Drag & drop build folder

## Dependencies
All dependencies installed via npm install:
- react, react-dom
- bootstrap
- react-icons
- aos
- react-router-dom
- react-scripts

## Notes
- Smooth scroll behavior enabled globally
- AOS animations configured with 1000ms duration
- Mobile responsive breakpoints: 768px, 480px
- Teal color theme: #0f6e56 (primary)
