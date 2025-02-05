


/* Trabajamos con el botón del buscador y sus funciones*/

const formulario = document.querySelector(".formulario");           //Extraemos el botón del buscador en una variable


formulario.addEventListener("submit", (e)=> {                       /*Le añadimos un EventListener. En concrteo un "submit" que 
                                                                    envía la información.*/

       e.preventDefault();                              //Con esta orden, anulamos la acción por defecto que tiene el "submit" programada.




        console.log(e);                                 //Decimos que nos imprima el evento

        console.log("Has pulsado Submit");

});