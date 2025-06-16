//Creamos una pequeña función que compara un resultado con lo que se espera,  yque se puede usar varias veces


function suma(a, b){
    return a + b;
}

let resultado = suma(3,3);

let esperado = 5;


expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);


function resta(a,b){
    return a - b;
};


resultado = resta(10,5);

esperado = 6;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);








/*Creamos una función a la que le pasamos un resultado esperado, y esta devolverá un obejto con más funciones, las cuales podremos usar
pasandoles el resultado real, y en función de lo que queramos comparar*/
function expected(esperado){

    //Devolvemos un objeto que contiene esas diferentes funciones, de esta forma podremos usar la sintaxis de ".toBe()" sobre el resultado de expected()
    return {

        toBe(resultado){


            if(resultado!==esperado){
                console.error(`Resultado no esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
            }else{
                console.log("Prueba satisfactoria")
            }
        },

        toEqual(resultado){

            if(resultado>esperado){
                console.error(`El resultado es mayor de lo esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
            }else if(resultado===esperado){
                console.log("El resultado es igual a lo esperado")
            }else{
                console.error(`El resultado es menor de lo esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);

            }

        }
    }

}