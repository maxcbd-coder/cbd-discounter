/* La Gazette du Chanvre : face-à-face (vanilla, sans dépendance).
   Le point de rupture 860px est géré en CSS. Tout le contenu est rendu en Liquid :
   chaque verdict existe dans le HTML, ce script ne fait qu'afficher le bon panneau. */
(function () {
  function select(btn) {
    var root = btn.closest('[data-duel]');
    if (!root) return;
    var buttons = root.querySelectorAll('[data-rival]');
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      var on = b === btn;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    }
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-rival]') : null;
    if (btn) select(btn);
  });
})();
