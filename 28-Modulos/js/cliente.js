

//Vemos como hay que declarar a los elementos que queremos que sean exportables.



//EXPORTAR VARIABLES
export const nombreCliente = "Juan";                        

export const ahorro = 200;


//EXPORTAR FUNCIONES
export function mostrarInformacion(nombre, ahorro){             

    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;

};


export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log("Tiene saldo");
    }else{
        console.log("No tiene saldo");

    }
}




//EXPORTAR CLASES
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }


    mostrarInformacion(){
        console.log(`Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`);
    }
}




//Declarar un export default. Solo podrá haber uno, y en el script que lo importa, tendrá que ir fuera de las llaves
export default function nuevaFuncion(){

    console.log("Este es el export default");

}

