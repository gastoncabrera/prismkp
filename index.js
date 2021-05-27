let burger = document.querySelector("#menu-burger");
let menu = document.querySelector("#menu");

let content = document.querySelector("#content");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
menu.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// animacion con scroll

window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--casamiento");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
  if (window.innerWidth > 768) {
    image.classList.remove("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--quinceaños");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
  if (window.innerWidth > 768) {
    image.classList.remove("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--shooting");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
  if (window.innerWidth > 768) {
    image.classList.remove("transition");
  }
});
window.addEventListener("scroll", function () {
  let image = document.querySelector(".card--carnaval");
  let position = image.getBoundingClientRect().top;
  let screenSize = window.innerHeight / 1.5;
  if (position < screenSize) {
    image.classList.add("transition");
  }
  if (window.innerWidth > 768) {
    image.classList.remove("transition");
  }
});
