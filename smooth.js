/* Smooth scroll (inertia) tanpa library.
   Scroll mouse/touchpad jadi mengalir halus, bukan lompat per notch.
   Aktif hanya di desktop; layar sentuh & "reduce motion" memakai scroll bawaan browser. */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (matchMedia("(pointer: coarse)").matches) return;

  const SMOOTH = 0.085;  // 0.04 = sangat licin/lambat, 0.15 = responsif. Default enak: 0.07 - 0.1
  const SPEED = 1;       // pengali jarak per putaran roda (1 = normal, 1.3 = lebih jauh)

  const root = document.documentElement;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const maxY = () => root.scrollHeight - innerHeight;
  let target = scrollY, current = scrollY, raf = 0, last = 0;

  const loop = (now) => {
    const dt = Math.min(now - last || 16.7, 50);
    last = now;
    const k = 1 - Math.pow(1 - SMOOTH, dt / 16.67);   // konsisten di 60Hz / 144Hz
    const diff = target - current;
    if (Math.abs(diff) < 0.3) {
      current = target;
      scrollTo({ top: current, behavior: "instant" });
      raf = 0;
      return;
    }
    current += diff * k;
    scrollTo({ top: current, behavior: "instant" });
    raf = requestAnimationFrame(loop);
  };

  // jangan ganggu elemen yang punya scroll sendiri (menu mobile, lightbox, textarea)
  const innerScrollable = (el) => {
    for (; el && el !== document.body; el = el.parentElement) {
      const oy = getComputedStyle(el).overflowY;
      if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight) return true;
    }
    return false;
  };

  addEventListener("wheel", (e) => {
    if (e.ctrlKey || e.defaultPrevented || innerScrollable(e.target)) return;
    e.preventDefault();
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 32;
    else if (e.deltaMode === 2) dy *= innerHeight;
    if (!raf) { current = scrollY; target = scrollY; }
    target = clamp(target + dy * SPEED, 0, maxY());
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
  }, { passive: false });

  // scroll yang bukan dari kita (scrollbar ditarik, keyboard, klik menu) -> sinkronkan posisi
  addEventListener("scroll", () => {
    if (!raf || Math.abs(scrollY - current) > 3) {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      current = target = scrollY;
    }
  }, { passive: true });

  addEventListener("resize", () => { target = clamp(target, 0, maxY()); });
})();
