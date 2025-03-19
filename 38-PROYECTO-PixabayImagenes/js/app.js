

const formulario = document.querySelector("#formulario");           //Obtenemos los elementos que necesitamos del DOM
const resultado = document.querySelector("#resultado");
const paginacionDiv = document.querySelector("#paginacion");

const registrosPorPagina = 40;      //Variable para guardar el número de imagenes por página que queremos
let totalPaginas;                   //Almacenamos el número de páginas que harán falta según el resultado de la busqueda
let iterador;                       //Almacenamos le iterador que vamos a crear
let paginaActual = 1;               //La página en la que estamos. Por defecto empieza en la 1



//FUNCION QUE AL HACER SUBMIT PRIMERO VALIDA LOS CAMPOS DEL FORMULARIO
window.onload = ()=>{

    formulario.addEventListener("submit", validarFormulario );

};




function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector("#termino").value;

    if(terminoBusqueda.trim()===""){                        //Si el campo está vacío, crea una alerta
        mostrarAlerta("Introduce un término de búsqueda");
        return;
    };

    buscarImagenes(terminoBusqueda);            //Si pasa la validación, procede a realizar la busqueda

}



function buscarImagenes(){

    const terminoBusqueda = document.querySelector("#termino").value;   //Obtenemos lo que se ha escrito en el formulario

    const key = "49406731-04858329acc2a378dbad8722f";       //Almacenamos la key necesaria que nos da en la API

    //En la url de busqueda, colocamos la key, el término de busqueda, le decimos los registros por págian que queremos, y la página a la que accedemos según esos registros
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>{
            totalPaginas = calcularPaginas(resultado.totalHits);    //Según el número total de registros, hacemos el calculo de páginas necesarias y guardamos ese valor en su variable
            mostrarImagenes(resultado.hits)                         //Imprimimos las imagenes en pantalla
        }); 

};


//FUNCION PARA IMPRIMIR LAS IMAGENES EN PANTALLA, RECIBIENDO EL ARRAY DE OBJETOS
function mostrarImagenes(imagenes){
    
    limpiarHTML(resultado);             //Borramos el HTML previo en la pantalla

    imagenes.forEach(imagen =>{     

        const {previewURL, likes, views, largeImageURL } = imagen;          //Extraemos estas variabels de cada objeto del array

        //Ponemos la miniatura de la imagen, los likes y als visualizaciones, y un botón que nos abre la imagen en grande en otra pestaña
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">                
                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Visualizaciones</span></p>
                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}"  target="_blank" rel="noopener noreferrer"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;

    });

    //AQUÍ CREMAOS LA PAGINACIÓN. 
    limpiarHTML(paginacionDiv);     //Borra la paginación anterior antes de volver a pintarla

    imprimirPaginador();            //Imprimimos la paginación


};

//FUNCIÓN PARA CALCULAR EL NUMERO DE PAGINAS NECESARIAS SEGUN EL NUMERO DE REGSISTROS QUE TIENE LA BUSQUEDA
function calcularPaginas(total){
    //Dividimos el número de registros entre el número que queremos por página. Redondeamos hacia arriba el resultado y lo parseamos a int
    return parseInt(Math.ceil(total/registrosPorPagina));       
}


//FUNCION PARA CREAR UN GENERADOR. Esto es un iterador propio que una vez llegado al final, no vuelve a reproducirse. Lo usaremos para obtener los números para la paginación
function *crearPaginador(total){
    
    for(let i=1; i<=total; i++){        //Empezará en uno y se incrementará hasta que llegue al total de páginas que tenemos
        yield i;        //Yield es el valor sobre el que va a iterar. Se crearán tantos yield como número total de págians le hayamos pasado por parámetro
    }

}

//FUNCIÓN PARA IMPRIMIR LOS BOTONES DE PAGINACIÓN
function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);            //Creamos el iterador almacenandolo en esta variable

    while(true){                                    //Creamos un bucle infinito
        const {value, done} = iterador.next();      //Obtenemos el resultado de una vuelta del iterador y extraemos la info(el yield y el estado del iterador)
        if(done){return;}                       //Si su estado es termiando(done=true), se termina la función con un return
        //Si done todavía es false:
        const boton = document.createElement("A");      //Creamso un elemento(que será el botón de página)
        boton.href = "#";                               //No nos saca a otra página web
        boton.dataset.pagina = value;                   //Le damos un atributo al elemento de tipo data y le pasamso el valor del yield
        boton.textContent = value;                      //Al texto del elemento creado le damos también el valor del yield
        boton.classList.add("siguiente", "bg-yellow-400", "px-4", "py-1", "mr-2", "font-bold", "mb-4", "rounded");
        paginacionDiv.appendChild(boton);               //Añadimos el botón al div que los almacena

        boton.onclick = ()=>{           //Le damos una acción al boton
            
            paginaActual= value;        //Le cambia el valor a la variable que indica en que pagina estamos
            buscarImagenes();           //Vuelve a buscar e imprimir todo, habiendo cambiado el valor de la página

        }
    }

}



//FUNCIÓN PARA CREAR UN DIV CON UNA ALERTA, PASANDO POR PARÁMETRO EL MENSAJE QUE QUERMEOS QUE REPRODUZCA
function mostrarAlerta(mensaje){

    if(document.querySelector(".alerta")){
        document.querySelector(".alerta").remove();
    };

    const alerta = document.createElement("P");
    alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg",
        "mx-auto", "mt-6", "text-center", "alerta");

    alerta.innerHTML = `
        <strong class="font-bold">¡ERROR!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },3000);

}

//FUNCION PARA LIMPIAR HTML DEL ELEMENTO QUE LE PASEMOS POR PARÁMETRO
function limpiarHTML(elemento){

    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }

}