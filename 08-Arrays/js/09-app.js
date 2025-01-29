

/**Usamos el FOR-EACH para los Arrays */

const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];


//------------Aquí creamos un bucle "for" normal para obtener el nombre de cada producto
for(let i=0; i<carrito.length; i++){                

    console.log(carrito[i].nombre);

}

console.log("---------------");


//---------------Aquí usamos un bucle "for-each" para hacer lo mismo
carrito.forEach(                                
    function(producto){                         //Creamos una variable en la que almacenaremos cada objeto del Array

        console.log(producto.nombre);           //Imprimimos por consola el nombre del objeto que esta en la variable en ese momento

    }
)
