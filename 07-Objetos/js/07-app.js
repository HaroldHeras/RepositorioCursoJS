


const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
}



console.log(producto); 


producto.precio = 200;              //Vemos que aunque el objeto esta declarado como "const", sus atributos no lo son
console.log(producto);