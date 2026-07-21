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

// Lightweight email de-obfuscation (info@ / invoices@ only — complaints@
// stays a plain, always-visible mailto link, since ACQSC expects a direct
// complaints channel to remain easily accessible)
document.querySelectorAll('.js-email').forEach((el) => {
  const user = el.dataset.user;
  const domain = el.dataset.domain;
  if (!user || !domain) return;
  const address = `${user}@${domain}`;
  const link = document.createElement('a');
  link.href = `mailto:${address}`;
  link.textContent = address;
  link.className = el.className.replace('js-email', '').trim();
  el.replaceWith(link);
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
