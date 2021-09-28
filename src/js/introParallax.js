import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function introParallax() {

    const elements = Array.from(document.querySelectorAll('.intro'));
    elements.forEach(element => {
        const bg = element.querySelector('.intro__bg');
        if (!bg) return;

        const media = bg.querySelector('img, video');
        if (!media) return;

        ScrollTrigger.matchMedia({
            '(min-width: 1025px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        markers: false
                    }
                });

                tl.to(bg, {
                    yPercent: 45,
                    duration: 0.5
                });
            }
        });
    });
}
