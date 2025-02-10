//Le damos un listener al documento en general, para que ponga todo en funcionamiento anda más cargar

document.addEventListener("DOMContentLoaded", function (){


    const email= {
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

        const id = e.target.id;

        const elementoPadre = e.target.parentElement;

        const alerta = document.querySelector(`.alerta-${id}`);

        const validacionEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

       if(alerta){
            if((e.target.id === "email" && e.target.value.trim() !== "" && validacionEmail.test(e.target.value) ) || e.target.value.trim() !== "" ){
                alerta.remove();
            }
       };

       if(e.target.value.trim() === "" || (e.target.id === "email" && !validacionEmail.test(e.target.value))){
            if(alerta) alerta.remove();
            const error = document.createElement("P");
            error.classList.add("bg-red-600", "text-white", "p-2", "text-center", `alerta-${id}`);
            error.textContent = "Dato no válido";

            elementoPadre.appendChild(error);
        }

        

        
    };

    
});