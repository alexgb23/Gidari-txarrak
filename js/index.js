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
let usuariosregistrados=[{correo:"alexander.galvez@estudioenpenascal.com",contrasena:1234, nombre:"Alexander Galvez"},{correo:"gorka.jabonero@estudioenpenascal.com",contrasena:1234, nombre:"Gorka Jabonero"}]

let correos=document.querySelector('#iCorreo');
let password=document.querySelector('#iPass');
let usuario

function login(){
    if (correos.value == usuariosregistrados[0].correo && password.value == usuariosregistrados[0].contrasena) {
        // location.href = "html/reserva.html";
        usuario=usuariosregistrados[0].nombre;
        console.log(usuario);
        }
        else if(correos.value == usuariosregistrados[1].correo && password.value == usuariosregistrados[1].contrasena) {
            // location.href = "html/reserva.html";
            usuario=usuariosregistrados[1].nombre;
            console.log(usuario);
        }
      
      else 
        alert('usuario desconocido');
    }

