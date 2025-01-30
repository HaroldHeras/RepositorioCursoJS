


const encabezado = document.querySelector(".contenido-hero h1");

console.log(encabezado);


//Formas de ver el texto dentro de un encabezado

console.log(encabezado.innerText);          //Si en el CSS la visibilidad esta oculta, este no saldrá
console.log(encabezado.textContent);        //Aunque la visibilidad esté oculta, este te lo mostrará
console.log(encabezado.innerHTML);          //Trael el HTML


console.log("--------------------------------");

//Otra forma de hacerlo en menos lineas. Encadenando métodos.

const encabezado2 = document.querySelector(".contenido-hero h1").textContent;

console.log(encabezado2);


console.log("-------------------------------");


//Modificamos el texto del encabezado
let nuevoHeading = "Nuevo Heading";

document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

console.log(encabezado.textContent);


//Volvemos a ponerlo como estaba
nuevoHeading = "Encuentra hospedaje para tus próximas vacaciones ";

document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

console.log(encabezado.textContent);


console.log("------------------------------");


//Cambiamos una imagen por otra

const imagen = document.querySelector(".card img");         //Seleccionamso el elemento y lo metemos en una variable

imagen.src = "img/hacer2.jpg";                              //Con este método le cambiamos el "src" a la imagen

console.log(imagen);                                        


imagen.src = "img/hacer1.jpg";                            //Aquí solo devolvemos la imagen a como estaba antes