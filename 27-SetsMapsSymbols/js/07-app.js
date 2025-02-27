

/*Vemos los generadores. Que son un tipo de iteradores que solo se pueden reproducir una vez. Tienen una sintaxis diferente */


function *creaGenerador(){              //Se pone un " * " antes del nombre para indicar que es un generador

    yield 1;                            //Se usa la palabra reservada "yield" para indicar que esos osn los valores sobre los que se va a iterar
    yield "Juan";
    yield 3+3;
    yield true;


}


const iterador = creaGenerador();       //Metemos la funcion en una variable, la cual va a recibir el valor del resultado de la funcion


console.log(iterador);                  //Al imprimir el iterador, te informa de su estado. Si no se ha recorrido entero, dirá "suspended"      
console.log(iterador.next());           //Con ".next()" vamos avanzando por cada valor del iterador. Te da su valor y un booleano si ha llegado al final o no    
console.log(iterador.next().value);          //Con ".value" obtenemos solo el valor de esa iteración
console.log(iterador.next().done);          //Con ".done" obtenemos solo el booleano de si en esa iteración ya hemos llegado al final
console.log(iterador.next());               //Obtenemos el 4 valor
console.log(iterador.next());               //Aqui ya ha llegado al final. Nos dice que el elemento es "undefined" y el booleano es true
console.log(iterador);           //Si imprimimos el iterador otra vez, podemos ver que su estado ya no es "suspended" sino "closed"


console.log("----------------------");


const carrito = ["Producto 1", "Producto 2", "Producto 3"];         //Creamos un array



//Creamos un generador al que pasamos por parámetro un array.
function *generadorCarrito(carrito){
    for(let i=0; i<carrito.length; i++){        //Recorremos con un bucle el array, diciendo que cada elemento de este será un yield
        yield carrito[i];
    }


}


const iterador2 = generadorCarrito(carrito);        //Introducimos en una variable el generador, pasandole por parámetro el array


console.log(iterador2.next());              //Recorremos el iterador.
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());              //Aquí ya termina y el booleano que nos lo indica será true


