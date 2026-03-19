/* kl-admin.js — Minimal prototype interactivity */
(function () {
  'use strict';

  /* ── Tab switching ──────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('.kl-tab');
    if (!tab) return;
    var group = tab.parentElement;
    var panelId = tab.dataset.tab;
    if (!panelId) return;

    // Deactivate siblings
    group.querySelectorAll('.kl-tab').forEach(function (t) { t.classList.remove('active'); });
    tab.classList.add('active');

    // Show matching panel
    var container = group.parentElement;
    container.querySelectorAll('.kl-tab-panel').forEach(function (p) { p.classList.remove('active'); });
    var panel = container.querySelector('#' + panelId);
    if (panel) panel.classList.add('active');
  });

  /* ── Checkbox select-all ────────────────────────────────────── */
  document.addEventListener('change', function (e) {
    if (e.target.id === 'select-all') {
      var checked = e.target.checked;
      var table = e.target.closest('table');
      if (!table) return;
      table.querySelectorAll('tbody input[type="checkbox"]').forEach(function (cb) {
        cb.checked = checked;
      });
      updateBulkBar(table);
    } else if (e.target.closest('tbody') && e.target.type === 'checkbox') {
      var table = e.target.closest('table');
      updateBulkBar(table);
    }
  });

  function updateBulkBar(table) {
    var bulk = document.querySelector('.kl-bulk-bar');
    if (!bulk) return;
    var checked = table.querySelectorAll('tbody input[type="checkbox"]:checked');
    if (checked.length > 0) {
      bulk.classList.add('visible');
      var countEl = bulk.querySelector('.kl-bulk-count');
      if (countEl) countEl.textContent = checked.length + ' selected';
    } else {
      bulk.classList.remove('visible');
    }
  }

  /* ── Expandable rows (sessions page) ────────────────────────── */
  document.addEventListener('click', function (e) {
    var row = e.target.closest('tr[data-expand]');
    if (!row) return;
    var expandId = row.dataset.expand;
    var expandRow = document.getElementById(expandId);
    if (!expandRow) return;
    expandRow.style.display = expandRow.style.display === 'table-row' ? 'none' : 'table-row';
    row.classList.toggle('expanded');
  });

  /* ── Filter dropdowns (mock — just visual) ──────────────────── */
  // In a real Vue SPA these would be reactive. For prototype, they're static selects.

})();
