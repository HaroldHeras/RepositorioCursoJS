//Usamos una función como parámetro, a la hora de usar un array method. 



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



const resultado = carrito.filter(producto => producto.precio>400);      //Metodo filter normal

console.log(resultado);


const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado2 = carrito.filter(mayor400);        //Metodo filter pasandole por parámetro una función
console.log(resultado2);
