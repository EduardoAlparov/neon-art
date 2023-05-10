import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay]);

export default () =>  {
  const vacancieReviewsSwiperBlock = document.querySelector('.vacancies-reviews__swiper');

  if(!vacancieReviewsSwiperBlock) {
    return;
  }
  
  const vacReviewsSwiper = new Swiper("#vacancieReviewsSwiper", {
    spaceBetween: 8,
    slidesPerView: 1,
    watchOverflow: false,

    navigation: {
      nextEl: '.vacancies-reviews__button--next',
      prevEl: '.vacancies-reviews__button--prev',
    },

    breakpoints: {
      // when window width is >= 640px
      768: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      }
    },
  })
}