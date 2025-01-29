const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];






//---------------Aquí usamos un bucle "for-each" para hacer lo mismo
carrito.forEach(                                
    function(producto){                         //Creamos una variable en la que almacenaremos cada objeto del Array

        console.log(producto.nombre);          /*Imprimimos por consola el nombre del objeto que esta en la variable en ese momento
                                                y al terminar el bucle, deshecha la variable*/

    }
)




/*Hacemos uso del map. Podemos usarlo igual que el "for-each" y daría el mismo resultado. Pero en este caso podemos crear un Array 
y dentro de ese Array llamar al metodo ".map". Así, añadiendo un return, lo que va a hacer es devolvernos el resultado de 
cada vuelta y almacenarlo en ese Array nuevo*/

const arrayNuevo = carrito.map(                  //Creamos una variable, y dentro de ella llamamos al método ".map" 

    function(producto){                         //Se crea una variable en la que almacenaremos cada objeto del Array

       return producto.nombre;           //Obtenemos el nombre del objeto que está ese momento en el iterador y lo devolvemos al arrayNuevo

    }
)


console.log("--------------------");

console.log(arrayNuevo);


