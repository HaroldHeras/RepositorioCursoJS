

//Funcion IIFE: Creamos el código así, para que las variables y funciones de este script no salgan en los otros
(function(){

    let DB;                                                                     //Variable en la que almacenamos la apertura de la BBDD

    const listadoClientes = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", ()=>{                     

        crearDB();                                                      //Creamos la BBDD                                        

        if(window.indexedDB.open("crm", 1)){                            //Si la BBDD esta abierta, obtenemos y pintamso los clientes
            obtenerClientes();
        };

        listadoClientes.addEventListener("click", eliminarRegistro);        //Listener para eliminar registro al pulsar "Eliminar"

    });


    //FUNCIÓN DE ELIMINAR UN REGISTRO
    function eliminarRegistro(e){

        if(e.target.classList.contains("eliminar")){            

           
            const nombre = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;            //Obtengo el valor del campo "nombre" de ese registro

            const idEliminar = Number(e.target.dataset.cliente);                //Obtengo el valor del data-cliente y lo paso a Number
            
            const confirmar = confirm(`¿Deseas eliminar el cliente "${nombre}"?`);      //Mensaje de confirmacion

            if(confirmar){
                const transaction = DB.transaction(["crm"], "readwrite");           
                const objectStore = transaction.objectStore("crm");

                objectStore.delete(idEliminar);                                     //Eliminamos el registro que tiene ese id

                transaction.onerror = ()=>{
                    alert("Hubo un problema al intentar eliminar el registro");
                }

                transaction.oncomplete = ()=>{
                    e.target.parentElement.parentElement.remove();
                }
            };
        };

    }


    //CREAMOS LA BBDD
    function crearDB(){

        const crearDB = window.indexedDB.open("crm", 1);            //Abrimos la BBDD

        crearDB.onerror = function(){                           //Manejamos la posible excepción que pueda surgir
            console.log("Hubo un error");
        }

        crearDB.onsuccess = function(){                         //Si no hay problema, almacenamos en la variable global el resultado de la petición
            DB = crearDB.result;
        }

        crearDB.onupgradeneeded = function(e){                  //En esta función que solo se ejecuta la primera vez que se crea la BBDD: 

            const db = e.target.result;                         //Obtenemos el resultado de la petición

            const objectStore = db.createObjectStore("crm", {       //Creamos un objectStore(la tabla)
                keyPath: "id",
                autoIncrement:true
            });

            objectStore.createIndex("nombre", "nombre", {unique:false});            //Creamos las columnas de la tabla
            objectStore.createIndex("email", "email", {unique:true});
            objectStore.createIndex("telefono", "telefono", {unique:false});
            objectStore.createIndex("empresa", "empresa", {unique:false});
            objectStore.createIndex("id", "id", {unique:true});

            console.log("Base de datos Creada");

        }

    };


    //FUNCIÓN PARA EXTRAER LOS CLIENTES DE LA BBDD, SI LO HAY, Y PINTARLOS EN EL LISTADO
    function obtenerClientes(){

        const abrirConexion = window.indexedDB.open("crm", 1);              //Abrimos la conexión para acceder a la BBDD

        abrirConexion.onerror = function(){                                 //Manejamos posible excepción
            console.log("Hubo un error");
        };

        abrirConexion.onsuccess = function(){                               //Si no hay problema:

            DB = abrirConexion.result;                                      //Almacenamos el resultado de la peticion

            const objectStore = DB.transaction(["crm"], "readonly").objectStore("crm");         //Creamos en una misma linea la transaccion y el objectStore que hace referencia a la tabla

            objectStore.openCursor().onsuccess = function(e){               //Creamos un cursor y en caso de que no haya problema:

                const cursor = e.target.result;                             //Obtenemos el valor de la primera posición del cursor

                if(cursor){                                                             //Si el cursor tiene algo:
                    const {nombre, email, telefono, empresa, id} = cursor.value;        //Extraemos los datos del objeto al que apunta el cursor

                                                                                        //Añadimos el elemento en la lista
                    listadoClientes.innerHTML += `                                      
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();                      //Al acabar con el primer elemento del cursor, mandamos que pase al siguiente
                }else{
                    console.log("No hay más registros");    //Si el cursor está vacío
                }

            };

        }

    };




})();