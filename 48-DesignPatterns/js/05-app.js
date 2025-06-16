// Vemos el Module Pattern o Patrones de modulación. Hay que matizar que aquí no se encuentra el ES Moduele. 


const saludo = "hola";          //Esta variable la podríamos usar desde otro archivo .js




/*Creamos una función IFI dentro de una variable, para que lo que hay dentro de ella no se pueda usar desde otro archivo .js, a no ser que se haga 
 a través de dicha variable*/
const modulo = (function(){     

    const nombre = "Juan";      //Esta variable no se podrá usar desde fuera

    function saludar(){         //Esta función tampoco
        console.log("Hola")
    }

    /*Este es el return de la función IFI. De esta forma, la constante "modulo" se convierte en una especie de "objeto" 
    que hará que solo se puedan usar "nombre" y "saludar" usandola a ella 
    ej: console.log(modulo.nombre, modulo.saludar()) */
    return{                     
        nombre,
        saludar
    }

})()



//Después de esto, se creó el export dafault, y el ES Module