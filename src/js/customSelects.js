import Choices from 'choices.js';

export default function customSelects() {
    const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

    customSelects.forEach(select => {
        const instance = new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false
        });

        instance.passedElement.element.addEventListener(
            'choice',
            () => {
               

                setTimeout(() => {
                    $(instance.passedElement.element)
                        .parsley()
                        .validate();
                }, 100);
            },
            false
        );
    });
}
