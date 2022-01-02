const nav = document.querySelector("nav");
const navSize = nav.getBoundingClientRect()["height"];
const section = document.querySelector("section");
const subMenuList = document.querySelectorAll(".nav-menu-list");
const subMenu = document.querySelectorAll(".sub-menu");
const dropDowns = document.querySelectorAll(".nav-menu-list > a");
let previousPosY = window.pageYOffset;

section.style.marginTop = `${navSize}px`;

window.addEventListener("scroll", (e) => {
  dropDowns.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
  const currentPosY = window.pageYOffset;

  if (previousPosY > currentPosY) {
    nav.style.top = 0;
  } else {
    nav.style.top = `-${navSize}px`;
  }

  previousPosY = currentPosY;
});

subMenuList.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    dropDowns.forEach((item, index2) => {
      if (item.classList.contains("active") && index !== index2) {
        item.classList.remove("active");
      }
    });
    e.target.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".nav-menu-list > a")) {
    dropDowns.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  }
});
