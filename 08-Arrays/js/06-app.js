


const carrito1 = ["Hola", "Adios"];                        //Creamos dos Arrays     

const carrito2 = [1, 2, 3];


const producto1 = {                                     //Creamos 3 productos diferentes
    nombre: "Monitor de 32 Pulgadas",
    precio: 400


}


const producto2 = {
    nombre: "celular",
    precio: 800

}








let resultado;                                  //Creamos una variable que va a ser un array


resultado = [carrito1];                          /*Metemos un array anterior en este nuevo(a tener en cuenta que introduce
                                                el Array entero. No extrae los valores y les coloca por separado)*/
console.log(resultado);



resultado = [...resultado, ...carrito2];        /*Aquí añadimos al la variable resultado, su valor anterior, y a la vez 
                                                añadimos el otro array que hicimos antes. (A tener en cuenta que añadiendolo 
                                                de esta forma, no añade el array en si. Extrae sus valores y los almacena 
                                                uno por uno dentro del nuevo array) */


console.log(resultado);




resultado = [...resultado, producto1];          //Aquí añadimos el valor anterior y después un objeto

console.log(resultado);



resultado = [producto2, ...resultado];          //Aquí añadimos primero otro objeto y después su valor anterior
                                                //Es una forma de reestructurar el Array. Imprimira primero el objeto

console.log(resultado);