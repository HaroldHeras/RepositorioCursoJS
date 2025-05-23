


import { obtenerClientes, eliminarCliente } from "./API.js";

/*Creamos una funcion IFI para que se ehecute automáticamente pero las variables no sean accesibels desde otros archivos */
(function() {

    const listado = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", mostrarClientes);


    async function mostrarClientes(){


        const clientes = await obtenerClientes();           //Obtenemos todos los clientes a través de la API

        clientes.forEach(cliente => {                       //Con cada cliente, extraemos su info y la imprimimos en el html

            const {nombre, email, telefono, empresa, id} = cliente;

            const row = document.createElement("TR");

            row.innerHTML = `

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
            
            `;

            row.querySelector(".eliminar").onclick = async ()=>{                            //Asignamos un eventHandler al botón de eliminar
                const confirmar = confirm(`¿Deseas eliminar el cliente " ${nombre} " ?`);  //Esta función es propia de JS.
                if(confirmar){
                    await eliminarCliente(id);                    
                }                
            }


            listado.appendChild(row);
            
        });

    }


})()