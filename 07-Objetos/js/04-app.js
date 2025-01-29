


const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true


}

console.log(producto);


/*Asignar valor de un atributo a una variable. FORMA ANTIGUA*/

const nom = producto.nombre;

console.log(nom);


/*Creamos una variable y le asignamos el valor de un atributo con el mismo nombre de un objeto(DESTRUCTURING)*/
const {nombre} = producto;          //Llamamos "nombre" a la variable y extraemos el valor del atributo que se llama igual

const {precio, disponible} = producto;      //Lo mismo pero haciendolo con dos a la vez

console.log(nombre, " El precio es:", precio, " Está disponible: ", disponible);





