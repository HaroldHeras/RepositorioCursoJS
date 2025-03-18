
let arrayFavoritos = traerLocalStorage();                   //Con esta función, almacenamos en la variable los elementos que haya en LocalStorage
const modal = new bootstrap.Modal("#modal", {});            //Creamos un modal y apuntamos al elemento modal del HTML
let seleccionaPagina;                                       //usamos esta variable para indicar en que pagina estamos en la funcion "eliminarFavorito"


document.addEventListener("DOMContentLoaded", escogerApp);  //Al cargar la página, ejecuta esta función


//Esta función analiza que página esta cargando el documento. Si la de inicio o la de favoritos
function escogerApp(){
    const pagina = document.querySelector("main h2");
    
    if(pagina.textContent==="Inicio"){
        seleccionaPagina = true;
        inicioApp();
    }else{
        seleccionaPagina = false;
        favoritosApp();
        
    };
};









//SI ESTAMOS EN LA PÁGINA DE INICIO, SE EJECUTA ESTA FUNCION
function inicioApp(){
    

    const selectCategorias = document.querySelector("#categorias");             //Extraemos los elementos que necesitamos
    const resultado = document.querySelector("#resultado");

    obtenerCategorias();                                                        //Obtenemos las categorias y las ingresamos en el desplegable
    
    selectCategorias.addEventListener("change", seleccionarCategoria);          //Ponemos un listener al desplegable



    //Función para obtener las categorias de la API
    function obtenerCategorias(){      

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>  mostrarCategorias(resultado.categories));    //Enviamos el array con las categorias a otra funcion

    };


    //Función para inyectar las categoráis dentro del desplegable
    function mostrarCategorias(categorias){
        

        categorias.forEach(categoria=>{

            const option = document.createElement("OPTION");

            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;

            selectCategorias.appendChild(option);

        });


    };


    //Función para leer la categoría seleccionada y llamar al método que imprime las recetas en pantalla
    function seleccionarCategoria(e){

        const categoria = e.target.value;       //Obtenemos el nombre de la categoría seleccionada

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;        //La ponemos en el url de la API que nos lleva a ella

        fetch(url)                                      //Pedimos que nos devuelva el array con todas las recetas de esa categoría
            .then(respuesta=> respuesta.json())
            .then(resultado=>mostrarRecetas(resultado.meals))       //Enviamos el array de esas recetas a la función que las imprimirá
            .catch(resultadoMal=>{ 
                const heading = document.createElement("H2");       //Si la consulta sale mal o no hay nada, crea un elemento para informarnos
                heading.classList.add("text-center", "text-black", "my-5");
                heading.textContent = "No hay resultados";
                resultado.appendChild(heading);
            });
            


    };


};










//SI ESTAMOS EN LA PÁGINA DE FAVORITOS, SE EJECUTA ESTA FUNCION
function favoritosApp(){

    const resultado = document.querySelector(".favoritos");         //Extraemos el elemento en el que se van a imprimir los resultados

    
    obtenerFavoritos();                 //Ejecutamos el método que obtendrá los favoritos

    //Función que extrae los favoritos y los imprime en el HTML
    function obtenerFavoritos(){

        //Como al principio guardamos en "arrayFvoritos" lo que hay en LocalStorage, decimos que si hay algo, que haga esto:
        if(arrayFavoritos.length){
            
            
            let arrayRecetas = [];          //Creamos un array en el que almacenaremos las recetas COMPLETAS
           
            //Con este for-each, extraemos de cada elemento del arrayFavoritos el "id" y con este mandamos traer una por una las recetas COMPLETAS para almacenarlas en "arrayRecetas"
            arrayFavoritos.forEach(favorito=>{
                const id = favorito.id;
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
                

                
                    fetch(url)
                    .then(respuesta=>respuesta.json())
                    .then(resultado=>arrayRecetas.push(resultado.meals[0]));
                    
            
                
            });
            
           setTimeout(()=>{        //Establecemos un tiempo de 0.5seg para que de tiempo a hacer la consulta antes de imprimir las recetas
                mostrarRecetas(arrayRecetas);   //Ejecutamos el método pasándole el array creado con las recetas COMPLETAS
            },500);
            

            
            return;            
        };

        //En el caso de que el arrayFavoritos(que hemos llenado con el localStorage) esté vacío, hará esto
        const noFavoritos = document.createElement("P");
        noFavoritos.classList.add("text-center", "fs-4", "font-bold", "mt-5");
        noFavoritos.textContent = "Aún no tiene favoritos ";
        resultado.appendChild(noFavoritos);



    }




};



