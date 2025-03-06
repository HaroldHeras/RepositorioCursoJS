
const volverBtn = document.querySelector("#reiniciar");                 //Obtenemos el elemento del botón de reiniciar
const JSONArray = document.querySelector("#cargarJSONArray");           //Obtenemos el elemento del boton de ArrayJSON



volverBtn.addEventListener("click", ()=>{                               //Añadimos un listener al boton de volver, que recarga la ventana
    window.location.reload();
});


JSONArray.addEventListener("click", obtenerDatos);              //Añadimos un listener al boton que extrae el arrayJSON




function obtenerDatos(){

    const url = "data/empleados.json";                          //Guardamso en una variable la url del archivo .json

    fetch(url)                                              //Colocamos en el fetch la url
        .then(resultado =>{
            console.log(resultado);                         //Imprimimos el resultado

            return resultado.json();                        //Llamamos al método del resultado que devuelve el json
        })
        .then(arrayJson =>{

            const contenido = document.querySelector("#contenido");         //Extraemos el elemento donde imprimiremos el JSON

            let html = "";                                                  //Creamos un string vacio donde iremos concatenando el html con los datos de los objetos

            arrayJson.forEach(empleado => {                             //Como el json es un array de objetos, vamos a extraer la informacion de estos uno por uno
                const {id, nombre, trabajo, empresa} = empleado;        //Extraemos los atributos del objeto
                                    //Concatenamos en la variable string el codigo html con los datos del objeto
                html += `                                  
                    <p>ID: ${id} </p>
                    <p>Nombre: ${nombre} </p>
                    <p>Trabajo: ${trabajo} </p>
                    <p>Empresa: ${empresa} </p>
                `;
            });

            contenido.innerHTML = html;             //Añadimos el string al html del elemento "contenido"


            

        });



}