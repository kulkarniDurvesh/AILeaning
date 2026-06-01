# Durvesh Kulkarni - Portfolio Website

A stunning, production-ready personal portfolio website for Durvesh Kulkarni built with React.js and Bootstrap 5.

## Features

✨ **Modern Design**
- Professional yet warm aesthetic with teal accent color
- Smooth scroll animations using AOS (Animate On Scroll)
- Fully responsive mobile-first design
- Dark navbar with sticky scroll behavior

🚀 **Performance**
- Fast load times optimized for production
- SEO-friendly metadata and structure
- Clean, semantic HTML

🎯 **Sections**
- **Navbar** - Sticky navigation with smooth scrolling
- **Hero** - Eye-catching introduction with CTAs and stats
- **About** - Personal background with award highlights
- **Skills** - Organized skill categories with tags
- **Experience** - Timeline-based job history
- **Education** - Educational background
- **Contact** - Multiple contact channels
- **Back to Top** - Floating button for easy navigation

## Tech Stack

- **React.js** 18.2.0 - UI library
- **Bootstrap 5** - Responsive CSS framework
- **React Router DOM** - Page routing
- **AOS** - Scroll animations
- **React Icons** - Icon library
- **Google Fonts** - Custom typography (DM Serif Display & DM Sans)

## Installation

1. Clone the repository or navigate to the project:
```bash
cd durvesh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Deployment

### GitHub Pages

1. Add your GitHub username to the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/durvesh-portfolio"
```

2. Install gh-pages (already included):
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

Your site will be live at `https://yourusername.github.io/durvesh-portfolio`

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Vercel will automatically detect it's a React app and deploy it
5. Your site will be live at a Vercel-provided URL

### Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder or connect your GitHub repo
4. Your site will be live immediately

## Customization

### Update Personal Information

Edit the components to add your information:

- **Navbar & Hero**: Update in `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Skills**: Modify skill categories in `src/components/Skills.jsx`
- **Experience**: Update jobs in `src/components/Experience.jsx`
- **Education**: Edit education details in `src/components/Education.jsx`
- **Contact**: Update contact links in `src/components/Contact.jsx`

### Customize Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-teal: #0f6e56;
  --primary-teal-light: #e8f4f1;
  --background: #fafaf8;
  --text-dark: #1a1a1a;
  /* ... more variables */
}
```

### Add Profile Photo

1. Place your photo in `public/` folder
2. Add an `<img>` tag in the Hero section with the path

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Structure

```
durvesh-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Performance Optimization

- Images are optimized and lazy-loaded
- CSS is minified in production build
- Code splitting for faster initial load
- Smooth animations use CSS transforms for better performance

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color scheme for readability

## SEO

- Meta tags for title, description, and social sharing
- Proper heading hierarchy
- Structured content
- Mobile-friendly design

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, feel free to reach out via the contact section on the portfolio.

---

**Built with ❤️ using React & Bootstrap**
