import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function menuSlider() {
    const elements = Array.from(document.querySelectorAll('.js-menu-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 700,
            autoHeight: true,
            navigation: {
                nextEl: element.querySelector('.page-header__menu-slider-arrow--next'),
                prevEl: element.querySelector('.page-header__menu-slider-arrow--prev')
            }
        });
    });
}
