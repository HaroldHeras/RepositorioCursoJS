


/*ESCRIBIENDO HTML CON JS*/

//----------PRIMER EJEMPLO------------------

/*Creamos un nuevo enlace de cabecera*/


const enlace = document.createElement("A");             //Creamos el elemento


enlace.textContent = "Nuevo Enlace";                    //Añadimos texto

enlace.href = "/nuevo enlace";                          //Le añadimos el href

enlace.target = "_blank";                               //Añadimos un target

enlace.setAttribute("data-enlace", "nuevo-enlace");     //Añadimos atributos

enlace.classList.add("alguna-clase");                   //Añadimos una clase

enlace.onclick = miFuncion;                             //Le añadimos una funcionalidad al hacer click (hemos creado la función abajo)


const navegacion = document.querySelector(".navegacion");       //Creamos una variable para obtener el elemento padre donde queremos meter el enlace

//navegacion.appendChild(enlace);                                 //Asi metemos en enlace al final de la lista 

navegacion.insertBefore(enlace, navegacion.children[1] );           /**"Insertar antes de ":  Con este método, pasamos por parametro el elemento 
                                                                    que queremos añadir, y después el elemento de la lista que vava ir después del nuevo*/


console.log(enlace);            //Imprimimos el enlace


console.log(navegacion);        //Imprimimos todo el elemento navegacion




function miFuncion() {                  //Creamos la función que le añadimos arriba al enlace
    alert("Diste Click");

};





console.log("--------------------------");

//------------SEGUNDO EJEMPLO---------------------


//Creamos un card de forma dinámica



const parrafo1 = document.createElement("P");               //1º Creamos los 3 parrafos, les damos el texto y categoría
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "800 por persona";
parrafo3.classList.add("precio");


//Creamos div con la clase de "info"

const info = document.createElement("div");             //Creamos el div y su clase. Contendrá los tres parrafos
info.classList.add("info");


info.appendChild(parrafo1);                             //Añadimos los 3 parrafos al div
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Creamos la imagen

const imagen = document.createElement("img");           //Creamos un elemento de imagen

imagen.src = "img/hacer2.jpg";                          //Le damso el source de la imagen que av a llevar    

imagen.alt = "Texto Alternativo";                       //Le damos un texto alternativo a la imagen


//Cremos el card

const card = document.createElement("div");             //Creamos el card que contendrá la info y la imagen
card.classList.add("card");

//Asignar la imagen

card.appendChild(imagen);                   //Añadimos la info y la imagen dentro del card   
card.appendChild(info);


//Insertar en el HTML

const contenedor = document.querySelector(".hacer .contenedor-cards");          //Seleccionamso el elemento donde queremos meter el card

contenedor.appendChild(card);                                               //Introducimos le card entero en ese elemento


console.log(contenedor);                                                    //Imprimimos el elemento entero para ver que se haya añadido bien el card
