/*Usamos la sintaxis al principio de la página "use strict" para hacer que el código se comporte de forma más estricta*/


"use strict";                   //Linea para hacer que el código sea más estricto(va a lanzar el mensaje de error si hacemos algo que no se pueda)



const producto = {                                  

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
}

producto.precio = 200;                      //Aquí nos deja cambiar el valor del atributo aunque el objeto sea "const"

Object.freeze(producto);                    //Usando este método, congelamos el objeto y no se podrá cambiar el valor de sus atributos




//producto.precio = 100;                      //Intentamos cambiar de nuevo el valor de un atributo, pero al estar congelado no se podrá
                                            /*Nota importante: Si no ponemos "use strict" al principio, no nos saldrá error, pero al estar congelado no se cambiará el valor*/
console.log(producto.precio);



console.log(Object.isFrozen(producto));         //Nos devuelve si el objeto esta congelado o no


