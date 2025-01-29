/**Reemplazamos y jugamos con las cadenas de carácteres */

const producto = "Monitor de 20 pulgadas"; 

console.log(producto);

console.log(producto.replace("pulgadas", '"'));                 //Busca una palabra en la cadena de texto y la reemplaza por lo que le digamos

console.log(producto.replace("Monitor", 'Monitor curvo'));



console.log(producto.slice(0, 10));                            //Nos imprime el texto comprendido entre esos indices 

console.log(producto.slice(8));                                 //Nos imprime el texto comprendido desde ese indice hasta el final



console.log(producto.substring(0,10));                          //Igual que "slice" pero si el primer indice es mayor que el segundo, los intercambia.

console.log(producto.substring(10));                             //Igual que "slice". Nos imprime el texto comprendido desde ese indice hasta el final



const usuario = "Juan";

console.log(usuario);

console.log(usuario.charAt(0));                         //Nos imprime solo la letar que está en esa posición.