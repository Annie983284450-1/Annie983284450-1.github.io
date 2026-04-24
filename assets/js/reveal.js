/* Scroll-reveal: adds .is-visible to any element with class .reveal when it
 * enters the viewport. Respects prefers-reduced-motion.
 * Staggered children: set --stagger on children to delay their reveal.
 */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If no IntersectionObserver or the user prefers reduced motion, make all
  // elements visible immediately — no animation.
  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  });
})();
