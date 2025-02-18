

//CREACIÓN DE UNA CLASE


class Cliente{                              //Class declaration

   

    constructor(nombre, saldo){             //Creacion del constructor

        this.nombre = nombre;
        this.saldo = saldo;

    };

    mostrarInformacion(){                   //Creación de un método

        return `Cliente: ${this.nombre}. Saldo: ${this.saldo}`;

    };

    static bienvenida(){                    //Creación de un método estático
        return `Bienvenido al cajero`;
    }

};



class Empresa extends Cliente {             //Creamos una clase que hereda de la otra

        constructor(nombre, saldo, telefono, categoria){            //Reescribimos el constructor obteniendo los otros dos atributos de la clase padre

            super(nombre, saldo);
            this.telefono = telefono;
            this.categoria = categoria;


        };


        mostrarInformacion(){                   //Reescribimos los otros dos metodos

            return `Cliente: ${this.nombre}. Saldo: ${this.saldo}. Telefono: ${this,this.telefono}. Categoría: ${this.categoria}`;
    
        };


        static bienvenida(){
            return `Bienvenido al cajero de la empresa`;
        };



};





const juan = new Cliente("Harold", 400);

const empresa = new Empresa("Codigo con Juan", 500, 123456789, "Programacion");

console.log(Cliente.bienvenida()); 
console.log(Empresa.bienvenida()); 
