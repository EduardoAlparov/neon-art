export default function revealHistoryBlock() {
    document.addEventListener('click', event => {
        if (event.target.matches('.history__block-open-btn') || event.target.closest('.history__block-open-btn')) {
            event.preventDefault();
            const block = event.target.closest('.history__block');

            block.classList.add('revealed');
        }
    })
}