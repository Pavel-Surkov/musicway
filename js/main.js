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
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: '.about-lessons-swiper .swiper-pagination',
  },
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Recommendations swiper
const recommendationsSwiper = new Swiper('.about-recommendations-swiper', {
  spaceBetween: 15,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.about-recommendations-wrapper .swiper-navigation-prev',
    nextEl: '.about-recommendations-wrapper .swiper-navigation-next',
  },
  breakpoints: {
    990: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Teachers swiper
const teachersSwiper = new Swiper('.teachers-swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.teachers-swiper-wrapper .swiper-navigation-prev',
    nextEl: '.teachers-swiper-wrapper .swiper-navigation-next',
  },
  pagination: {
    el: '.teachers-swiper .swiper-pagination',
  },
});
