(() => {
  'use strict';
  const D = window.DATA;
  /* Menu utama: Tentang Kami / Sertifikasi / Berita / Kontak = scroll di beranda; Produk & Layanan = halaman lain */
  D.nav = [
    { t: 'Tentang Kami', href: 'index.html#p-tentang' },
    { t: 'Produk & Layanan', href: 'produk.html', sub: [
      ['Produk', 'produk.html'], ['Fasilitas', 'fasilitas.html'], ['Proses Maklon', 'maklon.html'],
      ['Keunggulan', 'keunggulan.html'], ['Kerjasama', 'kerjasama.html'], ['Klien & Distributor', 'klien.html'] ] },
    { t: 'Sertifikasi', href: 'index.html#p-sertifikasi' },
    { t: 'Berita & Acara', href: 'index.html#p-berita' },
    { t: 'Kontak', href: 'index.html#p-lokasi' },
  ];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const img = (n) => `assets/img/${n}.jpg`;
  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  /* Semua foto: kalau .jpg tidak ada, otomatis coba .png/.jpeg/.webp di folder yang sama, baru dihapus */
  window.imgFix = (el) => {
    const cur = el.getAttribute('src') || '';
    const base = el.dataset.b || cur.replace(/\.[A-Za-z0-9]+$/, '');
    el.dataset.b = base;
    const exts = ['jpg', 'png', 'jpeg', 'webp'];
    const i = +el.dataset.i || 0;
    if (i >= exts.length) { el.remove(); return; }
    el.dataset.i = i + 1;
    const next = base + '.' + exts[i];
    if (next === cur) { window.imgFix(el); return; }
    el.src = next;
  };
  const fb = `onerror="imgFix(this)"`;
  /* Foto fasilitas/mesin/lab: dicari otomatis di assets/img/ lalu assets/, format jpg/png/jpeg/webp */
  const imgCands = (f) => ['assets/img/', 'assets/'].flatMap((d) => ['jpg', 'png', 'jpeg', 'webp'].map((e) => `${d}${f}.${e}`));
  const imgAuto = (f) => imgCands(f)[0];
  window.imgNext = (el) => { const c = imgCands(el.dataset.f), n = (+el.dataset.n || 0) + 1; if (n < c.length) { el.dataset.n = n; el.src = c[n]; } else { el.remove(); } };
  const autoImg = (f, alt, cls) => `<img src="${imgAuto(f)}" data-f="${f}" alt="${alt}" loading="lazy" class="${cls}" onerror="imgNext(this)">`;

  /* ---------- Font: Segoe UI di semua halaman (ikon Font Awesome tidak diganti) ---------- */
  const fontStyle = document.createElement('style');
  fontStyle.textContent = 'body,body *:not(.fa-solid):not(.fa-regular):not(.fa-brands){font-family:"Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif!important}';
  document.head.appendChild(fontStyle);

  /* ---------- Navbar ---------- */
  set('nav-desktop', D.nav.map((n) => n.sub
    ? `<div class="relative group"><a data-nav href="${n.href}" style="color:#fff" class="px-3 xl:px-4 py-2 uppercase tracking-[.08em] text-[12px] xl:text-[13px] font-semibold leading-tight inline-flex items-center gap-1">${n.t}<i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i></a>
        <div class="hidden group-hover:block group-focus-within:block absolute left-0 top-full pt-2 min-w-[180px]"><div class="bg-white border border-gray-100 rounded-xl shadow-lg py-2">
        ${n.sub.map(([t, h]) => `<a href="${h}" class="block px-4 py-2 hover:bg-soft hover:text-primary-dark">${t}</a>`).join('')}</div></div></div>`
    : `<a data-nav href="${n.href}" style="color:#fff" class="px-3 xl:px-4 py-2 uppercase tracking-[.08em] text-[12px] xl:text-[13px] font-semibold leading-tight">${n.t}</a>`).join(''));
  set('nav-mobile', D.nav.map((n) => `<a href="${n.href}" class="py-3 border-b border-gray-100 font-semibold">${n.t}</a>` +
    (n.sub ? n.sub.map(([t, h]) => `<a href="${h}" class="py-2 pl-5 border-b border-gray-50 text-sm text-gray-600">${t}</a>`).join('') : '')).join(''));

  const menuBtn = $('#menu-btn'), mobileMenu = $('#mobile-menu'), navbar = $('#navbar');
  const setMenu = (open) => {
    mobileMenu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    $('i', menuBtn).className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    paintNav();
  };
  navbar.classList.remove('bg-white/95');
  navbar.classList.remove('border-b', 'border-gray-100');
  navbar.classList.remove('backdrop-blur');
  const isHome = !!$('#home'); // hanya beranda: menu transparan di atas foto hero
  const navBg = document.createElement('div');
  navBg.className = 'absolute inset-0 -z-10 transition-opacity duration-300';
  navBg.style.background = 'linear-gradient(to bottom, #386641, #6a994e)';
  navbar.prepend(navBg);
  if (isHome) { navbar.classList.remove('sticky'); navbar.classList.add('fixed', 'inset-x-0', 'border-b', 'border-white/25'); }
  const paintNav = () => {
    const sb = $('#search-bar');
    const open = !mobileMenu.classList.contains('hidden') || (sb && !sb.classList.contains('hidden'));
    const solid = !isHome || scrollY > 40 || open;
    navBg.style.opacity = solid ? '1' : '0';
    navbar.classList.toggle('shadow-md', solid && scrollY > 10);
  };
  menuBtn.classList.add('border-white/50', 'text-white');
  const brand = navbar.querySelector('a[aria-label="PT FAST"]');
  brand.querySelector('img').src = 'assets/logo-putih.png';
  menuBtn.addEventListener('click', () => setMenu(mobileMenu.classList.contains('hidden')));
  const sBtn = $('#search-toggle'), sBar = $('#search-bar');
  if (sBtn && sBar) sBtn.addEventListener('click', () => {
    const open = sBar.classList.toggle('hidden') === false;
    sBtn.setAttribute('aria-expanded', String(open));
    paintNav();
    if (open) $('input', sBar).focus();
  });
  /* ---------- Bahasa ENG | IND (terjemahan otomatis Google Translate) ---------- */
  const readCookie = (n) => (document.cookie.split('; ').find((r) => r.startsWith(n + '=')) || '').split('=')[1] || '';
  const lang = readCookie('googtrans').endsWith('/en') ? 'en' : 'id';
  document.documentElement.lang = lang;
  const langBtns = $$('[data-lang]');
  langBtns.forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('underline', on);
    if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
  });
  const langBox = $('#lang-switch'); if (langBox) langBox.classList.add('notranslate');
  const putCookie = (v, expire) => {
    const host = location.hostname, ex = expire ? '; expires=Thu, 01 Jan 1970 00:00:00 GMT' : '';
    document.cookie = `googtrans=${v}; path=/${ex}`;
    if (host.includes('.')) { document.cookie = `googtrans=${v}; path=/; domain=${host}${ex}`; document.cookie = `googtrans=${v}; path=/; domain=.${host}${ex}`; }
  };
  langBtns.forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    if (b.dataset.lang === 'en') putCookie('/id/en'); else putCookie('', true);
    location.reload();
  }));
  if (lang === 'en') {
    const st = document.createElement('style');
    st.textContent = '.goog-te-banner-frame,.skiptranslate iframe,#goog-gt-tt,.goog-te-balloon-frame{display:none!important}body{top:0!important}.goog-text-highlight{background:none!important;box-shadow:none!important}';
    document.head.appendChild(st);
    const holder = document.createElement('div'); holder.id = 'gt-el'; holder.style.display = 'none'; document.body.appendChild(holder);
    window.googleTranslateElementInit = () => new google.translate.TranslateElement({ pageLanguage: 'id', includedLanguages: 'en', autoDisplay: false }, 'gt-el');
    const sc = document.createElement('script'); sc.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; sc.async = true;
    document.head.appendChild(sc);
  }
  const goTo = (el) => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight + 1, behavior: 'smooth' });
  const norm = (p) => p.replace(/index\.html$/, '');
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a || a.target === '_blank') return;
    const u = new URL(a.href, location.href);
    if (u.hash.length < 2 || norm(u.pathname) !== norm(location.pathname)) return;
    const t = document.getElementById(decodeURIComponent(u.hash.slice(1)));
    if (!t) return;
    e.preventDefault(); goTo(t); setMenu(false);
    if (document.activeElement) document.activeElement.blur();
  });

  /* ---------- Generic tabs ---------- */
  function tabs(id, groups, panel) {
    const root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = `<div class="flex flex-wrap gap-2" role="tablist">${groups.map((g, i) => `<button role="tab" data-i="${i}" class="tab px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 bg-white">${esc(g[0])}</button>`).join('')}</div><div class="tab-panel mt-8"></div>`;
    const show = (i) => {
      $$('.tab', root).forEach((b) => b.classList.toggle('is-tab', +b.dataset.i === i));
      $('.tab-panel', root).innerHTML = panel(groups[i]);
    };
    root.addEventListener('click', (e) => { const b = e.target.closest('.tab'); if (b) show(+b.dataset.i); });
    show(0);
  }
  const photoCard = ([n, f]) => `<figure class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"><button type="button" data-zoom="${imgAuto(f)}" data-cap="${esc(n)}" aria-label="Perbesar foto ${esc(n)}" class="relative block w-full aspect-square bg-soft overflow-hidden cursor-zoom-in">${autoImg(f, esc(n), 'w-full h-full object-cover transition duration-500 group-hover:scale-105')}<span class="absolute bottom-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-white/90 text-ink shadow opacity-0 group-hover:opacity-100 transition" aria-hidden="true"><i class="fa-solid fa-expand text-sm"></i></span></button><figcaption class="px-4 py-3.5 text-sm font-semibold leading-snug">${esc(n)}</figcaption></figure>`;
  const grid = (items) => `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">${items.map(photoCard).join('')}</div>`;

  /* ---------- Render sections ---------- */
  set('misi-list', D.misi.map((m) => `<li class="flex gap-3"><i class="fa-solid fa-leaf text-primary mt-1.5"></i><span>${m}</span></li>`).join(''));
  const initials = (n) => n.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w) && !w.endsWith('.') && !w.endsWith(',')).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  set('personel-grid', D.personel.map(([n, r, f, b]) => `<article class="lift group bg-white rounded-2xl border border-gray-200 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
    <div class="h-20 bg-gradient-to-r from-primary-dark to-primary"></div>
    <div class="px-6 pb-7 -mt-12">
      <div class="relative w-24 h-24 rounded-full overflow-hidden bg-soft ring-4 ring-white shadow-md grid place-items-center"><span class="absolute text-2xl font-bold text-primary-dark" aria-hidden="true">${esc(initials(n))}</span><img src="assets/orang/${f}.jpg" alt="${esc(n)}" loading="lazy" class="relative w-full h-full object-cover object-top" ${fb}></div>
      <h3 class="text-lg font-bold mt-4 leading-snug">${esc(n)}</h3>
      <p class="mt-1.5 inline-block rounded-full bg-primary/15 text-primary-dark text-xs font-semibold px-3 py-1">${esc(r)}</p>
      <p class="text-sm text-gray-600 mt-4 leading-relaxed">${esc(b)}</p>
    </div></article>`).join(''));
  const fasCard = ([t, f, d], i) => `<article class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"><div class="relative aspect-video overflow-hidden bg-gradient-to-br from-primary to-emerald-900">${autoImg(f, esc(t), 'w-full h-full object-cover transition duration-500 group-hover:scale-105')}<span class="absolute top-3 left-3 w-8 h-8 grid place-items-center rounded-full bg-white/90 text-primary-dark text-xs font-bold shadow">${String(i + 1).padStart(2, '0')}</span></div><div class="p-5"><h4 class="font-semibold text-lg leading-snug">${esc(t)}</h4><p class="text-sm text-gray-600 mt-2 leading-relaxed">${esc(d)}</p></div></article>`;
  set('fas-produksi', D.fasProduksi.map(fasCard).join(''));
  set('fas-penunjang', D.fasPenunjang.map(fasCard).join(''));
  set('sediaan-grid', D.sediaan.map(([t, ic, d]) => `<article class="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition duration-300"><span class="w-12 h-12 grid place-items-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition"><i class="fa-solid ${ic} text-xl" aria-hidden="true"></i></span><h3 class="font-display text-lg font-semibold mt-5">${esc(t)}</h3><p class="text-sm text-gray-600 mt-2 leading-relaxed">${esc(d)}</p></article>`).join(''));
  tabs('mesin-tabs', D.mesin, ([n, items]) => `<h3 class="font-display text-xl font-semibold mb-6 flex items-center gap-3"><span class="w-1.5 h-6 rounded-full bg-primary" aria-hidden="true"></span>Mesin Produksi Sediaan ${esc(n)}</h3>${grid(items)}`);
  tabs('lab-tabs', D.lab, ([n, items]) => `<h3 class="font-display text-xl font-semibold mb-6 flex items-center gap-3"><span class="w-1.5 h-6 rounded-full bg-primary" aria-hidden="true"></span>Laboratorium ${esc(n)}</h3>${grid(items)}`);
  set('guru-grid', D.gurus.map(([n, f, d]) => `<article class="flex gap-5 bg-white rounded-xl border border-gray-200 p-5"><img src="${img(f)}" alt="${esc(n)}" loading="lazy" class="w-24 h-24 rounded-xl object-cover object-top shrink-0" ${fb}><div><h4 class="font-semibold">${esc(n)}</h4><p class="text-sm text-gray-600 mt-1">${esc(d)}</p></div></article>`).join(''));
  const li = (a, icon = 'fa-circle-check') => a.map((t) => `<li class="flex gap-3"><i class="fa-solid ${icon} text-primary mt-1"></i><span>${esc(t)}</span></li>`).join('');
  set('izin-list', li(D.izin));
  set('iot-list', li(D.iot, 'fa-certificate'));
  set('cpotb-list', D.cpotb.map(([s, no]) => `<li class="flex flex-wrap justify-between gap-x-4 py-2 border-b border-gray-100 text-sm"><strong>${esc(s)}</strong><span class="text-gray-600 font-mono text-xs sm:text-sm">${esc(no)}</span></li>`).join(''));
  set('halal-list', li(D.halal, 'fa-moon'));
  const prof = ([n, f, jab, h]) => `<article class="bg-white rounded-xl border border-gray-200 p-5 flex gap-5"><img src="${img(f)}" alt="${esc(n)}" loading="lazy" class="w-24 h-24 rounded-full object-cover object-top shrink-0" ${fb}><div><h4 class="font-semibold">${esc(n)}</h4><p class="text-xs text-accent font-semibold">${esc(jab)}</p><p class="text-sm text-gray-600 mt-2">${esc(h)}</p></div></article>`;
  set('riset-grid', D.riset.map((r) => prof([r[0], r[1], r[2], r[3]])).join(''));
  set('kj-foto', D.kjFoto.map(([f, c]) => `<figure><button type="button" data-zoom="${img(f)}" data-cap="${esc(c)}" class="block w-full aspect-[4/3] rounded-xl overflow-hidden bg-soft"><img src="${img(f)}" alt="${esc(c)}" loading="lazy" class="w-full h-full object-cover" ${fb}></button><figcaption class="text-sm text-gray-600 mt-2">${esc(c)}</figcaption></figure>`).join(''));
  set('oht-grid', D.oht.map((r) => prof(r)).join(''));
  set('ffui-foto', D.ffui.map((f) => `<button type="button" data-zoom="${img(f)}" data-cap="Penandatanganan kerjasama dengan Fakultas Farmasi Universitas Indonesia" class="block aspect-[4/3] rounded-xl overflow-hidden bg-soft"><img src="${img(f)}" alt="Kerjasama dengan FFUI" loading="lazy" class="w-full h-full object-cover" ${fb}></button>`).join(''));
  set('maklon-steps', D.maklon.map(([t, d], i) => `<li class="relative pl-14 pb-8 last:pb-0 border-l-2 border-primary/30 ml-5"><span class="absolute -left-5 top-0 w-10 h-10 rounded-full grid place-items-center font-bold text-white ${i === 11 ? 'bg-accent' : 'bg-primary'}">${i + 1}</span><h4 class="font-semibold">${esc(t)}</h4><p class="text-sm text-gray-600 mt-1">${esc(d)}</p></li>`).join(''));
  const prod = ([n, f, k, nie, s]) => `<article class="prod group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
    <div class="relative aspect-square bg-gradient-to-b from-soft to-white grid place-items-center p-5">
      <i class="fa-solid fa-capsules text-5xl text-primary/25 absolute" aria-hidden="true"></i>
      ${f ? `<img src="${img(f)}" alt="${esc(n)}" loading="lazy" class="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" ${fb}>` : ''}
      ${s ? `<span class="absolute top-3 left-3 bg-white/90 border border-gray-200 text-primary-dark text-[11px] font-semibold rounded-full px-2.5 py-1">${esc(s)}</span>` : ''}
    </div>
    <div class="p-4 flex-1 flex flex-col">
      <h4 class="font-bold leading-snug">${esc(n)}</h4>
      <p class="text-xs text-gray-600 mt-1.5 flex-1 leading-relaxed">${esc(k)}</p>
      <div class="mt-4 flex items-center gap-2 rounded-lg bg-soft px-3 py-2"><i class="fa-solid fa-shield-halved text-primary text-sm" aria-hidden="true"></i><span class="text-[11px] font-semibold text-gray-700 break-all">${esc(nie)}</span></div>
    </div></article>`;
  tabs('produk-tabs', [['Produk Kami (Tersedia)', D.produkTersedia], ['Produk Terproduksi / Beredar', D.produkBeredar]], (g) => `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">${g[1].map(prod).join('')}</div>`);
  set('dok-grid', D.dokumen.map(([f, c]) => `<figure class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"><button type="button" data-zoom="${imgAuto(f)}" data-cap="${esc(c)}" aria-label="Perbesar ${esc(c)}" class="relative block w-full aspect-[16/10] bg-soft overflow-hidden cursor-zoom-in">${autoImg(f, esc(c), 'w-full h-full object-cover object-top transition duration-500 group-hover:scale-105')}<span class="absolute bottom-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-white/90 text-ink shadow opacity-0 group-hover:opacity-100 transition" aria-hidden="true"><i class="fa-solid fa-expand text-sm"></i></span></button><figcaption class="px-4 py-3.5 text-sm font-semibold leading-snug">${esc(c)}</figcaption></figure>`).join(''));
  set('marketing-list', D.marketing.map(([n, t, w]) => `<li><a href="https://wa.me/${w}" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-primary-dark"><i class="fa-brands fa-whatsapp text-accent w-5"></i><span><strong>${n}</strong> <span class="text-gray-600">${t}</span></span></a></li>`).join(''));

  /* ---------- Tombol kontak melayang: Customer Service, Marketing, Kantor ----------
     Isi nomor di daftar CONTACTS. type: 'wa' (WhatsApp) atau 'tel' (telepon biasa).
     number: angka dengan kode negara, tanpa tanda + atau spasi (contoh 6281234567890, kantor 62215551234).
     Selama number masih berisi huruf X, barisnya tampil pudar dan tidak bisa diklik. */
  const CONTACTS = [
    { name: 'Business Development Lead', type: 'wa', number: '628118771689', display: '0811-8771-689' },
    { name: 'Customer Care', type: 'wa', number: '6281316288876', display: '0813-1628-8876' },
    { name: 'Kantor', type: 'tel', number: '62XXXXXXXXXX', display: '(021) xxxx-xxxx' },
  ];
  const ready = (c) => /^\d+$/.test(c.number);
  set('contact-cards', CONTACTS.filter(ready).map((c) => {
    const wa = c.type === 'wa';
    return `<a href="${wa ? 'https://wa.me/' + c.number : 'tel:+' + c.number}" ${wa ? 'target="_blank" rel="noopener"' : ''} class="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"><span class="w-14 h-14 shrink-0 grid place-items-center rounded-2xl ${wa ? 'bg-[#1faa59]' : 'bg-primary-dark'} text-white text-2xl"><i class="${wa ? 'fa-brands fa-whatsapp' : 'fa-solid fa-phone'}" aria-hidden="true"></i></span><span class="min-w-0 flex-1"><strong class="block text-lg leading-tight">${esc(c.name)}</strong><span class="block text-gray-600 mt-0.5">${esc(c.display)}</span></span><span class="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary-dark">${wa ? 'Chat WhatsApp' : 'Telepon'} <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true"></i></span></a>`;
  }).join(''));
  set('inquiry-to', CONTACTS.filter((c) => c.type === 'wa' && ready(c)).map((c) => `<option value="${c.number}">${esc(c.name)}</option>`).join(''));
  const fabBtn = $('#contact-fab'), fabBox = $('#fab');
  if (fabBtn && fabBox) {
    const row = (c) => {
      const ok = /^\d+$/.test(c.number), wa = c.type === 'wa';
      const inner = `<span class="w-10 h-10 shrink-0 grid place-items-center rounded-full ${wa ? 'bg-[#1faa59]' : 'bg-primary-dark'} text-white text-lg"><i class="${wa ? 'fa-brands fa-whatsapp' : 'fa-solid fa-phone'}" aria-hidden="true"></i></span><span class="min-w-0"><strong class="block text-sm leading-tight">${esc(c.name)}</strong><span class="block text-xs text-gray-500">${wa ? 'WhatsApp' : 'Telepon'} ${esc(c.display)}</span></span>`;
      return ok
        ? `<a href="${wa ? 'https://wa.me/' + c.number : 'tel:+' + c.number}" ${wa ? 'target="_blank" rel="noopener"' : ''} class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-soft">${inner}</a>`
        : `<div class="flex items-center gap-3 px-3 py-2.5 opacity-50" title="Nomor belum diisi">${inner}</div>`;
    };
    const pop = document.createElement('div');
    pop.id = 'contact-pop';
    pop.setAttribute('role', 'group');
    pop.setAttribute('aria-label', 'Hubungi kami');
    pop.className = 'hidden absolute right-0 bottom-full mb-3 w-[min(18rem,calc(100vw-2rem))] rounded-2xl bg-white text-ink shadow-xl border border-gray-100 p-2';
    pop.innerHTML = `<p class="px-3 pt-2 pb-1 text-xs font-semibold text-gray-500">Hubungi kami</p>${CONTACTS.map(row).join('')}`;
    fabBox.prepend(pop);
    const setPop = (open) => {
      pop.classList.toggle('hidden', !open);
      fabBtn.setAttribute('aria-expanded', String(open));
      $('i', fabBtn).className = open ? 'fa-solid fa-xmark' : 'fa-brands fa-whatsapp';
    };
    fabBtn.addEventListener('click', () => setPop(pop.classList.contains('hidden')));
    document.addEventListener('click', (e) => { if (!fabBox.contains(e.target)) setPop(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setPop(false); });
  }

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('img', lb), lbCap = $('#lb-cap');
  const closeLb = () => { lb.classList.add('hidden'); lbImg.src = ''; };
  document.addEventListener('click', (e) => {
    const z = e.target.closest('[data-zoom]');
    if (z) { const zi = $('img', z); lbImg.src = (zi && zi.getAttribute('src')) || z.dataset.zoom; lbImg.alt = z.dataset.cap || ''; lbCap.textContent = z.dataset.cap || ''; lb.classList.remove('hidden'); return; }
    if (e.target === lb || e.target.closest('#lb-close')) closeLb();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });

  /* ---------- Active link (per halaman) & shadow ---------- */
  const here = location.pathname.split('/').pop() || 'index.html';
  const navLinks = $$('[data-nav]').map((l) => ({ l, u: new URL(l.href, location.href), item: D.nav.find((n) => n.href === l.getAttribute('href')) }));
  navLinks.forEach(({ l, u, item }) => {
    if (u.hash) return; // link bagian beranda diatur scroll-spy di bawah
    const pages = [item?.href, ...((item?.sub) || []).map((x) => x[1])].filter(Boolean).map((h) => h.split('#')[0]);
    l.classList.toggle('is-active', pages.includes(here));
  });
  const spyLinks = navLinks.filter(({ u }) => u.hash && norm(u.pathname) === norm(location.pathname));
  const spy = () => {
    const y = navbar.offsetHeight + 80;
    let cur = null;
    spyLinks.forEach((x) => { const t = document.getElementById(x.u.hash.slice(1)); if (t && t.getBoundingClientRect().top <= y) cur = x; });
    spyLinks.forEach((x) => x.l.classList.toggle('is-active', x === cur));
  };
  if (spyLinks.length) { addEventListener('scroll', spy, { passive: true }); spy(); }
  const onScroll = paintNav;
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Search lintas halaman: cocokkan ke indeks, lalu buka halamannya ---------- */
  const E = [];
  D.nav.forEach((n) => { E.push([n.t, n.href]); (n.sub || []).forEach(([t, h]) => E.push([t, h])); });
  D.personel.forEach((p) => E.push([p[0] + ' ' + p[1], 'tentang.html#personel']));
  D.sediaan.forEach((x) => E.push([x[0] + ' ' + x[2], 'index.html#p-sediaan']));
  D.mesin.forEach((g) => E.push([g[0] + ' ' + g[1].map((m) => m[0]).join(' '), 'fasilitas.html#mesin']));
  D.lab.forEach((g) => E.push([g[0] + ' ' + g[1].map((m) => m[0]).join(' '), 'fasilitas.html#lab']));
  D.gurus.forEach((g) => E.push([g[0], 'keunggulan.html']));
  [...D.izin, ...D.iot, ...D.halal, ...D.cpotb.map((c) => c[0] + ' ' + c[1])].forEach((t) => E.push([t, 'sertifikasi.html#sertifikasi']));
  D.dokumen.forEach((x) => E.push([x[1], 'sertifikasi.html#dokumen']));
  [...D.riset, ...D.oht].forEach((r) => E.push([r.slice(0, 5).join(' '), 'kerjasama.html']));
  D.maklon.forEach((m) => E.push([m.join(' '), 'maklon.html']));
  [...D.produkTersedia, ...D.produkBeredar].forEach((p) => E.push([[p[0], p[2], p[3], p[4]].join(' '), 'produk.html']));
  E.push(['alamat email telepon whatsapp marketing kontak', 'kontak.html']);
  $$('.site-search').forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('input', form), q = input.value.trim().toLowerCase();
    if (!q) return;
    const hit = E.find(([t]) => t.toLowerCase().includes(q));
    if (hit) {
      const [page, hash] = hit[1].split('#');
      if ((page || here) === here && hash && $('#' + hash)) { goTo($('#' + hash)); input.blur(); setMenu(false); }
      else location.href = hit[1];
      return;
    }
    const old = input.placeholder; input.value = ''; input.placeholder = 'Tidak ditemukan';
    setTimeout(() => (input.placeholder = old), 1800);
  }));

  /* ---------- Form -> WhatsApp Marketing 1 ---------- */
  const form = $('#inquiry-form');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text = `Halo PT FAST, saya ${f.get('nama')} dari ${f.get('perusahaan') || '-'} (${f.get('email')}).\n\n${f.get('pesan')}`;
    window.open(`https://wa.me/${f.get('tujuan') || D.wa}?text=` + encodeURIComponent(text), '_blank', 'noopener');
  });
  $('#year').textContent = new Date().getFullYear();
})();
