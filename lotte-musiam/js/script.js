$(function () {
  //swiper - main slider
  var swiper = new Swiper('.main-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
var swiper = new Swiper('.exhibition-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
const eduSwiper = new Swiper('.edu-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 700
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