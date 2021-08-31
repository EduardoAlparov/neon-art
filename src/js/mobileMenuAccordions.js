import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function mobileMenuAccordions() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;
    const SPEED = 0.4;

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };

    const elements = Array.from(document.querySelectorAll('.page-header__menu-nav-block'));

    elements.forEach(element => {
        const btn = element.querySelector('.page-header__menu-nav-block-heading');
        const content = element.querySelector('.page-header__menu-nav-accordion');

        btn.addEventListener('click', event => {
            event.preventDefault();

            elements.forEach(otherElement => {
                if (otherElement !== element) {
                    if (otherElement.classList.contains('active')) {
                        const content = otherElement.querySelector('.page-header__menu-nav-accordion');
                        closeAccordion(content);
                        otherElement.classList.remove('active');
                    }
                }
            });

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        });
    });
}
