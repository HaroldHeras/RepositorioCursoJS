//Variables

const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];





//EventListeners

eventListeners();




function eventListeners(){

    formulario.addEventListener("submit", agregarTweet);

    document.addEventListener("DOMContentLoaded", ()=>{             //Por si cuando abrimos la página, el localStorage está vacío

        const storageRecuperado = JSON.parse(localStorage.getItem("listadoTweets"));
        if(storageRecuperado===null){return;}
        tweets = storageRecuperado;
        crearHTML();
    });

    listaTweets.addEventListener("click", borrarTweet);

};





//Funciones



function agregarTweet(e){

    e.preventDefault();

    const tweet = document.querySelector("#tweet").value;

    if(tweet === ""){

        mostrarError("Un mensaje no puede ir vacío");

        return;
    };

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    };

    tweets = [...tweets, tweetObj];

    crearHTML();

    formulario.reset(); 

    
    

};


function mostrarError(error){

    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;

    mensajeError.classList.add("error");

    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);


    setTimeout(()=>{
        mensajeError.remove();
    }, 3000);

};



function crearHTML(){

    limpiarHTML();

    if(tweets.length>0){
        tweets.forEach(tweet =>{

            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.innerText = "X";

            const li = document.createElement("li");
            li.id = tweet.id;                           //Añadimos al tweet también el ID
            li.innerText = tweet.texto;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);

            

        });
    };

    actualizarStorage();


};


function actualizarStorage(){

    localStorage.setItem("listadoTweets", JSON.stringify(tweets));

};



function limpiarHTML(){

    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    };

};


function borrarTweet(e){

    if(e.target.classList.contains("borrar-tweet")){
        
        /*Actualizamos el array de tweets solo con los que tiene en su interior que no coinciden con el ID que nos llega del que 
        ha enviado el evento de "eliminar". Parseamos a Number, porque al crear el tweet y darle el id, lo ha pasado a String. */
        tweets = tweets.filter( tweet => tweet.id!== Number.parseInt(e.target.parentElement.id));


        crearHTML();
        
    };

    
    

};



