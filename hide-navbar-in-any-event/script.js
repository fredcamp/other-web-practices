const nav = document.querySelector("nav");
let previousPosY = window.pageYOffset;
const navSize = nav.getBoundingClientRect()["height"];
const section = document.querySelector("section");

const subMenuList = document.querySelectorAll(".nav-menu-list");
const subMenu = document.querySelectorAll(".sub-menu");

section.style.marginTop = `${navSize}px`;

window.addEventListener("scroll", (e) => {
  const dropDowns = document.querySelectorAll(".nav-menu-list > a");
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
    const dropDowns = document.querySelectorAll(".nav-menu-list > a");
    dropDowns.forEach((item, index2) => {
      if (item.classList.contains("active") && index != index2) {
        item.classList.remove("active");
      }
    });
    e.target.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".nav-menu-list > a")) {
    const dropDowns = document.querySelectorAll(".nav-menu-list > a");
    dropDowns.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  }
});

// subMenuList.forEach((subMenus, index) => {
//   let index1 = index;
//   let index2 = 0;

//   subMenus.addEventListener("click", (e) => {
//     subMenu.forEach((item, itemIndex) => {
//       index2 = itemIndex;
//       if (index2 != index1) item.classList.remove("active");
//     });
//     subMenu[index1].classList.toggle("active");
//   });
// });
