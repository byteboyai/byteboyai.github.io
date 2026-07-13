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

  // engine trails: blue ghost copies stringing out behind the hero and
  // the module cards while they lag, like a thruster exhaust
  const TRAILS = [
    { mult: 1.6, color: "rgba(71, 222, 240, .32)", blur: 2 },
    { mult: 2.2, color: "rgba(64, 150, 255, .22)", blur: 3 },
    { mult: 2.9, color: "rgba(64, 105, 255, .14)", blur: 5 },
  ];
  const trails = new Map(
    [...document.querySelectorAll(".panel--hero, .panel--card")].map((el) => [
      el,
      TRAILS.map((t) => {
        const g = document.createElement("i");
        g.className = "panel-trail";
        g.style.background = t.color;
        g.style.filter = `blur(${t.blur}px)`;
        el.parentNode.insertBefore(g, el); // earlier sibling = paints below
        return { g, mult: t.mult };
      }),
    ])
  );

  const layoutTrails = () => {
    for (const [el, ghosts] of trails) {
      const clip = getComputedStyle(el).clipPath;
      for (const { g } of ghosts) {
        g.style.left = el.offsetLeft + "px";
        g.style.top = el.offsetTop + "px";
        g.style.width = el.offsetWidth + "px";
        g.style.height = el.offsetHeight + "px";
        g.style.clipPath = clip;
      }
    }
  };
  layoutTrails();
  addEventListener("resize", layoutTrails);

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

      const ghosts = trails.get(p.el);
      if (ghosts) {
        const heat = Math.min(1, Math.abs(y) / (cap * 0.6)); // 0 idle → 1 full burn
        for (const t of ghosts) {
          t.g.style.transform = `translateY(${(y * t.mult).toFixed(2)}px)`;
          t.g.style.opacity = heat.toFixed(3);
        }
      }
    }

    if (Math.abs(target - smooth) > 0.05) {
      raf = requestAnimationFrame(tick);
    } else {
      smooth = target;
      for (const p of panels) p.el.style.transform = "";
      for (const ghosts of trails.values())
        for (const t of ghosts) {
          t.g.style.transform = "";
          t.g.style.opacity = "";
        }
      raf = null;
    }
  };

  addEventListener(
    "scroll",
    () => {
      if (raf === null) {
        layoutTrails(); // layout may have shifted since the last burst
        raf = requestAnimationFrame(tick);
      }
    },
    { passive: true }
  );
}
