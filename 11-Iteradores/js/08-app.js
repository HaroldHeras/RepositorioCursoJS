


const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar Java Script"];          //Creamos dos Arrays. Uno de String y otro de objetos


const automovil = {

    modelo: "Camaro",
    year: 1969,
    motor: "6.0"
};

    



for(pendiente in pendientes){                   /**El bucle "for-in" sirve para meterte dentro de las propiedades de un 
                                                Array u Objeto. En este caso, en vez de devolvernos el String del Array, 
                                                nos devuelve el indice de cada String dentro del Array */
         console.log(pendiente);
}


console.log("-----------------------");



for(propiedad in automovil){                        /*El bucle "For-in" se puede usar también en objetos, y lo que hace es 
                                                    devolvernos el nombre de sus atributos*/
    console.log(propiedad);
}


console.log("-----------------------");

for(propiedad in automovil){                    /**Si lo queremos usar para hayar el valor de sus atributos, lo hacemos de esta forma */
    console.log(automovil[propiedad]);
}








