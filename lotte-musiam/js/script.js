$(function () {
  //swiper - main slider
  var swiper = new Swiper('.main-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.main-slider .swiper-button-next',
      prevEl: '.main-slider  .swiper-button-prev',
    },
  });
});
var swiper = new Swiper('.exhibition-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.exhibition-slider .swiper-button-next',
    prevEl: '.exhibition-slider .swiper-button-prev',
  },

});
const eduSwiper = new Swiper('.edu-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 700
});

/* 제로월드 */
const zeroWorldSwiper = new Swiper('.new-slide', {

  navigation: {
    nextEl: ".new-area .swiper-button-next",
    prevEl: ".new-area .swiper-button-prev",
  },

  pagination: {
    el: '.new-slide .swiper-pagination',
    dynamicBullets: true,
  },

});



/* const exhibition = new Swiper(".exhibition-slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".exhibition-next",
    prevEl: ".exhibition-prev",
  },

  loop: true
}); */