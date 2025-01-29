


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];



//Encontrar el indice dentro de un Array, con un for-each
meses.forEach(                                              //Recordamos, que si le damos dos parámetros al for-each, el segundo será el indice dentro del Array
    (mes,i) => {

        if(mes==="Abril"){
            console.log(`El indice de ${mes} es ${i}`);
        }

    } 
);


console.log("----------------------------");



//Encontrar el indice de abril con el método "findIndex":


const indice = meses.findIndex( mes => mes === "Abril");            //Recordamos que al no lleavr las llaves, el "return" va inmplicito

console.log(indice);

const indice2 = meses.findIndex( mes => mes === "Diciembre");   //Si el valor no existe, devuelve "-1"

console.log(indice2);


console.log("-------------------------");



//Encontrar el indice de un objeto en un Array de oibjetos
const indiceObjeto = carrito.findIndex( producto => producto.nombre === "Tablet");

console.log(indiceObjeto);