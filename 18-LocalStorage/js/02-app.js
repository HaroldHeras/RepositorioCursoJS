

/*Obtenemos elementos desde el localStorage.  */

const nombre = localStorage.getItem("nombre");              //Extraemos el elemento a través de su nombre
console.log(nombre);


//Podemos ver que si extraemos un producto, al pasarlo a consola lo reproduce como si fuera un String
const productoJSON = localStorage.getItem("producto");      
console.log(productoJSON);

//Para transformarlo a objeto de nuevo(siempre y cuando la sintaxis esté bien), lo parseamos y ya lo tendrémos como un objeto
const productoNormal = JSON.parse(productoJSON);
console.log(productoNormal);


//Con los Array pasa lo mismo. Lo parseamos a y ya lo tendríamos como un Array
const mesesJSON = localStorage.getItem("meses");
const mesesNormal = JSON.parse(mesesJSON);
console.log(mesesNormal);