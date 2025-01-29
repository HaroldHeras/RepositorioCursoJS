

for(let i = 0; i<10; i++){              //Usando la sentencia "break" podemos parar un bucle for
                                        //En este caso paramos el bucle for cuando llega al 5
     console.log(i);
        if(i==5){
        
        break;
    }

}


console.log("----------------------");


for(let i = 0; i<10; i++){                  /*Con el continue, hacemos que el bucle no ejecute los demás comandos de esa vuelta,
                                            y se vuelve arriba a iniciar la siguiente vuelta*/
    if(i==5){
        console.log("Cinco");

        continue;
    }

    console.log(i);

}



console.log("---------------------------------");



const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},            //Array de objetos
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200, descuento:true},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];



for(let i=0; i<carrito.length;i++){                 //Obtenemos de un Array de objetos, el objeto que tiene una variable "descuento"

    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);

}