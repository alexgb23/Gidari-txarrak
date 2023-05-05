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
function entrar(){ 

    document.getElementById('lateral').style.display="block";
    document.getElementById('flecha').style.visibility="hidden"
}

function salir(){ 

    document.getElementById('lateral').style.display="none";
    document.getElementById('flecha').style.visibility="visible"
}


