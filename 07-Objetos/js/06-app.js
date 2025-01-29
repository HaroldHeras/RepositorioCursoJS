


const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
    informacion: {                      
        medidas: {                      
            peso: "1kg",                
            medida: "1m"
        },
        fabricacion:{                   
            pais: "China",
            origen: "Moscu"
        }

    }


}

console.log(producto); 



/**CREAMOS CONSTANTES CON DESTRUCTURING */

const {nombre, informacion:{fabricacion}} = producto;           /*Creamos dos variables llamadas "nombre" y "fabricacion" y le damos 
                                                                el valor del atributo "nombre" y "fabricacion" del objeto producto.*/

console.log(nombre);
console.log(fabricacion);

const {informacion:{fabricacion: {pais}}} = producto;  /**Creamos una constante llamada "pais" y le damos el valor del atributo "pais" 
                                                        del objeto "fabricacion", que a su vez forma parte de "informacion y a su vez 
                                                        forma parte de "producto" */

console.log(pais);
