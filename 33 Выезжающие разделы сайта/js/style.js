window.addEventListener("scroll", anim);
anim();
function anim() {
  [].forEach.call(document.querySelectorAll("section"), function (el) {
    checkViewport(el) ? el.classList.add("show") : el.classList.remove("show");
  });
}
function checkViewport(a) {
  const b = a.getBoundingClientRect();
  return b.top && b.top + 0.5 * a.scrollHeight < window.innerHeight / 2;
}
