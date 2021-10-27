const stars = document.querySelector("#stars");
const moon = document.querySelector("#moon");
const mountains_behind = document.querySelector("#mountains_behind");
const header = document.querySelector("header");
const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  stars.style.left = 0.4 * value + "px";
  moon.style.top = 1.2 * value + "px";
  title.style.marginTop = 2.2 * value + "px";
  title.style.marginRight = 1.2 * value + "px";
  btn.style.marginTop = 2.2 * value + "px";
  mountains_behind.style.top = 0.4 * value + "px";
  header.style.top = 0.65 * value + "px";
});

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  header.classList.toggle("active");
});
