


/**Modificamos el estilo de la página accediendo al CSS desde JS. 
 *En CSS, las propiedades vienen con un guion en medio. Para traducirlo a JS, se elimina el guión, se juntan 
  las palabras y la segunda empieza en mayusculas
*/

const encabezado = document.querySelector("h1");            //Seleccionamos el encabezado 1

console.log(encabezado);


console.log(encabezado.style);                          //Así accedemos a su estilo. (Desde Firefox podemos ver todos los métodos y caracteristicas)


encabezado.style.backgroundColor = "red";               //Cambiamos el color de fondo
encabezado.style.fontFamily = "Arial";                  //Cambiamos el tipo de letra
encabezado.style.textTransform = "uppercase";           //Lo ponemos en mayuscula



encabezado.style.backgroundColor = "";                //Aquí solo estamos devolviendo todo a como estaba
encabezado.style.fontFamily = "";
encabezado.style.textTransform = "";


console.log("------------------------------");


//Agregamos clases a un elemento

const card = document.querySelector(".card");           //Obtenemos le elemento

card.classList.add("Nueva-Clase");                          //Le añadimos una clase nueva.(Ojo! No puede tener espacios)

card.classList.add("Segunda-Clase", "Tercera-Clase");       //Podemos agregarle más de una a la vez

card.classList.remove("Nueva-Clase", "Segunda-Clase", "Tercera-Clase");     //Borramos las clases creadas

console.log(card.classList);

