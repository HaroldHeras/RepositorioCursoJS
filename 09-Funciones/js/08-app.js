
/**Usamos funciones con "return" para almacenar los resultados en otra variable */




//Ejemplo más avanzado


let total = 0;                              




function agregarCarrito(precio){                //Creamos una  primera función que incrementa la variable "total"  y devuelve el resultado

    return total +=precio;


}


function calcularImpuesto(total){               //Creamos una función que hahce una operacion con "total" y devuelve el resultado


    return total*1.15;

}

total = agregarCarrito(300);                    //Usamos la primera función pasandole por parámetro el valor que queremos que sume a la variable "total"
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);     //Creamos uan constante y almacenamos en ella el resultado de usar la segunda función, pasandole por parámetro la variable "total"




console.log(`El total de la compra es de ${total}€`);           //Podemos ver por consola el resultado final de ambas variables

console.log(`El total a pagar, con impuestos incluidos es de ${totalPagar}€`);