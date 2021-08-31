import { Swiper, Navigation, EffectFade } from 'swiper';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

Swiper.use([Navigation, EffectFade]);

export default function numbersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-numbers-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const links = Array.from(element.querySelectorAll('.numbers__slider-pagination-bullet'));
        const AUTOPLAY_DURATION = 3;

        const setActiveLink = index => {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        };
        let activeIndex = 0;
        const instance = new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 500,
            loop: true,
            init: false,

            on: {
                init: swiper => {
                    setActiveLink(swiper.realIndex);
                    autoplay(swiper.realIndex);

                    activeIndex = swiper.realIndex;
                },
                slideChange: swiper => {
                    if (activeIndex === swiper.realIndex) return;
                    setActiveLink(swiper.realIndex);
                    autoplay(swiper.realIndex);

                    activeIndex = swiper.realIndex;
                }
            }
        });

        instance.init();

        function autoplay(startIndex) {
            links.forEach(link => {
                const linkProgress = link.querySelector('circle:nth-child(2)');
                gsap.set(linkProgress, {
                    drawSVG: '0% 0%'
                });
                gsap.killTweensOf(linkProgress);
            });

            const currentLink = links[startIndex];
            const currentLinkProgress = currentLink.querySelector('circle:nth-child(2)');

            const tl = gsap.timeline({
                onComplete: () => {
                    instance.slideNext();
                }
            });
            tl.fromTo(
                currentLinkProgress,
                { drawSVG: '0% 0%' },
                {
                    duration: AUTOPLAY_DURATION,
                    drawSVG: '0% 100%',
                    ease: 'none'
                }
            );
        }

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();

                instance.slideToLoop(linkIndex);
            });
        });
    });
}
