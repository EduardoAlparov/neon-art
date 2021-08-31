import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function companyHistorySlider() {
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    console.log('History gallery init')
    const elements = Array.from(document.querySelectorAll('.js-company-history-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true,
            speed: 700
        });
    });
}
