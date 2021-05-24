let burger = document.querySelector("#menu-burger");
let menu = document.querySelector("#menu");
let content = document.querySelector("#content");
let ancla1 = document.querySelector(".menu__link1");
let ancla2 = document.querySelector(".menu__link2");
let ancla3 = document.querySelector(".menu__link3");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  content.classList.toggle("desaparecer");
  ancla1.classList.toggle("color");
  ancla2.classList.toggle("color");
  ancla3.classList.toggle("color");
});

// animacion con scroll
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--casamiento");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--quinceaños");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--shooting");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--carnaval");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
});
