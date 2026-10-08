/* Palmarès CBD — fiches dépliables, filtres par besoin, FAQ, copie du code. Aucune dépendance. */
(function () {
  'use strict';

  function bind(el, key, handler) {
    if (el.dataset[key]) return;
    el.dataset[key] = '1';
    el.addEventListener('click', handler);
  }

  function setExpanded(btn, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = !open;
  }

  function initSheets(root) {
    root.querySelectorAll('.msc-toggle').forEach(function (btn) {
      bind(btn, 'mscSheet', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        setExpanded(btn, open);
        btn.textContent = open ? '−' : '+';
        btn.setAttribute('aria-label', (open ? 'Fermer la fiche ' : 'Ouvrir la fiche ') + btn.dataset.name);
      });
    });
  }

  function initFilters(root) {
    root.querySelectorAll('[data-msc-filters]').forEach(function (group) {
      var section = group.closest('section') || document;
      var buttons = group.querySelectorAll('.msc-filter');
      buttons.forEach(function (btn) {
        bind(btn, 'mscFilter', function () {
          var key = btn.dataset.filter;
          buttons.forEach(function (b) {
            b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
          });
          section.querySelectorAll('.msc-row').forEach(function (row) {
            var tags = (row.dataset.tags || '').split(' ');
            var match = !!key && tags.indexOf(key) !== -1;
            row.classList.toggle('is-dimmed', !!key && !match);
            var badge = row.querySelector('.msc-match');
            if (badge) badge.hidden = !match;
          });
        });
      });
    });
  }

  function initFaq(root) {
    root.querySelectorAll('.msc-faq__btn').forEach(function (btn) {
      bind(btn, 'mscFaq', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        setExpanded(btn, open);
        var sign = btn.querySelector('.msc-faq__sign');
        if (sign) sign.textContent = open ? '−' : '+';
      });
    });
  }

  function initCopy(root) {
    root.querySelectorAll('.msc-copy').forEach(function (btn) {
      var label = btn.textContent;
      var timer;
      bind(btn, 'mscCopy', function () {
        var done = function () {
          btn.textContent = 'Code copié ✓';
          clearTimeout(timer);
          timer = setTimeout(function () {
            btn.textContent = label;
          }, 2200);
        };
        try {
          navigator.clipboard.writeText(btn.dataset.code).then(done, done);
        } catch (e) {
          done();
        }
      });
    });
  }

  function init(root) {
    initSheets(root);
    initFilters(root);
    initFaq(root);
    initCopy(root);
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
