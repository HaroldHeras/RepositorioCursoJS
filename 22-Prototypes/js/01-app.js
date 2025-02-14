
/*Vemos las dos formas de crear un objeto */



const cliente = {           //Object literal
    nombre: "Juan",
    saldo: 500
};

console.log(cliente);



function Cliente(nombre, saldo){                    //Object constructor
    this.nombre = nombre;
    this.saldo = saldo;
};

const harold = new Cliente("Harold", 500);

console.log(harold);
