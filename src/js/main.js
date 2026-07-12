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
