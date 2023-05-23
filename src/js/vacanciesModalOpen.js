export default () => {
    const mainVacancySection = document.querySelector('.vacancies-main');
    const mainVacancyButton = document.querySelectorAll('.js-vac-modal');
    const vacanciesModal = document.querySelector('.vacancies-modal');

    if(!mainVacancySection) return;

    if(mainVacancyButton.length) {
        Array.from(mainVacancyButton).forEach(btn => {
          btn.addEventListener('click', () => {
            vacanciesModal.classList.add('_is-open');
            document.body.classList.add('vacancies-modal-is-iopen');

            if(vacanciesModal.classList.contains('_is-open')) {
              vacanciesModal.addEventListener('click', (e) => {
                if(e.target.closest('.vacancies-modal__close-btn') ||
                !e.target.closest('.vacancies-modal__content')) {
                  vacanciesModal.classList.remove('_is-open');
                  document.body.classList.remove('vacancies-modal-is-iopen');
                }
              })
            }
          })
        })
    }
}
