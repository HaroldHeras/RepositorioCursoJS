


//Funcion IIFE: Creamos el código así, para que las variables y funciones de este script no salgan en los otros
(function(){

    let DB;
    let idCliente;

    const nombreInput = document.querySelector("#nombre");              
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const formulario = document.querySelector("#formulario");

   document.addEventListener("DOMContentLoaded", ()=>{

        conectarDB();
        

        formulario.addEventListener("submit", actualizarCliente);       //Damos una función cuando el formulario hace submit

        const parametrosURL = new URLSearchParams(window.location.search);      //Usamos un objeto y su método para buscar los parámetros del URL de la venta actual(en este caso, solo tiene uno, y es "id")

        idCliente = Number(parametrosURL.get("id"));                        //Almacenamos el valor de ese parámetro

        if(idCliente){                                                  //Si "id" tiene algo

            setTimeout(()=>{                                     //Ponemos un setTimeout solo para dar tiempo a que se conecte la BBDD
                obtenerCliente(idCliente);                      //Ejecutamos la función que busca el cliente con ese ID

            },100);
        };


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


    //FUNCIÓN PARA OBTENER LA INFO DEL CLIENTE CON UN ID ESPECIFICO
   function obtenerCliente(idCliente){

        const transaction = DB.transaction(["crm"], "readwrite");       //Creamos la transaccion y el objectStore
        const objectStore = transaction.objectStore("crm");

        const cliente = objectStore.openCursor();                       //Creamos el cursor

        cliente.onsuccess = function(e){                                //Si el cursor esta bien:

            const cursor = e.target.result;                             //Obtenemos el objeto dentro del primer registro del cursor

            if(cursor){                                                 //Si ese cursor tiene algun objeto:
                
                if(cursor.value.id===idCliente){                        //Evaluamos si el id de ese objeto es el mismo que necesitamos
                    llenarFormulario(cursor.value);                     //Si es así, ejecutamos el método que rellena el formulario 
                    return;

                }; 
                
                
                cursor.continue();                                      //Si no, decimos al cursor que pase al siguiente elemento
                
            }
            
            
        };


   };



   //FUNCIÓN PARA RELLENAR LOS CAMPOS DEL FORMULARIO, PARA PODER EDITAR LA INFO
   function llenarFormulario(datosCliente){

        const {nombre, telefono, email, empresa} = datosCliente;        //Extraemso en variables la info que contiene el objeto

        nombreInput.value = nombre;                                     //Rellenamos los campos del formulario con esa info
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;



   };



   //FUNCIÓN PARA ACTUALIZAR LA BBDD Y REPINTAR EL REGISTRO
   function actualizarCliente(e){

        e.preventDefault();
        //Evaluamos que ninguna entrada esté vacía
        if(nombreInput.value.trim()==="" || emailInput.value.trim()==="" || telefonoInput.value.trim()==="" || empresaInput.value.trim()===""){

            imprimirAlerta("Todos los campos son obligatorios", "error");
            return;
        }else{

            const clienteActualizado = {                //Si pasa la validación, creamos un objeto con la info actualizada y el id extraido anteriormente, par que sea el mismo
                nombre: nombreInput.value,
                email: emailInput.value,
                telefono: telefonoInput.value,
                empresa: empresaInput.value,
                id: idCliente
            };

            const transaction = DB.transaction(["crm"], "readwrite");       //Creamos la transaccion
            const objectStore = transaction.objectStore("crm");

            objectStore.put(clienteActualizado);                        //Con el método "put" actualizamos un registro. Le pasamos el objeto,y extrae de el directamente el atributo que declaramos como "key", lo compara con los registros que haya y si hay coincidencia, actualiza ese registro con la info del nuev oobjeto

            transaction.onerror = ()=>{
                
                imprimirAlerta("Hubo un error en la actualización", "error");

            };

            transaction.oncomplete = ()=>{
                
                imprimirAlerta("Cliente actualizado correctamente", "correcto");
                formulario.reset();

                setTimeout(()=>{                                //Pasados 2seg de actualizar el registro, nos lleva a la página del listado
                    window.location.href = "index.html";
                },2000);
            };


            
        };



   };

















})();