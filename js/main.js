'use strict';

//Hero swiper
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: true,
  speed: 1500,
  pagination: {
    el: '.hero-swiper .swiper-pagination',
  },
});

// About swiper
const aboutSwiper = new Swiper('.about-lessons-swiper', {
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: '.about-lessons-swiper .swiper-pagination',
  },
});

// Recommendations swiper
const recommendationsSwiper = new Swiper('.about-recommendations-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    prevEl: '.about-recommendations-wrapper .swiper-navigation-prev',
    nextEl: '.about-recommendations-wrapper .swiper-navigation-next',
  },
});
