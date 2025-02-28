var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Valor padrão para telas menores
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-clientes", {
  slidesPerView: 6,
    spaceBetween: 97,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
});

var swiper = new Swiper(".mySwiper-projeto", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 4,
  //   },
  // },
});