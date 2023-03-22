var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
      clickable: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      clickable: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: false,
    },
  },
});
