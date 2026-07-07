$(document).ready(function () {
    //추천상품 swiper 
    var swiper = new Swiper('.recom-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})