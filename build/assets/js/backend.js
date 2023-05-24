document.addEventListener('DOMContentLoaded', () => {
    const loadMoreProjectsBtn = document.querySelector('.js-load-more-projects');
    if (loadMoreProjectsBtn) {
        loadMoreProjectsBtn.addEventListener('click', event => {
            event.preventDefault();

            if (window.axios) {
                let loadPageCounter = 1;
                axios
                    .get(window.location.href, {
                        params: {
                            page: ++loadPageCounter
                        }
                    })
                    .then(response => {
                        const parser = new DOMParser();
                        const nextPageHtml = parser.parseFromString(response.data, 'text/html');

                        const nextPageItems = Array.from(nextPageHtml.querySelectorAll('.realised-projects__catalog-list-item'));
                        const nextPageShowMore = nextPageHtml.querySelector('.js-load-more-projects');

                        if (typeof window.addNewProjects === 'function') {
                            window.addNewProjects(...nextPageItems);
                        }

                        if (!nextPageShowMore) {
                            const showMoreWrapper = document.querySelector('.realised-projects__btn-wrapper');
                            showMoreWrapper.remove();
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    }
    const loadMoreNewsBtn = document.querySelector('.js-load-more-news');
    if (loadMoreNewsBtn) {
        loadMoreNewsBtn.addEventListener('click', event => {
            event.preventDefault();

            if (window.axios) {
                let loadPageCounter = 1;
                axios
                    .get(window.location.href, {
                        params: {
                            page: ++loadPageCounter
                        }
                    })
                    .then(response => {
                        const parser = new DOMParser();
                        const nextPageHtml = parser.parseFromString(response.data, 'text/html');

                        const nextPageItems = Array.from(nextPageHtml.querySelectorAll('.news__catalog-list-item'));
                        const nextPageShowMore = nextPageHtml.querySelector('.js-load-more-news');

                        if (typeof window.addNews === 'function') {
                            window.addNews(...nextPageItems);
                        }

                        if (!nextPageShowMore) {
                            const showMoreWrapper = document.querySelector('.news__btn-wrapper');
                            showMoreWrapper.remove();
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    }

    const caseForms = Array.from(document.querySelectorAll('.contact-form'));

    caseForms.forEach(element => {
        const form = element.querySelector('form');
        const formLayer = element.querySelector('.contact-form__layer--form');
        const successLayer = element.querySelector('.contact-form__layer--success');
        const backBtn = element.querySelector('.contact-form__back-link');

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                form.reset();
                $(form)
                    .parsley()
                    .reset();
                formLayer.classList.remove('active');
                successLayer.classList.add('active');
            }
        });

        if (backBtn) {
            backBtn.addEventListener('click', event => {
                event.preventDefault();
                formLayer.classList.add('active');
                successLayer.classList.remove('active');
            });
        }
    });

    const contactUsForms = Array.from(document.querySelectorAll('.contacts__write-us'));

    contactUsForms.forEach(element => {
        const form = element.querySelector('form');
        const formLayer = element.querySelector('.contacts__form-layer--form');
        const successLayer = element.querySelector('.contacts__form-layer--success');
        const backBtn = element.querySelector('.contacts__form-success-back-link');

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                form.reset();
                $(form)
                    .parsley()
                    .reset();
                formLayer.classList.remove('active');
                successLayer.classList.add('active');
            }
        });

        if (backBtn) {
            backBtn.addEventListener('click', event => {
                event.preventDefault();
                formLayer.classList.add('active');
                successLayer.classList.remove('active');
            });
        }
    });

    const contactModals = Array.from(document.querySelectorAll('.contact-modal'));

    contactModals.forEach(element => {
        const form = element.querySelector('form');
        const formLayer = element.querySelector('.modal-contact-form__layer--form');
        const successLayer = element.querySelector('.modal-contact-form__layer--success');
        const backBtn = element.querySelector('.modal-contact-form__success-link');

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                form.reset();
                $(form)
                    .parsley()
                    .reset();
                formLayer.classList.remove('active');
                successLayer.classList.add('active');
            }
        });

        if (backBtn) {
            backBtn.addEventListener('click', event => {
                event.preventDefault();
                formLayer.classList.add('active');
                successLayer.classList.remove('active');
            });
        }
    });

    const vacanciesModals = Array.from(document.querySelectorAll('.vacancies-modal'));
    vacanciesModals.forEach(element => {
        const form = element.querySelector('form');
        const formLayer = element.querySelector('.form-vacancies__body');
        const successLayer = element.querySelector('.modal-contact-form__layer--success');
        const backBtn = element.querySelector('.modal-contact-form__success-link');

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                form.reset();
                $(form)
                    .parsley()
                    .reset();
                formLayer.classList.remove('active');
                successLayer.classList.add('active');
            }
        });

        if (backBtn) {
            backBtn.addEventListener('click', event => {
                event.preventDefault();
                formLayer.classList.add('active');
                successLayer.classList.remove('active');
            });
        }
    });
});
