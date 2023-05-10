export default () => {
  const introAnchorLink = document.querySelector('.vacancies-intro__button');

  if(!introAnchorLink) return;

  introAnchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    document.getElementById(introAnchorLink.getAttribute("href")).scrollIntoView({
      behavior: 'smooth'
    })
  })
}