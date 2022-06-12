new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
}); 
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',   //기본값이므로 생략 가능
    slidesPerView: 3,          //한 번에 보여줄 슬라이드의 갯수
    spaceBetween: 1,          //슬라이드 사이 여백
    centeredSlides: true,      //1번 슬라이드가 가운데로 보이기
    loop: true,
    autoplay: {
        delay: 5000 //원래 기본값은 3000(3초)
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});