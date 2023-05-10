import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';

Swiper.use([Navigation, EffectFade, Autoplay]);

export default function vacanciesValuesSwiper() {
  const vacanciesListSwiper = new Swiper('#vacanciesListSwiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    slideClass: 'vacancies-about__item',
    wrapperClass: 'vacancies-about__list',
    updateOnWindowResize: true,
    
    breakpoints: {
      // when window width is >= 640px
      768: {
        spaceBetween: 0
      }
    },

    on: {
      
      init: function () {
        if(window.matchMedia('(min-width:768px)').matches) {
          this.disable();
        } else {
          this.enable();
        }
      },

      resize: function () {
        if(window.matchMedia('(min-width:768px)').matches) {
          this.slideTo(0, 300);
          this.disable();
        } else {
          this.update();
          this.enable();
        }
      },
    },
  });
}