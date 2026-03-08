// ===========================
// Theme Toggle
// ===========================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function setTheme(theme) {
  if (theme === "light") {
    html.setAttribute("data-theme", "light");
    themeIcon.className = "fas fa-sun";
  } else {
    html.removeAttribute("data-theme");
    themeIcon.className = "fas fa-moon";
  }
  localStorage.setItem("theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    setTheme("light");
  }
})();

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});

// ===========================
// Mobile Nav
// ===========================
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
  navToggle.querySelector("i").className = open ? "fas fa-times" : "fas fa-bars";
});

navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
    navToggle.querySelector("i").className = "fas fa-bars";
  });
});

// ===========================
// Active Nav Link on Scroll
// ===========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

// ===========================
// Scroll Animations
// ===========================
const animatedEls = document.querySelectorAll(".animate-on-scroll");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animatedEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  scrollObserver.observe(el);
});

// ===========================
// Typing Animation
// ===========================
new Typed("#typed-element", {
  strings: [
    "Full-Stack Developer",
    "Intel Ambassador",
    "Computer Science @ Texas State University",
  ],
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  smartBackspace: true,
});
