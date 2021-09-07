import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function teamSlider() {
    const elements = Array.from(document.querySelectorAll('.js-team'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        let options = {
            watchOverflow: true,
            slidesPerView: 6,
            spaceBetween: 0,
            speed: 1500,
            slidesPerColumn: 3,
            slidesPerGroup: 9,
            slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        };

        if (window.matchMedia('(max-width: 640px)').matches) {
            options = {
                ...options,
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerGroup: 1,
                speed: 700
            };
        }

        new Swiper(container, options);
    });
}
