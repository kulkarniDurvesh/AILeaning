import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container-fluid">
          <a href="#hero" className="nav-logo">
            DK<span>();</span>
          </a>

          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </button>
            <button className="nav-link" onClick={() => scrollToSection('experience')}>
              Experience
            </button>
            <button className="nav-link" onClick={() => scrollToSection('skills')}>
              Skills
            </button>
            <button className="nav-link" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
            <button className="nav-link" onClick={() => scrollToSection('awards')}>
              Awards
            </button>
            <button className="nav-cta" onClick={() => scrollToSection('contact')}>
              Hire Me
            </button>
          </div>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection('experience')}>
            Experience
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button className="nav-link" onClick={() => scrollToSection('awards')}>
            Awards
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
