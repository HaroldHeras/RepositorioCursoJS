const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true


}


//Destructuring. Creamos una variable llamada nombre, y extraemos el valor del atributo que se llama igual del objeto "producto"

const {nombre} = producto;



console.log(nombre);


//Destructuring con Arrays

const numeros = [10, 20, 30, 40, 50];
/* ************************************/
const [primerIndice, segundoIndice] = numeros;             /*Creas una o más variables con el nombre que tu quieras y va extrayendo 
                                                            el valor de cada indice y lo almacena en esas variables por orden.
                                                            (Si solo hay dos variables, solo extrae los dos primeros)*/

console.log(primerIndice, segundoIndice);

/* *************************************************/
const [ , , tercerIndice] = numeros;                        /*Si queremos extraer solo uno en concreto, y este no está en la primera 
                                                            posición, ponemos tantas "," como necesites para ir pasando de indices,
                                                             y ya le das nombre a la variable que quieres*/

console.log(tercerIndice);

/************************************ */

const [primero, segundo, ...elResto] = numeros;             /*Podemos extraer, por ejemplo, el primero y el segundo en variables 
                                                            separadas, y el resto esxtraerlas en un Array nuevo que contenga el resto
                                                            de valores del Array "numeros*/

console.log(primero, segundo, elResto);





