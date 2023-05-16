import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function hideSideNav() {
    const sideMenu = document.querySelector('.side-menu');
    if (!sideMenu || window.matchMedia("(max-width: 640px)").matches) return;

    ScrollTrigger.create({
        trigger: '.page-footer',
        start: 'top bottom',

        markers: false,
        end: 'max',
        onToggle: ({isActive}) => {
            if (isActive) {
                document.body.classList.add('hide-side-nav');
            } else {
                document.body.classList.remove('hide-side-nav');
            }
        }
    });

    ScrollTrigger.create({
        trigger: '.vacancies-contacts__map',
        start: 'center bottom',

        markers: false,
        end: 'bottom top',
        onToggle: ({isActive}) => {
            if (isActive) {
                document.body.classList.add('hide-side-nav');
            } else {
                document.body.classList.remove('hide-side-nav');
            }
        }
    });
}
