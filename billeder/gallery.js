/* Hermanos - galleri og lightbox */
(function () {
  var shots = Array.prototype.slice.call(document.querySelectorAll("#gallery .shot"));
  var lb = document.getElementById("lb"), big = document.getElementById("lb-img"), cnt = document.getElementById("lb-count");
  var bClose = document.getElementById("lb-close"), bPrev = document.getElementById("lb-prev"), bNext = document.getElementById("lb-next");
  var L = {
    da: { close: "Luk", prev: "Forrige billede", next: "Næste billede", open: "Forstør billede", of: " af ", dlg: "Billede" },
    en: { close: "Close", prev: "Previous photo", next: "Next photo", open: "Enlarge photo", of: " of ", dlg: "Photo" }
  };
  var cur = -1, opener = null, x0 = null;
  function lang() { return document.documentElement.lang === "en" ? "en" : "da"; }
  function labels() {
    var l = lang(), t = L[l];
    shots.forEach(function (s, i) {
      var im = s.querySelector("img");
      im.alt = im.getAttribute("data-" + l);
      s.setAttribute("aria-label", t.open + " " + (i + 1) + t.of + shots.length);
    });
    bClose.setAttribute("aria-label", t.close); bPrev.setAttribute("aria-label", t.prev); bNext.setAttribute("aria-label", t.next);
    lb.setAttribute("aria-label", t.dlg);
    if (cur >= 0) show(cur);
  }
  function show(i) {
    cur = (i + shots.length) % shots.length;
    var im = shots[cur].querySelector("img");
    big.src = shots[cur].getAttribute("data-full"); big.alt = im.alt;
    cnt.textContent = (cur + 1) + L[lang()].of + shots.length;
  }
  function open(i) {
    opener = document.activeElement; show(i); lb.hidden = false;
    document.body.style.overflow = "hidden"; bClose.focus();
  }
  function close() {
    lb.hidden = true; cur = -1; big.removeAttribute("src");
    document.body.style.overflow = "";
    if (opener && opener.focus) opener.focus();
  }
  shots.forEach(function (s, i) { s.addEventListener("click", function () { open(i); }); });
  bClose.addEventListener("click", close);
  bPrev.addEventListener("click", function () { show(cur - 1); });
  bNext.addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "Tab") {
      var f = [bClose, bPrev, bNext], i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
    }
  });
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });
  ["lang-da", "lang-en"].forEach(function (id) { document.getElementById(id).addEventListener("click", labels); });
  labels();
})();
