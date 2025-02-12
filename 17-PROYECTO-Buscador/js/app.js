//VARIABLES

/*Extraemos todos los elementos con los que vamos a trabajar */
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");


const resultado = document.querySelector("#resultado");


/*Creamos estas constantes para dar valor a la sección de año */
const max = new Date().getFullYear();   //La fecha actual y con ".getFullYear()" el año de esa fecha
const min = max - 10;                   //Ponemos como año mínimo, 10 años antes que el actual



const datosBusqueda = {                 //Creamos el objeto en el que vamso a almacenar lo que seleccionemos en el formulario

    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",


};






//EVENTOS


/*Evento que se ejecuta al cargarse el documento*/
document.addEventListener("DOMContentLoaded", ()=> {


    mostrarAutos(autos);            //Muestra los autos seleccionados(aquí son todos)


    llenarSelect();                 //Llena el campo de los años



});



/*Creamos los EventListener de cada campo para que al cambiar cualquiera de ellos, se actualice el objeto 
en el que almacenamos los datos seleccionados, y se haga el filtrado de coches con esa selección */
marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value;               //Almacenamos en el objeto el valor de esa selección
    filtrarAuto();                                      //Mandamos filtrar con esa selección
});
year.addEventListener("change", e =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener("change", e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change", e =>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener("change", e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});








//FUNCIONES


/*Función que imprime los autos que hemos seleccionado, o imprime todos si no hay ninguna seleccion */
function mostrarAutos(arrayRecibido){

    limpiarHTML();                              //Limpiamos el HTML para que no se acumule con resultados anteriores

    arrayRecibido.forEach( auto =>{             //Extraemos los valores de cada auto del array que hemos recibido por parámetro, cremos el HTML y lo imprimimos

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        
            ${marca} ${modelo} ${year}  ${puertas} Puertas --  Transmisión: ${transmision} -- Precio: ${precio} -- Color: ${color} 
        `;

        resultado.appendChild(autoHTML);

    });
};


/*Función creada para limpiar el HTML de los resultados, para que no se acumulen resultados antiguos con los nuevos */
function limpiarHTML(){
    while(resultado.firstChild){                            //Si existe algún elemento hijo en este campo, los va eliminando uno a uno
        resultado.removeChild(resultado.firstChild);
    };
};


/*Función creada para llenar el campo de los años que se pueden seleccionar */
function llenarSelect(){

    for(let i=max; i>=min; i--){                                //Vamos de mayor a menor para que vaya del año actual hacia atrás
                                                                //Con cada vuelta del for:
        const opcion = document.createElement("option");        //Creamos un elemento nuevo
        opcion.value = i;                                       //Le damos el valor de "i"
        opcion.textContent = i;                                 //En el texto que aparece le damos el mismo valor

        year.appendChild(opcion);                               //Añadimos el elemento al desplegable de "Año"
    };

};


/*FUNCIÓN DE ALTO NIVEL. Creamos esta función para filtrar el Array de coches existentes según los criterios de busqueda.*/

function filtrarAuto(){

    /*Anidamos funciones ".filter". Creamos un array que guardará los resultados del filtrado. 
    Va de izquierda a derecha. Como argumento le metemos otra función, por lo que cada objeto del array filtrado 
    se lo enviará a la función que le metemos de argumento y nos va devolviendo los objetos que hayan pasado todos los filtros*/
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);;

    if(resultado.length){               //Una vez pasado el filtrado, si el Array generado no esta vacío, lo manda a imprimir

        mostrarAutos(resultado);
    }else{                              //El array está vacío, ejecutamos una función para imprimir una alerta
        noResultado();
    }

};

/*Función para imprimir una alerta cuando ningún coche pase el filtro */
function noResultado(){

    limpiarHTML();                                          //Primemro limpiamos los resultados anteriores

    const noResultado = document.createElement("div");      //Creamos un elemento de "No hay resultados"
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados";
    resultado.appendChild(noResultado);                     //Lo incluimos en el HTML

};


/*Añadimos todas las funciones que incluiremos en los filtros y reciben cada coche de la base de datos */

function filtrarMarca(auto){
    if(datosBusqueda.marca){                            //Si hemos escogido algo de este desplegable se ejecuta esto
        return auto.marca === datosBusqueda.marca;      //Si la marca del auto recibido es igual a la de la seleccion: true. Sino: false
    }

    return auto;                                        /*Si no hay nada escogido de este desplegable, nos devuelve todos 
                                                        los coches del array recibido por parámetro*/
};

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }

    return auto;
};


function filtrarMinimo(auto){

    if(datosBusqueda.minimo){                                   //Si el precio es mayor o igual que el valor minimo seleccionado
        return auto.precio >= parseInt(datosBusqueda.minimo);   //Parseamos porque el formulario devuelve el numero en string
    }

    return auto;

};


function filtrarMaximo(auto){

    if(datosBusqueda.maximo){                                   //Si el precio es igual o menor del valor máximo seleccionado
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }

    return auto;

};


function filtrarPuertas(auto){

    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }

    return auto;

};


function filtrarTransmision(auto){

    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;

};


function filtrarColor(auto){

    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }

    return auto;

};

