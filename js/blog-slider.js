var breakpoint = window.matchMedia('(min-width: 1022px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.blog__slider', {
    navigation: {
      nextEl: '.blog__next',
      prevEl: '.blog__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakponts: {
      480: {
        slidesPerView: 1,
      }
    }
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
