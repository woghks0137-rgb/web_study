$(function () {
    //swiper
    var swiper = new Swiper(".main-slide", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
    //gnb
    /* 
    1. btn-mobile 버튼을 클릭하면
       1) gnb가 나타냐아함
       2) btn-mobile의 아이콘 컬러가 블랙으로 변경
       3) 로고의 글자색이 변경
    */
    $('.btn-mobile').click(function () {
        $('.gnb').slideToggle();
        $(this).toggleClass('on');
        $('.logo').toggleClass('on');
    })
});