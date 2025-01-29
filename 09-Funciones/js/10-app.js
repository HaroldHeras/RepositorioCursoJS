

/**Diferentes maneras de crear funciones.
 * 
 * INCLUIMOS ARROW FUNCTION
 */


const aprendiendo = function() {                    //Primera forma. Creamos una Expression Function dentro de una variabel

    console.log("Aprendiendo JavaScript");

}


const aprendiendo2 = () => {                                //Arrow Function omitiendo la palabra "function"

    console.log("Aprendiendo JavaScript");

}

const aprendiendo3 = () =>  console.log("Aprendiendo JavaScript");          //Arrow Function en una linea. Podemos omitiendo las llaves

const aprendiendo4 = () =>  "Aprendiendo JavaScript";                   //Arrow Function con "return" implicito(almacena el valor de la función en esa variable)





aprendiendo();                                  //Usamos las diferentes funciones pero el resultado es el mismo

aprendiendo2();

aprendiendo3();

console.log(aprendiendo4());                    //En este caso sacamos por consola lo que se almaceno en la variable