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
      opacity: 0,
      display: 'none'
    });
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('section .visual .inner .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7
  });
});

// new Swiper(선택자, 옵션)
new Swiper('section .notice .line .inner .left .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('section .notice .promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: 'section .notice .promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: 'section .notice .promotion .swiper-prev',
    nextEl: 'section .notice .promotion .swiper-next'
  }
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

// section .notice .promotion .swiper-pagination .swiper-pagination-bullet.show