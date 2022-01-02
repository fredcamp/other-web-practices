const nav = document.querySelector("nav");
let previousPosY = window.pageYOffset;
const navSize = nav.getBoundingClientRect()["height"];
const section = document.querySelector("section");

const subMenuList = document.querySelectorAll(".nav-menu-list");
const subMenu = document.querySelectorAll(".sub-menu");

section.style.marginTop = `${navSize}px`;

window.addEventListener("scroll", (e) => {
  subMenu.forEach((item) => {
    item.classList.remove("active");
  });
  const currentPosY = window.pageYOffset;

  if (previousPosY > currentPosY) {
    nav.style.top = 0;
  } else {
    nav.style.top = `-${navSize}px`;
  }

  previousPosY = currentPosY;
});

document.querySelector("header").addEventListener("click", (e) => {
  subMenu.forEach((item) => {
    item.classList.remove("active");
  });
});

document.querySelectorAll("section").forEach((item) => {
  item.addEventListener("click", (e) => {
    subMenu.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

subMenuList.forEach((subMenus, index) => {
  let index1 = index;
  let index2 = 0;

  subMenus.addEventListener("click", (e, index) => {
    subMenu.forEach((item, itemIndex) => {
      index2 = itemIndex;
      if (index2 != index1) item.classList.remove("active");
    });
    subMenu[index1].classList.toggle("active");
  });
});
