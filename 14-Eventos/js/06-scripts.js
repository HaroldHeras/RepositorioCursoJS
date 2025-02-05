
/*EVENT BUBBLING. Es un problema común que consite en crear elementos diferentes para cada uno de los elementos de un contenedor. 
Si ponemos un evento al contenedor en sí, si activamos el evento de uno de sus elementos anidados, también saltará el evento del contenedor.
De esta forma quizá nos salte el evento del contenedor cuando solo queríamos activar el evento del elemento.*/


const cardDiv = document.querySelector(".card");                //Obtenemos el elemento del contenedor
const infoDiv = document.querySelector(".info");                //Obtenemos un elemento anidado del contenedor (elemento hijo)
const tituloDiv = document.querySelector(".titulo");            //Obtenemos un elemento anidado del otro elemento (elemento nieto)


cardDiv.addEventListener("click", (e)=> {                       //Creamos un evento para el elemento contenedor

        e.stopPropagation;                                      /*Poniendo este método, evito que puedan saltar eventos secundarios 
                                                                de otros elementos padre o hijo*/ 
        console.log("Click en card");
});



infoDiv.addEventListener("click", (e)=> {                       //Creamos un evento para el elemento hijo

    e.stopPropagation;
    console.log("Click en info");
});


tituloDiv.addEventListener("click", (e)=> {                     //Creamso un evento para el elemento nieto

    e.stopPropagation;
    console.log("Click en titulo");
});



