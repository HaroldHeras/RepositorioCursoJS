

class Cliente{                              //Class declaration

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

    constructor(nombre, saldo){             //Creacion del constructor

        this.nombre = nombre;
        this.saldo = saldo;

    };

    mostrarInformacion(){

        return `Cliente: ${this.nombre}. Saldo: ${this.saldo}`;

    };

};


const juan = new Cliente("Harold", 400);

console.log(juan.mostrarInformacion());




const Cliente2 = class {                    //Class expression
    
    constructor(nombre, saldo){

        this.nombre = nombre;
        this.saldo = saldo;

    }

    mostrarInformacion(){

        return `Cliente: ${this.nombre}. Saldo: ${this.saldo}`;

    };

};

const juan2 = new Cliente2("harold", 400);

console.log(juan2);
