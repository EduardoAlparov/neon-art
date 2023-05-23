export default () => {
  const vacanciesLinks = document.querySelectorAll('.vacancies-opened__link');
  const vacanciesModals = document.querySelectorAll('.vacancies-modal');

  Array.from(vacanciesLinks).forEach( link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      Array.from(vacanciesLinks).forEach( l => {
        l.classList.remove('vacancies-opened__link--active');
      })

      link.classList.add('vacancies-opened__link--active');

      vacanciesModalOpen(link.parentElement.dataset.target);
    })
  })

  Array.from(vacanciesModals).forEach(vacanciesModal => {
    vacanciesModal.addEventListener('click', (e) => {
      if(vacanciesModal.classList.contains('_is-open')) {
        if(e.target.closest('.vacancies-modal__close-btn') ||
        !e.target.closest('.vacancies-modal__content')) {

          Array.from(vacanciesLinks).forEach( l => {
            l.classList.remove('vacancies-opened__link--active');
          })

          vacanciesModal.classList.remove('_is-open');
          document.body.classList.remove('vacancies-modal-is-iopen');
        }
      }
    })
  });

  function vacanciesModalOpen(target) {
    Array.from(vacanciesModals).forEach(vacanciesModal => {
      if(vacanciesModal.getAttribute('id') === target) {
        vacanciesModal.classList.add('_is-open');
        document.body.classList.add('vacancies-modal-is-iopen');

        (() => {
          const vacanciesRespondeBtn = vacanciesModal.querySelector('.vacancies-modal__responde-btn');
          const vacanciesBody = vacanciesModal.querySelector('.vacancies-modal__body');
          const vacanciesForm = vacanciesModal.querySelector('.vacancies-modal__form-block');
          const vacanciesFormBody = vacanciesModal.querySelector('.form-vacancies__body');

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
        })();
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
  }

  window.vacanciesModalOpen = vacanciesModalOpen;
}
