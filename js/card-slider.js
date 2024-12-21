new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickeable: true,
    dynamicBull: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});