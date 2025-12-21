const featuresSwiper = new Swiper('.features-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
 
  loop: true,

  navigation: {
    nextEl: '.features-next',
    prevEl: '.features-prev',
  },

  breakpoints: {
    374: {
      slidesPerView: 1,
    },
    1439: {
      slidesPerView: 2,
    }
  }
});