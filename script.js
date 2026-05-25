'use strict';

// ============================
// CUSTOM CURSOR
// ============================
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.1;
  curY += (mouseY - curY) * 0.1;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
document.querySelectorAll('a, button, .skill-pill, .project-card, .cert-card, .achievement-item').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// ============================
// NAVBAR — scroll + mobile
// ============================
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ============================
// SCROLL REVEAL
// ============================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Stagger siblings in the same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 60, 300);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ============================
// SMOOTH ACTIVE NAV LINK
// ============================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ============================
// SKILL PILLS — wave on hover
// ============================
const skillPills = document.querySelectorAll('.skill-pill');
skillPills.forEach((pill, i) => {
  pill.addEventListener('mouseenter', () => {
    skillPills.forEach((p, j) => {
      const dist = Math.abs(j - i);
      if (dist <= 3 && dist > 0) {
        p.style.transform = `translateY(${-4 + dist}px)`;
        p.style.transition = `transform 0.3s ease ${dist * 30}ms`;
      }
    });
  });
  pill.addEventListener('mouseleave', () => {
    skillPills.forEach(p => {
      p.style.transform = '';
    });
  });
});

// ============================
// HERO PARALLAX (subtle)
// ============================
const orbs = document.querySelectorAll('.orb');
window.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  orbs.forEach((orb, i) => {
    const factor = (i + 1) * 12;
    orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
  });
}, { passive: true });

// ============================
// TYPED TAGLINE EFFECT
// ============================
const taglineEl = document.querySelector('.hero-tagline');
if (taglineEl) {
  const text = taglineEl.textContent;
  taglineEl.textContent = '';
  taglineEl.style.opacity = '1';
  taglineEl.style.transform = 'none';
  taglineEl.style.borderRight = '2px solid var(--accent)';

  let i = 0;
  function typeChar() {
    if (i < text.length) {
      taglineEl.textContent += text[i++];
      setTimeout(typeChar, 55);
    } else {
      // Blink then remove cursor
      setTimeout(() => {
        taglineEl.style.borderRight = 'none';
      }, 1200);
    }
  }
  // Start after hero reveal delay
  setTimeout(typeChar, 700);
}

// ============================
// PROJECT CARD TILT
// ============================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-5px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease, border-color 0.3s, box-shadow 0.3s';
  });
});

// ============================
// FOOTER YEAR
// ============================
const footerYear = document.querySelector('footer p');
if (footerYear) {
  footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, new Date().getFullYear());
}
