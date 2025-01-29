

/**USO DE ARRAY FUNCTION CON EL EJEMPLO DE LA CLASE Arrays/10-app.js */

const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];






carrito.forEach( producto =>  console.log(producto.nombre )  );         //For each resumido en una linea


console.log("--------------------");



const arrayNuevo = carrito.map(  producto =>    producto.nombre );      //.map resumido en una linea


console.log(arrayNuevo);


