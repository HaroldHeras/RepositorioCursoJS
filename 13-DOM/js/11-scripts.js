

/**Modificamos el CSS de la página web desde JS. Le damos funcionalidad al botón del footer de la página para que expanda 
 * o repliegue el menú emergente.
 */


const btnFlotante = document.querySelector(".btn-flotante");            //Almacenamos en una variable el botón

const footer = document.querySelector(".footer");                       //Almacenamos en una variable el footer


btnFlotante.addEventListener("click", mostrarOcultarFooter);            /*Añadimos un EventListener al botón. Le pasamso por parámetro
                                                                        cuando se va a ctivar, y que va a hacer al activarse*/




/*Creamos al función que responderá al evento del botón. Cambiando la clase del footer y del botón, haremos que haga una cosa u otra*/
function mostrarOcultarFooter () {                                      
    if(footer.classList.contains("activo")){                //Si el footer contiene la clase "activo" entonces se le quita al footer y al botón
        footer.classList.remove("activo");
        btnFlotante.classList.remove("activo");
        btnFlotante.textContent = "Iidoma y Moneda";        
    }else{                                                  //Si no al contiene, se le añade
        footer.classList.add("activo");
        btnFlotante.classList.add("activo");
        btnFlotante.textContent = "X Cerrar";
    }

    

};