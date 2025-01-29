

const meses = ["Enero", "Febrero", "Marzo"];

console.log(meses);


meses.push("Abril");                    //Con este método agregamos un valor al Array, llevandolo al final de este  

console.log(meses);

meses.push("Mayo", "Junio");            //Hacemos lo mismo pero podemos hacerlo con varios a la vez

console.log(meses);




const carrito = [];                     //Creamos un array vacío para ir llenandolo


console.log(carrito);


const producto1 = {                                 //Creamos 3 productos diferentes
    nombre: "Monitor de 32 Pulgadas",
    precio: 400


}


const producto2 = {
    nombre: "celular",
    precio: 800

}


const producto3 = {

    nombre: "Teclado",
    precio: 50
}


carrito.push(producto1);                        //Añadimos el producto1 y producto2 por orden de llegada al Array
carrito.push(producto2);

carrito.unshift(producto3);                     //Con este método añadimos el producto3 al principio de la cola

console.log(carrito);

