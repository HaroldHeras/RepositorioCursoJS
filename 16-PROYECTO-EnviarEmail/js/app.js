
//Le damos un listener al documento en general, para que ponga todo en funcionamiento anda más cargar

document.addEventListener("DOMContentLoaded", function (){

    const email = {
        email: "",
        asunto: "",
        mensaje: ""

    };



    //Obtenemos los elementos con los que vamos a trabajar
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");


    //Asignamos eventos a los elementos
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);





    function validar (e) {

        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        };

        if(e.target.id === "email" && !validarEmail(e.target.value)){
            
            mostrarAlerta("El email no es válido", e.target.parentElement);
            return;

        };

        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    };

    





    function mostrarAlerta(mensaje, referencia) {

        
        limpiarAlerta(referencia);

        const error = document.createElement("P");

        error.textContent = mensaje;

        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

        referencia.appendChild(error);

        


    };


    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".bg-red-600");

        if(alerta){
            alerta.remove();
        };
    };


    function validarEmail(email){

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 

        const resultado = regex.test(email);

        return resultado;
    };


    function comprobarEmail(){
        console.log(Object.values(email));
    }

    
});





