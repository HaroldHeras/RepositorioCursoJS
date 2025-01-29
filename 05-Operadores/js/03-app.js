

let numero1;
let numero2 = null;

console.log(numero1);                   //Lo detecta como variable indefinida

console.log(typeof numero1);            //Si imprimimos el tipo de dato, al no estar inicializada con ningun valor, es un dato indefinido.



//null



console.log(numero2);                   //Tiene valor valor null

console.log(typeof numero2);            //Lo interpreta como tipo de dato Object porque las variables con valor null las consdiera objetos 


console.log(numero1 == numero2);        //Con el comparador ligero, las interpreta como iguales, ya que al final, ninguna de las dos tiene valor

console.log(numero1 === numero2);       //Con el comparador estricto, las interpreta diferentes, ya que se supone que no son el mismo tipo de dato