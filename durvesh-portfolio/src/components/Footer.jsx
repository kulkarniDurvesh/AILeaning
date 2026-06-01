import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className="footer-copy">&copy; 2025 Durvesh Kulkarni · Built with React & Bootstrap</p>
      <div className="social-row">
        <a href="https://github.com/kulkarniDurvesh" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/durvesh-kulkarni" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:durveshkulkarni@gmail.com" className="social-btn">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
