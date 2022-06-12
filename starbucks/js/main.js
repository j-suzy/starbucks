const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배찌 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        
        //to-top버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        });

    } else {
        //배찌 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });

        //to-top버튼 보이기
        gsap.to('#to-top', .2, {
            x: 100
        });

    }  
}, 300));
// _.throttle(함수, 시간)

//to-top버튼 누르면 최상단으로 가게 작업하기
const toTopEl = document.querySelector('#to-top'); //이부분을 잘라서 19번에 옮기면 더욱 코드가 효율적이게 됨=>#to-top은 모두 toTopEl로 변경만해주면 됨
    toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0 
        // 0.7초 동안 화면(window)의 0px지점으로(최상단)옮겨주겠다
        //scrollTo옵션은 gsap플러그인을 가져와야만 쓸 수 있음!
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1 2.7초 뒤에 각각 동작하게 됨
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
}); 
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',   //기본값이므로 생략 가능
    slidesPerView: 3,          //한 번에 보여줄 슬라이드의 갯수
    spaceBetween: 10,          //슬라이드 사이 여백
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





const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion     // !는 반대를 반환한다는 것으로 여기서는 isHidePromotion이 false라 명명했으니 !isHidePromotion이 true가 됨
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 여부 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});



new Swiper('.awards .swiper-container', {
    direction: 'horizontal', //생략가능
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
