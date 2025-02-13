//Variables

const formulario = document.querySelector("#formulario");           //Extraemos los elementos que necesitamos
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];                                                    //Creamos el Array en el que almacenaremos los tweets





//EventListeners

eventListeners();                                                   //Ejecutamos el método que carga todos los eventListeners



/*Metodo para cargar todos los EventListeners */
function eventListeners(){

    formulario.addEventListener("submit", agregarTweet);                    //Evento al darle submit


    document.addEventListener("DOMContentLoaded", ()=>{                     //Evento al cargarse la página
        //Cargamos del localStorage los tweets al array
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];          //Aquí decimos que si lo primero da null, haga lo otro(un array vacio)
        crearHTML();                                                        //Creamos el HTML con los tweets que se hayan cargado del localStorage
    });

};





//Funciones


/*Función para validar un tweet y cargarlo en el array de tweets*/
function agregarTweet(e){

    e.preventDefault();                                             //Prevenimos la acción por defecto

    const tweet = document.querySelector("#tweet").value;           //Extraemos lo que está escrito en el campo de escribir

    if(tweet === ""){           //Si está vacío, crea un error y no deja crearlo

        mostrarError("Un mensaje no puede ir vacío");

        return;
    };

    const tweetObj = {                      //Creamos un objeto para almacenar la info.
        id: Date.now(),             //Creamos un atributo "id" usando el método que nos da la hora en milisegundos, asegurandonos así que ningún tweet tenga el mismo
        texto: tweet                //Almacenamos lo que hemos escrito
    };

    tweets = [...tweets, tweetObj];             //Le damos al array de tweets los valores que ya tenía y el nuevo

    crearHTML();                                //Creamos el código HTML

    formulario.reset();                         //Reseteamos los campos del formulario

    
};


/*Función para generar un mensaje de error en caso de haber intentado crear un tweet vacío */
function mostrarError(error){

    const mensajeError = document.createElement("p");               //Creamos un elemento y le damos el texto que recibimos por parámetro
    mensajeError.textContent = error;

    mensajeError.classList.add("error");                            //Le añadimos la clase que le da formato

    const contenido = document.querySelector("#contenido");        //Seleccionamos el elemento en el que va a aprecer el mensaje de error
    contenido.appendChild(mensajeError);                            //Agregamos el error a ese elemento


    setTimeout(()=>{                        //Creamos un Timeout que borrará el mensaje de error pasados 3 segundos
        mensajeError.remove();
    }, 3000);

};


/*Función creada para crear el código HTML que mostrará el listado de tweets */
function crearHTML(){

    limpiarHTML();                                  //Primero limpiamos para que no se acumulen con los anteriores

    if(tweets.length>0){                            //Si el array de tweets tiene algo se ejecutará este código

        tweets.forEach(tweet =>{                                    //Con cada tweet almacenado en el array

            const btnEliminar = document.createElement("a");        //Creamos un elemento
            btnEliminar.classList.add("borrar-tweet");              //Le añadimos la clase que le dará formato
            btnEliminar.innerText = "X";                            //Le añadimos la "X" que aparecerá
            btnEliminar.onclick = ()=> {                            //Le añadimos un evento que se ejecutará al hacer click
                borrarTweet(tweet.id);                              //Mandamos por parámetro el id de este tweet
            };

            const li = document.createElement("li");                //Creamos otro elemento que contendrá el anterior
            li.innerText = tweet.texto;                             //Le añadimos el texto que tiene el tweet
            li.appendChild(btnEliminar);                            //Le añadimos el botón de eliminar como elemento hijo
            listaTweets.appendChild(li);                            //Agregamos este elemento padre en el elemento que contendrá la lista de tweets

        });
    };

    sincronizarStorage();                                           //Actualizamos el localStorage


};

/*Función creada para actualizar el localStorage con el array de tweets */
function sincronizarStorage(){

    localStorage.setItem("tweets", JSON.stringify(tweets) );  /*Introducimos el elemento, parseandolo a String. Si ya existe un
                                                                elemento con el mismo nombre, simplemente se actualizará*/

};


/*Función creada para borrar tweets */
function borrarTweet(id){

    tweets = tweets.filter( tweet => tweet.id!==id);        /*Actualizamos el array de tweets pasandole solo los que no coincidan
                                                            con el "id" que hemos recibido por parámetro*/

    crearHTML();                                            //Volvemos a crear el HTML con el array ya actualizado

};


/*Función creada para limpiar el HTML */
function limpiarHTML(){

    while(listaTweets.firstChild){                              //Si en ese elemento hay elementos hijo, les borrará de uno en uno
        listaTweets.removeChild(listaTweets.firstChild);
    };

};