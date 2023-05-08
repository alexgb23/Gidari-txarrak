/*Modal iniciar sesión*/
const openModal = document.getElementById("btn-siguiente");
const modalCont = document.getElementById("sesion-modal");
const closeModal = document.getElementById("btn-close");

openModal.addEventListener('click', () => {
    console.log("He entrau");
    modalCont.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modalCont.classList.remove('show');
});

