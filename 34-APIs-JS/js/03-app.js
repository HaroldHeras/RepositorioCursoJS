

/*Manejamos el evento de cuando la ventana tiene o no tiene conexion a internet */

window.addEventListener("online",actualizarEstado);         //Añadimos los listeners con las acciones y la función a realizar
window.addEventListener("offline", actualizarEstado);


function actualizarEstado(e){
    
    if(navigator.onLine){                       //Si el navegador tiene conexión
        console.log("Estás conectado");
    }else{
        console.log("No estás conectado");      //Si no la tiene
    }


}
