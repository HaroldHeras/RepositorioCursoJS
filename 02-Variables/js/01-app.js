/** Antes se creaba una variable ocn la palabra reservada "var". Se sigue pudiendo usar */


//Incializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
producto = 'Monitor de 9 pulgadas';
console.log(producto);

/*JavaScript no es un lenguaje tipado. No hace falta poner el tipo de dato al principio y se puede poner 
 o cambiar al tipo de dato que queramos*/
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y darselo despues
var disponible;

disponible = true;

disponible = false


//Inicializar multiples variables

var categoria = "Computadoras",
    marca = "Marca Famosa",
    calificacion = 5;

//No se puede asignar un nombre de variable que empiece con un número.

var 01nombre; //Esto no se puede

var _01nombre; //Esto si que se puede

//No puede haber espacios en los nombres de variables

var nombre producto; //esto no se puede
var nombreProducto; //Esto si se puede


