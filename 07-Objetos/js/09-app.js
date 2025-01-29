

"use strict";

const producto = {                                  

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
}

console.log(producto);




Object.seal(producto);          //Sellamos el objeto. Esto hace que no se puedan agregar ni eliminar atributos, pero si modificar los existentes.

producto.precio = 200;          //Vemos que nos deja modificar un atributo
console.log(producto.precio);


//producto.medidas = "Extra largo";       //No nos va a dejar añadir uno nuevo
console.log(producto);


console.log(Object.isSealed(producto));         //Averiguamos si el objeto está sellado o no