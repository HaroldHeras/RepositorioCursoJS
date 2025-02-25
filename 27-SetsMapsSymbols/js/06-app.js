

//Creamos un iterador propio

function crearIterador(carrito){                    //Primero creamos una función que será la que haga de iterador

    let i = 0;          //Esta será la variable que vaya cambiando sobre cada iteración


    return {                                    //Esta función devuelve otra función
        siguiente: () =>{                                      
            const fin = ( i >= carrito.length);                      //Y esta función va a devolver un booleano indicando si llega al final o no
            const valor = !fin ? carrito[i++] : undefined ;         //Si el booleano es false, devuelve el objeto en esa posición del Array

            return{fin, valor};

        }
    }


}


const carrito = ["producto 1", "producto 2", "producto 3"]          //Creamos ael Array

const recorrerCarrito = crearIterador(carrito);                 //Introducimos en una variable la función.


console.log(recorrerCarrito.siguiente());               //Para llamar a la función, lo hacemos como si fuera atributo de un objeto