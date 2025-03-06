

/*Creamos un fetch que va a puntar hacia un archivo de texto, y vamos a extraer la info de ese archivo */

const cargarTxtBtn = document.querySelector("#cargarTxt");          //Obtenemos el elemento del boton que va a disparar el codigo


cargarTxtBtn.addEventListener("click", obtenerDatos);       //Le ponemos un listener con el evento que disparara el codigo


function obtenerDatos(){

    const url = "data/datos.txt";                       //Metemso la url del archivo que vamos a leer en una constante

    fetch(url)                                          //Creamos un "fetch" y le pasamos por parámetro la url del archivo que uqeremos ver
        .then(respuesta=>{

            console.log(respuesta);                     //Imprimimos la respuesta con toda la info
            console.log(respuesta.status);              //El estado de la respuesta
            console.log(respuesta.statusText);          //El texto del estado de la respuesta
            console.log(respuesta.url);                 //La url que está inspeccionando
            console.log(respuesta.type);                //El tipo de petición que le hemos hecho

            return respuesta.text()                     //Esta función av a devolver el texto que ha capturadoi del archivo .txt
        })
        .then(datos =>{                                 //Controlamos al respuesta, y si sale bien:
            console.log(datos);         //Imprimimos en consola el texto que ha recogido del archivo .txt
            
        })
        .catch(error=>{                                 //Si sale mal:
           console.log(error);
        });




    
        


}