// mobile menu toggle
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

// close the menu after tapping a link
links.querySelectorAll("a[href^='#']").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---------------------------------------------------------------
// scroll lag: panels float behind the scroll and ease back in place
// ---------------------------------------------------------------
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // per-panel lag factor — staggered so the cards ripple
  const panels = [...document.querySelectorAll(".panel")].map((el, i) => ({
    el,
    k: [0.5, 0.28, 0.4, 0.52][i] ?? 0.3,
  }));
  const MAX = 90; // scaled per panel so the stagger survives fast scrolls

  let smooth = window.scrollY;
  let raf = null;

  const tick = () => {
    const target = window.scrollY;
    smooth += (target - smooth) * 0.1;
    const diff = target - smooth; // >0 while scrolling down, eases to 0

    for (const p of panels) {
      const cap = MAX * p.k;
      const y = Math.max(-cap, Math.min(cap, diff * p.k));
      p.el.style.transform = `translateY(${y.toFixed(2)}px)`;
    }

    if (Math.abs(target - smooth) > 0.05) {
      raf = requestAnimationFrame(tick);
    } else {
      smooth = target;
      for (const p of panels) p.el.style.transform = "";
      raf = null;
    }
  };

  addEventListener(
    "scroll",
    () => {
      if (raf === null) raf = requestAnimationFrame(tick);
    },
    { passive: true }
  );
}
