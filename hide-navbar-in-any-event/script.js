const dropButtons = document.querySelectorAll(".dropbtn");
const dropDowns = document.querySelectorAll(".dropdowns");
const toggler = document.querySelector(".toggle");
let togglerBool = false;
const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar-container");
const navbarHeight = nav.getBoundingClientRect()["height"];
const main = document.querySelector("main");
let prevPosY = window.scrollY;

const removeDropdownActiveState = () => {
  dropButtons.forEach((button) => {
    const dropdown = button.nextElementSibling;
    dropdown.classList.remove("active");
    button.classList.remove("active");
  });
};

window.addEventListener("scroll", (e) => {
  const currPosY = window.scrollY;

  if (!window.matchMedia("max-width:700px").matches) {
    console.log("working");
    if (currPosY > prevPosY) {
      nav.style.top = `-${navbarHeight}px`;
    } else {
      nav.style.top = 0;
    }
    prevPosY = currPosY;
  }
});

toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  main.classList.toggle("active");

  if (togglerBool === false) {
    togglerBool = true;
    toggler.firstChild.classList.replace("fa-bars", "fa-close");
  } else {
    togglerBool = false;
    toggler.firstChild.classList.replace("fa-close", "fa-bars");
  }
});

dropButtons.forEach((button, buttonIndex) => {
  button.addEventListener("click", (e) => {
    const dropdownBtn = e.target.nextElementSibling;
    dropButtons.forEach((item, index) => {
      if (item.classList.contains("active") && buttonIndex !== index) {
        const dropdown = item.nextElementSibling;
        item.classList.remove("active");
        dropdown.classList.remove("active");
      }
    });

    e.target.classList.toggle("active");
    dropdownBtn.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    removeDropdownActiveState();
  }
});

window.addEventListener("scroll", (e) => {
  removeDropdownActiveState();
});
