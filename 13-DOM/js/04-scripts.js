

/*Buscamos a través del nombre de clase. Solo nos devolverá un valor y será el primero que encuentre en el documento*/


const card = document.querySelector(".card");


console.log(card);


//Podemos tener selectores especificos como en CSS
 //const info = document.querySelector(".premium.info");   Si buscamos así, nos saldría un elemento que tiene esas dos clases

const info = document.querySelector(".premium .info");      //Si buscamos así, sería el elemento hijo(info) a través del elemento padre(premium)

console.log(info);


//Seleccionar un segundo elemento card. Si hay varios con el mismo nombre de clase, lo haremos así

const segundoCard = document.querySelector(".hospedaje .card:nth-child(2)");       //Aquí estamos seleccionando el segundo elemento "card" que aparece dentro de la sección "hospedaje 

console.log(segundoCard);


//Selecciionar elemento a través del ID con QUery selector. Solo te devolverá el primero que encuentre con ese ID

const formulario = document.querySelector("#formulario");

console.log(formulario);


//Seleccionar elementos por su etiqueta HTML

const navegacion = document.querySelector("nav");

console.log(navegacion);