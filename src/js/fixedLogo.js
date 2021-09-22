export default function fixedLogo() {
    const introLogo = document.querySelector('.intro__logo-wrapper-inner:not(.not-sticky)');

    if (!introLogo || window.matchMedia('(max-width: 640px)').matches) return;

    const setFixed = () => {
        introLogo.style.top = '';
        introLogo.style.left = '';
        introLogo.style.position = 'fixed';
        introLogo.style.zIndex = 300;
        introLogo.classList.add('fixed');
        introLogo.style.transform = 'none';
        requestAnimationFrame(() => {
            const newTop = introLogo.getBoundingClientRect().top;
            const newLeft = introLogo.getBoundingClientRect().left;
            introLogo.style.top = `${newTop}px`;
            introLogo.style.left = `${newLeft}px`;
            introLogo.style.transform = '';
        });
    };

    setFixed();

    window.addEventListener('resize', () => {
        setFixed();
    });
}
