const myHotel = new Swiper(".myHotel", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const hotel_rc = new Swiper(".hotel_rc", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,

  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

const visual = new Swiper(".vis", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  loop: true,
  speed: 1000,

  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});