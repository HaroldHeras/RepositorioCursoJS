const numero1 = 20;
const numero2 = "20";
const numero3 = 30;



//Revisamos si dos numeros son iguales

console.log(numero1 == numero3);
 
//Comparador no estricto
console.log(numero1 == numero2);        //Aunque sean tipos de datos diferentes, reconoce el valor del string y dice que son iguales


//Comparador estricto

console.log(numero1 === numero2);       //Este comparador tiene en cuenta el tipo de dato y por eso no les da iguales



//Diferentes: True si son diferentes, False si son iguales

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);        //Tiene en cuenta las mayusculas y minusculas, por lo que son diferentes

console.log(numero1 != numero2);            //No tiene en cuenta el tipo de dato, por lo que NO son diferentes

console.log(numero1 !== numero2);           //Tiene en cuenta el tipo de dato, por lo que SI son diferentes