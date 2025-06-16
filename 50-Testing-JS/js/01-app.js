

//Vemos una forma muy sencilla de hacer testing


function suma(a, b){
    return a + b;
}

let resultado = suma(3,3);

let esperado = 6;


if(resultado!==esperado){
    console.error(`Resultado no esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
}else{
    console.log("Prueba satisfactoria")
}


function resta(a,b){
    return a - b;
};


resultado = resta(10,5);

esperado = 5;


if(resultado!==esperado){
    console.error(`Resultado no esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
}else{
    console.log("Prueba satisfactoria")
}