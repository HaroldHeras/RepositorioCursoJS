

const producto = "Monitor de 20 pulgadas";


// .repeat te permite repetir una cadena de texto


let texto = "en promoción ".repeat(3);              //Con el método "repeat" podemos hacer que algo se repita las veces que le digamos

console.log(texto);

console.log(`${producto} ${texto}!!!`);



texto = "en promoción ".repeat(2.5);                //Si le damos un valor con decimales, lo redondea siempre al valor más bajo

console.log(`${producto} ${texto}!!!`);



//.split te permite dividir un String

const actividad= "Estoy aprendiendo JS moderno";

//division por espacios
console.log(actividad.split(" "));                       //Con el método "split" podemos dividir una cadena en sub cadenas o palabras, dandole como parámetro lo que queremos que use de referencia para separarlas             


const hobbies = "leer, caminar, escuchar música, escribir, aprender a programar";

//division por comas
console.log(hobbies.split(","));

