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
});
