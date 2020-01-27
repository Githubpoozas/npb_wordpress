// slide 2
var swiper2 = new Swiper(".swiper-container__slide2", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  //test
  // slidesPerView: 2,
  //     slidesPerColumn: 2,
  //     slidesPerGroup: 2,
  //     spaceBetween: 0,

  //test
  // slidesPerView: 4,
  //     slidesPerColumn: 2,
  //     slidesPerGroup: 4,
  //     spaceBetween: 0,

      //test
      slidesPerView: 5,
      slidesPerColumn: 2,
      slidesPerGroup: 5,
      spaceBetween: 0,



  breakpoints: {
    600: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
       900: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      slidesPerGroup: 5,
      spaceBetween: 10,
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  grabCursor: true
});

