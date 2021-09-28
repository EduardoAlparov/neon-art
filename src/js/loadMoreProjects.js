import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function addNewProjects(...projects) {
    const list = document.querySelector('.realised-projects__catalog-list');

    if (!list) {
        console.error('No list found on page');
        return;
    }

    list.append(...projects);

    gsap.from(projects, {
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.2
    });

    ScrollTrigger.refresh();
    if (window.stickySidebar) {
        window.stickySidebar.updateSticky();
    }
}

export default function loadMoreProjects() {
    window.addNewProjects = addNewProjects;
}
