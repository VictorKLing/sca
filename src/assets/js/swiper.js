var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    10: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

var swiper = new Swiper(".mySwiper-clientes", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    10: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 6,
      centeredSlides: false,
    },
  },
});

var swiper = new Swiper(".mySwiper-projeto", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});