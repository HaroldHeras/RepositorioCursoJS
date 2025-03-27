/*Vemos le funcionamiento de async await. Si lo usamso con un try catch, el resolve se recoge en una variable, sin tener que 
ejecutar un ".then", y el reject se va automáticamente al "error" del catch */


/*Creamos una función que devuelve un Promise. Dentro de ese promise ponemos un setTimeout para simular el tiempo que tarda 
esa operación en acabar de completar. */
function descargarClientes(){                           


        return new Promise((resolve, reject)=>{

            const aprobado = true;

            

            setTimeout(()=>{
                if(aprobado){
                    resolve("Operación aprobada");
                }else{
                    reject("Operación denegada");
                }
            },3000);         


        })

}



ejecutar();                 //Ejecutamos la función que va a usar el Promise




//El "async" se lo tenemos que poner a la función que va a ejecutar el Promis. En este caso esta.
async function ejecutar(){                      

    try{                                //Introducimos el codigo en un try-catch. De esta forma podemos controlar la respuesta. 

        console.log(1+1);

        const respuesta = await descargarClientes();  //El await se lo ponemos al Promise. Si no hay error, se almacena en esta variable. Si hay error, se va directamente al catch. De esta forma no tenemos que usar el ".then-catch"

        console.log(2+2);                   //Si va bien, cuando acaba de ejecutarse el async, se ejecuta lo siguiente. Si no, esto n ose ejecuta y va al catch

        console.log(respuesta);

    }catch(error){
        console.log(error);             //El error del Promise se almacena directamente aqui
    }



}