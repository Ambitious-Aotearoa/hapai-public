var swiper = new Swiper(".past-events-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //   delay: 9000,

    // },
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });