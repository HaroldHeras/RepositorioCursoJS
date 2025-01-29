

/**Vemos buenasprácticas a la hora de trabajar con "if" */


const autenticado = true;


if(autenticado){
    console.log("Usuario autenticado");             //Si vamos a evaluar un boolean true, no poner en la condicion: "autenticado = true"
                                                    //Mejor poner directamente: "autenticado"
}


const puntaje = 500;

function revisarPuntaje(){                              /*Si vamosa  evaluar varios if, podemos meterlos en una función y 
                                                        añadirlos por separado sin "else if", usando la palabra "return"*/

    if(puntaje > 400){
        console.log("Tu puntaje es excelente");
        return;
    }

    if(puntaje > 300){
        console.log("Tu puntaje no está mal");
        return;
    }


}


revisarPuntaje();


