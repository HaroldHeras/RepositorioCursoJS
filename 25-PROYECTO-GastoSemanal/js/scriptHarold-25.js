


const formulario = document.querySelector("#agregar-gasto");
let miPresupuesto;
let ui;

agregarBotonAumento();




document.addEventListener("DOMContentLoaded", ()=>{

    ui = new UI();


    const storage = JSON.parse(localStorage.getItem("presupuesto"));

    

    if(storage===null){

        const respuesta = Number(prompt("Indique su presupuesto de gasto:"));
        
        

    
        if(respuesta<=0 || isNaN(respuesta) || respuesta===9999999999e999999999){
            
            window.location.reload();
            return;
        };

        miPresupuesto = new Presupuesto(respuesta);
        ui.arranca(miPresupuesto);
        sincronizaLocalStorage(miPresupuesto);
    }else{
        
       
        const {presupuesto, restante, arrayGastos} = storage;

        miPresupuesto = new Presupuesto(presupuesto);
        miPresupuesto.restante = restante;
        miPresupuesto.arrayGastos = arrayGastos;
        ui.pintarLista();
        sincronizaLocalStorage(miPresupuesto);

    }

        


    
        

});



formulario.addEventListener("submit",function(){
    ui.validaInput();
});

formulario.querySelector("#boton-aumento").addEventListener("click", function(e){

    e.preventDefault();

    const gastos = miPresupuesto.arrayGastos.reduce((total, gasto)=>total + gasto.cantidad,0);

    const nuevoPresu = Number(prompt("Indique su nuevo presupuesto de gasto:"));

    if(nuevoPresu<=0 || isNaN(nuevoPresu)){
        ui.creaAlerta("Nuevo presupuesto no válido", "error");
        return;
    }else if(nuevoPresu<gastos){
        ui.creaAlerta("El nuevo presupuesto no puede superar los gastos actuales", "error");
        return;
    };

    miPresupuesto.actualizaPresupuesto(nuevoPresu);

});











class Presupuesto{

    constructor(presupuesto){

        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.arrayGastos = [];

    };

    actualizaPresupuesto(nuevoPresupuesto){

        this.presupuesto = nuevoPresupuesto;
        ui.pintarLista();
        


    };

    actualizaRestante(){


        const totalGastos = this.arrayGastos.reduce((total, gasto)=>total + gasto.cantidad,0);
        this.restante = this.presupuesto - totalGastos;


    };

    agregarGastoPresupuesto(nombre, cantidad){
        const gasto ={
            nombre,
            cantidad,
            id: Date.now()
        };

        miPresupuesto.arrayGastos = [...miPresupuesto.arrayGastos, gasto];

        sincronizaLocalStorage(miPresupuesto);
    }


    



};





class UI{

    constructor(){

        
    };


    arranca(presupuestoObj){

        const {presupuesto, restante} = presupuestoObj;

        const restContenedor = document.querySelector("#presupuesto .restante");
        const presupuestoDiv = document.querySelector("#total");
        const restanteDiv = document.querySelector("#restante");

        presupuestoDiv.textContent = presupuesto;
        restanteDiv.textContent = restante;

        
        if((presupuesto/4)>restante){
            restContenedor.classList.remove("alert-success", "alert-warning");
            restContenedor.classList.add("alert-danger");
        }else if((presupuesto/2)>restante){
            restContenedor.classList.remove("alert-success","alert-danger");
            restContenedor.classList.add("alert-warning");            
        }else{
            restContenedor.classList.remove("alert-warning","alert-danger");
            restContenedor.classList.add("alert-success");      
        };
        

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
        }else if(cantidadGasto>miPresupuesto.restante){
            this.creaAlerta("El gasto excede su presupuesto restante", "error");
            return;
        }else{
            this.creaAlerta("Gasto añadido", "correcto");
        }

        formulario.reset();

        miPresupuesto.agregarGastoPresupuesto(nombreGasto,cantidadGasto);

        

        this.pintarLista();


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


    pintarLista(){

        const listaGastos = document.querySelector("#gastos");
        while(listaGastos.firstChild){listaGastos.removeChild(listaGastos.firstChild)};

        
        miPresupuesto.arrayGastos.forEach( elemento =>{
            
            const {nombre, cantidad, id} = elemento;

            const gastoLi = document.createElement("li");
            gastoLi.className = "list-group-item d-flex justify-content-between align-items-center ";
            gastoLi.setAttribute("data-id", id);
            gastoLi.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad}€</span>`;
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.textContent = "Borrar X";
            btnBorrar.onclick = ()=>{
                this.borrarGasto(id);
            };
            gastoLi.appendChild(btnBorrar);

            listaGastos.appendChild(gastoLi);
                        
        });

        miPresupuesto.actualizaRestante();
        this.arranca(miPresupuesto);
        sincronizaLocalStorage(miPresupuesto);



    };



    borrarGasto(id){

       miPresupuesto.arrayGastos = miPresupuesto.arrayGastos.filter(gasto =>{
            if(gasto.id !== id){return gasto;}
                
        });

        miPresupuesto.actualizaRestante();
        this.pintarLista();

    }


};





function agregarBotonAumento(){

    const btnBotonAumento = document.createElement("button");
    btnBotonAumento.classList.add("btn", "btn-secundary");
    btnBotonAumento.id = "boton-aumento";
    btnBotonAumento.textContent = "Cambiar presupuesto";
    
    formulario.appendChild(btnBotonAumento);

};


function sincronizaLocalStorage(presupuestoObj){

    localStorage.setItem("presupuesto", JSON.stringify(presupuestoObj));

};