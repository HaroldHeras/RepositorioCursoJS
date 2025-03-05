




//Creamos un Promise. Se trata de una función que tiene la funcionalidad parecida al try-catch


//Creamos una variable que va a contener el Promise
const aplicarDescuento = new Promise((resolve, reject)=>{           //Se requieren estos dos parámetros llamados asi. 

    const descuento = true;

    if(descuento){
        resolve("Descuento aplicado");                      //El primero alvergará el código que se ejecutará cuando el resultado sea satisfactorio
    }else{
        reject("No se pudo aplicar el descuento");          //El segundo será el que se ejecuta cuando no se ha podido realizar la operación
    }

});

//Esta sería la forma de ejecutar el Promise
aplicarDescuento                        
    .then(resultado=>{                      //".then" sería el "try". En la variable resultado se mete el código del resolve
        console.log(resultado);
    }).catch(error=>{                       //Este sería el catch. En la variable error se introduce el código del reject.
        console.log(error);
    })





//HAY TRES VALORES POSIBLES QUE PODEMOS VER HACIENDO console.log(aplicarDescuento):
//1º: fulfilled----> El promise se cumplio(resolve) (La variable descuento está en true)
//2º: rejected------> El promise no se cumplio(reject) (La variable descuento está en false)
//3ª: pending-------> Aun no se ha cumplido ni se ha rechazado 



