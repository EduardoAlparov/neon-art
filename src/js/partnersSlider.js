import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function partnersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-partners'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        let options = {
            watchOverflow: true,
            slidesPerView: 6,
            spaceBetween: 10,
            speed: 700,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        };

        if (window.matchMedia('(max-width: 640px)').matches) {
            options = {
                ...options,
                slidesPerView: 4,
                slidesPerColumn: 2
            };
        }
        new Swiper(container, options);
    });
}
