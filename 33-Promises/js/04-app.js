

//Creamos un promise, y lo ejevutamos anidando uno con otro para ver como el código sigue viendose ordenado



const paises = [];


/*Metemos una función en una variable. Esa función va a pedir un parámetro, que av a ser el país que introduzcamos, 
y dentro de esa función creamos el promise, en el que dentro vamos a añadir el país que pasamso por parámetro y creamso el resolve*/
const nuevoPais = (pais)=>{                             

   return new Promise(resolve=>{                            //Sin quitar paréntesis ni llaves, hay que añadir el return
        setTimeout(() => {
            paises.push(pais);
            resolve(`Agregado: ${pais}`);
        }, 3000);
    });
};


// const nuevoPais = pais=> new Promise(resolve=>{          //Quitando paréntesis y llaves podemos omitir el return  
//          setTimeout(() => {
//              paises.push(pais);
//              resolve(`Agregado: ${pais}`);
//          }, 3000);
//      });
 


nuevoPais("Alemania")                       //Ejecutamos la función, pasandole por parámetro el país, y como por dentro devuelve un Promise, podemos usar el ".then"
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais("Francia");        //Mandamos retornar la ejecución del Promise de nuevo, con otro país
    })
    .then(resultado2=>{
        console.log(resultado2);
        console.log(paises);
        return nuevoPais("Inglaterra");
    }).then(resultado3=>{
        console.log(resultado3);
        console.log(paises);
    });