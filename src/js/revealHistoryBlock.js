import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function revealHistoryBlock() {
    const elements = Array.from(document.querySelectorAll('.history__block-open-btn'));

    elements.forEach(btn => {
        const block = btn.closest('.history__block');
        let open = false;
        const btnOriginalText = btn.querySelector('span').textContent;
        const btnChangedText = btn.getAttribute('data-text');

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (open) {
                block.classList.remove('revealed');
                btn.querySelector('span').textContent = btnOriginalText;
                btn.classList.remove('active');
                open = false;
                ScrollTrigger.refresh();
            } else {
                block.classList.add('revealed');
                btn.querySelector('span').textContent = btnChangedText;
                btn.classList.add('active');
                open = true;
                ScrollTrigger.refresh();
            }
        })
    })
    
}