


//Creamos el objeto de Seguro
function Seguro(marca, year, tipo){

    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

};

//Creamos un método de Seguro para cotizar el precio del seguro en función del valor de sus atributos
Seguro.prototype.cotizarSeguro = function (){

    let cantidad;
    const base = 2000;
    switch(this.marca){

        case "1":
            cantidad = base*1.15;                   //Se incrementa un 15%
            break;
        case "2":
            cantidad = base*1.05;                   //Se incrementa un 5%
            break;
        case "3":   
            cantidad = base*1.35;                   //Se incrementa un 35%
            break;     
        default:
            break;
    };

    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= ((diferencia*3) * cantidad) / 100;                  //Se descuenta un 3% por cada año de antigÜedad

    if(this.tipo==="basico"){
        cantidad += cantidad*0.3;                   //Se incrementa un 30%

    }else{
        cantidad += cantidad*0.5;                   //Se incrementa un 50%

    }

    return cantidad;

};


//Creamos el objeto UI, que su constructor estará vacío
function UI(){



};


//Creamos un método de UI, que rellenará el desplegable de años
UI.prototype.llenarOpciones = ()=>{

    const max = new Date().getFullYear();
    const min = max - 10;

    const selectYear = document.querySelector("#year");

    for(let i = max; i>=min;i--){

        let option = document.createElement("option");

        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);

    };

};


//Creamos un método de UI, que creará y mostrará el mensaje, segun lo que le mandemos, de error o de exito, y lo borrará a los 3seg.
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{

    const div = document.createElement("div");

   

    if(tipo === "error"){
        div.classList.add("error");
    }else{
        div.classList.add("correcto");
    };

    div.classList.add("mensaje", "mt-10");
    div.textContent = mensaje;

    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(()=>{
        div.remove();
    },3000);

};


//Creamos un método de UI, que mostrará el resultado de la cotización, después de cargar.
UI.prototype.mostrarResultado = (total, seguro)=>{

    const {marca, year, tipo} = seguro;
    let textoMarca;

    switch (marca){
        case "1":
            textoMarca = "Americano";
            break;
        case "2":
            textoMarca = "Asiático";
            break;
        case "3":
            textoMarca = "Europeo";
            break;
        default:
            break;
    }

    const div = document.createElement("div");

    div.classList.add("mt-10");

    div.innerHTML = `
    
        <p class="header"> Tu resumen</p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${textoMarca} </span></p>        
        <p class="font-bold"> Año: <span class="font-normal"> ${year} </span></p>
        <p class="font-bold"> Tipo seguro: <span class="font-normal"> ${tipo} </span></p>
        <p class="font-bold"> Total: <span class="font-normal"> ${total}€ </span></p>

    
    `;

    const resultadoDiv = document.querySelector("#resultado");

    const spinner = document.querySelector("#cargando");

    spinner.classList.remove("hidden"); 

    setTimeout(()=>{
        spinner.classList.add("hidden");
        resultadoDiv.appendChild(div);

    },3000);

};


//instanciamos un objeto de tipo UI del que usaremos sus métodos
const ui = new UI();


//Ponemos un EventListener al documento para que ejecute el método de rellenar los años nada más cargar
document.addEventListener("DOMContentLoaded", ()=>{

        ui.llenarOpciones();




});

eventListeners();//Ejecutamos la función que carga los EventListeners

//Extraemos el elemento formulario y le damos un EventListener para cuando hagamos submit, que ejecute el método que cotiza el seguro
function eventListeners(){

    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);

};


//Creamos un método que se ejecuta con el submit. Primero valida los campos y si esta bien, lanza mensaje, realiza cotización y muestar el resultado.
function cotizarSeguro(e){

    e.preventDefault();

    const marca = document.querySelector("#marca").value;

    const year = document.querySelector("#year").value;

    const tipo = document.querySelector("input[name='tipo']:checked ").value; 
    
    if(marca === "" || year === "" || tipo === ""){
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }
       
    
    ui.mostrarMensaje("Cotizando...", "correcto");

    const resultados = document.querySelector("#resultado div");
    if(resultados!==null){
        resultados.remove();
    }

    const seguro = new Seguro(marca, year, tipo);

    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(total, seguro);

};
