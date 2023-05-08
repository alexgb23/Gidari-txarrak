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
let lateral= document.getElementById('lateral');
let flecha=  document.getElementById('flecha');
function entrar(){ 

    lateral.style.display="block";
    flecha.style.visibility="hidden"
}

function salir(){ 

    lateral.style.display="none";
    flecha.style.visibility="visible"
}

/*validador contraseña*/
let usuariosregistrados=[{correo:"alexander.galvez@estudioenpenascal.com",contrasena:1234},{correo:"gorka.jabonero@estudioenpenascal.com",contrasena:1234}]

let correos=document.querySelector('#iCorreo');
let password=document.querySelector('#iPass');

function login(){
    if (correos.value == usuariosregistrados[0].correo && password.value ==usuariosregistrados[0].contrasena) {
        location.href = "html/reserva.html";
      } else {
        alert('usuario desconocido');
       
}
}