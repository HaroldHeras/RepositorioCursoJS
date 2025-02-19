
let miPresupuesto;
let ui;

const formulario = document.querySelector("#agregar-gasto");



document.addEventListener("DOMContentLoaded", ()=>{

     

    const respuesta = Number(prompt("Indique su presupuesto de gasto:"));

    
    if(respuesta<=0 || isNaN(respuesta)){
       window.location.reload();
    };

    miPresupuesto = new Presupuesto(respuesta);
    ui = new UI();

    ui.arranca(miPresupuesto);

    
        

});



formulario.addEventListener("submit",function(){
    ui.validaInput();
});











class Presupuesto{

    constructor(presupuesto){

        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.arrayGastos = [];

    };


    



};





class UI{

    constructor(){

        
    };


    arranca(presupuestoObj){

        const {presupuesto, restante} = presupuestoObj;

        const presupuestoDiv = document.querySelector("#total");
        const restanteDiv = document.querySelector("#restante");

        presupuestoDiv.textContent = presupuesto;
        restanteDiv.textContent = restante;
    }


    validaInput(){
        const nombreGasto = formulario.querySelector("#gasto").value;
        const cantidadGasto = Number(formulario.querySelector("#cantidad").value);

        if(nombreGasto.trim() === "" || cantidadGasto===0 ){
            this.creaAlerta("Todos los campos son obligatorios", "error");
            return;
        }else if(cantidadGasto<0 || isNaN(cantidadGasto)){
            this.creaAlerta("Cantidad no válida", "error");
            return;
        }else{
            this.creaAlerta("Gasto añadido", "correcto");
        }

        formulario.reset();

        this.agregarGasto(nombreGasto, cantidadGasto);


    }


    creaAlerta(mensaje, tipo){
        
        const alerta = document.createElement("div");
        alerta.classList.add("text-center", "alert");

        if(tipo==="error"){
            alerta.classList.add("alert-danger");
        }else{
            alerta.classList.add("alert-success");
        }

        alerta.textContent = mensaje;

        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        },3000);


    };


    agregarGasto(nombre, cantidad){

        const listaGastos = document.querySelector("#gastos");
        while(listaGastos.firstChild){listaGastos.removeChild(listaGastos.firstChild)};

        const gasto ={
            nombre,
            cantidad,
            id: Date.now()
        };

        miPresupuesto.arrayGastos = [...miPresupuesto.arrayGastos, gasto];

        miPresupuesto.arrayGastos.forEach( elemento =>{

            const {nombre, cantidad, id} = elemento;

            const gastoDiv = document.createElement("li");
            gastoDiv.className = "list-group-item d-flex justify-content-between align-items-center ";
            gastoDiv.setAttribute("data-id", id);
            gastoDiv.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad}€</span>`;
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.textContent = "Borrar X";
            gastoDiv.appendChild(btnBorrar);

            listaGastos.appendChild(gastoDiv);

            
        });


    };


};