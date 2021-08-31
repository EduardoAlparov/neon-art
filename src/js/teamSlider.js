import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function teamSlider() {
    const elements = Array.from(document.querySelectorAll('.js-team'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');


        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 6,
            spaceBetween: 0,
            speed: 700,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        })
    })
}