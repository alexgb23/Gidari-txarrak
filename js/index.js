/*Constantes modal Index*/
const openModalIndex = document.getElementById("btn-modal");
const modalContIndex = document.getElementById("sesion-modal");
const closeModalIndex = document.getElementById("btn-close");

/* Constantes modal reserva*/
const openModalReseva = document.getElementById("btn-siguiente");
const modalContReserva = document.getElementById("sesion-modal");
const closeModalReserva = document.getElementById("btn-close");

//Modal index
openModalIndex.addEventListener('click', () => {
    modalContIndex.classList.add('show');
});

closeModalIndex.addEventListener('click', () => {
    modalContIndex.classList.remove('show');
});

//Modal reserva
openModalReseva.addEventListener('click', () => {
    modalContReserva.classList.add('show');
});

closeModalReserva.addEventListener('click', () => {
    modalContReserva.classList.remove('show');
});


/*aside-lateral*/
let lateral = document.getElementById('lateral');
let flecha = document.getElementById('flecha');
function entrar() {

    lateral.style.display = "block";
    flecha.style.visibility = "hidden"
}

function salir() {

    lateral.style.display = "none";
    flecha.style.visibility = "visible"
}


//Recogida de datos del calendario

function recogDatos(a) {

    console.log('hora: ' + a + " de mayo");

}
