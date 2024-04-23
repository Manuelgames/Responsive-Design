const usuario = document.querySelector('#usuario');
const inicioB = document.querySelector('#inicioSesion');


inicioB.addEventListener('click', iniciarS);


function iniciarS(){
    console.log(usuario.value);
}

