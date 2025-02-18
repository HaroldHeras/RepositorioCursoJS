




//AÑADIMOS LISTENER AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", ()=>{

    
    const formulario = document.querySelector("#cotizar-seguro");
    

    cargaYears();

    formulario.addEventListener("submit", obtieneSeleccion);

    
});


//OBJETO UI:

function UI(marca, year, tipo){                         //CONSTRUCTOR DEL OBJETO

    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

};


UI.prototype.autoValida = function() {                  //METODO PARA VALIDAR SELECCION

    if(this.marca === ""){
        
        return false;
    };

    switch (this.marca){
        case "1":
            this.marca = "Americano"
            break;
        case "2":
            this.marca = "Asiático"
            break;

        case "3":
            this.marca = "Europeo"
            break;
        default:
            break;
    };

    return true;


};


UI.prototype.creaMensaje = (validacion)=>{          
    
    //METODO PARA CREAR MENSAJE DE ERROR O CONFIRMAR
    
    const formulario = document.querySelector("#cotizar-seguro");
    const resultado = document.querySelector("#resultado");
    const spinner = document.querySelector("div #cargando ");

    let mensaje = document.createElement("div");
    mensaje.classList.add("mensaje", "mt-10");


    if(!validacion){
        mensaje.classList.add("error");
        mensaje.textContent = "Debe seleccionar una marca";

        
    }else{
        mensaje.classList.add("correcto");
        mensaje.textContent = "Calculando...";
        spinner.classList.remove("hidden");
        
    };


    formulario.insertBefore(mensaje, resultado);

    while(resultado.firstChild){ resultado.removeChild(resultado.firstChild)};



    setTimeout(()=>{
        mensaje.remove();
        spinner.classList.add("hidden");
    }, 3000);

};



UI.prototype.muestraResultado = function() {                                //METODO QUE MUESTRA EL RESULTADO

    const total = this.calculoSeguro();

    const resultado = document.querySelector("#resultado");

    while(resultado.firstChild){ resultado.removeChild(resultado.firstChild)};

    const resultadoHijo = document.createElement("div");
    resultadoHijo.classList.add("mt-10");

    resultadoHijo.innerHTML = `
        <p class="header"> Tu resumen</p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${this.marca} </span></p>        
        <p class="font-bold"> Año: <span class="font-normal"> ${this.year} </span></p>
        <p class="font-bold"> Tipo seguro: <span class="font-normal"> ${this.tipo} </span></p>
        <p class="font-bold"> Total: <span class="font-normal"> ${total}€ </span></p>

    `;

    resultado.appendChild(resultadoHijo);


};


UI.prototype.calculoSeguro = function(){                              //METODO QUE CALCULA EL RESULTADO ANTES DE MOSTRARLO

    let cantidad;
    const base = 2000;
    switch(this.marca){

        case "Americano":
            cantidad = base + (base*0.15);
            break;
        case "Asiático":
            cantidad = base + (base*0.05);
            break;
        case "Europeo":   
        cantidad = base + (base*0.35);
            break;     
        default:
            break;
    };

    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= ((diferencia*3) * cantidad) / 100;

    if(this.tipo==="basico"){
        cantidad += cantidad*0.3;

    }else{
        cantidad += cantidad*0.5;

    }

    return cantidad;

};


//FUNCIONES ANÓNIMAS

function cargaYears(){                                            //CARGA EL SELECTOR DE AÑOS CON LOS 10 ULTIMOS AÑOS DESDE EL ACTUAL

    const seletctorYear = document.querySelector("#year");
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 10;

    for(let i=maxYear; i>=minYear; i--){

        const year = document.createElement("option");
        year.value = i;
        year.textContent = i;
        seletctorYear.appendChild(year);

    };
};


function obtieneSeleccion(e){                 //OBTIENE LAS SELECCIONES DEL FORMULARIO E INSTANCIA UN OBJETO PASANDOLE LO SELECCIONADO

    e.preventDefault();
    
    const marcaSeleccion = document.querySelector("#marca").value;
    const yearSeleccion = document.querySelector("#year").value;
    const tipoSeleccion = document.querySelector("input[name='tipo']:checked").value;

    const ui = new UI(marcaSeleccion, yearSeleccion, tipoSeleccion);

    const validacion = ui.autoValida();

    ui.creaMensaje(validacion);

    if(validacion){
        setTimeout(()=>{
            ui.muestraResultado();
        }, 3000);
    };

};











