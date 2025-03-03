
let DB;

document.addEventListener("DOMContentLoaded", ()=>{


    crmDB();            //Ejecutamos el código que crea la BBDD y una tabla dentro de ella


    setTimeout(crearCliente,5000);      //Esperamos 5seg antes de intentar meter un registro en la tabla creada.



});


function crmDB(){

    
    let peticionDB = window.indexedDB.open("crm", 1);                       //Pedimos crear una BBDD llamada "crm" con la version "1"
    


    peticionDB.onerror = function(){                                        //Si el resultado de la petición es negativo
        console.log("Hubo un error a la hora de crear la DB");
    };

    peticionDB.onsuccess = function(){                      //Si el resultado de la petición es satisfactorio
        console.log("Base de datos creada");


        DB = peticionDB.result;                             //Entonces almacenamos el resultado de la petición en una variable, que va a ser la BBDD
        

    };

    peticionDB.onupgradeneeded = function(e){                   //Este es un evento que se ejecuta solo unavez, seguido del ".onsuccess" cuando se crea la BBDD por primera vez
        const db = e.target.result;                             //Almacenamos en una variable la BBDD, que es el resultado de la petición

        const objectStore = db.createObjectStore("crm", {       /*Aqui creamos la tabla, que se va a llamar "crm" y le metemos unos parámetros.
                                                                El primero es el nombre del campo que va a hacer de "id" de cada fila
                                                                y el segundo, si la tabla va a autoincrementarse cada vez que metamos una fila nueva */
            keyPath: "id",
            autoIncrement: true
        });



        objectStore.createIndex("nombre", "nombre", {unique:false});        /*Creamos las columnas de la tabla dandoles un nombre, también la forma
                                                                            a la que vamos a referirnos a esa columna(en este caso con el mismo nombre)
                                                                            y si el valor de ese campo vamos a permitir que sea igual en más de un registro o tendrá que ser único.*/
        objectStore.createIndex("email", "email", {unique:true});
        objectStore.createIndex("telefono", "telefono", {unique:false});


        console.log("Columnas creadas");



    }
    

};


function crearCliente(){

    let transaction = DB.transaction(["crm"], "readwrite");        //Creamos un patrón para la tabla "crm" y diciendo que permite leer y escribir

    transaction.oncomplete = function (){                           //Manejamos el resultado de las peticiones que usen este patrón
        console.log("Transaccion completada")
    }

    transaction.onerror = function(){
        console.log("Hubo un error en la transaccion")
    }


    const objectStore = transaction.objectStore("crm");         //Guardamos en esta variable una referencia a la tabla, pero que seguirá las normas del patrón creado

    const nuevoCliente = {                          //Creamos un objeto que el nombre de sus atributos es el mimso que el de las columnas de la tabla
        telefono: 123456789,
        nombre: "Juan", 
        email: "correo@correo.com"                              //Ojo! Como el campo email es unico. Si intentamos reproducir el codigo dos veces sin cambiar el email, dará error por no poder meter el mismo email en dos registros
    }

    const peticion = objectStore.add(nuevoCliente);             /*Con la referencia a la tabla, hacemos una petición de añadir algo, 
                                                                y el resultado de esa peticion lo guardamos en esta variable y será 
                                                                validado por el objeto "transaccion" el cual tiene las normas que deberá seguir*/

    console.log(peticion);
};