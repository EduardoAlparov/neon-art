import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function caseRealisedProjects() {
    const elements = Array.from(document.querySelectorAll('.js-case-realised-projects'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: window.matchMedia('(max-width: 640px)').matches ? 'auto' : 3,
            spaceBetween: window.matchMedia('(max-width: 640px)').matches ? 10 : 20,
            watchOverflow: true,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
