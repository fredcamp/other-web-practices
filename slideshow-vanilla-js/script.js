const slideshow = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");
let currentSlide = 0;
let slideWidth = slides[0].getBoundingClientRect()["width"];

const showSlide = (item) => {
  slideshow.style.transform = `translateX(-${item}px)`;
};

const showDot = (item) => {
  const index = item / slideWidth;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
};

slides.forEach((item, index) => {
  item.style.left = `${slideWidth * index}px`;
});

// const div = document.createElement("div");
// div.className = "slide";
// const img = document.createElement("img");
// img.src = slides[slides.length - 1]
//   .querySelector(".slide__img")
//   .getAttribute("src");
// img.className = "slide__img";
// const p = document.createElement("p");
// p.className = "slide__text";
// p.innerText = `${slides.length} / ${slides.length}`;
// const p2 = document.createElement("p");
// p2.innerText = "Caption Sample";
// p2.className = "slide__caption";

// div.appendChild(img);
// div.appendChild(p);
// div.appendChild(p2);
// slideshow.insertBefore(div, slides[0]);

// currentSlide = currentSlide + slideWidth;
// showSlide(currentSlide);

// setInterval(() => {
//   nextBtn.click();
// }, 5000);

prevBtn.addEventListener("click", (e) => {
  if (currentSlide === 0) {
    currentSlide = slideWidth * (slides.length - 1);
  } else {
    currentSlide = currentSlide - slideWidth;
  }
  showSlide(currentSlide);
  showDot(currentSlide);
});

nextBtn.addEventListener("click", (e) => {
  if (currentSlide === slideWidth * (slides.length - 1)) {
    currentSlide = 0;
  } else {
    currentSlide = currentSlide + slideWidth;
  }
  showSlide(currentSlide);
  showDot(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    showSlide(index * slideWidth);
    showDot(index * slideWidth);
  });
});
