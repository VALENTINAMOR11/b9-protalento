
let contenedor = document.getElementById('contenedor');
let formulario =document.getElementById('formulario');
contenedor.style.display ='none';

function borrar(){
    contenedor.innerHTML = "";
}

function modoOscuro(){
    contenedor.style.color = "white";
    contenedor.style.backgroundColor = "#282828";
}
 
function modoLuz(){
    contenedor.style.color = "";
    contenedor.style.backgroundColor = "";
}


