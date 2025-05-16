/*Primero instalamos json-server en el ordenador.
Después creamos el archivo db.json que será el que usemos como "base de datos" y será nuestra API.
Desde consola, hacemos "cd" hasta la carpeta donde tenemos el archivo .json y ejecutamos le comando "json-server db.json -p 4000". 
(el "-p 4000" es la configuración del puerto por el que vamos a acceder a nuestra "API". Nos devolverá una url localhost al puerto 4000 a la que podrémos 
acceder para ver todos los objetos .json almacenados) */



import { mostrarAlerta } from "./funciones.js";

const url = "http://localhost:4000/clientes/";      //Este es el fragment ode url hacia la API que no varía nunca


export async function nuevoCliente(cliente){

    try{

        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        if(!respuesta.ok){
            mostrarAlerta("No se pudo crear cliente. Compruebe su conexion");
            return;
        }




    }catch(error){
            mostrarAlerta("No se pudo crear cliente. Compruebe su conexion");
    }

}



export async function obtenerClientes(){

    try{

        const respuesta = await fetch(url);

        if(!respuesta.ok){
            window.alert("Error. No se han podido obtener los clientes desde la API"); 
            return;           
        }

        const resultado = await respuesta.json();

        

        return resultado;

    }catch(error){

        window.alert("Error. No se han podido obtener los clientes desde la API");

    }



}



export async function eliminarCliente(id){


    try{

        const respuesta = await fetch(`${url}${id}`, {
            method: "DELETE",

        });

         if(!respuesta.ok){
            window.alert("Error. No se han podido eliminar el cliente desde la API"); 
            return;           
        }        




    }catch(error){
        window.alert("Error. No se han podido eliminar el cliente desde la API");

    }

}


export async function obtenerClienteIndividual(id){

    try{

        const respuesta = await fetch(`${url}${id}`);

         if(!respuesta.ok){
            window.alert("Error. No se han podido obtener el cliente desde la API"); 
            return;           
        }

        const resultado = await respuesta.json();

        return resultado;


    }catch(error){
        window.alert("Error. No se han podido obtener el cliente desde la API");

    }

}


export async function editarCliente(cliente){

    try{

        
        const respuesta = await fetch(`${url}${cliente.id}`, {
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });

        

         if(!respuesta.ok){
            mostrarAlerta("No se pudo crear cliente. Compruebe su conexion");
            return;
        }



    }catch(error){
        mostrarAlerta("No se pudo crear cliente. Compruebe su conexion");        

    }

}
