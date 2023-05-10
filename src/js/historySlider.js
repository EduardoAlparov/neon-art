import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function historySlider() {
    const elements = Array.from(document.querySelectorAll('.js-history-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            watchOverflow: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
