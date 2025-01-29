

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];




//Sumar el valor de los atributos de un Array de objetos con un "for-each"

let total = 0;

carrito.forEach(
    producto => {
        total+=producto.precio;
    }
);

console.log(total);

console.log("----------------------");


//Hacemos lo mismo con un ".reduce"


/*Nos pide en el primer parámetro una variable existente, que será en la que sume los precios y en el segundo parámetro la variable 
en la que almacean el objeto del Array. Después sumamos el valor de esa variable con el del precio del producto
Por ultimo, después de la operación, se coloca una "," y se pone el valor en el que queremos que se inicialice la variable 
que usamos en el parámetro para sumar todo. En este caso "total" */

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado);

