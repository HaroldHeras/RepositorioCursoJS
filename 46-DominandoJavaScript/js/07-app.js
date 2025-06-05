//Vemos un ejemplo de la prioridad que le da JS a las diferentes funciones y métodos que tiene a la hora de ejecutarlos,
//Esto se llama Event Loop. Y es la forma en la que trata JS el código a la hora d eejecutarlo en un hilo



//Podemos ver que, aunque están ordenadas, se van a ejecutar en diferente orden. Esto es por las reglas del Event Loop.
//Primero se ejecutan los console.log, después la función, después el Promise y por ultimo los setTimeOut(aunque estén a 0)

console.log("Primero");             //1


setTimeout(() => {                  //6
    console.log("Segundo")
}, 0);



console.log("Tercero");             //2


setTimeout(() => {                  //7
    console.log("Cuarto")
}, 0);


new Promise(resolve =>{             //5
    resolve("Desconocido");
}).then(console.log)



console.log("Ultimo");              //3


function saludo(){
    console.log("Hola")
}

saludo();                           //4
