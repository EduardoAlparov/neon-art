export default () => {
  const vacanciesLinks = document.querySelectorAll('.vacancies-opened__link');
  const vacanciesModal = document.querySelector('.vacancies-modal');
  const vacanciesRespondeBtn = document.querySelector('.vacancies-modal__responde-btn');
  const vacanciesBody = document.querySelector('.vacancies-modal__body');
  const vacanciesForm = document.querySelector('.vacancies-modal__form-block');
  const vacanciesFormBody = document.querySelector('.form-vacancies__body');
  const vacanciesFormLoad = document.querySelector('.form-vacancies__loader-input');
  const mainVacancyButton = document.querySelectorAll('.js-vac-modal');

  Array.from(vacanciesLinks).forEach( link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      Array.from(vacanciesLinks).forEach( l => {
        l.classList.remove('vacancies-opened__link--active');
      })

      link.classList.add('vacancies-opened__link--active');

      vacanciesModalOpen(link.getAttribute('id'));
    })
  })

  vacanciesModal.addEventListener('click', (e) => {
    if(vacanciesModal.classList.contains('_is-open')) {
      if(e.target.closest('.vacancies-modal__close-btn') ||
      !e.target.closest('.vacancies-modal__content')) {

        Array.from(vacanciesLinks).forEach( l => {
          l.classList.remove('vacancies-opened__link--active');
        })

        vacanciesModalClose();
      }
    }
  })

  if(vacanciesRespondeBtn) {
    vacanciesRespondeBtn.addEventListener('click', () => {
      vacanciesForm.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
      vacanciesRespondeBtn.classList.add('vacancies-modal__responde-btn--hidden');
    })

    vacanciesBody.onscroll = () => {
      if(isElementInViewport(vacanciesFormBody)) {
        vacanciesRespondeBtn.classList.add('vacancies-modal__responde-btn--hidden');
      } else {
        vacanciesRespondeBtn.classList.remove('vacancies-modal__responde-btn--hidden');
      }
    }
  }

  function vacanciesModalOpen(id) {
    vacanciesModal.classList.add('_is-open');
    document.body.classList.add('vacancies-modal-is-iopen');
  }

  function vacanciesModalClose() {
    vacanciesModal.classList.remove('_is-open');
    document.body.classList.remove('vacancies-modal-is-iopen');
  }


  window.vacanciesModalOpen = vacanciesModalOpen;
  window.vacanciesModalClose = vacanciesModalClose;

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
  }

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
