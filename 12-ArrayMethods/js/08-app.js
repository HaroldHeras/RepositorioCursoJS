

/*EJEMPLOS Y USOS DE EL "SPREAD OPERATOR*/


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


let meses2 = [...meses, "Agosto"];                  //Clonamos el primer array añadiendo otro elemento al final
meses2 = ["añadimos al inicio",...meses2];           //Añadimos al segundo array otro elemento al principio
meses2 = [...meses2, ..."Hola"];                    //Añadimos un String con los puntos, y lo añade separado por letras
console.log(meses2);


console.log("-------------------------");


//Spread operator con Array de objetos

const producto = {nombre: "Disco Duro", precio: 300};

const carrito2 = [...carrito, producto];

console.log(carrito2);


