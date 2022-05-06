let container = document.querySelector(".container");
let navgationScroll = document.querySelector(".header");
let navgationMenu = document.querySelector(".menu");

function onScroll() {
  navgationScroll.classList.toggle("scroll", window.scrollY > 0);
}

function menuOpen() {
  container.classList.add("menu--expanded");
}

function menuClose() {
  container.classList.remove("menu--expanded");
}
