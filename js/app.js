(() => {
  "use strict";
  var e, t;
  (e = function (e) {
    1 == e
      ? document.querySelector("html").classList.add("webp")
      : document.querySelector("html").classList.add("no-webp");
  }),
    ((t = new Image()).onload = t.onerror =
      function () {
        e(2 == t.height);
      }),
    (t.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
  const o = document.getElementById("toTop");
  o.addEventListener("click", function () {
    document
      .getElementById("logo")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }),
    window.addEventListener("scroll", () => {
      window.scrollY > 0 && document.querySelector("body").clientWidth > 768
        ? (o.className = "arrowButton show")
        : (o.className = "arrowButton hide");
    }),
    document.querySelector("body").clientWidth < 768 &&
      (document.querySelector(".header-contacts").className =
        "header-contacts animate__animated animate__fadeInUp animate__delay-3s");
  let n = new Date().getFullYear();
  document.querySelector(".footer-year").innerHTML = n;
})();
