/* EcoVoyage site behaviour. Everything works without JavaScript; this only adds convenience. */
document.documentElement.classList.add('js');

// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
})();

// Destination filters
(function () {
  var buttons = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-tags]');
  var status = document.getElementById('filter-status');
  if (!buttons.length) return;
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var shown = 0;
      cards.forEach(function (c) {
        var match = f === 'all' || c.getAttribute('data-tags').split(' ').indexOf(f) > -1;
        c.hidden = !match;
        if (match) shown++;
      });
      if (status) status.textContent = shown === 1 ? 'Showing 1 certified stay' : 'Showing ' + shown + ' certified stays';
    });
  });
})();

// Green Receipt tabs (packages page)
(function () {
  var tabs = document.querySelectorAll('[role="tab"][data-receipt]');
  if (!tabs.length) return;
  function show(id, focus) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-receipt') === id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
      document.getElementById('receipt-' + t.getAttribute('data-receipt')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t.getAttribute('data-receipt')); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var n = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      show(tabs[n].getAttribute('data-receipt'), true);
    });
  });
  document.querySelectorAll('[data-show-receipt]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.getAttribute('data-show-receipt')); });
  });
  var fromHash = (location.hash || '').replace('#receipt-', '');
  show(document.getElementById('receipt-' + fromHash) ? fromHash : tabs[0].getAttribute('data-receipt'));
})();

// Contact form: prefill the package or stay the visitor came from
(function () {
  var form = document.querySelector('form[name="enquiry"]');
  if (!form) return;
  var q = new URLSearchParams(location.search);
  var pkg = q.get('package');
  var stay = q.get('stay');
  if (pkg && form.elements['package']) form.elements['package'].value = pkg;
  if (stay && form.elements['message'] && !form.elements['message'].value) {
    form.elements['message'].value = 'I would like to check availability at ' + stay + '.';
  }
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll('.reveal, .steps');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (e) { io.observe(e); });
})();

// Hero 3D tilt follows the pointer (desktop only, respects reduced motion)
(function () {
  var hero = document.querySelector('.hero');
  var rig = document.querySelector('.rig');
  if (!hero || !rig) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (min-width: 901px)').matches) return;
  var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  function loop() {
    cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
    rig.style.setProperty('--rx', cy.toFixed(2) + 'deg');
    rig.style.setProperty('--ry', cx.toFixed(2) + 'deg');
    raf = (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) ? requestAnimationFrame(loop) : null;
  }
  hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 18;
    ty = -((e.clientY - r.top) / r.height - 0.5) * 12;
    if (!raf) raf = requestAnimationFrame(loop);
  });
  hero.addEventListener('pointerleave', function () { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });
})();
