// Theme toggle: light/dark with localStorage persistence + prefers-color-scheme default.
// The initial data-theme attribute is set inline in <head> before paint to avoid FOUC.
// This file binds the click handler and keeps aria-pressed in sync.
(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function effectiveTheme() {
    var current = root.getAttribute('data-theme');
    if (current === 'dark' || current === 'light') return current;
    var prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function bind() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(effectiveTheme() === 'dark'));
    btn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      btn.setAttribute('aria-pressed', String(next === 'dark'));
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
