//Vemos las Funciones Puras o "Pure Functions".
//Se trata de funciones que si tienes un parámetro, devuelven un solo resultado. 
//También osn las que no modifican el valor del parámetro. Sino que lo usan para obtener un valor nuevo sin tocar el anterior.



const numero = 20;

const duplica = n=> n * 2;                  //Vemso que tiene solo un parámetro, y devuelve solo un número

const resultado = duplica(numero);          

console.log(resultado)                      //Vemos que el resultado es un número nuevo(En una variable nueva)

console.log(numero)                         //Y la variable original no la modifica


