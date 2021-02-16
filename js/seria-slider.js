var breakpoint = window.matchMedia('(min-width: 1056px)');
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
  newsSwiper = new Swiper ('.seria__slider', {
    navigation: {
      nextEl: '.seria__next',
      prevEl: '.seria__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    mousewheelControl: true,
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
