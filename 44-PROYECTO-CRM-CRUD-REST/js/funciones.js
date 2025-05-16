
//Función para validar todos los campos de un objeto. En este caso, devuelve "true" si el valor de TODOS los campos es diferente a un String vacio
export function validar(obj){

       return Object.values(obj).every(input=> input!="");

    }


//Crea una alerta con el mensaje que le pasemos por parámetro.
export function mostrarAlerta(mensaje){


    if(document.querySelector(".bg-red-100")){
        document.querySelector(".bg-red-100").remove();
    };

    const alerta = document.createElement("P");

    alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center");

    alerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `

    const formulario = document.querySelector("#formulario");

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

    



}