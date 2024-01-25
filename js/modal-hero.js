const modalHero = document.querySelector('.backdrop-hero');
const modalBtnOpenHero = document.querySelector('.js-modal-hero-btn-open');
const modalBtnCloseHero = document.querySelector('.js-modal-hero-btn-close');

const toggleModalHero = () => modalHero.classList.toggle('is-hidden');

modalBtnOpenHero.addEventListener('click', toggleModalHero);
modalBtnCloseHero.addEventListener('click', toggleModalHero);