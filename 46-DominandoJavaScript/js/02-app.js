//Vemos ejemplos de Function declaration y Function expression
/*Tambien vemos lo que es el Hoisting, que es la ejecución del código en dos fases. La primera lee todas las funciones declaradas y despues las ejecuta, 
por eso nos permite en las Function declaration, llamarlas antes de declararlas, pero en las Function expression no, ya que funconan como cuando 
declaramos una variable, que no se puede usar antes de crearla.*/






obtenerCliente("Harold");

function obtenerCliente(nombre){                    //Ejemplo de Function declaration
    console.log(`El nombre es ${nombre}`);
}


obtenerCliente2("Pedro");                           //Esta dará error, porque la estamos usando antes de declararla


const obtenerCliente2 = function(nombre){           //Ejemplo de Function expression
    console.log(`El nombre es ${nombre}`);

}




