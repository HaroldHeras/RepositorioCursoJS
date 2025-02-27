

/*vemos los "Set". Que son una especie de Array pero que no admite duplicados y se tratan como objetos */


const carrito = new Set();          //Creación de un Set

carrito.add("Camisa");              //Añadimos elementos al set
carrito.add("Disco 1");
carrito.add("Disco 2");
carrito.add("Disco 3");

carrito.add("Camisa");

carrito.has("Camisa");              //Método para saber si existe un valor en el Set

console.log(carrito.size);          //Método para saber el tamaño del set

carrito.delete("Disco 1");          //Método para borrar un elemento del Set. Si lo imprimimos, devuelve true o false si existía.

console.log(carrito.delete("Disco 1"));     //Como ya no existe, al imprimirlo devuelve false

carrito.forEach(producto =>{            //También se pueden iterar. Pero no funciona la opción de colocar una segunda variablel para extraer los indices
    console.log(producto);
});


/*Podemos introducir un array normal dentro de un Set, y este almacenará todos los valores excluyendo los repetidos */
const numeros = [10, 20 ,30 ,40, 50, 10, 20 ];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);                       //Si imprimimos el contenido, vemos que no están los repetidos  


noDuplicados.clear();                //Con este método, vaciamos el Set
