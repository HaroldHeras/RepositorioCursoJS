

/**Usando el operador ternario " ? : " */


const autenticado = true;

const puedePagar = true;

//Podemos usar el "&"
console.log(autenticado && puedePagar ? "Si está autenticado" : "No está autenticado" );


//Podemos usar el "||"
console.log(autenticado || puedePagar ? "Si está autenticado" : "No está autenticado" );


//Podemos usar "if" anidados. lo que hay detras del ultimo ":" es el "false" del primer "if"
console.log(autenticado ? puedePagar ? "Autenticado y puede pagar" : "Autenticado pero no puede pagar" : "No autenticado ");




//Ejemplo de "if" anidados

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;


if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    if(efectivo > totalPagar){
        console.log("Si podemos pagar en efectivo");
    }else {
        console.log("Otro método de pago");
    }
}else{
    console.log("Fondos insuficientes");
}