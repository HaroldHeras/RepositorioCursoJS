

//Vemos la coercion. Se trata simplemente de la conversión de datos.


const numero1 = 10;         //Esto es un int

const numero2 = "20";       //Esto es un string

//Ejemplo de coercion implicita
console.log(numero1 + numero2);         //Resultado: 1020.  (Convierte el numerico a string)

//Ejemplo de coercion explicita
console.log(numero1 + Number(numero2));         //Resultado: 30    (Al convertir el string a numero, no los concatena, sino que los suma)