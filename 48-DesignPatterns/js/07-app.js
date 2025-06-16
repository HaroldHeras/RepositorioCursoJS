/*vemos el "Name Space". Trata de crear un obejto al que vamos a ir añadiendo atributos,  yesos atributos van a ser "secciones" del objeto; 
es decir, que podemos crear la sección "funciones" y dentro meter funciones de ese objeto. De esta forma, en proyectos grandes, podemos evitar 
que se  confundan funciones que se llamen igual*/


const restauranteApp = {};              //Creamso el objeto al que vamos a añadir secciones


/*Le añadimos la seccion "platillos", que es la que va a guardar un array con los diferentes platos que tiene*/
restauranteApp.platillos = [            

    {
        platillo: "Hamburguesa",
        precio: 25
    },
    {
        platillo: "Pizza",
        precio: 20
    },
    {
        platillo: "HotDog",
        precio: 20
    }

];


/*Aqui añadimos la sección "funciones", que es donde iremos guardando las diferentes funciones que tiene */
restauranteApp.funciones = {

    bienvenida: ()=>{
        console.log("Bienvenido al restaurante");
    },

    mostrarPlatillos: platillos=>{                  //Recibiendo por parámetro los platillos, imprime uno por uno su nombre y precio

        platillos.forEach((plato, index) => {
            console.log(`${index} : ${plato.platillo}----${plato.precio}€ `);
        })

    },


    mostrarPLatilloUnico: i=>{                  //Recibiendo por parámetro un indice, imprime los datos del platillo con ese indice
        console.log(`El platillo "${restauranteApp.platillos[i].platillo}" tiene un precio de ${restauranteApp.platillos[i].precio}€`);
    },

    agregarPlatillo: (platillo, precio)=>{                      //Recibe por parámetro un nombre y un precio, y añade un objeto con esos datos al array de platillos
        restauranteApp.platillos.push({platillo,precio});
    }

}


//Usamos a las funciones de esta forma
restauranteApp.funciones.bienvenida();                  
restauranteApp.funciones.mostrarPLatilloUnico(2);
restauranteApp.funciones.agregarPlatillo("Bocata", 15);

//Hacemos destructuring del array de platillos para pasarselo en un array nuevo. (Podríamos hacerlo directamente si el desestructuring, pero es menos seguro, ya que se podrían modificar los datos originales del objeto)
restauranteApp.funciones.mostrarPlatillos([...restauranteApp.platillos]);       
