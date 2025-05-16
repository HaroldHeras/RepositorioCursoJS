import { obtenerClienteIndividual, editarCliente } from "./API.js";
import { validar, mostrarAlerta } from "./funciones.js";


(function(){

        const formulario = document.querySelector("#formulario");


        const nombreInput = document.querySelector("#nombre");
        const emailInput = document.querySelector("#email");
        const telefonoInput = document.querySelector("#telefono");
        const empresaInput = document.querySelector("#empresa");
        const idInput = document.querySelector("#id");

        

    //Cuando carga la página, coloca en los input directamente la info del cliente que queremos editar
    document.addEventListener("DOMContentLoaded", async ()=>{


        //Usamos una clase y su método para buscar entre los parámetros de la url, uno en concreto y obtener su valor
        const parametrosURL = new URLSearchParams(window.location.search);  
        const idCliente = parseInt(parametrosURL.get("id"));


        const cliente = await obtenerClienteIndividual(idCliente);

        colocarCliente(cliente);        //Coloca la info del cliente en los inputs

    } );

    //Añadimos al formulario un evento, para cuando se haga submit
    formulario.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        
        
        
        if(validar(cliente)){
            await editarCliente(cliente);
            window.location.href = "index.html";    //Esta función nos lleva a la página principal

        }else{
             mostrarAlerta("Todos los campos son obligatorios");
        };

    });


    function colocarCliente(cliente){

        const {nombre, email, telefono, empresa, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;


    }




})()