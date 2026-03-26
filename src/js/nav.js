// Mobile nav toggle
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Dropdown menus in primary nav
(function() {
  document.querySelectorAll('.primary-nav__dropdown-toggle').forEach(function(btn) {
    var dropdown = btn.closest('.primary-nav__dropdown');
    if (!dropdown) return;

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      // Close other dropdowns
      document.querySelectorAll('.primary-nav__dropdown.open').forEach(function(d) {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.primary-nav__dropdown-toggle').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.primary-nav__dropdown')) {
      document.querySelectorAll('.primary-nav__dropdown.open').forEach(function(d) {
        d.classList.remove('open');
        d.querySelector('.primary-nav__dropdown-toggle').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.primary-nav__dropdown.open').forEach(function(d) {
        d.classList.remove('open');
        var btn = d.querySelector('.primary-nav__dropdown-toggle');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      });
    }
  });
})();

// Wrap tables in scroll container for mobile
(function() {
  document.querySelectorAll('.article-body table').forEach(function(table) {
    if (table.parentElement.classList.contains('table-wrap')) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'table-wrap';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
})();
