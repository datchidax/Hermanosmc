/* Hermanos - delt script: sprog, træfkalender, medlemmer, jævn scroll */
(function () {
  var T = {
    da: {
      nav_about: "Om os", nav_ride: "Kørsel", nav_events: "Træf", nav_members: "Medlemmer", nav_join: "Bliv medlem", nav_contact: "Kontakt",
      hero_eyebrow: "MC klub · Brønderslev",
      hero_lede: "Hermanos er en motorcykelklub for folk, der elsker at køre. Her kan du læse om os og se, hvornår og hvor vi mødes næste gang.",
      hero_motto: "Sammenhold · Respekt · Kammeratskab", cta_events: "Se træfkalenderen", cta_about: "Læs om os",
      soon: "Kommer snart",
      about_eyebrow: "Klubben", about_h: "Om os",
      about_place: "HERMANOS MC – Brønderslev", about_lead: "Mere end motorcykler – det handler om sammenhold.", a1: "HERMANOS blev grundlagt i 2020 i Brønderslev af brødrene Lars og Peter. Begge kom fra hver sin MC-klub, men ønskede at prøve noget nyt. De havde en fælles idé om at skabe en klub, hvor kammeratskab, sammenhold og gode oplevelser skulle være omdrejningspunktet.", a2: "Det blev starten på HERMANOS.", a3: "Siden grundlæggelsen har klubben udviklet sig til et stærkt fællesskab bestående af Lars, Møghund, Harry, Svendsen og Nørgaard.", h_who: "Hvem er vi?", a4: "Vi er en flok gutter med en fælles passion for motorcykler, gode oplevelser og ikke mindst hinandens selskab.", a5: "Vi kører primært Harley-Davidson, men for os er det ikke motorcyklen, der definerer personen. Det vigtigste er mennesket bag styret.", a6: "Hos HERMANOS handler det om respekt, loyalitet, ærlighed og kammeratskab. Vi tror på, at et stærkt fællesskab bygges gennem gode oplevelser, gensidig respekt og det at stå sammen – både når solen skinner, og når vejen bliver lidt mere ujævn.", h_life: "Klublivet", a7: "Livet i HERMANOS handler om meget mere end at dreje gashåndtaget.", a8: "Vi elsker fællesture på landevejene, spontane ture, hyggelige stunder i klubben og ikke mindst gode fester, hvor grinene er høje, og historierne bliver lidt bedre for hver gang, de fortælles.", a9: "Det er fællesskabet, der binder os sammen, og oplevelserne, der skaber historierne.", a10: "HERMANOS – sammenhold, respekt og kammeratskab.", a11: "Vi er ikke samlet på grund af mærket på tanken, men på grund af det, vi har til fælles.", a12: "For os er HERMANOS ikke bare et navn. Det er et fællesskab, et venskab og en måde at være sammen på.", signoff: "Én klub. Ét fællesskab. Masser af oplevelser.",
      ride_eyebrow: "Maskinerne", ride_h: "Kørsel",
      ride_big_a: "Vi kører primært", ride_big_b: ". Alle motorcykler er velkomne.",
      ride_small: "Uanset mærke og årgang. Mød op, så snakker vi motorcykler.",
      events_eyebrow: "Kommende", events_h: "Træfkalender",
      members_eyebrow: "Dem bag vesten", members_h: "Medlemmer",
      join_eyebrow: "Vær med", join_h: "Bliv medlem",
      join_p1: "Kan du se dig selv i de værdier, vi står for, og har du lyst til at blive en del af et fællesskab, hvor kammeratskab, sammenhold og gode oplevelser er i højsædet, så hører vi gerne fra dig.", join_p2: "Hos os handler det ikke om, hvilken motorcykel du kører på, men om personen bag styret og lysten til at være en del af fællesskabet.", join_p3: "Så hvis du kan genkende dig selv i vores måde at tænke og være sammen på, er du mere end velkommen til at sende os en besked via Messenger. Så tager vi en uforpligtende snak og finder ud af, om der kunne være et godt match.", join_p4: "Vi glæder os til at høre fra dig!",
      contact_eyebrow: "Skriv eller ring", contact_h: "Kontakt",
      contact_p: "Al kontakt skal ske via Messenger, så hop i på Facebook og følg med i, hvad vi laver.",
      photos_eyebrow: "På vejen", photos_h: "Billeder",
      photos_draft: "Billeder fra ture og træf bliver samlet her.", photos_note: "Tryk på et billede for at se det større.",
      see_all: "Se alle billeder", back_home: "\u2190 Til forsiden", foot: "MC klub i Brønderslev", nav_photos: "Billeder", foot_nav: "Navigation", foot_contact: "Al kontakt sker via Messenger. Find os i Facebook-gruppen.", foot_place: "Brønderslev, Danmark", foot_top: "Til toppen", car_prev: "Forrige medlemmer", car_next: "Næste medlemmer", car_track: "Medlemmer, rul sidelæns", fb: "Find os på Facebook",
      img_alt: "Fire medlemmer af Hermanos DK North set bagfra i klubbens veste",
      tag: "Eksempel", empty: "Der er ingen kommende træf endnu."
    },
    en: {
      nav_about: "About", nav_ride: "Riding", nav_events: "Rallies", nav_members: "Members", nav_join: "Join", nav_contact: "Contact",
      hero_eyebrow: "Motorcycle club · Brønderslev",
      hero_lede: "Hermanos is a motorcycle club for people who love to ride. Read about us and see when and where we meet next.",
      hero_motto: "Togetherness · Respect · Comradeship", cta_events: "See the rally calendar", cta_about: "About us",
      soon: "Coming soon",
      about_eyebrow: "The club", about_h: "About us",
      about_place: "HERMANOS MC – Brønderslev", about_lead: "More than motorcycles – it's about togetherness.", a1: "HERMANOS was founded in 2020 in Brønderslev by the brothers Lars and Peter. Each came from a different MC club, but both wanted to try something new. They shared an idea of creating a club built around comradeship, togetherness and great experiences.", a2: "That was the start of HERMANOS.", a3: "Since the founding, the club has grown into a strong community made up of Lars, Møghund, Harry, Svendsen and Nørgaard.", h_who: "Who are we?", a4: "We are a bunch of guys with a shared passion for motorcycles, good experiences and, above all, each other's company.", a5: "We mainly ride Harley-Davidson, but to us the motorcycle doesn't define the person. What matters most is the person behind the handlebars.", a6: "At HERMANOS it is about respect, loyalty, honesty and comradeship. We believe a strong community is built through good experiences, mutual respect and standing together – both when the sun is shining and when the road gets a bit rougher.", h_life: "Club life", a7: "Life in HERMANOS is about much more than twisting the throttle.", a8: "We love group rides on the country roads, spontaneous trips, cosy moments at the club and, not least, great parties where the laughter is loud and the stories get a little better every time they are told.", a9: "It is the community that binds us together, and the experiences that create the stories.", a10: "HERMANOS – togetherness, respect and comradeship.", a11: "We are not together because of the badge on the tank, but because of what we share.", a12: "To us, HERMANOS is not just a name. It is a community, a friendship and a way of being together.", signoff: "One club. One community. Lots of experiences.",
      ride_eyebrow: "The machines", ride_h: "Riding",
      ride_big_a: "We mainly ride", ride_big_b: ". All motorcycles are welcome.",
      ride_small: "Any make, any year. Show up and we'll talk bikes.",
      events_eyebrow: "Upcoming", events_h: "Rally calendar",
      members_eyebrow: "Behind the vest", members_h: "Members",
      join_eyebrow: "Join us", join_h: "Become a member",
      join_p1: "If you can see yourself in the values we stand for, and you would like to be part of a community where comradeship, togetherness and great experiences come first, we would love to hear from you.", join_p2: "With us it is not about which motorcycle you ride, but about the person behind the handlebars and the desire to be part of the community.", join_p3: "So if you recognise yourself in how we think and how we are together, you are more than welcome to send us a message on Messenger. Then we will have a no-obligation chat and find out whether it could be a good match.", join_p4: "We look forward to hearing from you!",
      contact_eyebrow: "Write or call", contact_h: "Contact",
      contact_p: "All contact goes through Messenger, so jump onto Facebook and follow what we are up to.",
      photos_eyebrow: "On the road", photos_h: "Photos",
      photos_draft: "Photos from rides and rallies will be collected here.", photos_note: "Tap a photo to see it larger.",
      see_all: "See all photos", back_home: "\u2190 Back to front page", foot: "Motorcycle club in Brønderslev", nav_photos: "Photos", foot_nav: "Navigation", foot_contact: "All contact goes through Messenger. Find us in the Facebook group.", foot_place: "Brønderslev, Denmark", foot_top: "Back to top", car_prev: "Previous members", car_next: "Next members", car_track: "Members, scroll sideways", fb: "Find us on Facebook",
      img_alt: "Four Hermanos DK North members seen from behind in their club vests",
      tag: "Sample", empty: "There are no upcoming rallies yet."
    }
  };

  /* Sample entries. Replace with the club's real rallies. date = YYYY-MM-DD */
  var EVENTS = [
    { date: "2027-04-17", da: ["Sæsonåbning", "Sted følger"], en: ["Season opener", "Location to be announced"] },
    { date: "2027-06-19", da: ["Sommertræf", "Sted følger"], en: ["Summer rally", "Location to be announced"] },
    { date: "2027-08-14", da: ["Fællestur", "Sted følger"], en: ["Club ride", "Location to be announced"] }
  ];

  var lang = "da";
  try { if (localStorage.getItem("hermanos-lang") === "en") lang = "en"; } catch (e) {}

  var MEMBERS = [
    { nick: "Kaldenavn", role: ["Founder", "Founder"], photo: null },
    { nick: "Kaldenavn", role: ["Founder", "Founder"], photo: null },
    { nick: "Kaldenavn", role: ["Medlem", "Member"], photo: null },
    { nick: "Kaldenavn", role: ["Medlem", "Member"], photo: null }
  ];
  var SILHOUETTE = '<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="34" r="17" fill="currentColor"/><path d="M14 100c0-22 15-38 36-38s36 16 36 38z" fill="currentColor"/></svg>';

  function renderMembers(t) {
    var ul = document.getElementById("members");
    ul.innerHTML = "";
    MEMBERS.forEach(function (m) {
      var li = document.createElement("li"); li.className = "member";
      var ph = document.createElement("div"); ph.className = "photo";
      if (m.photo) {
        var img = document.createElement("img"); img.src = m.photo; img.alt = m.nick; ph.appendChild(img);
      } else { ph.innerHTML = SILHOUETTE; }
      var nm = document.createElement("p"); nm.className = "m-name"; nm.textContent = m.nick;
      if (!m.photo) { var tg = document.createElement("span"); tg.className = "ev-tag label"; tg.textContent = t.tag; nm.appendChild(tg); }
      var rl = document.createElement("p"); rl.className = "m-role label"; rl.textContent = m.role[lang === "da" ? 0 : 1];
      li.appendChild(ph); li.appendChild(nm); li.appendChild(rl);
      ul.appendChild(li);
    });
  }

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] !== undefined) el.textContent = t[k];
    });
    var pi = document.getElementById("patch-img"); if (pi) pi.alt = t.img_alt;
    if (document.getElementById("members")) renderMembers(t);
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t[el.getAttribute("data-i18n-aria")]); });
    if (window.__carUpdate) window.__carUpdate();
    document.getElementById("lang-da").setAttribute("aria-pressed", String(lang === "da"));
    document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));

    var loc = lang === "da" ? "da-DK" : "en-GB";
    var now = new Date();
    var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    var list = document.getElementById("events");
    if (!list) return;
    list.innerHTML = "";
    var shown = EVENTS.filter(function (e) {
      var p = e.date.split("-");
      return Date.UTC(+p[0], +p[1] - 1, +p[2]) >= today;
    }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });

    if (!shown.length) {
      var li = document.createElement("li");
      li.className = "empty";
      li.textContent = t.empty;
      list.appendChild(li);
      return;
    }
    shown.forEach(function (e) {
      var p = e.date.split("-");
      var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
      var month = d.toLocaleDateString(loc, { month: "short", timeZone: "UTC" }).replace(".", "");
      var full = d.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
      var row = document.createElement("li");
      row.className = "event";
      var box = document.createElement("div");
      box.className = "date";
      var dd = document.createElement("span"); dd.className = "d"; dd.textContent = String(+p[2]);
      var mm = document.createElement("span"); mm.className = "m label"; mm.textContent = month;
      box.appendChild(dd); box.appendChild(mm);
      var info = document.createElement("div");
      var h = document.createElement("h3"); h.className = "ev-title"; h.textContent = e[lang][0];
      var tag = document.createElement("span"); tag.className = "ev-tag label"; tag.textContent = t.tag;
      h.appendChild(tag);
      var meta = document.createElement("p"); meta.className = "ev-meta";
      meta.textContent = full.charAt(0).toUpperCase() + full.slice(1) + " · " + e[lang][1];
      info.appendChild(h); info.appendChild(meta);
      row.appendChild(box); row.appendChild(info);
      list.appendChild(row);
    });
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("hermanos-lang", l); } catch (e) {}
    render();
  }
  document.getElementById("lang-da").addEventListener("click", function () { setLang("da"); });
  document.getElementById("lang-en").addEventListener("click", function () { setLang("en"); });
  render();
})();
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute("href").slice(1);
    var target = id && id !== "top" ? document.getElementById(id) : null;
    if (id && id !== "top" && !target) return;
    e.preventDefault();
    var beh = reduce.matches ? "auto" : "smooth";
    if (!target) window.scrollTo({ top: 0, behavior: beh });
    else target.scrollIntoView({ behavior: beh, block: "start" });
    try { history.replaceState(null, "", id ? "#" + id : location.pathname + location.search); } catch (x) {}
    var f = target || document.getElementById("top");
    if (f) { if (!f.hasAttribute("tabindex")) f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); }
  });

  if (!document.getElementById("members")) return;
  var track = document.getElementById("members"), prev = document.getElementById("car-prev"), next = document.getElementById("car-next");
  function upd() {
    var max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
  }
  function page(dir) {
    var first = track.firstElementChild; if (!first) return;
    var step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 24);
    var n = Math.max(1, Math.floor(track.clientWidth / step));
    track.scrollBy({ left: dir * n * step, behavior: reduce.matches ? "auto" : "smooth" });
  }
  prev.addEventListener("click", function () { page(-1); });
  next.addEventListener("click", function () { page(1); });
  track.addEventListener("scroll", upd, { passive: true });
  window.addEventListener("resize", upd);
  new MutationObserver(upd).observe(track, { childList: true });
  window.__carUpdate = upd; upd();
})();
