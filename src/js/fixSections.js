export default function fixSections() {
    const sections = Array.from(document.querySelectorAll('section'));

    sections.forEach(section => {
        const midnightAttribute = section.getAttribute('data-midnight');

        if (!midnightAttribute) return;
        const blockWrapper = section.closest('.block-wrapper');

        if (!blockWrapper) return;

        section.removeAttribute('data-midnight');
        blockWrapper.setAttribute('data-midnight', midnightAttribute);
    });
}
