//VARIABLES


const selecciones = {
    marca: "",
    year: "",
    precioMin: "",
    precioMax: "",
    puertas: "",
    transmision: "", 
    color: ""
};


const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");

const resultado = document.querySelector("#resultado");
const buscar = document.querySelector(".contenedor h1");









//EVENTOS

document.addEventListener("DOMContentLoaded", ()=> {

    const caca = {
        caca1: 1,
        caca2: 2
    }

    

    mostrarAutos();



    llenarSelect();
    colocaListeners();

    

});


function colocaListeners(){
    marca.addEventListener("change", obtieneSeleccion);
    year.addEventListener("change", obtieneSeleccion);
    minimo.addEventListener("change", obtieneSeleccion);
    maximo.addEventListener("change", obtieneSeleccion);
    puertas.addEventListener("change", obtieneSeleccion);
    transmision.addEventListener("change", obtieneSeleccion);
    color.addEventListener("change", obtieneSeleccion);
    
    buscar.addEventListener("click", ejecuta);
};







//FUNCIONES

function mostrarAutos(){

    for(let i=0;i<autos.length;i++){

        const autoHTML = document.createElement("p");

        autoHTML.textContent = Object.values(autos[i]);

        resultado.appendChild(autoHTML); 



    }
};



function llenarSelect(){

    const max = new Date().getFullYear();
    const min = max - 10;

    for(let i=max; i>=min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
    };

};




function obtieneSeleccion(e){

    const valor = e.target.value;

    switch(e.target.id){

        case "marca":
            selecciones.marca = valor;
            break;

        case "year":
            selecciones.year = valor;
            break;
        case "minimo":
            selecciones.precioMin = valor;
            break;
        case "maximo":
            selecciones.precioMax = valor;
            break;
        case "puertas":
            selecciones.puertas = valor;
            break;
        case "transmision":
            selecciones.transmision = valor;
            break;
        case "color":
            selecciones.color = valor;
            break;



    };

};



function ejecuta(){

    

        const autoHTML = document.createElement("p");

        autoHTML.textContent = Object.values(selecciones);

        resultado.appendChild(autoHTML); 



    
};