// script.js - Portfolio Animations & Navigation

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // High-tech animated nav highlight on scroll
  const navItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');
  function highlightNav() {
    let scrollPos = window.scrollY || window.pageYOffset;
    sections.forEach((section, idx) => {
      const offset = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= offset && scrollPos < offset + height) {
        navItems.forEach(link => link.classList.remove('active'));
        navItems[idx].classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // Advanced section reveal with staggered animation
  function revealSection() {
    const trigger = window.innerHeight * 0.92;
    sections.forEach((section, i) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < trigger) {
        setTimeout(() => section.classList.add('visible'), i * 120);
      }
    });
  }
  window.addEventListener('scroll', revealSection);
  revealSection();

  // Futuristic smooth scroll for nav links
  navItems.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        if (window.innerWidth <= 800) navLinks.classList.remove('active');
      }
    });
  });

  // Neon glow on menu toggle when active
  menuToggle.addEventListener('mousedown', () => {
    menuToggle.style.boxShadow = '0 0 24px #00fff7, 0 0 48px #0ff';
  });
  menuToggle.addEventListener('mouseup', () => {
    menuToggle.style.boxShadow = '';
  });

  // Contact form animation (neon feedback)
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.reset();
    const btn = form.querySelector('button');
    btn.textContent = 'Sent!';
    btn.style.background = 'linear-gradient(90deg, #0ff 60%, #00fff7 100%)';
    btn.style.color = '#00fff7';
    btn.style.boxShadow = '0 0 32px #00fff7';
    setTimeout(() => {
      btn.textContent = 'Send';
      btn.style.background = '';
      btn.style.color = '';
      btn.style.boxShadow = '';
    }, 2000);
  });

  // Load Orbitron font for high-tech look
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap';
  document.head.appendChild(fontLink);
});
