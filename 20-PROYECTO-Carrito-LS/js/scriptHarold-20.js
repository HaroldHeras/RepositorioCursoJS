/*Obtenemos los elementos del HTML con los que vamos a trabajar, y los guardamos en variables*/

const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = [];                  //Este va a ser el array en el que introducimos los cursos seleccionados




cargarEventListeners();                     //Ejecutamos la función que carga los Listeners


/*Función que agrupa todos los EventListeners y los ejecuta a la vez */
function cargarEventListeners(){

    document.addEventListener("DOMContentLoaded", cargaLocalStorage);

    listaCursos.addEventListener("click", agregarCurso);        //Cuando pulsas en "Agregar al carrito"

    carrito.addEventListener("click", eliminarCurso);           //Cuando pulsas en la "X" de un articulo en el carrito

    vaciarCarritoBtn.addEventListener("click", ()=>{            //Cuando le das a vaciar carrito

        articulosCarrito = [];

        carritoHTML();

    });

}



//----------FUNCIONES-----------------

function agregarCurso(e){                                   //Agrega al carrito un curso

    e.preventDefault();         //Evitamso al función por defecto, que en este caso nos hace slide hacia arriba cada vez que pulsamos en un curso

    if(e.target.classList.contains("agregar-carrito")){

        const cursoSeleccionado = e.target.parentElement.parentElement;             //Obtenemos le elemento padre del boton
        leerDatosCurso(cursoSeleccionado);                                      //Enviamos el elemento padre a la funcion "leerDatosCurso"
        
    }
    
}

function eliminarCurso(e){                                              //Elimina un curso del carrito
    const cursoID = e.target.getAttribute("data-id");                   //Obtenemos ID del curso que queremos borrar

    if(e.target.classList.contains("borrar-curso")){                    

        
        articulosCarrito = articulosCarrito.filter( curso => {          /*Con filter vamos a revalorar el Array que conntiene los cursos seleccioandos */

            if(curso.id === cursoID){                 //Cuando encuentra en el Array el curso que queremos eliminar, primero mira la cantidad, si es mas de uno, le resta uno, si solo es uno, lo borra directamente del Array
                if(curso.cantidad>1){
                    curso.cantidad--;
                    return curso;
                }else{
                    delete curso;
                }
            }else{                                  //Los cursos que no tienen el ID del que queremos borrar, los devuelve al Array
                return curso;
            }
        });

        carritoHTML();                              //Ejecutamos la función que reescribe el HTML del carrito

    }

    

}



function leerDatosCurso(curso){                 //Complementa a "agregarCurso". Extrae la info de toda la tarjeta de ese curso
    
    /*Creamos un objeto al que le damos como atributos, los valores que necesitamos de la tarjeta del curso que vamos a meter al carrito */
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = articulosCarrito.some(producto => producto.id===infoCurso.id);       //Evaluamos si en lee Array del carrito ya existe ese curso

    if(existe){                                                 //Si ya existe, sumamos 1 a su cantidad
        const cursos = articulosCarrito.map( curso =>{          
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }

        });
        articulosCarrito = [...cursos];
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];            //Si no existe en el Array, le añadmis directamente.(Copiamos el array que ya habia para evitar que se duplique y añadimos el curso nuevo)
    }

    carritoHTML();                  //Ejecutamos la función que crea el código HTML con el Array actualizado
}


/*Función creada para generar el código HTML para crear las filas en el elemento carrito */
function carritoHTML(){

    limpiarHTML();                                          //Limpiamos primero todo l oque hay dentro

    articulosCarrito.forEach( curso =>{                     //Obtenemos la info de cada elemento del Array de articulos

        const {imagen, titulo, precio, cantidad, id} = curso;       //Obtenemos los atributos del objeto "curso" y los almacenamos en variables
        const row = document.createElement("tr");           //Creamos una fila para la tabla

                                                            //Generamos el código HTML de la fila con los datos del artículo
        row.innerHTML = `                                   

            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
            
        
        `;
        contenedorCarrito.appendChild(row);                 //Añadimos la fila a la tabla del carrito
    }

    )

    actualizarLocalStorage();

};

/*Funcion creada para limpiar el carrito*/
function limpiarHTML(){                             

   // contenedorCarrito.innerHTML = "";       //FORMA LENTA. Limpia el HTML que hay dentro del cuerpo de la tabla escribiendo un String vacio

    while(contenedorCarrito.firstChild){      //FORMA RAPIDA. Comprueba si hay hijos, y los va borrando uno a uno hasta que este vacío    
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};



function cargaLocalStorage(){

    articulosCarrito = JSON.parse(localStorage.getItem("listaCompra")) || [];

    carritoHTML();

};


function actualizarLocalStorage(){

    localStorage.setItem("listaCompra", JSON.stringify(articulosCarrito));
    
};


