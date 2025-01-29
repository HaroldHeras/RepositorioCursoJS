
/**Trabajo con "if" y "else if */


const dinero = 1000;

const totalAPagar = 500;

const tarjeta = true;

const cheque = true;




if(dinero >= totalAPagar){
    console.log("Si podemos pagar");
}else if(tarjeta){
    console.log("Si puedo pagar porque tengo la tarjeta");
}else if(cheque){
    console.log("Podemos pagar con cheque");
}else{
    console.log("Fondos insuficientes");
}