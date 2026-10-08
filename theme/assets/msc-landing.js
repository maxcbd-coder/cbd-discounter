/* Meilleur site CBD — accordéon FAQ et reveal au scroll. Aucune dépendance. */
(function () {
  'use strict';

  function initFaq(root) {
    root.querySelectorAll('.msc-faq__btn').forEach(function (btn) {
      if (btn.dataset.mscBound) return;
      btn.dataset.mscBound = '1';
      btn.addEventListener('click', function () {
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (panel) panel.hidden = open;
      });
    });
  }

  function initReveal(root) {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'none';
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    requestAnimationFrame(function () {
      root.querySelectorAll('[data-reveal]').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.style.transform = 'translateY(24px)';
        io.observe(el);
      });
    });
  }

  function init(root) {
    initFaq(root);
    initReveal(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init(document);
    });
  } else {
    init(document);
  }

  // Éditeur de thème : réinitialiser quand la section est rechargée.
  document.addEventListener('shopify:section:load', function (event) {
    init(event.target);
  });
})();
