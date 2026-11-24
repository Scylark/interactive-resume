/* Menu, reading settings, copy buttons and filters. Every page works without it. */
(() => {
  const root = document.documentElement;
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private window */ } } };
  const menu = document.getElementById('menu'), btn = document.querySelector('.t-menu');
  if (menu && btn) {
    const set = (open) => { menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); btn.querySelector('span').textContent = open ? 'Close' : 'Menu'; };
    btn.addEventListener('click', () => { set(menu.hidden); if (!menu.hidden) menu.querySelector('a').focus(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); } });
    document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) set(false); });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
    menu.addEventListener('focusout', (e) => { if (e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget !== btn) set(false); });
  }
  document.querySelectorAll('[data-set="large"]').forEach((b) => {
    const show = () => b.setAttribute('aria-pressed', String(root.classList.contains('large')));
    b.addEventListener('click', () => { const on = root.classList.toggle('large'); store.set('pe-text', on ? 'large' : ''); document.querySelectorAll('[data-set="large"]').forEach((x) => x.setAttribute('aria-pressed', String(on))); });
    show();
  });
  document.querySelectorAll('[data-set="motion"]').forEach((b) => {
    const off = store.get('pe-motion') === 'off' || (store.get('pe-motion') !== 'on' && matchMedia('(prefers-reduced-motion: reduce)').matches);
    const label = b.querySelector('.ml') || b;
    const words = off ? 'Turn motion on' : 'Turn motion off';
    label.textContent = b.closest('.dock') && innerWidth <= 820 ? words.replace('Turn motion', 'Motion') : words;
    b.setAttribute('aria-label', words);
    b.addEventListener('click', () => {
      store.set('pe-motion', off ? 'on' : 'off');
      location.reload();
    });
  });
  document.querySelectorAll('.copy[data-code]').forEach((b) => b.addEventListener('click', () => {
    const done = () => { b.textContent = 'Copied'; setTimeout(() => { b.textContent = 'Copy code'; }, 1600); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(b.dataset.code).then(done, done); else done();
  }));
  /* Filters: any list of [data-row] under a form.filters */
  document.querySelectorAll('form.filters[data-rows]').forEach((form) => {
    const rows = [...document.querySelectorAll(form.dataset.rows)], count = document.getElementById(form.dataset.count), noun = form.dataset.noun.split('|');
    const run = () => {
      const f = new FormData(form); let n = 0;
      rows.forEach((r) => {
        const q = (f.get('q') || '').trim().toLowerCase();
        let ok = !q || q.split(/\s+/).every((w) => r.dataset.text.includes(w));
        for (const [k, v] of f.entries()) if (k !== 'q' && v && ok) ok = r.dataset[k] === v;
        r.hidden = !ok; if (ok) n++;
      });
      count.textContent = `${n} ${n === 1 ? noun[0] : noun[1]}`;
    };
    form.addEventListener('input', run); form.addEventListener('submit', (e) => { e.preventDefault(); run(); });
    form.addEventListener('reset', () => setTimeout(run));
    const c = new URLSearchParams(location.search).get('category'); if (c && form.elements.category) { form.elements.category.value = c; }
    run();
  });
  /* Find page */
  const find = document.getElementById('findBox');
  if (find) {
    const data = JSON.parse(document.getElementById('findData').textContent), hits = document.getElementById('hits'), status = document.getElementById('findStatus');
    const run = () => {
      const q = find.value.trim().toLowerCase();
      hits.textContent = ''; hits.hidden = !q;
      if (!q) { status.textContent = ''; return; }
      const words = q.split(/\s+/);
      const score = (d) => { const t = d.t.toLowerCase(), all = t + ' ' + (d.k || ''); if (!words.every((w) => all.includes(w))) return 0; return (t.startsWith(q) ? 4 : 0) + (t.includes(q) ? 3 : 0) + (d.p || 0) + 1; };
      const found = data.map((d) => [score(d), d]).filter((x) => x[0]).sort((a, b) => b[0] - a[0]).slice(0, 12);
      status.textContent = found.length ? `${found.length} ${found.length === 1 ? 'result' : 'results'}` : 'Nothing found. Try one word, or use the list below.';
      for (const [, d] of found) { const li = document.createElement('li'), a = document.createElement('a'), s = document.createElement('span'), m = document.createElement('small'); a.href = d.u; s.textContent = d.t; m.textContent = d.c; a.append(s, m); li.append(a); hits.append(li); }
    };
    find.addEventListener('input', run);
    const q = new URLSearchParams(location.search).get('q'); if (q) find.value = q; run();
  }
})();
