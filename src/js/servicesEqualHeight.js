import { debounce } from 'lodash';

export default function servicesEqualHeight() {
    const cards = Array.from(document.querySelectorAll('.services__card'));

    const setEqualHeight = () => {
        cards.forEach(card => card.style.setProperty('--equal-height', 'auto'));
        requestAnimationFrame(() => {
            const maxHeight = Math.max(...cards.map(card => card.offsetHeight));

            cards.forEach(card => card.style.setProperty('--equal-height', maxHeight + 'px'));
            
        });
    };

    setEqualHeight();

    window.addEventListener(
        'resize',
        debounce(() => {
            setEqualHeight();
        }, 300)
    );
}
