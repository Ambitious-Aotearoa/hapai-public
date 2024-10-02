var swiper = new Swiper(".past-events-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

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

  var swiper = new Swiper(".training-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    // watchSlidesProgress: true ,
    keyboard: {
        enabled: true,
      },
    breakpoints: {
        1024: {
          slidesPerView: 2,
        //   slidesPerGroup: 2,
        },
      },

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
  });

  var swiper = new Swiper(".who-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    // watchSlidesProgress: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.1,
          },
        1024: {
          slidesPerView: 2.2,
        },
      },

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
  });

//   $(".swiper").find("a").off("mousedown").on("mousedown", function(e){ e.preventDefault(); e.stopImmediatePropagation(); });
// $(".swiper a").off("mousedown").on("mousedown", function(e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   });



function getHeight(){
    var getHeight = $('.swiper-slide-visible .get-height').outerHeight(true);
    $('.swiper-controls-wrapper').css('top', -getHeight);
}

getHeight()
window.addEventListener('resize', getHeight)

