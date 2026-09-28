// render the blog index from blog/posts.json
(function () {
  const list = document.getElementById("postList");
  if (!list) return;

  const statusClass = {
    active: "card__status--active",
    indev: "card__status--indev",
    planning: "card__status--planning",
  };

  fetch("blog/posts.json", { cache: "no-cache" })
    .then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then((manifest) => {
      const posts = (manifest.posts || []).slice().sort((a, b) =>
        (b.date || "").localeCompare(a.date || "")
      );
      if (!posts.length) throw new Error("empty");
      list.innerHTML = posts.map((p, i) => card(p, i)).join("");
    })
    .catch(() => {
      const note = document.createElement("p");
      note.className = "post__loading";
      note.textContent = "// ERROR: COULD NOT LOAD POSTS";
      list.replaceWith(note);
    });

  function card(p, i) {
    const mod = "LOG_" + String(i + 1).padStart(2, "0");
    const cls = statusClass[p.status] || "card__status--active";
    const href = "blog/post.html?slug=" + encodeURIComponent(p.slug);
    return (
      '<a class="panel panel--card" href="' + href + '">' +
      '<i class="spin-light" aria-hidden="true"></i>' +
      '<div class="panel__inner card">' +
      '<h2 class="card__title">' + esc(p.title) + "</h2>" +
      '<div class="card__status ' + cls + '">' + esc(p.date || "") + " // " + esc(p.tag || "POST") + "</div>" +
      '<p class="card__desc">' + esc(p.summary || "") + "</p>" +
      '<i class="br br--tl card-br" aria-hidden="true"></i>' +
      '<span class="hud-label card-mod" aria-hidden="true">' + mod + "</span>" +
      '<svg class="corner-accents card-corner" width="28" height="28" aria-hidden="true"><use href="#card-corner-accents"/></svg>' +
      '<div class="cells" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div>' +
      "</div></a>"
    );
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
})();
