


const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Java Script"];


pendientes.forEach(                                     //For-each sencillo. 

    (pendiente) => {
        console.log(pendiente);
    }

);


console.log("------------------------");


pendientes.forEach(                             /*For-each sencillo. Si ponemos dos variables, en la segunda almacenará el indice de
                                                ese objeto*/

    (pendiente, indice) => {
        console.log(indice, pendiente);
    }

);


console.log("---------------------------");


const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];



carrito.forEach(                                    //For-each sencillo con un Array de objetos
    (producto, indice) =>{
        console.log(indice, producto.nombre);
    }
);


const nuevoArray = carrito.map( (producto) => producto.nombre);         /*Método ".map". Igual que el for-each pero permite
                                                                         almacenar los resultados creando otro Array nuevo*/
    

console.log(nuevoArray);                                            //Imprimimos el Array nuevo