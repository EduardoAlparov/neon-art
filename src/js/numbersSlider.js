import { Swiper, Navigation, EffectFade, Autoplay } from 'swiper';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

Swiper.use([Navigation, EffectFade, Autoplay]);

export default function numbersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-numbers-slider'));

    elements.forEach(element => {
        const containers = Array.from(element.querySelectorAll('.swiper-container'));
        const SPEED = 500;
        const AUTOPLAY_DURATION = 3000;
        let offset = 0;
        containers.forEach(container => {
            const startTime = 600 * offset;

            console.log('Start time', startTime);
            const slider = new Swiper(container, {
                slidesPerView: 1,
                watchOverflow: true,
                effect: 'fade',
                speed: SPEED,
                allowTouchMove: false,
                loop: true,
                fadeEffect: {
                    crossFade: true
                },
            });

            const autoplay = () => {
                gsap.delayedCall(AUTOPLAY_DURATION / 1000, () => {
                    slider.slideNext();
                    autoplay();
                })
            }

            offset += 1;

            gsap.delayedCall(startTime / 1000, () => {
                autoplay();
            })

        });
    });
}
