import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function fixedLogo() {
    const introLogo = document.querySelector('.intro__logo-wrapper-inner:not(.not-sticky)');

    if (!introLogo || window.matchMedia('(max-width: 640px)').matches) return;
    
    introLogo.classList.add('fixed');
    ScrollTrigger.create({
        trigger: '.intro',
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: introLogo,
        pinSpacing: false,
    });

    // const setFixed = () => {
    //     introLogo.style.top = '';
    //     introLogo.style.left = '';
    //     introLogo.style.position = 'fixed';
    //     introLogo.style.zIndex = 300;
    //     introLogo.classList.add('fixed');
    //     introLogo.style.transform = 'none';
    //     introLogo.parentElement.style.paddingTop = '';
    //     const newTop = introLogo.getBoundingClientRect().top;
    //     const newLeft = introLogo.getBoundingClientRect().left;
    //     requestAnimationFrame(() => {

    //         introLogo.style.top = `${newTop}px`;
    //         introLogo.style.left = `${newLeft}px`;
    //         introLogo.style.transform = '';
    //         introLogo.parentElement.style.paddingTop = introLogo.offsetHeight + 'px';
    //     });
    // };

    // setFixed();

    // window.addEventListener('resize', () => {
    //     setFixed();
    // });

    // window.addEventListener('load', () => {
    //     setFixed();
    // });
}
