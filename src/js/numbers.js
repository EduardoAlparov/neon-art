import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function slidingText() {
    const elements = Array.from(document.querySelectorAll('.js-sliding-text'));

    elements.forEach(element => {
        

        new SplitText(element, { type: 'lines', linesClass: 'lineChild' });
        new SplitText(element, { type: 'lines', linesClass: 'lineParent' });

        const lineChild = Array.from(element.querySelectorAll('.lineChild'));

        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom-=80'
                    }
                });

                tl.from(lineChild, {
                    autoAlpha: 0,
                    yPercent: 100,
                    stagger: 0.2,
                    duration: 0.5
                });
            }
        });
    });
}
