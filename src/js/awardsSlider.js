import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function awardsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-awards-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
