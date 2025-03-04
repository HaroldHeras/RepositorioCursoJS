



//Funcion IIFE: Creamos el código así, para que las variables y funciones de este script no salgan en los otros
(function(){

    let DB;
    const formulario = document.querySelector("#formulario");


    document.addEventListener("DOMContentLoaded", ()=>{

        conectarDB();                                                   //Abrimos la conexión a la BBDD
        formulario.addEventListener("submit", validarCliente);          //Le damos un listener para cuadno hace submit el formulario

    });


    //FUNCIÓN PARA CONECTARSE A LA BBDD
    function conectarDB(){

        const abrirConexion = window.indexedDB.open("crm",1);

        abrirConexion.onerror = function(){
            console.log("Hubo un error");
        };

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
            console.log("Conexion realizada");


        };

    };


    //FUNCIÓN PARA VALIDAR LOS DATOS ESCRITOS EN LOS CAMPOS DEL FORMULARIO
    function validarCliente(e){
        e.preventDefault();                                             //Prevenimos accion por defecto del boton submit
        
        const nombre = document.querySelector("#nombre").value;         //Extraemos el valor de los campos del formulario
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;


        if(nombre=== "" || email=== "" || telefono=== "" || empresa=== "" ){    //Si alguno de los campos tiene String vacío

            imprimirAlerta("Todos los campos son obligatorios", "error");
            return;
        };


        const cliente = {nombre, email, telefono, empresa, id: Date.now()};     //Si todo está bien, creamos un objeto para almacenar los datos y generamos un id con el que trabajaremos
       
        crearNuevoCliente(cliente);                     //Llamamos a la función que introduce el objeto en la BBDD

    };


    //FUNCIÓN PARA INTRODUCIR UN NUEVO REGISTRO EN LA BBDD
    function crearNuevoCliente(cliente){

        const transaction = DB.transaction(["crm"], "readwrite");           

        const objectStore = transaction.objectStore("crm");

        objectStore.add(cliente);

        transaction.onerror = function(){                                               //Si ocurre algún problema
            imprimirAlerta("Hubo un error al guardar el cliente", "error");
        };

        transaction.oncomplete = function(){                                        //Si todo va bien
            imprimirAlerta("Cliente agregado correctamente", "correcto");
            formulario.reset();
            setTimeout(()=>{
                window.location.href = "index.html";                //Esperamos 2seg para que nos situe en la ventana que tiene el listado de clientes

            }, 2000);
        };


    };



    











})();