//*********DE AQUI PARA ABAJO, SON FUNCIONES QUE USARÁN AMBAS PÁGINAS***************** */


//Función que trae al cargar la página, los objetos guardados en el LocalStorage.
function traerLocalStorage(){
        
    const array = JSON.parse(localStorage.getItem("favoritos")) || [];      //Si no hay nada, devuelve un array vacío
    localStorage.setItem("favoritos", JSON.stringify(array));
    return array;
};


//Función creada para limpiar el HTML del elemento en el que vamos a imprimir los resultados
function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    };
};



//Función que mimprime las recetas en la pantalla
function mostrarRecetas(recetas){
    
    //Limpiamos el HTML previo
    limpiarHTML(resultado);

    //Mensaje al imprimir resultados
    const heading = document.createElement("H2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recetas.length ? "Resultados:" : "No hay resultados";
    resultado.appendChild(heading);


   //Iteramos sobre el array que nos trae un conjunto de recetas COMPLETAS
    recetas.forEach(receta=>{
        const {idMeal, strMeal, strMealThumb} = receta;             //Extraemos de esa receta estos tres campos

        const recetaContenedor = document.createElement("DIV");     //Creamos el elemento contenedor
        recetaContenedor.classList.add("col-md-4");

        const recetaCard = document.createElement("DIV");           //Creamos un card
        recetaCard.classList.add("card", "mb-4");

        const recetaImagen = document.createElement("IMG");         //Creamos un elemento para guardar la imagen
        recetaImagen.classList.add("card-img-top");
        recetaImagen.alt = `Imagen de la receta ${strMeal}`;
        recetaImagen.src = strMealThumb;

        const recetaCardBody = document.createElement("DIV");       //Creamos un elemento para el body del card
        recetaCardBody.classList.add("card-body");

        const recetaHeading = document.createElement("h3");         //Creamos el titulo con el nombre de la receta
        recetaHeading.classList.add("card-title", "mb-3");
        recetaHeading.textContent = strMeal;

        const recetaButton = document.createElement("BUTTON");      //Creamos el botón que nos llevará a abrir la receta
        recetaButton.classList.add("btn", "btn-danger", "w-100");
        recetaButton.textContent = "Ver Receta";
        recetaButton.onclick = ()=>{                //Si pulsamos el botón, se ejecutará esta función pasandole el id de la receta
            seleccionarReceta(idMeal);
        };
        


        //Incluir en el HTML
        recetaCardBody.appendChild(recetaHeading);              //Añadimos todos los leementos a sus correspondientes contenedores
        recetaCardBody.appendChild(recetaButton);

        recetaCard.appendChild(recetaImagen);
        recetaCard.appendChild(recetaCardBody);

        recetaContenedor.appendChild(recetaCard);

        resultado.appendChild(recetaContenedor);


    });

};


//Función creada para obtener una receta desde la API pasandole un id
function seleccionarReceta(id){

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;       //Colocamos el id en la url que nos da la API para filtrar por id de receta

    fetch(url)                                  //Pedimos que nos envíe un objeto con toda la info de la receta
        .then(respuesta=> respuesta.json())
        .then(resultado=>mostrarRecetaModal(resultado.meals[0]))        //Llamamos al metodo que muestra la receta pasandole el objeto

};


//Función para hacer visible la ventana modal que se abrirá con la info compleat de una receta
function mostrarRecetaModal(receta){
       
    //Extraemos lo que imprimiremos de la receta
    const {idMeal, strInstructions, strMeal, strMealThumb} = receta;
    //Obtenemos los elementos de la ventana modal donde vamos a añadir el HTML
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    //Empezamos a pintar en los elementos de la ventana modal
    modalTitle.textContent = strMeal;
    //Colocamos en el body el HTML que crea la imagen y las instrucciones de la receta
    modalBody.innerHTML = `
        <img class="img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}"/>
        <h3 class="my-3">Instrucciones:</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes y Cantidades:</h3>
    `;
    //Creamos el elemento grupo que contendra todos los ingredientes con su cantidad
    const listGroup = document.createElement("UL");
    listGroup.classList.add("list-group");

    //Mostrar cantidades e ingredientes
    /*Viendo los atributos de la receta, tiene hasta 20 campos que no tienen que estar llenos por obligación. 
    20 son del los ingredientes y tiene otros 20 de las raciones. El orden se corresponde el de unos con los otros*/
    for(let i=1; i<=20; i++){                   //Iteramos desde el 1 hasta el 20
        if(receta[`strIngredient${i}`]){        //Si el campo en el que estamos tiene algo...:
            const ingrediente = receta[`strIngredient${i}`];
            const cantidad = receta[`strMeasure${i}`];

            const ingredienteLi = document.createElement("LI");             //Creamos un elemento de lista
            ingredienteLi.classList.add("list-group-item");
            ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

            listGroup.appendChild(ingredienteLi);                           //Lo añadimos al grupo
        };
    };

    modalBody.appendChild(listGroup);               //Añadimos el grupo al body de la ventana modal

    //Botones de favorito y cerrar
    const modalFooter = document.querySelector(".modal-footer");        //Obtenemos el elemento footer de la ventana modal
    limpiarHTML(modalFooter);                                       //Primero lo limpiamos para que no s acumule codigo

    const btnFavorito = document.createElement("BUTTON");           //Creamos un botón para aññadir a favoritos
    btnFavorito.classList.add("btn", "btn-danger", "col");        
    btnFavorito.textContent = arrayFavoritos.some(favorito=> favorito.id === idMeal) ? "Eliminar Favorito":"Agregar a Favoritos";           //Si en el array de favoritos ya hay algun objeto con ese id, el botón será para eliminar, sino, será para agregar
    btnFavorito.onclick = function(){
        agregarFavorito({       //Al pulsar el botón se ejecuta esta función. Le pasamos por parámetro un objeto solo con tres atributos de la receta, y le pasamos el propio botón("this")
            id: idMeal,
            titulo: strMeal,
            img: strMealThumb
        },this);
    };

    const btnCerrar = document.createElement("BTN");                //Creamos un botón para cerrar la ventana modal
    btnCerrar.classList.add("btn", "btn-secundary", "col");
    btnCerrar.textContent = "Cerrar"
    btnCerrar.onclick = ()=>modal.hide();                           //Si lo pulsamos, oculta la ventana modal

    modalFooter.appendChild(btnFavorito);               //Agregamos los botones al footer de la ventaa modal
    modalFooter.appendChild(btnCerrar);


    //Muestra la ventana modal
    modal.show();
    
};



//Función creada para agregar o eliminar una receta del array de favoritos y del localStorage
function agregarFavorito(receta, boton){

    let repetido = arrayFavoritos.some(favorito=> favorito.id===receta.id);         //Evaluamos si en el array ya hay algun objeto que su id sea el que recibimos por parámetro

    if(!repetido){                              //Si el resultado es false, lo agregamos
        arrayFavoritos.push(receta);            //Primero guardamos el objeto en el array de favoritos  
        localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));      //Despues actualizamos el localStorage con ese array
        boton.textContent = "Eliminar Favorito";            //Cambiamos el texto del botón para que ya no sea agregar, sino eliminar, ya que en este punto el elemento ya se ha agregado a favoritos
        mostrarToast("¡Agregado correctamente!");           //Mostramos el toast con este mensaje(el taos es como una notificación)
    }else{  //Si ya existía esta receta en el array de favoritos...:
        eliminarFavorito(receta.id);                        //Llamamos a la función que al elimina de favoritos pasandole el id
        boton.textContent = "Agregar a Favorito";           //Cambiamso texto del botón para que, una vez eliminado nos vuelva a poner para agregarlo
        mostrarToast("Eliminado correctamente!");           //Muestra el toast con ese mensaje
    }
                        
};


//Función creada para eliminar una receta del array de favoritos y del localStorage
function eliminarFavorito(id){

    arrayFavoritos = arrayFavoritos.filter(favorito=> favorito.id !== id);      //Reescribimos el array de favoritos, pero solo con los objetos que tengan el id diferente al que le hemos pasado.

    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));          //Actualizamos el localStorage con ese array ya actualizado
    
    if(!seleccionaPagina){              //Si la variable creada al principio del documento, está en false, es que este método se está ejecutando desde la ventana de "favoritos", y solo en este caso, realizará este "setTimeout"
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }
    
};


//Función que crea y muestra el toast
function mostrarToast(mensaje){
    const toastDiv = document.querySelector("#toast");              //Extraemos las partes del toast creado en el HTML
    const toastBody = document.querySelector(".toast-body");
    const toast = new bootstrap.Toast(toastDiv);                    //Creamos un toast apuntando al elemento que lleva esa clase
    toastBody.textContent = mensaje;                        //Le damso el mensaje que recibe por parámetro
    toast.show();                                   //Ejecutamos el método que lo hace visible. Internamente trae un setTimeout que tras 3seg, lo vuelve a ocultar

};








