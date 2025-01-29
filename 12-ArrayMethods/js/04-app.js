



const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];



//Vamos a crear un Array con los objetos de otro Array, filtrando por el precio o por el nombre

let resultado1;
let resultado2;
let resultado3;

/*Ponemos la variable objeto en la que almacenamos cada objeto del Array y después ponemos la condición para que traiga ese objeto al Array nuevo*/

resultado1 = carrito.filter( producto =>  producto.precio > 400 );              //Los objetos que su precio sea mayor a 400

resultado2 = carrito.filter( producto =>  producto.precio < 600 );              //Los objetos que su precio sea menor a 600

resultado3 = carrito.filter( producto =>  producto.nombre !== "Audifonos" );    //Los objetos que su nombre sea diferente a "Audifonos"



console.log(resultado1);
console.log(resultado2);
console.log(resultado3);




