import { debounce } from 'lodash';

export default function sectionsMenu() {

    if (window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-sections-menu'));


    elements.forEach(element => {
        const sectionsMenuLinks = Array.from(element.querySelectorAll('.js-sections-menu-link'));

        const items = sectionsMenuLinks.map(link => {
            const id = link.hash.replace('to-', '');
            const correspondingSection = document.querySelector(id);
            const blockStart = Math.floor(correspondingSection.getBoundingClientRect().top + window.scrollY);
            const blockEnd = blockStart + correspondingSection.offsetHeight;
            return {
                link,
                id,
                correspondingSection,
                blockStart,
                blockEnd
            };
        });

        window.addEventListener(
            'resize',
            debounce(() => {
                items.forEach(item => {
                    item.blockStart = Math.floor(item.correspondingSection.getBoundingClientRect().top + window.scrollY);
                    item.blockEnd = item.blockStart + item.correspondingSection.offsetHeight;
                });
            }, 150)
        );

        let startPos = window.pageYOffset;

        function setActiveItem() {
            const currentCheckingDistance = startPos + window.innerHeight / 2;
            const itemsAfterScrollPosition = items.filter(
                item => currentCheckingDistance >= item.blockStart && currentCheckingDistance <= item.blockEnd
            );

            items.forEach(item => item.link.classList.remove('active'));

            itemsAfterScrollPosition.length && itemsAfterScrollPosition[0].link.classList.add('active');
        }

        setActiveItem();

        function writeLayout() {
            setActiveItem();
        }

        window.addEventListener(
            'scroll',
            () => {
                let newPos = window.pageYOffset;

                if (startPos !== newPos) {
                    writeLayout();
                }

                startPos = newPos;
            },
            false
        );
    });
}
