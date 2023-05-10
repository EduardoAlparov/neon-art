import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function accordions() {
    const SPEED = 0.7;

    const refresh = () => {
        ScrollTrigger.refresh();
        if (window.stickySidebar) {
            window.stickySidebar.updateSticky();
            console.log('Updated sticky sidebar')
        }
    }

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: refresh
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: refresh
        });
    };

    const elements = Array.from(document.querySelectorAll('.js-accordion'));

    elements.forEach(element => {
        const btn = element.querySelector('.js-accordion-btn');
        const content = element.querySelector('.js-accordion-content');


        if (element.classList.contains('active')) {
            gsap.to(content, {
                height: 'auto',
                duration: 0,
                onComplete: () => refresh
            });
        }

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (element.hasAttribute('data-close-other')) {
                elements.forEach(otherElement => {
                    if (otherElement !== element) {
                        if (otherElement.classList.contains('active')) {
                            const content = otherElement.querySelector('.js-accordion-content');
                            closeAccordion(content);
                            otherElement.classList.remove('active');
                        }
                    }
                });
            }

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }

            
            element.classList.toggle('active');
        });
    });
}
