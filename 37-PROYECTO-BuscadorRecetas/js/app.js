
document.addEventListener("DOMContentLoaded", iniciarApp);



function iniciarApp(){

    const selectCategorias = document.querySelector("#categorias");
    const resultado = document.querySelector("#resultado");
    const modal = new bootstrap.Modal("#modal", {});

    const arrayFavoritos = traerLocalStorage();
    
    function traerLocalStorage(){
        
        const array = JSON.parse(localStorage.getItem("favoritos")) || [];
        localStorage.setItem("favoritos", JSON.stringify(array));
        return array;
    };



    selectCategorias.addEventListener("change", seleccionarCategoria);


    obtenerCategorias();


    function obtenerCategorias(){

      

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>  mostrarCategorias(resultado.categories));

    };



    function mostrarCategorias(categorias){
        

        categorias.forEach(categoria=>{

            const option = document.createElement("OPTION");

            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;

            selectCategorias.appendChild(option);

        });


    };


    function seleccionarCategoria(e){

        const categoria = e.target.value;

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>mostrarRecetas(resultado.meals))
            .catch(resultadoMal=>{ 
                const heading = document.createElement("H2");
                heading.classList.add("text-center", "text-black", "my-5");
                heading.textContent = "No hay resultados";
                resultado.appendChild(heading);
            });
            


    };


    function mostrarRecetas(recetas){
    
        //Limpiamos el HTML previo
        limpiarHTML(resultado);

        //Mensaje al imprimir resultados
        const heading = document.createElement("H2");
        heading.classList.add("text-center", "text-black", "my-5");
        heading.textContent = recetas.length ? "Resultados:" : "No hay resultados";
        resultado.appendChild(heading);

       //Iterar en los resultados
        recetas.forEach(receta=>{
            const {idMeal, strMeal, strMealThumb} = receta;
            const recetaContenedor = document.createElement("DIV");
            recetaContenedor.classList.add("col-md-4");

            const recetaCard = document.createElement("DIV");
            recetaCard.classList.add("card", "mb-4");

            const recetaImagen = document.createElement("IMG");
            recetaImagen.classList.add("card-img-top");
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement("DIV");
            recetaCardBody.classList.add("card-body");

            const recetaHeading = document.createElement("h3");
            recetaHeading.classList.add("card-title", "mb-3");
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement("BUTTON");
            recetaButton.classList.add("btn", "btn-danger", "w-100");
            recetaButton.textContent = "Ver Receta";
            recetaButton.onclick = ()=>{
                // recetaButton.dataset.bsTarget = "#modal";
                // recetaButton.dataset.bsToggle = "modal";
                seleccionarReceta(idMeal);
            };
            

            //Incluir en el HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        });

    };


    function seleccionarReceta(id){

        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=>mostrarRecetaModal(resultado.meals[0]))

    };


    function mostrarRecetaModal(receta){
       
        //Extraemos lo que imprimiremos de la receta
        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;
        //Obtenemos los elementos de la ventana modal donde vamos a añadir el HTML
        const modalTitle = document.querySelector(".modal .modal-title");
        const modalBody = document.querySelector(".modal .modal-body");

        //Empezamos a pintar en los elementos de la ventana modal
        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}"/>
            <h3 class="my-3">Instrucciones:</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades:</h3>
        `;
        //Creamos el elemento grupo que contendra cada ingrediente con us cantidad
        const listGroup = document.createElement("UL");
        listGroup.classList.add("list-group");

        //Mostrar cantidades e ingredientes
        for(let i=1; i<=20; i++){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement("LI");
                ingredienteLi.classList.add("list-group-item");
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            };
        };

        modalBody.appendChild(listGroup);

        //Botones de favorito y cerrar
        const modalFooter = document.querySelector(".modal-footer");
        limpiarHTML(modalFooter);

        const btnFavorito = document.createElement("BUTTON");
        btnFavorito.classList.add("btn", "btn-danger", "col");        
        btnFavorito.textContent = "Agregar a Favoritos";
        btnFavorito.onclick = function(){
            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
        };

        const btnCerrar = document.createElement("BTN");
        btnCerrar.classList.add("btn", "btn-secundary", "col");
        btnCerrar.textContent = "Cerrar"
        btnCerrar.onclick = ()=>modal.hide();

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);


        //Muestra la ventana modal
        modal.show();
        
    };


    function agregarFavorito(receta){

        let repetido = arrayFavoritos.some(favorito=> favorito.id===receta.id);

        if(!repetido){
            arrayFavoritos.push(receta);
            localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));
        };
                            
    };
    

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        };
    };





};








