(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav-links a').forEach((a) => {
      a.addEventListener('click', () => {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const today = new Date();
  const dayIdx = today.getDay();
  const hour = today.getHours();
  const isOpen =
    (dayIdx >= 1 && dayIdx <= 5 && hour >= 8 && hour < 18) ||
    (dayIdx === 6 && hour >= 8 && hour < 12);
  const badge = document.querySelector('.card-badge');
  if (badge) {
    if (isOpen) {
      badge.textContent = 'Open Now';
      badge.style.background = 'rgba(42, 138, 133, 0.15)';
      badge.style.color = '#0f3a3a';
    } else {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let nextDay = (dayIdx + 1) % 7;
      while (nextDay === 0) nextDay = (nextDay + 1) % 7;
      badge.textContent = `Opens ${days[nextDay]} at 8 AM`;
    }
  }
})();
