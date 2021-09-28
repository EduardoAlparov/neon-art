import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function addNews(...news) {
    const list = document.querySelector('.news__catalog-list');

    if (!list) {
        console.error('No list found on page');
        return;
    }

    list.append(...news);

    gsap.from(news, {
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.2
    });

    ScrollTrigger.refresh();
    if (window.stickySidebar) {
        window.stickySidebar.updateSticky();
    }
}

export default function loadMoreNews() {
    window.addNews = addNews;
}
