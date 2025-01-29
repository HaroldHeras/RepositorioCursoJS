/**
 * Vemos el espaciado de los Strings y como quitarlo a la hora de imprimirlo en consola.
 */
const producto = "                Monitor de 20 pulgadas                 ";             //Creamos un String con espacios

console.log(producto);                                                                  

console.log(producto.length);                                                       //Vemos como los contailiza


console.log(producto.trimStart());                      //Con este método imprimimos sin los espacios del principio
console.log(producto.trimEnd());                        //Con este método imprimimos sin los espacios del final

console.log(producto.trim());                           //Con este método imprimimos sin los espacios del principio ni del final


console.log(producto.trimStart().trimEnd());            //Primero quitamos los del principio y luego los del final
