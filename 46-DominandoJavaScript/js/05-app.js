//Ejemplo de Explicit Binding 


function persona(elemento1, elemento2){
    console.log(`El nombre es ${this.nombre} y escucha música ${elemento1} y ${elemento2}`);        //Usamos el this para que coja la avriable del objeto que le vamos a pasar

}



const informacion = {
    nombre: "Juan"
}



persona("Heavy Metal", "Rock");             //Como todavía no hemos definido a que entidad hace referencia el "this", saldrá undefinded


//Usamos el método call, que sirve para especificar cual será la entidad a la que accederemos con la palabra "this."
persona.call(informacion,"Heavy Metal", "Rock");        //El método "call" existe en todas las funciones, hasta en las que uno mis mo crea. 


const estilos = ["Pop", "Jazz"];

//Sirve para lo mismo que el "call", pero permite pasar el resto de parámetros en un array
persona.apply(informacion, estilos);            //El método appli también se encuentar en todas las funciones. 



//"Bind" sirve para lo mismo que "call" con la diferencia que devuelve una nueva función. Porl o que tendrás que ejecutar la nueva función
const nuevaFuncion = persona.bind(informacion, "Punk", "Ska");

nuevaFuncion();