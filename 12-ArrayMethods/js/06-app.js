





const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];




/*Método que nos devuelve true o false en función de si todos los objetos del Array cumplen una condición*/

const resultado = carrito.every( producto => producto.precio < 1000);       //Si todos loso bjetos, su precio es menor de 1000, es true

console.log(resultado);