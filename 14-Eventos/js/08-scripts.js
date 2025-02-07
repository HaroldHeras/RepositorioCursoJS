

/*Otra forma de añadir eventos al momento sería esta. A través de métodos propios que hacen de eventos. 
En este caso usamos el "onclick" que sería como un EventListener "click" */

/*Hemos creado la función abajo del todo, y después la vamos a usar en los eventos */


// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');
parrafo1.onclick = miFuncion(1);                            //Si ponemos la función así, se autoejecutará sin darle a click, porque al poner un parámetro, se llama la función automáticamente

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
parrafo2.onclick =  ()=>{                                   //Si la metemos dentro de otra función anónima, no pasaría eso
    miFuncion(2);
};

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
parrafo3.onclick = function() {                             //También podemos declarar la función anonima así                                    
    miFuncion(3);
};

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info




function miFuncion (indicador) {                        //Usamos el parámetro para saber qué parrafo ha sido en el que hicimos click
    if(indicador===1){
        console.log(parrafo1.textContent);
    }else if(indicador===2){
        console.log(parrafo2.textContent);
    }else if(indicador===3){
        console.log(parrafo3.textContent);
    }
};