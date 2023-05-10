import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function projectsParallax() {
    if (window.matchMedia("(max-width: 640px)").matches) return;

    const projectsItems = Array.from(document.querySelectorAll('.projects__slider-card'));

    projectsItems.forEach(item => {
        const image = item.querySelector('.projects__slider-card-bg-image');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                markers: false
            }
        });

        tl.to(image, {
            yPercent: -28,
            duration: 0.5
        });
    })
}