/*Concatenación de Strings*/


const producto = "Monitor de 20 pulgadas";              

console.log(producto);                                  

const precio = " 30 usd";

console.log(producto.concat(precio));                   //Podemos concatenar variables con el método .concat y añadir otra variable.

console.log(producto.concat(" en descuento"));          //Con el método .concat y escribir directamente el mensaje.

console.log(producto + " solo hoy.");                   //Sin el método .concat, usando el simbolo + o una coma.

console.log(producto, " muy barato.");



//Importante para esta forma: El mensaje tiene que ir entre comillas inversas `Mensaje`. (En el teclado, al lado de la letra P)
console.log(`El producto ${producto} tiene un precio de ${precio}`);        //Escribiendo el mensaje directamente y añadiendo las variables en el mensaje.