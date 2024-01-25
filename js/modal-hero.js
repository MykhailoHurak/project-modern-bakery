const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.js-modal-hero-btn-open');
const modalBtnClose = document.querySelector('.js-modal-hero-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);