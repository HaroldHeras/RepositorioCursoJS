


//Vemos los Symbols. Es una variable a la que se le da la característica de que nunca va a ser igual a otra, aunuqe tenga nel mismo valor

const sym = Symbol("Es un Symbol");             //Creamos dos Symbol(lo que se pone entre paréntesis no es su valor, sino una descripcion)

const sym2 = Symbol("Es un Symbol");

console.log(sym);
console.log(sym2);


//Si los comparámos, a pesar de parecer iguales, el resultado nos dará que son diferentes
if(sym===sym2){console.log("Son iguales")}else{console.log("Son diferentes")};



const nombre = Symbol();                //Creamos dos Symbol
const apellido = Symbol();

const persona = {};                     //Creamos un objeto para usar los Symbol


persona[nombre] = "Juan";               //Así es como podemos usar un Symbol como atributo de un objeto, y darle un valor
persona[apellido] = "de la Torre";

persona.tipoCliente = "Premium";        //Creamos dos atributos del objeto de forma convencional
persona.saldo = 500;

console.log(persona);                   //Si imprimimos el objeto, a parte de no salir en orden los atributos, vemos que nos marca cuales son Symbol

console.log(persona.saldo);             //Imrpimimos el valor de un atributo convencional

console.log(persona[nombre]);           //Así imprimiríamos el valor de un atributo que es Symbol

console.log("------------------------");


for(let i in persona){                  /*No son iterables. Si iteramos sobre el objeto para que nos imprima el nombre de 
                                        sus atributos, vemos que los que son Symbol no van a salir*/
    console.log(i);
}



console.log("------------------------");


const nombreCliente = Symbol("Es el nombre del cliente");           //Creamos un Symbol y le damos una descripción

const cliente = {};                             //Creamso un objeto vacío


cliente[nombreCliente] = "Pedro";               //Introducimos en él el Symbol y le damso valor

cliente.apellido = "Ortega";                    //Creamos otro atributo de forma convencional


console.log(cliente);                           //Imprimimos el objeto entero
console.log(cliente[nombreCliente]);            //Imprimimos solo el valor almacenado en el atributo Symbol
console.log(nombreCliente);                     //Imprimimos directamente el Symbol entero










