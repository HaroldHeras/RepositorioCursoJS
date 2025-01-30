

/**A diferencia del queriSelector, este te trae todos los elementos que compartan ese filtro de busqueda y te los almacena en 
  un NodeList, que es una especie de Array de Nodos, que es como se conoce a las ramificaciones de las etiquetas de HTML*/


const card = document.querySelectorAll(".card");


console.log(card);




const formularios = document.querySelectorAll("#formulario");

console.log(formularios);


//Si un elemento no existe, te devuelve un NodeList vacio.

const noExiste = document.querySelectorAll("noExiste");

console.log(noExiste);