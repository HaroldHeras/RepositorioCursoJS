

/**Colocamos un EventListener al documento. Vemos la prioridad o la velocidad a la hora de ejecutarsen las lineas de comando */

console.log(1);                                             //Imprime esto primero




document.addEventListener("DOMContentLoaded", ()=> {        //Añadimos un evento que responde a cuando se carga el documento HTML
    console.log(2);                                         //Este se ejecuta en tercer lugar, por el tiempo de carga del documento
});


console.log(3);                                             //Esto lo imprime en segundo lugar

