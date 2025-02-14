
/*Vemos como crear métodos propios deu n objeto, también llamados prototypes */



function Cliente(nombre, saldo){                    //Creamos un objeto
    this.nombre = nombre;
    this.saldo = saldo;
};



Cliente.prototype.tipoCliente = function (){        //Creamos un método/prototype propio de ese objeto
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


Cliente.prototype.nombreClienteSaldo = function(){              //Creamos un segundo método/prototype para ese objeto
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function(retira){           //Creamos un tercer método/prototype para ese objeto
        this.saldo -= retira;
};



const pedro = new Cliente("Pedro",6000);                    //Instanciamos un objeto Cliente

console.log(pedro.nombreClienteSaldo());                    //Imprimimos el resultado que nos envia el segundo método


pedro.retiraSaldo(1000);                                    //Ejecutamos el tercer método

console.log(pedro.nombreClienteSaldo());                    //Imprimimos el resultado del segundo método para ver que ha hecho ese tercer método

console.log(pedro);                             //Si imprimimos el objeto en si y vamos a la sección de "prototypes", nos saldrán los métodos que tiene este objeto



