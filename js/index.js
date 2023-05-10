//Modal
const openModalIndex = document.getElementById("btn-modal");
const modalContIndex = document.getElementById("sesion-modal");
const closeModalIndex = document.getElementById("btn-close");

/* Constantes modal reserva*/
const openModalReseva = document.getElementById("btn-siguiente");
const modalContReserva = document.getElementById("reser-modal");
const closeModalReserva = document.getElementById("close-res");

//Modal index
if (openModalIndex) {
    openModalIndex.addEventListener('click', function (event) {
        modalContIndex.classList.add('show');
        event.preventDefault();
    });
}

if (closeModalIndex) {
    closeModalIndex.addEventListener('click', function (event) {
        modalContIndex.classList.remove('show');
        event.preventDefault();
    });
}

// //Modal reserva
if (openModalReseva) {
    openModalReseva.addEventListener('click', function (event) {
        modalContReserva.classList.add('show');
        event.preventDefault();
    });
}
if (closeModalReserva) {
    closeModalReserva.addEventListener('click', function (event) {
        modalContReserva.classList.remove('show');
        event.preventDefault();
    });
}


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

/*validador contraseña*/
let usuariosregistrados = [{ correo: "alexander.galvez@estudioenpenascal.com", contrasena: 1234, nombre: "Alexander Galvez" }, { correo: "gorka.jabonero@estudioenpenascal.com", contrasena: 1234, nombre: "Gorka Jabonero" }, { correo: "chaimae.elbaghdadi@estudioenpenascal.com", contrasena: 1234, nombre: "Chaimae Elbaghdadi " }];


let correos = document.querySelector('#iCorreo');
let password = document.querySelector('#iPass');


//Login de usuarios
function login() {

    for (let i = 0; i < usuariosregistrados.length; i++) {
        if ((correos.value == usuariosregistrados[i].correo && password.value == usuariosregistrados[i].contrasena)) {
            location.href = "html/reserva.html";
        } else {
            console.log("Mierda");
        }
    }
}


function guardarUsu() {

    console.log("*****************************************************************************************************");
    console.log(usuariosregistrados); // compruebo antes del cambio

    let vCorreo = document.registrar.nCorreo.value;
    let vContra = document.registrar.nPass.value;
    let vNombre = document.registrar.nNombre.value;

    usuariosregistrados.push({ correo: vCorreo, contrasena: vContra, nombre: vNombre, });

    console.log(usuariosregistrados); // esto es para ver si va  se van sumando las entradas


    if (vCorreo.trim() != "" && vContra.trim() != "" && vNombre.trim() != "") {

        location.href = "../index.html";
    } else {
        alert("Introduzca todos los campos");
    }
}


/* Paginas reserva.js*/
let dias;
let mes = "Mayo";
let ano = "2023";
let fecha;
let registrofinal = new Array()

function recogDatos(a) {
    dias = a;
}


function recogHora() {

    var hora = document.getElementById('btn-horas');
    var reserva = hora.options[hora.selectedIndex].value;
    fecha = dias + " " + mes + " " + ano + " " + reserva;
    var data = new Date(fecha);
    registrofinal.push(fecha);
    console.log(registrofinal);
}