
//Variables y selectores

const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");



//Eventos

eventListeners();

function eventListeners(){

    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

    formulario.addEventListener("submit", agregarGasto);
}



//Clases

class Presupuesto{

    constructor (presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    };


    nuevoGasto(gasto){
        this.gastos =  [...this.gastos, gasto]; 
        this.calcularRestante();
    };


    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=>total + gasto.cantidad, 0);
        
        this.restante = this.presupuesto - gastado;

    }
};



class UI{

    insertarPresupuesto(cantidad){

        const {presupuesto, restante} = cantidad;

        

        
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;

    };


    imprimirAlerta(mensaje, tipo){
            const divMensaje = document.createElement("div");
            divMensaje.classList.add("text-center", "alert");

            if(tipo ==="error"){
                divMensaje.classList.add("alert-danger");
            }else{
                divMensaje.classList.add("alert-success");

            };

            divMensaje.textContent = mensaje;

            document.querySelector(".primario").insertBefore(divMensaje, formulario);

            setTimeout(()=>{
                divMensaje.remove();
            },3000);
    };

    agregarGastoListado(gastos){

        this.limpiarHTML();

        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            const nuevoGasto = document.createElement("li");
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center ";
            //nuevoGasto.setAttribute("data-id", id);   Este hace lo mismo que el de abajo
            nuevoGasto.dataset.id = id;

            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad}€</span>`;


            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.textContent = "Borrar X";

            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);


        });

    };

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector("#restante").textContent = restante;
        

    }


};


const ui = new UI();
let presupuesto;





//Funciones


function preguntarPresupuesto(){

    const presupuestoUsuario = Number(prompt("¿Cual es tu presupuesto?"));


    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario<=0){ 
        window.location.reload();
    };

    

    presupuesto = new Presupuesto(presupuestoUsuario);

    

    ui.insertarPresupuesto(presupuesto);

    


};



function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector("#gasto").value;
    const cantidad = Number(document.querySelector("#cantidad").value);


    if(nombre==="" || cantidad===""){
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    }else if(cantidad<=0 || isNaN(cantidad)){
        ui.imprimirAlerta("Cantidad no valida", "error");
        return;
    };


    const gasto = {nombre, cantidad: Number(cantidad), id: Date.now()};


    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta("Gasto agregado correctamente");

    const {gastos, restante} = presupuesto;

    


    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    formulario.reset();

};

