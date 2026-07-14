// Mobile nav toggle
const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after clicking a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-reveal
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
}
