

/*Creamos un callbackHell, que no es más que la repetición excesiva de un callback haciendo que el código se vuelva 
poco intuitivo y desorganizado */


const paises = [];


function nuevoPais(pais, callback){         //Creamos el callback

    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();

}



function mostrarPaises(){           //Creamos la función que lista los paises
    console.log(paises);
}


function iniciarCallbackHell(){                         //Creamos la función que va anidando la ejecución de callbacks
    setTimeout(() => {
        nuevoPais("Alemania", mostrarPaises);

        setTimeout(() => {
            nuevoPais("Francia", mostrarPaises);

            setTimeout(() => {
                nuevoPais("Inglaterra", mostrarPaises);
            }, 3000);
        }, 3000);

    }, 3000);


}


iniciarCallbackHell();                          //Inciiamos la función que ejecuta los callback