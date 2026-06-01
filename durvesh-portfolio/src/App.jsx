import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all styles in proper order
import './styles/globals.css';
import './styles/navbar.css';
import './styles/sections.css';
import './styles/components.css';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Import utilities
import { observeElements, handleNavbarScroll } from './utils/animations';
import { startTypingEffect ,stopTypingEffect} from './utils/typing';

function App() {
  useEffect(() => {
    startTypingEffect('typing');

    return () => {
      stopTypingEffect();
    };
  }, []);
  
  useEffect(() => {
    // Initialize animations
    observeElements();
    
    // Handle navbar scroll
    const navbarElement = document.getElementById('navbar');
    handleNavbarScroll(navbarElement);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
      <div id="toast">
        <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
      </div>
    </div>
  );
}

export default App;
