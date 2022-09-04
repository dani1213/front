const searchEl = document.querySelector('header .inner .sub-menu .search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function() {
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
// _.throttle(함수, 시간); ... 애니메이션 없음 -> gsap 사용
// gsap.to(요소, 지속시간, 옵션);
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, 0.6, {
      display: 'none',
      opacity: 0
    });
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      display: 'block',
      opacity: 1
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('section .visual .inner .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('section .notice .line .inner .left .swiper', {
  autoplay: true,
  direction: 'vertical',
  loop: true
});
new Swiper('section .notice .promotion .swiper', {
  autoplay: {
    delay: 5000
  },
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: 'section .notice .promotion .swiper-prev',
    nextEl: 'section .notice .promotion .swiper-next'
  },
  pagination: {
    el: 'section .notice .promotion .swiper-pagination',
    clickable: true
  },
  slidesPerView: 3,
  spaceBetween: 10
});

const promotionEl = document.querySelector('section .notice .promotion');
const promotionIconEl = document.querySelector('section .notice .line .inner .right .toggle-promotion .material-icons');
const promotionPaginationEl = document.querySelector('section .notice .promotion .swiper-pagination');
const promotionToggleBtn = document.querySelector('section .notice .line .inner .right .toggle-promotion');
let isShowPromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isShowPromotion = !isShowPromotion;
  if(isShowPromotion) {
    promotionEl.classList.add('show');
    promotionIconEl.classList.add('show');
    promotionPaginationEl.classList.add('show');
  } else {
    promotionEl.classList.remove('show');
    promotionIconEl.classList.remove('show');
    promotionPaginationEl.classList.remove('show');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    delay: random(0, delay),
    ease: Power1.easeInOut,
    repeat: -1, // 무한 반복
    y: size,
    yoyo: true
  });
};
floatingObject('section .youtube .inner .floating1', 1, 15);
floatingObject('section .youtube .inner .floating2', 0.5, 15);
floatingObject('section .youtube .inner .floating3', 1.5, 20);