export default function pageHeaderNav() {
    if (window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-page-header-nav'));

    elements.forEach(element => {
        const links = Array.from(element.querySelectorAll('.page-header__nav-link'));

        const setActiveLink = index => {
            if (index == null) {
                links.forEach(link => link.classList.remove('inactive'));
                return;
            }
            links.forEach((link, linkIndex) => {
                if (linkIndex === index) {
                    link.classList.remove('inactive');
                } else {
                    link.classList.add('inactive');
                }
            });
        };

        links.forEach((link, linkIndex) => {
            link.addEventListener('mouseenter', () => {
                setActiveLink(linkIndex);
            });

            link.addEventListener('mouseleave', () => {
                setActiveLink(null);
            });
        });
    });
}
