
/*Le damso a dos botones la funcionalidad de poner en pantalla completa la ventana o ponerla en tamaño normal */

const abrir = document.querySelector("#abrir-pantalla-completa");       //Extraemos los elementos de los botones
const salir = document.querySelector("#salir-pantalla-completa");


abrir.addEventListener("click", abrirPantalla);             //Le ponemos unos Listeners al hacer click
salir.addEventListener("click", salirPantalla);



function abrirPantalla(){                                   //Si le damos al botón de pantalla completa

    document.documentElement.requestFullscreen();
        

}

function salirPantalla(){                               //Si le damos al botón de salir de pantalla completa

    document.exitFullscreen();

}