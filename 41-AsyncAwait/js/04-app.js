

/*Creamos dos promise, y los ponemos en práctica en dos funciones(appMal y appBien). Una que ejecuta los promises por orden, 
y la otra que los ejecuta a la vez.
NOTA: Juega con la variable "correcto" de ambos promises para saber como envía el resolve y el reject de los promises */


function descargarNuevosClientes(){

    return new Promise((resolve, reject)=>{
        console.log("Descargando clientes....");

        const correcto = true;

        setTimeout(()=>{

            if(correcto){
                resolve("Los clientes fueron descargados");
            }else{
                reject("Hubo un error al descargar los clientes");
            }
        },5000);
    });


}


function descargarNuevosPedidos(){

    return new Promise((resolve, reject)=>{
        console.log("Descargando pedidos...");

        const correcto = true;

        

        setTimeout(()=>{

            if(correcto){
                resolve("Los pedidos fueron descargados");
            }else{
                reject("Hubo un error al descargar los pedidos");
            }
        },3000);
    });


}



/*En este caso, ejecutamos primemro un promise, y hasta que este no acaba, no se ejecuta el siguiente. 
Hay casos en los que esto viene bien, y otros en los que no es práctico, si el segundo promise no depende del primero, y 
de esta forma solo estarías retrasando su ejecución*/
const appMal = async ()=>{

    try{

        const clientes = await descargarNuevosClientes();
        console.log(clientes);


        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);

    }catch(error){                  //El error que recogerá en este caso el catch será el primer error que salte.
        console.log(error);
    }


}


//appMal();



/*Aquí usamos el metodo new Promise.all([]) en el que pasamos por parámetro los Promises que queremos que se ejecuten, 
que no dependen unos de otras, y de esta forma se ejecutarán a la vez. En la variable respuesta se almacena un array con tantas posiciones 
como promises se hayan ejecutado, siendo cada una de estas posiciones la respuesta de su respectivo promise
IMPORTANTE: Independientemente de que unos tarden menos que los otros en ejecutarse, las respuestas las devolverá cuando el promise que 
más tarde haya acabado 
NOTA: Si hay error en algún promise, se pasará el error al catch y no devolverá ningún resolve, nisiquiera los de los promises que estaban bien*/
const appBien = async ()=>{

    try{

        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);         //Colocamso los dos promises así para que se ejecuten a la vez

        console.log(resultado[0]);      //Imprimimos los resolve de los promises. Ocupan el indice correspondiente al orden en que los colocamos en el Promise.all
        console.log(resultado[1]);

    }catch(error){
        console.log(error);             //Recogerá el primer reject que salte
    }


}


appBien();