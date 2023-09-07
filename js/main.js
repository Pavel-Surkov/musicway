'use strict';

const blocker = document.querySelector('#blocker');

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
  slidesPerView: 'auto',
  spaceBetween: 15,
  navigation: {
    prevEl: '.teachers-swiper-wrapper .swiper-navigation-prev',
    nextEl: '.teachers-swiper-wrapper .swiper-navigation-next',
  },
  pagination: {
    el: '.teachers-swiper .swiper-pagination',
  },
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Teacher swiper
const teacherSwiper = new Swiper('.teacher-swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: '.teacher-swiper .swiper-pagination',
  },
});

// Reviews swiper
const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: '.reviews-swiper .swiper-pagination',
  },
  navigation: {
    prevEl: '.reviews-wrapper .swiper-navigation-prev',
    nextEl: '.reviews-wrapper .swiper-navigation-next',
  },
  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// About hero swiper
(function initAboutHeroSwiper() {
  const activeSlide = document.querySelector(
    '.about-hero__swiper .swiper-count__first'
  );

  const aboutHeroSwiper = new Swiper('.about-hero__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    autoplay: true,
    speed: 1500,
    loop: true,
    allowTouchMove: false,
    on: {
      init: function (swiper) {
        const slidesCount = document.querySelector(
          '.about-hero__swiper .swiper-count__second'
        );

        if (!slidesCount) return;

        slidesCount.innerHTML = swiper.slides.length;
      },
      slideChange: function (swiper) {
        activeSlide.innerHTML = swiper.activeIndex + 1;
      },
    },
  });
})();

// About main swiper
(function initAboutMainSwiper() {
  const activeSlide = document.querySelector(
    '.about-swiper__swiper .swiper-count__first'
  );

  const aboutMainSwiper = new Swiper('.about-swiper__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: true,
    speed: 1500,
    navigation: {
      prevEl: '.about-swiper__wrapper .swiper-navigation-prev',
      nextEl: '.about-swiper__wrapper .swiper-navigation-next',
    },
    on: {
      init: function (swiper) {
        const slidesCount = document.querySelector(
          '.about-swiper__swiper .swiper-count__second'
        );

        if (!slidesCount) return;

        slidesCount.innerHTML = swiper.slides.length;
      },
      slideChange: function (swiper) {
        activeSlide.innerHTML = swiper.activeIndex + 1;
      },
    },
  });
})();

// FAQ accordion
(function initAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqItems[0]) return;

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('opened');
    });
  });
})();

// Mobile menu handle
(function handleMenu() {
  const menu = document.querySelector('#menu');
  const openBtn = document.querySelector('#menu-open');
  const closeBtn = document.querySelector('#menu-close');

  if (menu && openBtn && closeBtn) {
    function menuOpen() {
      document.documentElement.classList.add('is-locked');
      menu.classList.add('opened');
    }

    function menuClose() {
      document.documentElement.classList.remove('is-locked');
      menu.classList.remove('opened');
    }

    openBtn.addEventListener('click', menuOpen);
    closeBtn.addEventListener('click', menuClose);
  }
})();

// Successful message output
function openSuccessfulMessage() {
  const duration = 3000;
  const message = document.querySelector('#successful-message');

  if (message) {
    document.documentElement.classList.add('is-locked');
    message.classList.add('opened');

    if (blocker) {
      blocker.classList.add('opened');
    }

    setTimeout(function () {
      document.documentElement.classList.remove('is-locked');
      message.classList.remove('opened');

      if (blocker) {
        blocker.classList.remove('opened');
      }
    }, duration);
  }
}

// Popup form handle
(function popupFormHandle() {
  const form = document.querySelector('#study-form');
  const openButtons = document.querySelectorAll('.first-lesson');

  function openForm() {
    document.documentElement.classList.add('is-locked');
    form.classList.add('opened');

    if (blocker) {
      blocker.classList.add('opened');
    }
  }

  function closeForm() {
    document.documentElement.classList.remove('is-locked');
    form.classList.remove('opened');

    if (blocker) {
      blocker.classList.remove('opened');
    }
  }

  if (form && openButtons[0]) {
    const formElement = form.querySelector('form');
    const closeBtn = form.querySelector('.close-btn');

    openButtons.forEach(function (button) {
      button.addEventListener('click', openForm);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeForm);
    }

    if (form) {
      formElement.addEventListener('submit', function (e) {
        closeForm();
      });
    }
  }
})();

// Successful form handle
(function handleForms() {
  const forms = document.querySelectorAll('.form');

  if (forms[0]) {
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        openSuccessfulMessage();
      });
    });
  }
})();
