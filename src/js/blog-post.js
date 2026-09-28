// render a markdown post into blog/post.html
// usage: post.html?slug=dozer-v2-077
(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");

  const body = document.getElementById("postBody");
  const dateEl = document.getElementById("postDate");

  const fail = (msg) => {
    body.innerHTML = '<p class="post__loading">' + msg + "</p>";
    document.title = "POST NOT FOUND — BYTEBOY";
  };

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    fail("// ERROR: NO POST SPECIFIED");
    return;
  }

  if (typeof window.markdownit !== "function") {
    fail("// ERROR: MARKDOWN RENDERER UNAVAILABLE");
    return;
  }

  const md = window.markdownit({ html: false, linkify: true, typographer: true });

  fetch("posts/" + slug + ".md", { cache: "no-cache" })
    .then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then((text) => {
      body.innerHTML = md.render(text);

      // page title from the first heading
      const h1 = body.querySelector("h1");
      if (h1) document.title = h1.textContent.trim() + " — BYTEBOY";

      // date from the manifest, if present
      return fetch("posts.json", { cache: "no-cache" })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null);
    })
    .then((manifest) => {
      if (!manifest || !Array.isArray(manifest.posts)) return;
      const meta = manifest.posts.find((p) => p.slug === slug);
      if (meta && meta.date && dateEl) {
        dateEl.textContent = meta.date + " // " + (meta.tag || "POST");
      }
    })
    .catch(() => fail("// ERROR: COULD NOT LOAD POST"));
})();
