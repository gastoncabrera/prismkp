const img = document.querySelectorAll(".img");
const modalContainer = document.querySelector(".modal__container");
const header = document.querySelector("header");
const imgContainer = document.querySelector(".modal__img");
const modalText = document.querySelector(".modal__text");
const close = document.querySelector(".bi");

img.forEach((image) => {
  image.addEventListener("click", () => {
    modalContainer.classList.toggle("move");
    header.classList.toggle("header__remove");
    addImage(image.getAttribute("src"), image.getAttribute("alt"));
  });
});

modalContainer.addEventListener("click", () => {
  imgContainer.classList.toggle("show");
  modalContainer.classList.toggle("move");
  header.classList.toggle("header__remove");
  close.classList.toggle("move");
});

function addImage(src, alt) {
  imgContainer.classList.toggle("show");
  imgContainer.src = src;
  modalText.innerHTML = alt;
}
