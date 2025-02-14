
/*Vemos como crear métodos propios deu n objeto, también llamados prototypes */



function Cliente(nombre, saldo){                    //Creamos un objeto
    this.nombre = nombre;
    this.saldo = saldo;
};



Cliente.prototype.tipoCliente = function (){        //Creamos tres métodos propios de Cliente
    let tipo;

    if(this.saldo>10000){
        tipo = "Gold";
    }else if(this.saldo>5000){
        tipo = "Platinum";
    }else{
        tipo = "Normal";
    };

    return tipo;
};


Cliente.prototype.nombreClienteSaldo = function(){             
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function(retira){           
        this.saldo -= retira;
};



function Persona(nombre, saldo, telefono){          //Creamos el objeto Persona, heredando los atributos del objeto Clientes

        Cliente.call(this, nombre, saldo);          //De esta forma decimos que herede los atributos nombre y saldo del objeto Cliente
        this.telefono = telefono;                   //Le damos un tercer atributo

};

Persona.prototype = Object.create(Cliente.prototype);           //Hacemos que Persona herede también los métodos de Cliente

Persona.prototype.constructor = Persona;                        //Al heredar los métodos y el constructor de Cliente, pierde su propio constructor. Con esto lo recuperamos


const juan = new Persona("Juan", 5000, 123456789 );             //Instanciamos un objeto Persona pasandole los parámetros

console.log(juan);                                              //Al imprimir podemos ver que los parámetros se almacenan correctamente, y desplegando "prototypes" vemos que también están los métodos de Cliente