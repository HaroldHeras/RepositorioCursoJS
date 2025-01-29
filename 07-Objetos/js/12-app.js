

//Object Literal
const producto = {                                  //Creamos un objeto literal. Ya definido

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
    
}



//Object constructor

function Producto(nombre, precio){                  //Creamos un constructor, para poder hacer objetos después con los valores que queramos
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;


}


const producto2 = new Producto("Monitor de 24 pulgadas", 500);

console.log(producto2);


const producto3 = new Producto("Television", 100);

console.log(producto3);