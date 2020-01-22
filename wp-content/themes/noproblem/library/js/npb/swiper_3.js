$(document).ready(function() {
  //slide 3
  var product = new Swiper(".swiper-container__slide3", {
    // allowTouchMove: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 60
      }
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  $(".seemore__less").hide();

  // var mySwiper = document.querySelector(".swiper-container__slide3").swiper;

  $(".swiper-container__slide3 .seemore").click(function() {

    var mySwiper = $(this).parent()[0].swiper;

    var windowSize = window.innerWidth;
    var marginRight = $(this)
      .parent()
      .find(".swiper-slide__slide3:first-child")
      .css("margin-right");

    if (
      $(this)
        .parent()
        .find(".swiper-wrapper__slide3")
        .css("flex-wrap") === "nowrap"
    ) {
      $(this)
        .parent()
        .find(".swiper-wrapper__slide3")
        .css("flex-wrap", "wrap");

      $(this)
        .parent()
        .find(".swiper-wrapper__slide3")
        .addClass("slideWrap");

      mySwiper.slideTo(0);
      mySwiper.allowTouchMove = false;

      if (windowSize >= 600) {
        $(this)
          .parent()
          .find(".swiper-button-next")
          .hide();
        $(this)
          .parent()
          .find(".swiper-button-prev")
          .hide();
      }

      $(this)
      .parent()
      .find(".seemore__more").hide();
      $(this)
      .parent()
      .find(".seemore__less").show();


      if (windowSize >= 900) {
        $(this)
          .parent()
          .find(".swiper-slide__slide3:nth-child(3n+0)")
          .css("margin-right", "0");
      } else if (windowSize < 900 && windowSize >= 600) {
        $(this)
          .parent()
          .find(".swiper-slide__slide3:nth-child(even)")
          .css("margin-right", "0");
      }
    } else {
      $(this)
        .parent()
        .find(".swiper-wrapper__slide3")
        .css("flex-wrap", "nowrap");
      $(this)
        .parent()
        .find(".swiper-wrapper__slide3")
        .removeClass("slideWrap");

      mySwiper.allowTouchMove = true;

      const element = $(this)
        .parent()
        .find(".cloth")[0];
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - window.innerHeight / 5;
      window.scrollTo(0, middle);

      if (windowSize >= 600) {
        $(this)
          .parent()
          .find(".swiper-button-next")
          .show();
        $(this)
          .parent()
          .find(".swiper-button-prev")
          .show();
      }

      $(this)
      .parent()
      .find(".seemore__more").show();
      $(this)
      .parent()
      .find(".seemore__less").hide();


      if (windowSize >= 900) {
        $(this)
          .parent()
          .find(".swiper-slide__slide3:nth-child(3n+0)")
          .css("margin-right", marginRight);
      } else if (windowSize < 900 && windowSize >= 600) {
        $(this)
          .parent()
          .find(".swiper-slide__slide3:nth-child(even)")
          .css("margin-right", marginRight);
      }
    }
  });

  $(window).resize(function() {
    var windowSize = window.innerWidth;

    if (windowSize >= 900) {
      $(".slideWrap")
        .find(".swiper-slide__slide3:nth-child(3n+0)")
        .css("margin-right", "0");
    } else if (windowSize < 900 && windowSize >= 600) {
      $(".slideWrap")
        .find(".swiper-slide__slide3:nth-child(even)")
        .css("margin-right", "0");
    }
  });

  // new script
  // $(".cloth__img").mouseenter(function() {
  //   var image = this;
  //   setTimeout(function() {
  //     const newImage = $(image)
  //       .attr("src")
  //       .replace("_1", "_2");
  //     $(image).attr("src", newImage);
  //   }, 450);
  // });

  // $(".cloth__img").mouseleave(function() {
  //   var image = this;
  //   setTimeout(function() {
  //     const newImage = $(image)
  //       .attr("src")
  //       .replace("_2", "_1");
  //     $(image).attr("src", newImage);
  //   }, 0);
  // });

  // old script
  $(".cloth__img").mouseenter(function() {
    $(this).attr(
      "src",
      $(this)
        .attr("src")
        .replace("_1", "_2")
    );
  });
  $(".cloth__img").mouseleave(function() {
    $(this).attr(
      "src",
      $(this)
        .attr("src")
        .replace("_2", "_1")
    );
  });
});
