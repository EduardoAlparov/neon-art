import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function projectsSlider() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;

    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 20,
            speed: 500,
        });
    });
}
