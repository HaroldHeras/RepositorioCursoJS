

/*Vemos un ejemplo de Callbacks. Trata sobre el tema de actualización de listas, arreglos, resultados....
Por ejemplo, a la hora de actualizar unos resultados que ya han sido imprimidos*/


const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra"];      //Creamos un Array de paises  




mostrarPaises();                //Llamamos a la función que hemos creado para que los imprima


                                //Si en este punto metemos un país nuevo, no va a salir en esa lista, porque ya se ha impreso


nuevoPais("Alemania", mostrarPaises)        //Para ello creamos una función que inserta ese país y llama a la función que lo imprime, para hacer las dos cosas a la vez




function mostrarPaises(){

    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais);
        });
    },1000);


};


function nuevoPais(pais,callback){

    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000);

}


