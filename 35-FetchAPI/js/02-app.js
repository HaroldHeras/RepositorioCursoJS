
/*JSON es una especie de lenguaje para almacenar objetos y que se puedan parsear en diferentes lenguajes de programación.
 Vamos a leer un JSON que esta en un archivo separado, y lo vamos a parsear para que nos lo lea como un objeto de javascript 
 y después vamos a extraer sus campos e imprimirlos en pantalla */


const cargarJSONBtn = document.querySelector("#cargarJSON");        //Extraemos el boton que inicia el código


cargarJSONBtn.addEventListener("click", obtenerDatos);              //Le damos un listener al botón



function obtenerDatos(){                        

    const url = "data/empleado.json";                   //Colocamos la url donde esta el archivo .json

    fetch(url)                                      //Apuntamso con el fetch a la url del archivo
        .then(respuesta =>{                         
            console.log(respuesta);                 //Imprimimos la respuesta entera
            console.log(respuesta.status);          //El estado de la respuesta
            console.log(respuesta.statusText);      //El texto del estado de la respuesta
            console.log(respuesta.url);             //La url que pedimos que analizara

            return respuesta.json();                //Pedimos qu devuelva cel resultado del método .son() de la respuesta

        })
        .then( json =>{
            console.log(json);                      //imprimimos el json, que es el objeto json ya transformado a objeto javascript
            return mostrarResultado(json);          //Mandamos llamar a al función que pinta el objeto en pantalla, pasandole por parámetro el objeto obtenido
        });



}



function mostrarResultado(json){
        const contenido = document.querySelector("#contenido");                 //Obtenemos el elemento HTML en el que vamos a pintar el objeto
        
        const {empresa, id, nombre, trabajo} = json;                //Extraemos los atributos del objeto

                                                                //Pintamos el objeto en la página
        contenido.innerHTML = `                                 
            <p>ID: ${id} </p>
            <p>Nombre: ${nombre} </p>
            <p>Trabajo: ${trabajo} </p>
            <p>Empresa: ${empresa} </p>
        `;


}