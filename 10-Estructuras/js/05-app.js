

/**Trabajamos con switch y ademas creamos una función estática abajo para usarla en uno de los case */


const metodoPago = "efectivo";


switch(metodoPago) {

    case "efectivo":
        pagar();
        break;

    case "cheque":
        console.log("Pagaste con cheque");    
        break;
        
    default:
        console.log("Método de pago no soportado");    
        break;
}


function pagar(){ 
    console.log("Pagando en efectivo");
};