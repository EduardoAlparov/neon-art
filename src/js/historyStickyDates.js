import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function historyStickyDates() {
    if (window.matchMedia('(max-width: 640px)').matches) return;

    const elements = Array.from(document.querySelectorAll('.history__block'));

    elements.forEach(element => {
        const date = element.querySelector('.history__block-date-inner');

        ScrollTrigger.create({
            trigger: element,
            start: () => `top top+=${document.querySelector('.page-header').offsetHeight + 70}`,
            markers: false,
            end: () => `+=${element.querySelector('.history__block-content').offsetHeight - date.offsetHeight}`,
            pin: date,
            pinSpacing: true
        });
    });
}
