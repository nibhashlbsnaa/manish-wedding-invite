(() => {
  'use strict';
  const D = window.weddingData;
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rand = (a, b) => a + Math.random() * (b - a);
  const get = path => path.split('.').reduce((o, k) => (o == null ? o : o[k]), D);
  const TBA = 'शीघ्र सूचित किया जाएगा';

  // Tiny element builder; config text always goes through textContent.
  function h(tag, attrs = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    el.append(...kids.flat().filter(k => k instanceof Node || (typeof k === 'string' && k))); // skips false/0/'' from `cond && el`
    return el;
  }
  // Static (non-config) SVG markup only.
  function svg(markup) {
    const t = document.createElement('template');
    t.innerHTML = markup.trim();
    return t.content.firstChild;
  }
  const icon = (ids, vb, cls = '') =>
    svg(`<svg class="${cls}" viewBox="${vb}" aria-hidden="true" focusable="false">${[].concat(ids).map(id => `<use href="#${id}"/>`).join('')}</svg>`);
  const PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>';
  const CAL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm12 7v10H5V9h14Zm-8 2v3H8v2h3v3h2v-3h3v-2h-3v-3h-2Z"/></svg>';
  const PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/></svg>';
  const waIcon = () => $('.finale [data-share] svg').cloneNode(true);

  const parseISO = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
  const fmtDate = iso => new Intl.DateTimeFormat('hi-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(parseISO(iso));
  const mapHref = (url, place) => url || (place ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}` : '');

  function linkBtn(label, href, iconMarkup, cls = 'btn') {
    return href
      ? h('a', { class: cls, href, target: '_blank', rel: 'noopener' }, svg(iconMarkup), label)
      : h('button', { class: cls, type: 'button', disabled: true, title: TBA }, svg(iconMarkup), label);
  }

  /* ───── Bind simple text from config ───── */
  $$('[data-bind]').forEach(el => {
    const v = get(el.dataset.bind);
    if (typeof v === 'string' && v) el.textContent = v;
  });

  const wedding = parseISO(D.weddingDate);
  const part = (loc, opt) => new Intl.DateTimeFormat(loc, opt).format(wedding);
  $('[data-weekday-hi]').textContent = part('hi-IN', { weekday: 'long' });
  $('[data-weekday-en]').textContent = part('en-GB', { weekday: 'long' });
  $('[data-date-day]').textContent = part('en-GB', { day: '2-digit' });
  $('[data-date-month]').textContent = part('en-GB', { month: 'long' });
  $('[data-date-month-hi]').textContent = part('hi-IN', { month: 'long' });
  $('[data-date-year]').textContent = part('en-GB', { year: 'numeric' });

  /* ───── English names: split into letters for the reveal (Devanagari is never split) ───── */
  $$('[data-letters]').forEach(el => {
    const text = el.textContent.trim();
    el.textContent = '';
    el.append(h('span', { class: 'visually-hidden', text }));
    [...text].forEach((c, i) => el.append(h('span', { class: 'l', 'aria-hidden': 'true', style: `--i:${i}` }, c)));
    el.dataset.split = '';
  });

  /* ───── Hero arch: geometry follows the content height, so motifs never stretch ───── */
  const arch = $('[data-arch]');
  const archSvg = $('.arch__svg', arch);
  const archPaths = {
    outer: H => `M6 ${H}V120C6 70 90 52 150 6 210 52 294 70 294 120V${H}`,
    dots: H => `M11 ${H}V122C11 75 94 58 150 14 206 58 289 75 289 122V${H}`,
    inner: H => `M16 ${H}V124C16 80 98 64 150 22 202 64 284 80 284 124V${H}`
  };
  function sizeArch() {
    const H = Math.round(300 * arch.clientHeight / Math.max(arch.clientWidth, 1));
    archSvg.setAttribute('viewBox', `0 0 300 ${H}`);
    for (const [k, d] of Object.entries(archPaths)) $(`.arch__${k}`, archSvg).setAttribute('d', d(H));
  }
  $$('.arch__outer, .arch__inner', archSvg).forEach(p => p.setAttribute('pathLength', '1'));
  sizeArch();
  new ResizeObserver(sizeArch).observe(arch);

  /* ───── Ambient decoration ───── */
  $$('.sky__stars').forEach((s, k) => {
    s.style.boxShadow = Array.from({ length: k % 2 ? 45 : 70 }, () =>
      `${rand(0, 100).toFixed(1)}vw ${rand(0, 100).toFixed(1)}vh 0 ${Math.random() < .12 ? 1 : 0}px rgba(255,${~~rand(225, 250)},${~~rand(180, 230)},${rand(.45, 1).toFixed(2)})`
    ).join(',');
  });
  const PETALS = [['#ffb340', '#e8862a'], ['#ffcf70', '#e8a23a'], ['#e0533a', '#b02a19'], ['#f1b6a6', '#b9636b']];
  $$('[data-petals]').forEach(box => {
    for (let i = 0; i < +box.dataset.petals; i++) {
      const [c1, c2] = PETALS[i % PETALS.length];
      box.append(h('i', { class: 'petal', style: `--x:${rand(0, 100).toFixed(1)}%;--s:${rand(7, 13).toFixed(1)}px;--dur:${rand(11, 20).toFixed(1)}s;--delay:${-rand(0, 20).toFixed(1)}s;--drift:${rand(-70, 70).toFixed(0)}px;--rot:${(rand(240, 720) * (i % 2 ? 1 : -1)).toFixed(0)}deg;--c1:${c1};--c2:${c2}` }));
    }
  });
  $$('[data-motes]').forEach(box => {
    for (let i = 0; i < +box.dataset.motes; i++) {
      box.append(h('i', { class: 'mote', style: `--x:${rand(4, 96).toFixed(1)}%;--s:${rand(2, 4).toFixed(1)}px;--dur:${rand(7, 13).toFixed(1)}s;--delay:${-rand(0, 13).toFixed(1)}s;--drift:${rand(-40, 40).toFixed(0)}px` }));
    }
  });
  $$('[data-diyas]').forEach(box => {
    for (let i = 0; i < +box.dataset.diyas; i++) {
      box.append(svg(`<svg class="diya" viewBox="0 0 40 28" style="--i:${i}" focusable="false"><use class="flame" href="#m-flame"/><use href="#m-diya"/></svg>`));
    }
  });

  /* ───── Self-drawing artwork: inline shared motifs so every stroke can draw ───── */
  $$('.draw use[data-inline]').forEach(u => {
    const g = document.getElementById(u.getAttribute('href').slice(1)).cloneNode(true);
    g.removeAttribute('id');
    u.replaceWith(g);
  });
  $$('.draw').forEach(art => {
    const isKohbar = !!art.closest('.kohbar');
    $$('path, circle, ellipse, rect', art).forEach((el, i) => {
      const dd = isKohbar ? Math.min(i * .035, 3.4) : .45 + i * .12;
      el.style.setProperty('--dd', `${dd.toFixed(2)}s`);
      // pathLength on basic shapes is patchy in older Safari, so only paths draw; shapes fade.
      if (el.tagName === 'path' && !el.hasAttribute('stroke-dasharray')) { el.setAttribute('pathLength', '1'); el.classList.add('ln'); }
      else el.classList.add('fade');
    });
  });

  /* ───── Events ───── */
  const EVENT_ICONS = {
    shubharambh: [['m-kalash'], '0 0 60 82'],
    haldi: [['m-sun'], '0 0 60 60'],
    mehndi: [['m-lotus'], '0 0 80 56'],
    sangeet: [['m-parrot'], '0 0 64 40'],
    vivah: [['m-flame', 'm-diya'], '0 -3 40 31'],
    reception: [['m-fish'], '0 0 72 36']
  };
  const row = (label, value) => [h('dt', { text: label }), h('dd', { class: value ? null : 'tba', text: value || TBA })];

  // shortcut: entries are all-day because `time` is free display text; add a 24h start field if exact times are needed.
  function downloadICS(e) {
    const pad = n => String(n).padStart(2, '0');
    const ymd = d => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
    const start = parseISO(e.date);
    const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
    const esc = s => String(s).replace(/[\\,;]/g, m => '\\' + m).replace(/\n/g, '\\n');
    const venue = e.venue || (e.main && D.venue.name);
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Manish & Monika//Wedding Invitation//HI', 'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:${e.key}-${ymd(start)}@manish-monika-wedding`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;VALUE=DATE:${ymd(start)}`,
      `DTEND;VALUE=DATE:${ymd(end)}`,
      `SUMMARY:${esc(`${e.name} · ${D.groom} & ${D.bride}`)}`,
      `DESCRIPTION:${esc([e.description, e.time].filter(Boolean).join('\n'))}`,
      venue && `LOCATION:${esc(venue)}`,
      'END:VEVENT', 'END:VCALENDAR'
    ].filter(Boolean).join('\r\n');
    const a = h('a', { href: URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' })), download: `${D.groom}-${D.bride}-${e.key}.ics` });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
  }

  $('#events-list').append(...D.events.map((e, i) => {
    const [ids, vb] = EVENT_ICONS[e.key] || EVENT_ICONS.vivah;
    const venue = e.venue || (e.main ? D.venue.name : '');
    return h('article', { class: `event reveal${e.main ? ' event--main' : ''}`, style: `--i:${i % 3}` },
      h('div', { class: 'event__top' },
        icon(ids, vb, 'event__icon'),
        h('div', {}, h('h3', { class: 'event__name', text: e.name }), h('span', { class: 'event__en', lang: 'en', text: e.nameEn }))),
      h('dl', { class: 'event__meta' }, row('तिथि', e.date && fmtDate(e.date)), row('समय', e.time), row('स्थान', venue)),
      h('p', { class: 'event__desc', text: e.description }),
      h('div', { class: 'event__actions' },
        linkBtn('मानचित्र', mapHref(e.mapUrl || (e.main ? D.venue.mapUrl : ''), venue), PIN),
        e.date
          ? h('button', { class: 'btn', type: 'button', onclick: () => downloadICS(e) }, svg(CAL), 'कैलेंडर में जोड़ें')
          : h('button', { class: 'btn', type: 'button', disabled: true, title: TBA }, svg(CAL), 'कैलेंडर में जोड़ें')));
  }));

  /* ───── Story ───── */
  $('#story-list').append(...D.story.map((s, i) =>
    h('li', { class: 'tl-item reveal', style: `--i:${i % 2}` },
      h('span', { class: 'tl-item__node' }, icon('m-lotus', '0 0 80 56')),
      h('h3', { text: s.title }),
      h('p', { text: s.text }))));

  /* ───── Family ───── */
  $('#family-list').append(...[['groomSide', "Groom's family"], ['brideSide', "Bride's family"]].map(([k, en], i) => {
    const f = D.family[k];
    return h('article', { class: 'family__side reveal', style: `--i:${i}` },
      h('h3', { text: f.title }),
      h('p', { class: 'family__en', lang: 'en', text: en }),
      h('ul', {}, f.members.length ? f.members.map(m => h('li', { text: m })) : h('li', { class: 'tba', text: TBA })));
  }));

  /* ───── Venue ───── */
  const v = D.venue;
  $('#venue-card').append(...[
    h('p', { class: `venue__name${v.name ? '' : ' tba'}`, text: v.name || `स्थान ${TBA}` }),
    h('p', { class: `venue__address${v.address ? '' : ' tba'}`, text: v.address || 'पता एवं मानचित्र शीघ्र उपलब्ध होंगे' }),
    linkBtn('मानचित्र में देखें', mapHref(v.mapUrl, [v.name, v.address].filter(Boolean).join(', ')), PIN, 'btn btn--gold'),
    v.embedUrl && h('div', { class: 'venue__map' },
      h('iframe', { src: v.embedUrl, loading: 'lazy', title: 'विवाह स्थल का मानचित्र', referrerpolicy: 'no-referrer-when-downgrade', allowfullscreen: true }))
  ].filter(Boolean));

  /* ───── Gallery (hidden until photos are added) ───── */
  if (D.gallery.length) {
    $('#gallery').hidden = false;
    $('#gallery-list').append(...D.gallery.map((g, i) =>
      h('figure', { class: 'reveal', style: `--i:${i % 3}` }, h('img', { src: g.src, alt: g.alt || '', loading: 'lazy', decoding: 'async' }))));
  }

  /* ───── RSVP & contacts ───── */
  const r = D.rsvp;
  const rsvpActions = [
    r.whatsapp && h('a', { class: 'btn btn--solid', href: `https://wa.me/${r.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(r.message)}`, target: '_blank', rel: 'noopener' }, waIcon(), 'उपस्थिति की पुष्टि करें'),
    r.formUrl && h('a', { class: 'btn', href: r.formUrl, target: '_blank', rel: 'noopener' }, 'RSVP फ़ॉर्म भरें')
  ].filter(Boolean);
  $('#rsvp-body').append(...[
    h('p', { class: 'rsvp__lead', text: rsvpActions.length ? 'कृपया अपनी उपस्थिति की सूचना देकर हमें अनुगृहीत करें।' : `उपस्थिति एवं संपर्क विवरण ${TBA}।` }),
    rsvpActions.length && h('div', { class: 'rsvp__actions' }, rsvpActions),
    D.contacts.length && h('ul', { class: 'contacts' }, D.contacts.map(c =>
      h('li', { class: 'contact' },
        h('span', {}, h('span', { class: 'contact__name', text: c.name }), c.relation && h('span', { class: 'contact__rel', text: c.relation })),
        c.phone && h('a', { class: 'btn', href: `tel:+${c.phone.replace(/\D/g, '')}`, 'aria-label': `${c.name} को कॉल करें` }, svg(PHONE), 'कॉल')))),
    h('div', { class: 'rsvp__actions' }, h('button', { class: 'btn', type: 'button', 'data-share': '' }, waIcon(), 'आमंत्रण साझा करें'))
  ].filter(Boolean));

  /* ───── WhatsApp share ───── */
  $$('[data-share]').forEach(b => b.addEventListener('click', () => {
    const text = `${D.share.message}\n\n${location.href.split('#')[0]}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }));

  /* ───── Music (never autoplays; starts only from the संगीत button) ───── */
  if (D.music) {
    const btn = $('#music-btn');
    const audio = $('#music-audio');
    audio.src = D.music;
    audio.volume = .6;
    $('#music').hidden = false;
    const set = on => {
      btn.setAttribute('aria-pressed', String(on));
      btn.setAttribute('aria-label', on ? 'संगीत रोकें / Pause music' : 'संगीत चलाएँ / Play music');
    };
    btn.addEventListener('click', () => (audio.paused ? audio.play().catch(() => set(false)) : audio.pause()));
    audio.addEventListener('play', () => set(true));
    audio.addEventListener('pause', () => set(false));
  }

  /* ───── Scroll reveal ───── */
  $$('.reveal-group').forEach(g => [...g.children].forEach((c, i) => { c.classList.add('reveal'); c.style.setProperty('--i', i); }));
  const showIO = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    $$('.diyas', e.target).forEach(d => d.classList.add('is-lit'));
    showIO.unobserve(e.target);
  }), { rootMargin: '0px 0px -10% 0px', threshold: .12 });
  $$('.reveal-group, .draw, .reveal').forEach(el => {
    if (!el.parentElement.closest('.reveal-group') || el.matches('.draw:not(.reveal)')) showIO.observe(el);
  });

  /* ───── Pause ambient loops off-screen; parallax + mandap glow while on-screen ───── */
  const pauseIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('is-offscreen', !e.isIntersecting)));
  $$('.hero, .mithila, .mandap, .finale').forEach(s => pauseIO.observe(s));

  const active = new Set();
  const liveIO = new IntersectionObserver(es => es.forEach(e => (e.isIntersecting ? active.add(e.target) : active.delete(e.target))));
  $$('[data-parallax-scene], [data-progress]').forEach(s => liveIO.observe(s));
  let ticking = false;
  function onFrame() {
    ticking = false;
    const vh = innerHeight;
    active.forEach(el => {
      const rect = el.getBoundingClientRect();
      const p = (vh - rect.top) / (vh + rect.height); // 0 = entering from below, 1 = leaving above
      if (el.hasAttribute('data-progress')) {
        el.style.setProperty('--p', Math.min(1, Math.max(0, p * 2 - .25)).toFixed(3));
      } else if (!reduced) {
        $$('[data-depth]', el).forEach(l => { l.style.transform = `translate3d(0, ${((p - .5) * 2 * l.dataset.depth).toFixed(1)}px, 0)`; });
      }
    });
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } }, { passive: true });
  addEventListener('resize', onFrame, { passive: true });

  /* ───── Opening gate ───── */
  const gate = $('#gate');
  const outside = [$('#main'), $('.footer')];
  root.classList.add('is-locked');
  outside.forEach(el => { el.inert = true; });
  setTimeout(() => $('.diyas--gate').classList.add('is-lit'), reduced ? 0 : 700);
  $('#gate-open').focus({ preventScroll: true });

  function openGate() {
    if (gate.classList.contains('is-opening')) return;
    gate.classList.add('is-opening');
    root.classList.add('is-open');
    root.classList.remove('is-locked');
    outside.forEach(el => { el.inert = false; });
    $('#hero-title').focus({ preventScroll: true });
    setTimeout(() => $('.diyas--hero').classList.add('is-lit'), reduced ? 0 : 2000);
    setTimeout(() => { gate.remove(); onFrame(); }, reduced ? 50 : 2100);
  }
  $('#gate-open').addEventListener('click', openGate);
  $('.portal').addEventListener('click', openGate);
})();
