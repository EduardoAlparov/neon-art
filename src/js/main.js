import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import pressCenter from './pressCenter';
import accordions from './accordions';
import modals from './modals';
import datepicker from './datepicker';
import menu from './menu';
import menuSlider from './menuSlider';
import numbersSlider from './numbersSlider';
// import projectsSlider from './projectsSlider';
import slidingText from './numbers';
import mobileMenuAccordions from './mobileMenuAccordions';
import awardsSlider from './awardsSlider';
import partnersSlider from './partnersSlider';
import teamSlider from './teamSlider';
import fancybox from './fancybox';
import companyHistorySlider from './companyHistorySlider';

import './midnight';
import historySlider from './historySlider';
import revealHistoryBlock from './revealHistoryBlock';
import sectionsMenu from './sectionsMenu';
import realisedProjectsSidebar from './realisedProjectsSidebar';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    pressCenter();
    menu();
    menuSlider();
    numbersSlider();
    // projectsSlider();
    mobileMenuAccordions();
    awardsSlider();
    partnersSlider();
    teamSlider();
    fancybox();
    companyHistorySlider();
    historySlider();
    revealHistoryBlock();
    realisedProjectsSidebar();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
    slidingText();

    const sideMenu = document.querySelector('.side-menu');
    if (sideMenu && window.matchMedia('(min-width: 641px)').matches) {
        $(sideMenu).midnight();
        sectionsMenu();
    }
});
