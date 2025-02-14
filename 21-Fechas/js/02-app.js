

/*Usamos la librería de moment, que hemos incluido en el index con un script 
TENEMOS TODO EN : www.momentjs.com*/

const diaHoy = new Date();                      //Así es como nos la imprime Date
console.log(diaHoy);

moment.locale("es");                            //Aquí le decimos que nuestro moment va a ser con formato español

console.log( moment().format("MMMM D YYYY h:mm:ss a"));         //Imprimimos el moment con mes, día, año y hora completa


console.log( moment().format("LLLL", diaHoy));                  //Decimos que nos formatée la fecha creada antes con Date


console.log( moment().add(3, "days").calendar());               //Añadimos al moment 3 días
