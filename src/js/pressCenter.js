import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function pressCenter() {
    const elements = Array.from(document.querySelectorAll('.js-press-center'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: window.matchMedia("(max-width: 640px)").matches ? 'auto' : 3,
            spaceBetween: 20,
            watchOverflow: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoins: {
                641: {
                    spaceBetween: 60
                }
            }
        });
    });
}
