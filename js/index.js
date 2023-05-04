/*Modal*/
const openModal = document.getElementById("btn-modal");
const modalCont = document.getElementById("sesion-modal");
const closeModal = document.getElementById("btn-close");

openModal.addEventListener('click', () => {
    modalCont.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modalCont.classList.remove('show');
});