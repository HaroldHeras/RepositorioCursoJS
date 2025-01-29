


const boolean1 = true;

const boolean2 = false;

const boolean3 = "true";

const boolean4 = new Boolean(true); //Otra manera de crear un boolean. En este caso no lo crea como tipo primitivo sino como un objeto.


console.log(boolean1);

console.log(boolean2);


console.log(typeof boolean1);


console.log(boolean1 == boolean3);  /*En este caso no es igual que number y string. Aunque sea el comparador ligero, 
                                    los interpreta como diferentes*/


console.log(boolean4);              
console.log(typeof boolean4);       //Si mostramos el tipo de dato, vemos que no es un boolean(tipo primitivo) sino un Object

