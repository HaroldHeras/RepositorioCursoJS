



const salida = document.querySelector("#salida");                   //Obtenemos el div en el que vamos a imprimir la transcripcion
const microfonoBtn = document.querySelector("#microfono");          //Obtenemos el botón




microfonoBtn.addEventListener("click", ejecutarSpeechAPI);              //Añadimos un listener al botón




function ejecutarSpeechAPI(){

   //const SpeechRecognition = webkitSpeechRecognition;                 Lo podemos hacer con estas dos lineas o en una como hice abajo
   //const recognition = new SpeechRecognition;


    const recognition = new webkitSpeechRecognition;                    //Creamso un elemento webkitSpeechRecognition

    recognition.start();                                                //Iniciamos el reconocimiento

    recognition.onstart = function(){                  //Al iniciarse el reconocimiento:
        salida.classList.add("mostrar");                //Le ponemos la clase para que sea visible el div
        salida.textContent = "Escuchando...";           //Escribimos un texto que indique que está reconociendo la voz
    };


    recognition.onspeechend = function(){               //Al dejar de hablar:
        salida.textContent = "Escucha finalizada"       //Cambiamos el texto para que indique que ya no está escuchando lo que decimos
        recognition.stop();                             //Paramos la escucha
    };


    recognition.onresult = function(e){                 //Al tener un resultado:

        const {transcript, confidence} = e.results[0][0];       //Obtenemos el evento. Dentro tiene un array, y en la posicion 0 tiene otro array, y dentro de ese array, en la posición 0 esta el objeto con los datos de la transcripcion
       
        const transcripcion = document.createElement("p");      //Creamos dos elementos para imprimir el resultado
        const acierto = document.createElement("p");

        transcripcion.textContent = `Transcripción: ${transcript}`;                                 //Le pasamos a este elemento la transcripción que ha capturado
        acierto.textContent = `Porcentaje de acierto: ${Number.parseInt(confidence*100)}%`;         //A este elemento le pasamos el porcentaje de error que tiene. Siendo el valor máximo el 1, por lo que nos lo dará un 0 con muchos decimales. Lo multiplicamos por 100 para tener los dos primeros decimales como enteros y con parseInt borramos los decimales.

        setTimeout(()=>{                                //Ponemos un timeOut para que de tiempo a que finalice bien el grabado y después agrege los resultados al div
            salida.appendChild(transcripcion);
            salida.appendChild(acierto);
        },1000)
        


    }




}