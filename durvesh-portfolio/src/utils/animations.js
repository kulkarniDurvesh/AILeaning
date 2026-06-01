// Scroll animation utility
export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
};

// Navbar scroll effect
export const handleNavbarScroll = (navbarElement) => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarElement?.classList.add('scrolled');
    } else {
      navbarElement?.classList.remove('scrolled');
    }
  });
};

// Smooth scroll to section
export const smoothScrollTo = (target) => {
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

const animationsExport = {
  observeElements,
  handleNavbarScroll,
  smoothScrollTo,
};

export default animationsExport;
