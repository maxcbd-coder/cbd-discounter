/* classement CBD qualité-prix — balance. Le rendu initial (n°1) est fait en Liquid ; ce script ne fait que le mettre à jour. */
(function () {
  'use strict';

  var COLORS = ['#2F8F4E', '#7BC98F', '#F2B705'];

  function select(root, data, i) {
    var d = data[i];
    if (!d) return;
    var scale = root.querySelector('[data-cqp-scale]');
    if (scale) scale.style.setProperty('--tilt', d.tilt + 'deg');

    var sq = root.querySelector('[data-cqp-sq]');
    if (sq) { sq.style.width = d.sq + 'px'; sq.style.height = d.sq + 'px'; }

    var dots = root.querySelector('[data-cqp-dots]');
    if (dots) {
      dots.innerHTML = d.atouts.map(function (_, k) {
        return '<span style="background:' + COLORS[k % 3] + '"></span>';
      }).join('');
    }

    var list = root.querySelector('[data-cqp-atouts]');
    if (list) list.innerHTML = d.atouts.map(function (a) { return '<li>' + a + '</li>'; }).join('');

    var price = root.querySelector('[data-cqp-price]');
    if (price) price.textContent = d.price;
    var idx = root.querySelector('[data-cqp-idx]');
    if (idx) idx.textContent = d.idx;
    var verdict = root.querySelector('[data-cqp-verdict]');
    if (verdict) verdict.innerHTML = d.verdict;

    root.querySelectorAll('[data-cqp-tab]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', parseInt(btn.getAttribute('data-cqp-tab'), 10) === i ? 'true' : 'false');
    });
  }

  function init(scope) {
    scope.querySelectorAll('[data-cqp-balance]').forEach(function (root) {
      if (root.dataset.cqpBound) return;
      root.dataset.cqpBound = '1';
      var src = root.querySelector('[data-cqp-data]');
      var data;
      try { data = JSON.parse(src ? src.textContent : '[]'); } catch (e) { return; }
      root.querySelectorAll('[data-cqp-tab]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          select(root, data, parseInt(btn.getAttribute('data-cqp-tab'), 10));
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
