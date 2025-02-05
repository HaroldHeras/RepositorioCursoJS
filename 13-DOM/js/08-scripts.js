


const navegacion = document.querySelector(".navegacion");

console.log(navegacion);                           //Traemos la etiqueta con lo que lleva dentro

console.log(navegacion.childNodes);             /*Traemos un NodeList con los nodos de esa etiqueta. 
                                                (los espacios en blanco entre etiquetas también los considera nodos y nos los tare 
                                                con el nombre "text")*/


console.log(navegacion.children);               //Nos trae un NodeList solo con las etiquetas hijo, sin los espacios entre etiquetas


console.log(navegacion.children[1]);        //Nos trae, dentro de ese NodeList, el que tiene indice 1


console.log(navegacion.children[1].nodeName);           //Algunos de los atributos que podemos obtener de cada nodo
console.log(navegacion.children[1].nodeType);
console.log(navegacion.children[1].textContent);


console.log(navegacion.firstElementChild);              //También podemos tarer el primer elemento hijo así

console.log(navegacion.lastElementChild);               //O el ultimo elemento hijo



console.log("---------------------------------------");



const card = document.querySelector(".card");               //Buscamos la etiqueta card

console.log(card);

console.log(card.children);                                 //Imprimimos sus hijos

console.log(card.children[1]);                              //Accedemos al hijo con el indice 1

console.log(card.children[1].children);                     //Imprimimos los hijos del elemento con indice 1

console.log(card.children[1].children[1].textContent);              //Imprimimos el contenido del "nieto" con indice 1

card.children[1].children[1].textContent = "Nuevo heading desde Traversing the DOM";        //Cambiamos el texto de ese "nieto"

console.log(card.children[1].children[1].textContent);                          //Imprimimos el texto nuevo


card.children[1].children[1].textContent = "Música electrónica 2021";           //Lo dejamos como estaba



console.log("-------------------------------");


console.log(card.children[0]);                      //Imprimimos el hijo con indice 0 (es una migane)


card.children[0].src = "img/hacer3.jpg";            //Cambiamos el source de esa imagen a otra


console.log(card.children[0].src);                  //Imprimimos el nuevo source de esa imagen.En el navegador podemos ver como ha cambiado la imagen



console.log("--------------------------------------------------");



console.log(card.parentNode);                       //Vamos hacia los elementos padre (este te trae también los espacios)

console.log(card.parentElement);                    //Vamos a los elementos padre, pero este no te trae los espacios


console.log(card.parentElement.parentElement);        //Podemos seguir anidando "parentElement" hasta llegar al padre de todos  



console.log("----------------------------------------");


console.log(card);                                      //Seleccionamos el elemento card, que nos trae el primero que encuentra

console.log(card.nextElementSibling);                   //Si como hijo, tiene más hermanos, con este método traemos a su hermano siguiente

console.log(card.nextElementSibling.nextElementSibling);        //Lo mismo pero nos devuelve el tercer hermano



console.log("------------------------------------------");


const ultimoCard = document.querySelector(".card:nth-child(4)");            //Traemos el ultimo card que hay de entre los 4

console.log(ultimoCard);                                                    //Lo imprimimos

console.log(ultimoCard.previousElementSibling);                             //Con esto traemos el card hermano previo a este















