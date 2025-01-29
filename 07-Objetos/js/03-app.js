



const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true


}


console.log(producto);



//Agregar nuevos atributos al objeto

producto.imagen = "imagen.jpg";

console.log(producto);


//Eliminar atributos del objeto


delete producto.disponible;

console.log(producto);