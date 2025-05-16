/*vemos como sería usar el async-await con un fetch */




const url = "http://picsum.photos/list";



document.addEventListener("DOMContentLoaded", obtenerDatos);



async function obtenerDatos(){

    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    }catch(error){
        console.log("No se ha podido realizar la operación. Tipo de error: ", error);
    }



}