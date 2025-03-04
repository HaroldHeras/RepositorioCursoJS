/*Añadimos esta función aqui, porque la usamos en scripst diferentes. Tenemos que añadir este script en el/los documentos HTML
que vayan a usar esta función */


function imprimirAlerta(mensaje, tipo){

    const alerta = document.querySelector(".alerta");

    if(!alerta){                                                //Si alerta esta vacía, crea unan ueva. Sino, es que ya hay una vigente(hasta que se autoborre)

        const divMensaje = document.createElement("div");

        divMensaje.classList.add("px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center", "border", "alerta");

        if(tipo==="error"){
            divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
        }else{
            divMensaje.classList.add("bg-green-100", "border-green-400", "text-green-700");
        }

        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(()=>{
            divMensaje.remove();
        }, 3000);

    };

   


};
