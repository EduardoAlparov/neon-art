import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function taskGallery() {
    const elements = Array.from(document.querySelectorAll('.js-task-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoints: {
                641: { slidesPerView: 2 }
            }
        });
    });
}
