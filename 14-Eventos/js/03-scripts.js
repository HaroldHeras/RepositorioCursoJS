

/*Trabajamos con eventos de teclado*/


const busqueda = document.querySelector(".busqueda");           //Extraemos en una variable el elemento de la barra de busqueda de la página


busqueda.addEventListener("keydown", (e)=> {                //Evento al pulsar una tecla
      console.log("Pulsando tecla....");  
});



busqueda.addEventListener("keyup", (e)=> {                  //Evento al soltar la tecla
    console.log("Soltando tecla....");  
});


busqueda.addEventListener("blur", (e)=> {                   //Evento al quitar el foco del elemento(En este caso, la barra de busqueda)
    console.log("Has quitado el foco...");  
});


busqueda.addEventListener("copy", (e)=> {                   //Evento al copiar el contenido del elemento
    console.log("Copiando...");  
});


busqueda.addEventListener("paste", (e)=> {                  //Evento al pegar el contenido al elemento
    console.log("Pegando....");  
});


busqueda.addEventListener("cut", (e)=> {                    //Evento al cortar el contenido del elemento
    console.log("Cortando....");  
});


busqueda.addEventListener("input", (e)=> {                  //Evento que se inicia al hacer cualquier cosa en el elemento(excepto quitar el foco)
    console.log("Estas haciendo algo....");  
});


