var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 31,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 2.5,
      spaceBetween: 15
    },
  }
});