
//Usamos array method ".map" para crear un array nuevo con los datos que escojamos del original, usando la programacion funcional.



const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];



const obtenerNombres = producto => {        //Creamos la función que extrae los nombres de los productos
    return producto.nombre;
}

const resultado = carrito.map(obtenerNombres);      //Hacemos un .map pasando por parámetro la función.

console.log(resultado);



