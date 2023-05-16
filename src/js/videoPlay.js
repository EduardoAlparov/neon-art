export default function videoPlay() {
    const videoWrapper = document.querySelector('.vacancies-about__video');
    const videoBtn = document.querySelector('.vacancies-about__video-btn')

    if(videoWrapper && videoBtn) {
        videoBtn.addEventListener('click', () => {
            videoWrapper.setAttribute("controls", "controls");
            videoWrapper.play();
            videoBtn.classList.add('visually-hidden');
        })

        videoWrapper.addEventListener("ended", (event) => {
            videoBtn.classList.remove('visually-hidden');
            videoWrapper.removeAttribute("controls");
        })
    }
}
