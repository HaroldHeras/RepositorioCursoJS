

//Operaciones con Math

let resultado;


resultado = Math.PI;        //Uso de PI
console.log(resultado);



resultado = Math.round(3.4);        //uso de round. Hasta 0.4 redondea hacia abajo. A partir de 0.5 redondea hacia arriba
console.log(resultado);


resultado = Math.ceil(3.4);         //Si hay cualquier decimal.
console.log(resultado);              



resultado = Math.floor(3.4);        //Redondea siempre hacia abajo.
console.log(resultado);


resultado = Math.sqrt(144);         //Obtener la raiz cuadrada
console.log(resultado);


resultado = Math.abs(-500);         //Obtener valor absoluto
console.log(resultado);


resultado = Math.pow(8, 3);         //Obtener la potencia de un número. EL primer parámetro es el número y el segundo la potencia.
console.log(resultado);


resultado = Math.min(3,5);          //Obtenemos el valor más pequeño de los numeros que le demos
console.log(resultado);


resultado = Math.max(3,5);          //Obtenemos el valor más pequeño de los númemros que le damos
console.log(resultado);



resultado = Math.random();          //Obtenemos un número aleatorio entre el 0.1 al 0.9....
console.log(resultado);


resultado = Math.floor((Math.random()*100));        //Obtenemos un número aleatorio entre 0.1 y 0.99999..., lo multiplicamos por 100para que tenga dos cifras enteras y despues le quitamos los decimales.
console.log(resultado);