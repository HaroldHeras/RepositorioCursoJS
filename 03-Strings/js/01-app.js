/**Vemos las tres formas de crear un String */


const producto = "Monitor de 20 pulgadas";          //Puede ser con comillas dobles

const producto2 = String('Monitor de 24 ');         //Con comillas simples      

const producto3 = new String("Monitor de 27\" ");         //O con dobles, pero si queremos meter otras dobles en el mensaje, metemos unas barras antes de las comillas

console.log(producto);
console.log(producto2);
console.log(producto3);