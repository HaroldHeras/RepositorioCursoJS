//Le damos un listener al documento en general, para que ponga todo en funcionamiento anda más cargar

document.addEventListener("DOMContentLoaded", function (){

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

        switch(e.target.getAttribute("id")){

            case "email": 
                if(e.target.value.trim() === ""){
                    console.log("Escribe algo en email joder...");
                }
                break;
            
            case "asunto": 
                if(e.target.value.trim() === ""){
                     console.log("Escribe algo en asunto joder...");
                 }
                break;

            case "mensaje": 
                if(e.target.value.trim() === ""){
                    console.log("Escribe algo en mensaje joder...");
                }
                break;    

        };
        
    };

    
});