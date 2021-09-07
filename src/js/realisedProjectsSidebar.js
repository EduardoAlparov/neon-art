import './resizeSensor';
import StickySidebar from 'sticky-sidebar';

export default function realisedProjectsSidebar() {
    const sidebar = document.querySelector('.js-realised-projects-sticky-sidebar');

    if (!sidebar) return;

    window.stickySidebar = new StickySidebar(sidebar, {
        topSpacing: document.querySelector('.page-header').offsetHeight + 40,
        bottomSpacing: 40,
        containerSelector: '.realised-projects__layout',
        innerWrapperSelector: '.realised-projects__sidebar-inner',
        minWidth: 641
    });
}
