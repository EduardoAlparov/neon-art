import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function fixedHeader() {
    const pageHeader = document.querySelector('.page-header');
    if (!pageHeader) return;

    ScrollTrigger.create({
        trigger: document.querySelector('.page-content'),
        start: 'top top',
        end: () => `+=${document.body.scrollHeight}`,
        onUpdate: ({ direction }) => {
            // console.log('direction:', direction);

            if (direction === 1) {
                document.body.classList.add('page-header-hidden');
            } else if (direction === -1) {
                document.body.classList.remove('page-header-hidden');
            }
        }
    });

    function setFixedHeader() {
        if (window.pageYOffset > 0) {
            pageHeader.classList.add('fixed');
        } else {
            pageHeader.classList.remove('fixed');
        }
    }

    setFixedHeader();

    window.addEventListener('scroll', () => {
        setFixedHeader();
    });
}
