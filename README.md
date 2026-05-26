# Shruthi A — Personal Portfolio

A sleek, hyper-modern developer portfolio built with vanilla HTML, CSS, and JavaScript to showcase academic projects, technical skills, and hackathon wins. This site features a polished dark-mode aesthetic, an interactive custom cursor, smooth scroll-driven reveals, and subtle kinetic parallax effects.

---

## ✨ Features

- **Custom Particle & Fluid Cursor**  
  Interactive magnetic cursor that changes state dynamically over clickable elements.

- **Intersection Fluid Reveal**  
  Scroll-driven content animations powered by a throttled `IntersectionObserver`.

- **Kinetic Hover Engagements**  
  Physics-informed 3D rotations on project cards and proximity-wave effects on toolkit labels.

- **Dynamic Variable Engine**  
  Centralized CSS custom properties for consistent visual branding and tiering (e.g., hackathon placement states).

- **Adaptive Structural Grid**  
  Fully responsive layout optimized from large desktops down to compact mobile screens using modern CSS techniques.

---

## 🛠️ Architecture & Core Systems

- **Structure**: Semantic HTML5 with accessibility best practices.
- **Styling**: CSS Grid + Flexbox, global custom properties (`--accent`, etc.), and fluid typography via `clamp()`.
- **Behavior**: Modular vanilla ES6 JavaScript handling:
  - Asynchronous scroll behaviors  
  - Passive mouse tracking  
  - Viewport observers for micro-interactions  
  - Minimal bundle footprint for fast load times.

---

## 📂 Repository Structure

```text
├── index.html       # Main landing page
├── style.css        # Global styles & design variables
├── script.js        # Micro-interactions, event handling, observers
└── README.md        # This documentation