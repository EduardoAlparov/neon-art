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
import taskGallery from './taskGallery';
import productsSlider from './productsSlider';
import introParallax from './introParallax';
import fixedHeader from './fixedHeader';
import fixedLogo from './fixedLogo';
import imagesLoaded from 'imagesloaded';

import projectsParallax from './projectsParallax';
import hideSideNav from './hideSideNav';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import historyStickyDates from './historyStickyDates';
import servicesEqualHeight from './servicesEqualHeight';
import loadMoreProjects from './loadMoreProjects';
import photoSlider from './photoSlider';
import caseRealisedProjects from './caseRealisedProjects';
import loadMoreNews from './loadMoreNews';
import newsFixedSidebar from './newsFixedSidebar';
import vacanciesIntroLink from './vacanciesIntroLink';
import vacanciesValuesSwiper from './vacanciesValuesSwiper';
import vacanciesReviewsSwiper from './vacanciesReviewsSwiper';
import vacanciesModalsPattern from './vacanciesModalsPattern';
import vacanciesModalOpen from './vacanciesModalOpen';
import videoPlay from './videoPlay';
import fixSections from './fixSections';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    fixSections();
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

    vacanciesIntroLink();
    vacanciesValuesSwiper();
    vacanciesReviewsSwiper();
    vacanciesModalOpen();
    vacanciesModalsPattern();
    videoPlay();

    taskGallery();
    productsSlider();
    fixedHeader();
    projectsParallax();
    historyStickyDates();
    servicesEqualHeight();
    loadMoreProjects();
    loadMoreNews();
    photoSlider();
    caseRealisedProjects();
    fixedLogo();
    newsFixedSidebar();
    let imgLoad = imagesLoaded(document.querySelector('.page-content'));
    function onAlways() {
        ScrollTrigger.refresh();


        const sideMenu = document.querySelector('.side-menu');
        if (sideMenu && window.matchMedia('(min-width: 641px)').matches) {
            $(sideMenu).midnight();
            sectionsMenu();
            hideSideNav();
        }
    }

    imgLoad.on('always', onAlways);

    window.axios = axios;

    document.addEventListener('lazyloaded', () => {
        ScrollTrigger.refresh();
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    realisedProjectsSidebar();
    introParallax();
    setTimeout(() => {
        slidingText();

        document.body.classList.add('animatable');
    }, 300);
});
