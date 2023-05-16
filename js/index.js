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
    openModalIndex.addEventListener('click', () => {
        modalContIndex.classList.add('show');
    });
}

if (closeModalIndex) {
    closeModalIndex.addEventListener('click', () => {
        modalContIndex.classList.remove('show');
    });
}

// //Modal reserva
if (openModalReseva) {
    openModalReseva.addEventListener('click', () => {
        modalContReserva.classList.add('show');

    });
}
if (closeModalReserva) {
    closeModalReserva.addEventListener('click', () => {
        modalContReserva.classList.remove('show');
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
// let usuariosregistrados = [{ correo: "alexander.galvez@estudioenpenascal.com", contrasena: 1234, nombre: "Alexander Galvez", reserva: "" },
// { correo: "gorka.jabonero@estudioenpenascal.com", contrasena: 1234, nombre: "Gorka Jabonero", reserva: "" },
// { correo: "chaimae.elbaghdadi@estudioenpenascal.com", contrasena: 1234, nombre: "Chaimae Elbaghdadi ", reserva: "" }];


let correos = document.querySelector('#iCorreo');
let password = document.querySelector('#iPass');


//Login de usuarios
function login() {

    var arrayGuardado = JSON.parse(localStorage.getItem('My array'));

    console.log(arrayGuardado.length);
    for (let i = 0; i < arrayGuardado.length; i++) {
        if ((correos.value == arrayGuardado[i].correo && password.value == arrayGuardado[i].contrasena)) {
            localStorage.setItem("Usuario", JSON.stringify(arrayGuardado[i].nombre));
            location.href = "html/reserva.html";


        } else {
            console.log("Mierda");
        }
    }
    // for (let i = 0; i < usuariosregistrados.length; i++) {
    //     if ((correos.value == usuariosregistrados[i].correo && password.value == usuariosregistrados[i].contrasena)) {
    //         location.href = "html/reserva.html";
    //     } else {
    //         console.log("Mierda");
    //     }
    // } 
}


function guardarUsu() {

    console.log("*****************************************************************************************************");
    console.log(usuariosregistrados); // compruebo antes del cambio

    let vCorreo = document.registrar.nCorreo.value;
    let vContra = document.registrar.nPass.value;
    let vNombre = document.registrar.nNombre.value;


    if (vCorreo.trim() != "" && vContra.trim() != "" && vNombre.trim() != "") {
        usuariosregistrados.push({ correo: vCorreo, contrasena: vContra, nombre: vNombre, });

        localStorage.setItem("My array", JSON.stringify(usuariosregistrados));

        var guardado = localStorage.getItem('My array');
        console.log('Valor obtenido: ', JSON.parse(guardado)); // esto es para ver si va  se van sumando las entradas


        location.href = "../index.html";
    }
    else {
        alert("Introduzca todos los campos");
    }

}

function atras() {
    location.href = "../index.html";
}




/* Paginas reserva.js*/
let dias;
let mes = "Mayo";
let ano = "2023";
let fecha;
let registrofinal = new Array();
var registrofinal1 = "";

function recogDatos(a) {
    dias = a;
}

function recogHora() {
    console.log("*********************************************");

    // Paso 1: Guardo la fecha introducida en la variable fecha
    guardarHora()

    //En caso de que no haya ninguna hora reservada ya introduzco la hora elegida
    horaDefault()
}

function guardarHora() {
    var hora = document.getElementById('btn-horas');
    var reserva = hora.options[hora.selectedIndex].value;
    fecha = dias + " " + mes + " " + ano + " " + reserva;

    console.log("Fecha: " + fecha);
}


function horaDefault() {
    if (registrofinal1 != null) {
        //Me traigo todos los valores que tenga guardado en el array del localStorage
        registrofinal1 = JSON.parse(localStorage.getItem("Reservas"));
        console.log('Valor en localStorage: ' + registrofinal1);

        //Recorro y comparo a ver si lo que está guardado en el localstorage coincide con la fecha nueva que estoy introduciendo
        iterarHoras();

    } else {
        localStorage.setItem("Reservas", JSON.stringify(fecha));
        registrofinal1 = localStorage.getItem('Reservas');
        console.log("Valor en Local tras el cambio: " + JSON.parse(registrofinal1));
    }
}



function iterarHoras() {
    console.log("Anchura del array: " + registrofinal1.length);
    for (let i = 0; i < registrofinal1.length; i++) {

        //En caso de que ya exista esa fecha en el array devuelvo que es fecha ya existe
        if ((fecha == registrofinal1[i])) {
            alert("Hora y fecha ya reservada");
            registrofinal1.splice(-1, 1);
        }
        //En caso contrario, añadimos esta nueva fecha al array  
        else {

            //Metemos la nueva fecha en el array
            registrofinal.push(fecha);

            console.log("Cambio en el array: " + registrofinal);
            //Subimos ese nuevo valor al localStorage
            localStorage.setItem("Reservas", JSON.stringify(registrofinal));
            console.log("Nueva reserva");
            break;
        }
    }
}


function terminar() {
    let fechaimprimir = dias + " " + mes + " " + ano;
    var hora = document.getElementById('btn-horas');
    var reserva = hora.options[hora.selectedIndex].value;
    document.getElementById('sdia1').innerHTML = fechaimprimir;
    document.getElementById('sHora1').innerHTML = reserva;
    document.getElementById('sNombre1').innerHTML = JSON.parse(localStorage.getItem("Usuario"));

}



// /* Paginas reserva.js*/
/* let dias;
let mes = "Mayo";
let ano = "2023";
let fecha;
let registrofinal = new array();
// var registrofinal1;


function recogDatos(a) {
    dias = a;
}

//función que se encarga de la reserva de horas
function recogHora() {
    console.log("*********************************************");

    // guardo la hora y día seleccionado
    guardarHora()

    //En caso de que no haya ninguna hora reservada ya introduzco la fecha elegida
    horaDefault()
}

function guardarHora() {
    var hora = document.getElementById('btn-horas');
    //Entre todas las opciones del select me quedo con el valor de la hora seleccionada
    var reserva = hora.options[hora.selectedIndex].value;
   // Guardo el día y la hora introducida en la variable fecha
    fecha = dias + " " + mes + " " + ano + " " + reserva;

    console.log("Fecha: " + fecha);
}


function horaDefault() {
    // Si no hay ningún valor introducido en la variable registrofinal, lo introduzco para que no dé error
    if (registrofinal != null) {
        //Me traigo todos los valores que tenga guardado en el array del localStorage
        registrofinal = JSON.parse(localStorage.getItem("Reservas"));
        console.log('Valor en localStorage: ' + registrofinal);

        //Recorro y comparo a ver si lo que está guardado en el localstorage coincide con la fecha nueva que estoy introduciendo
        iterarHoras();

    } else {
        localStorage.setItem("Reservas", JSON.stringify(fecha));
        registrofinal = JSON.parse(localStorage.getItem('Reservas'));
        console.log("Primer valor en localStorage: " + registrofinal);
    }
}


function iterarHoras() {
    console.log("Anchura del array: " + registrofinal.length);
    for (let i = 0; i < registrofinal.length; i++) {

        //En caso de que ya exista esa fecha en el array devuelvo que es fecha ya existe
        if ((fecha == registrofinal[i])) {
            alert("Hora y fecha ya reservada");
            registrofinal.splice(-1, 1);
        }
        //En caso contrario, añadimos esta nueva fecha al array
        else {
            console.log("Cambio en el array: " + registrofinal);
            //Subimos ese nuevo valor al localStorage
            localStorage.setItem("Reservas", JSON.stringify(registrofinal));
            console.log("Nueva reserva");
            break;
        }
    }
} */


/********************************************************************************************************************************************* */

//localStorage.removeItem('Reservas');



/********************************************************************************************************************************************* */
/* Paginas reserva.js*/
// let dias;
// let mes = "Mayo";
// let ano = "2023";
// let fecha;
// let registrofinal = new Array();

// function recogDatos(a) {
//     dias = a;
// }

// function recogHora() {
//     console.log("*********************************************");

//     // Paso 1: Guardo la fecha introducida en la variable fecha
//     var hora = document.getElementById('btn-horas');
//     var reserva = hora.options[hora.selectedIndex].value;
//     fecha = dias + " " + mes + " " + ano + " " + reserva;

//     console.log("Fecha: " + fecha);



//     //Me traigo todos los valores que tenga guardado en el array del localStorage
//     var registrofinal1 = JSON.parse(localStorage.getItem("Reservas"));
//     console.log('Valor en localStorage: ' + registrofinal1);

//     //Recorro y comparo a ver si lo que está guardado en el localstorage coincide con la fecha nueva que estoy introduciendo
//     console.log("Anchura del array: " + registrofinal1.length);
//     for (let i = 0; i < registrofinal1.length; i++) {

//         //En caso de que ya exista esa fecha en el array devuelvo que es fecha ya existe
//         if ((fecha == registrofinal1)) {
//             alert("Hora y fecha ya reservada");
//         }

//         //En caso contrario, añadimos esta nueva fecha al array  
//         else {

//             //Metemos la nueva fecha en el array
//             registrofinal.push(fecha);

//             console.log("Cambio en el array: " + registrofinal);
//             //Subimos ese nuevo valor al localStorage
//             localStorage.setItem("Reservas", JSON.stringify(registrofinal));
//             console.log("Nueva reserva");
//         }
//     }
// }


