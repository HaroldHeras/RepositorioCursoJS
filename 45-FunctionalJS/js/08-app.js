
/*Vemos los "Closures". Esto es poder hacer visible desde el exterior una variable que esta dentro de una función. Para ello se usa 
una función que devuelve otra función*/


const obtenerNombre = ()=>{

    const nombre = "Harold de las Heras";       //Creamos la variable que esta dentro de la función obtenerNombre

    function dameNombre(){                      //Creamos una función interna que imprime el valor de esa variable
        console.log(nombre)
    }

    return dameNombre;                          //La función padre retorna la función hijo
}


const imprimeNombre = obtenerNombre();          //En esta constante ejecutamos la función apdre, por l oque se almacena la función hijo

imprimeNombre();                                //Ejecutamos la variable que almacena la función hijo
                                                //De esta forma accedemos desde fuera a un valor que esta dentro de una función