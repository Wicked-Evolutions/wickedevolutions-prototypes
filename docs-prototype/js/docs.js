/* docs.js — Sidebar toggle + TOC scroll highlighting + Theme toggle */

(function () {
  'use strict';

  /* ── Theme toggle ─────────────────────────────────────────── */
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  // Restore saved preference
  const saved = localStorage.getItem('we-docs-theme');
  if (saved === 'light') html.classList.add('light');
  else if (saved === 'dark') html.classList.add('dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = html.classList.toggle('light');
      html.classList.toggle('dark', !isLight);
      localStorage.setItem('we-docs-theme', isLight ? 'light' : 'dark');
    });
  }

  /* ── Sidebar toggle (mobile) ──────────────────────────────── */
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      backdrop && backdrop.classList.toggle('visible');
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      sidebar && sidebar.classList.remove('open');
      backdrop.classList.remove('visible');
    });
  }

  /* ── TOC scroll spy ───────────────────────────────────────── */
  const tocLinks = document.querySelectorAll('.toc-item a');
  if (tocLinks.length === 0) return;

  const headingIds = Array.from(tocLinks).map(a => {
    const href = a.getAttribute('href');
    return href && href.startsWith('#') ? href.slice(1) : null;
  }).filter(Boolean);

  const headings = headingIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function onScroll() {
    const scrollY = window.scrollY;
    const offset = 130; // header total + buffer

    let activeId = headingIds[0];

    for (let i = headings.length - 1; i >= 0; i--) {
      if (headings[i].getBoundingClientRect().top + scrollY - offset <= scrollY) {
        activeId = headingIds[i];
        break;
      }
    }

    tocLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + activeId);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Filter chips (archive page) ─────────────────────────── */
  const filterChips = document.querySelectorAll('.filter-chip[data-filter]');
  const postItems = document.querySelectorAll('.post-list-item[data-tags]');

  if (filterChips.length > 0) {
    let activeFilter = 'all';

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.filter;

        postItems.forEach(item => {
          const tags = item.dataset.tags ? item.dataset.tags.split(',') : [];
          if (activeFilter === 'all' || tags.includes(activeFilter)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

})();
