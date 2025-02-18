//CREACIÓN DE UNA CLASE


class Cliente{                              //Class declaration

   #nombre;     //Hacemos que este atributo sea privado, y no se podrá acceder a el sino es desde un método

   constructor(nombre, saldo){             //Creacion del constructor

        this.#nombre = nombre;              //Le colocamos el # y obedecerá a la orden de hacerse privado
        this.saldo = saldo;

    };

    setNombre(nombre){                      //Creamos el get y el set
        this.#nombre = nombre; 
    };

    getNombre(){
        return this.#nombre;
    };

    mostrarInformacion(){                   //Creación de un método

        return `Cliente: ${this.#nombre}. Saldo: ${this.saldo}`;

    };

    static bienvenida(){                    //Creación de un método estático
        return `Bienvenido al cajero`;
    }

};


const juan = new Cliente("Juan", 400);

console.log(juan.getNombre());


juan.setNombre("Harold");

console.log(juan.getNombre());

console.log(juan.#nombre);              //Si intentamos imprimirlo, nos dará error







