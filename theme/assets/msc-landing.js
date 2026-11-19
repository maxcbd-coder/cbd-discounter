/* meilleurs-sites-cbd-pas-cher — simulateur de panier. Le rendu initial est fait en Liquid ; ce script ne fait que le mettre à jour. */
(function () {
  'use strict';

  function eur(cents) {
    var c = Math.round(cents);
    var e = Math.floor(c / 100);
    var r = c % 100;
    return e + ',' + (r < 10 ? '0' : '') + r + ' €';
  }

  function render(sim, qty) {
    var rows = sim.querySelectorAll('[data-msc-row]');
    var totals = [];
    rows.forEach(function (row) {
      totals.push(parseInt(row.getAttribute('data-cents'), 10) * qty);
    });
    var max = Math.max.apply(null, totals) || 1;

    rows.forEach(function (row, i) {
      var bar = row.querySelector('[data-msc-bar]');
      var total = row.querySelector('[data-msc-total]');
      if (bar) bar.style.width = Math.max(2, (totals[i] / max) * 100) + '%';
      if (total) total.textContent = eur(totals[i]);
    });

    sim.querySelectorAll('[data-msc-qty]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', parseInt(btn.getAttribute('data-msc-qty'), 10) === qty ? 'true' : 'false');
    });

    var q = sim.querySelector('[data-msc-q]');
    var d1 = sim.querySelector('[data-msc-d="1"]');
    var d2 = sim.querySelector('[data-msc-d="2"]');
    if (q) q.textContent = qty;
    if (d1 && totals.length >= 2) d1.textContent = eur(totals[1] - totals[0]);
    if (d2 && totals.length >= 3) d2.textContent = eur(totals[2] - totals[0]);
  }

  function init(root) {
    root.querySelectorAll('[data-msc-sim]').forEach(function (sim) {
      if (sim.dataset.mscBound) return;
      sim.dataset.mscBound = '1';
      sim.querySelectorAll('[data-msc-qty]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          render(sim, parseInt(btn.getAttribute('data-msc-qty'), 10));
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); });
  } else {
    init(document);
  }

  document.addEventListener('shopify:section:load', function (event) { init(event.target); });
})();
