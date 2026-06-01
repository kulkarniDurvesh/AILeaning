// Typing effect

const roles = [
  '.NET Full Stack Developer',
  'Solution Architect',
  'AI Enthusiast',
  'Angular & Azure Engineer',
  'Mechanical Eng → Dev',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId = null;
let isRunning = false;

export const startTypingEffect = (elementId) => {
  // Prevent multiple instances running simultaneously
  if (isRunning) return;

  const element = document.getElementById(elementId);
  if (!element) return;

  isRunning = true;

  const type = () => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      element.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 1900);
        return;
      }
    } else {
      element.textContent = currentRole.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    timeoutId = setTimeout(type, isDeleting ? 42 : 85);
  };

  type();
};

export const stopTypingEffect = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  isRunning = false;
};

export default {
  startTypingEffect,
  stopTypingEffect,
};