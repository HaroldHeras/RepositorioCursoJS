

const carrito = [];

const producto1 = {                                     //Creamos 3 productos diferentes
    nombre: "Monitor de 32 Pulgadas",
    precio: 400


}


const producto2 = {
    nombre: "Celular",
    precio: 800

}


const producto3 = {

    nombre: "Teclado",
    precio: 50
} 

const producto4 = {

    nombre: "Teclado 2",
    precio: 50
}

const producto5 = {
    nombre: "Celular 2",
    precio: 800

}

const producto6 = {
    nombre: "Celular 3",
    precio: 800

}




carrito.push(producto1, producto2, producto3, producto4, producto5, producto6);

console.log(carrito);





//Eliminar ultimo elemento de un array

carrito.pop();

console.log(carrito);


//Eliminar primer elemento del Array

carrito.shift();

console.log(carrito);


//Eliminamos un elemento en una posición concreta

carrito.splice(1,1)                     //Aquí decimos que desde el indice uno, queremos borrar solo un elemento

console.log(carrito);


carrito.splice(1,2)                     //Aquí decimos que desde el indice uno, queremos borrar dos elemento hacia delante

console.log(carrito);

