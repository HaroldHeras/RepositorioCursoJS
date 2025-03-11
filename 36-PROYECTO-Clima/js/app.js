



const container = document.querySelector(".container");         //Obtenemos los elementos que vamos a usar
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");


window.addEventListener("load", ()=>{                           //Al cargar la ventana


    formulario.addEventListener("submit", buscarClima);         //Al hacer submit en el formulario


});

//FUNCION AL HACER SUBMIT
function buscarClima(e){            

    e.preventDefault();

    const ciudad = document.querySelector("#ciudad").value;
    const pais = document.querySelector("#pais").value;

     //VALIDAR CAMPOS
     if(ciudad.trim()==="" || pais===""){
        mostrarError("Ambos campos son obligatorios");
        return;
     }

    //CONSULTAR API
     consultarAPI(ciudad,pais);         //Enviamos lo obtenido en los dos campos

}


//FUNCION PARA CRAR ALERTAS
function mostrarError(mensaje){

    if(document.querySelector("div.alerta")){

        document.querySelector("div.alerta").remove();
    }

    const alerta = document.createElement("div");

    alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-md",
        "mx-auto", "mt-6", "text-center", "alerta");

    alerta.innerHTML = `
        <strong class="font-bold">¡ERROR!</strong>
        <span class="block">${mensaje}</span>
    `;

    container.appendChild(alerta);


    setTimeout(()=>{
        alerta.remove();
    },3000);
};


//FUNCION QUE CONSULTA LA API DEL CLIMA
function consultarAPI(ciudad,pais){

    /*Hemos creado en la página web de "openweather" un "APY Key" que es el identificador que nos da la página para saber
    que somos nosotros los que estamos consumiendo sus recursos a traves de esa key*/
    const idAPI = "5814626789a72b8a2e10d95e564c0084";  //API Key


    /*Buscamso en la página web los "API Caller", que son las formas de llamar a la API y que nos devuelva la info que necesitamos */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${idAPI}`;       //API Caller pasandole los parámetros que necesita

    Spinner();          //Creamos el Spinner que se reproduce mientras carga la info que nos envia la API

    fetch(url)          //Apuntamos hacia la dirección del API Caller
        .then(respuesta=> respuesta.json())     //La respuesta de la petición la mandamos traducir a un JSON
        .then(resultado=>{                      //Respuesta en JSON
            
            limpiarHTML();          //Limpiamos el HTML para que borre Spinner y resultados anteriores   

            if(resultado.cod==="404"){                      //Si el atributo "cod" del resultado es 404, es que ha habido un error
                mostrarError("Ciudad no encontrada");
                return;
            }

            mostrarClima(resultado);                        //Si todo ha ido bien, mostramso el clima
        });


};


//FUNCION PARA INTERPRETAR LOS DATOS DE LA API Y MOSTRARLOS EN LA PÁGINA
function mostrarClima(datos){
    
    const nombre = datos.name.toUpperCase();            //Extraemos del objeto que nos llega, el nombre, y las temperaturas
    const {temp, temp_max, temp_min}=datos.main;

    const actual = kelvinACentigrados(temp);        //Con una función creada, lo pasamos a ºC y parseamos a numero entero
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const ciudad = document.createElement("p");     //Creamos los parrafos con los valores
    ciudad.textContent = `CLIMA EN  ${nombre}`;
    ciudad.classList.add("font-bold", "text-2xl");

    const tempActual = document.createElement("p");
    tempActual.innerHTML = `${actual} &#8451`;
    tempActual.classList.add("font-bold", "text-6xl");

    const tempMax = document.createElement("p");
    tempMax.innerHTML = `Max: ${max} &#8451`;
    tempMax.classList.add("text-xl");

    const tempMin = document.createElement("p");
    tempMin.innerHTML = `Min: ${min} &#8451`;
    tempMin.classList.add("text-xl");

    const resultadoDiv = document.createElement("div");                 //Creamos un div que contendrá a los parrafos
    resultadoDiv.classList.add("text-center", "text-white");

    resultadoDiv.appendChild(ciudad);                   //Añadimos los parrafos al div
    resultadoDiv.appendChild(tempActual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);                //Añadimso el div al elemento "resultado"

    
};

const kelvinACentigrados = grados =>  parseInt(grados-273.15);          //Función corta creada para transformar la temperatura de ºK a ºC y parsear a int


function limpiarHTML(){                                     //Función para limpiar el HTML del resultado
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    };
};

//FUNCION PARA CREAR EL SPINNER
function Spinner(){                                     

    limpiarHTML();              //Primero limpiamos el HTML para borrar antiguos resultados


    /*Desde "spinkit.com" buscamos el spinner que queremos, y en source copiamos el CSS y lo pegamos en nuestra hoja de estilos. 
    Después creamos el div que será el spinner , le damos la clase que le otorga las propiedades css y pegamso el HTML que 
    nos da la página en el source del spinner*/
    const spinner = document.createElement("div");
    spinner.classList.add("sk-fading-circle");
    spinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(spinner);         //Añadimos el div Spinner al resultado

};

