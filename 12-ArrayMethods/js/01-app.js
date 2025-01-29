
/**Hacemos comprobaciones de si existe un valor o un objeto dentro de unos Arrays, con Array methods */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];




//Comprobar si un valor existe en un Array normal

meses.forEach(
    (mes) =>{
        if(mes === "Enero"){
            console.log("Enero si existe");
        }
    } 
);

console.log("---------------------------");

//Otra forma de comprobar si existe un valor dentro de un Array normal(OJO, es case sensitive)

const resultado = meses.includes("enero");

console.log(resultado);


console.log("---------------------------");


//Otra forma de comprobar si existe un valor dentro de un Array. Este está más hecho para Objetos

const resultado2 = meses.some( mes => mes === "Febrero"); 

console.log(resultado2);


console.log("-----------------------------");


//Hacemos la misma comprobación pero en un Array de objetos

const existe = carrito.some(                                //Extrae cada obejto en la variable producto y devuelve booleano si hay coincidencia
    (producto) => {
        return producto.nombre === "Celular";
    }
);


const existe2 = carrito.some( producto => producto.nombre === "Celular");        //Este es el mismo código pero si quitamos las llaves, el "return" va implicito

console.log(existe);
console.log(existe2);