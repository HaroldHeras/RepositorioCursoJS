

/**Jugamos con el operador "&" para crear condiciones */


const usuario = true;

const puedePagar = false;


if(usuario && puedePagar){
    console.log("Si puedes comprar");
}else if(!usuario && !puedePagar){
    console.log("No puedes comprar");
}else if(!usuario){
    console.log("No ha iniciado sesión");
}else if(!puedePagar){
    console.log("Saldo insuficiente");
}