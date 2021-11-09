import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function newsFixedSidebar() {
    const colOne = document.querySelector('.news-single__col:nth-child(1)');
    const colTwo = document.querySelector('.news-single__col:nth-child(2)');
    const innerContent = document.querySelector('.news-single__inner-content');

    if (!colOne || !colTwo || !innerContent) return;

    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            ScrollTrigger.create({
                trigger: colTwo,
                start: 'top top+=80',

                end: () => `+=${colTwo.offsetHeight - innerContent.offsetHeight}`,
                pin: colOne,
                pinSpacing: false,
                markers: false
            });
        }
    });
}
