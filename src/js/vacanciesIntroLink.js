export default () => {
  const introAnchorLink = document.querySelector('.js-scrolling-button');

  if(!introAnchorLink) return;

  introAnchorLink.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById(introAnchorLink.getAttribute("href")).scrollIntoView({
      behavior: 'smooth'
    })
  })
}
