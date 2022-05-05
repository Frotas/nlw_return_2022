let navgationScroll = document.querySelector('.header');

function onScroll() {
  navgationScroll.classList.toggle('scroll', window.scrollY > 0);
}
