



const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Buscamos y copiamos un objeto extraido de un Array. (Importante: Solo un objeto)

//Con un for-each

let resultado = "";

carrito.forEach(
    producto => {
        if(producto.nombre==="Tablet"){
            resultado = producto;
        }
    }
);

console.log(resultado);


console.log("--------------------------------");


//Con .find


let resultado2 = carrito.find( producto => producto.nombre==="Tablet");         //Aquí filtramos por el nombre

console.log(resultado2);


let resultado3 = carrito.find( producto => producto.precio===100);              //Aquí filtramos por el precio

console.log(resultado3);