


const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Java Script"];          //Creamos dos Arrays. Uno de String y otro de objetos


const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];



for(let pendiente of pendientes){                           //Bucle "for-of". Es como el "for-each" de Java.
                                                            //Extrae cada objeto del Array y lo mete en la variable "pendiente"
        console.log(pendiente);

};


console.log("--------------------------------");



for(let producto of carrito){                           //Otro ejemplo de For-of  con el Array "carrito"

    console.log(producto.nombre);

};


console.log("---------------------------------");


for( let [propiedad, valor] of Object.entries(automovil)){          /**Esto es una variante del bucle "for-of", que lo que hace es 
                                                                    extraer en la primera variable el nombre del atributo y en la 
                                                                    segunda, extrae el valor de ese atributo*/

        console.log(`${propiedad} ${valor}`);
}



