/*CREACION DE OBJETOS COMO ATRIBUTOS DENTRO DE OTROS OBJETOS*/


const producto = {

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
    informacion: {                      //Creamos el objeto "informacion" dentro del objeto "producto"
        medidas: {                      //Creamos otro objeto llamado "medidasa" dentro del objeto "informacion"
            peso: "1kg",                //Creamos los atributos de la clase "informacion"
            medida: "1m"
        },
        fabricacion:{                   //Creamos otro objeto llamado "fabricacion" dentro del objeto "informacion"
            pais: "China"
        }

    }


}

console.log(producto);                                  //Imprimimos el objeto "producto entero"

console.log(producto.informacion);                      //Imprimimos el objeto "informacion" que esta dentro del objeto "producto"

console.log(producto.informacion.medidas);              //Imprimimos el atributo del objeto "informacion" que esta dentro de "producto

console.log(producto.informacion.fabricacion.pais);     //Imprimimos el atributo "pais" del objeto fabricacion, del objeto informacion, del objeto producto