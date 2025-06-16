/*Vemos el Mixin Pattern. Es poder crear uans funciones independientes, que después se le pueden agregar a una clase a posteriori, 
y escoger que clases queremos que las tengan y cuales no, sin tener que escribirlas en todas las clases. Simplemente se escribe la función 
una vez y se le asigna a las clases que deseemos*/


class Persona {                                     //Creamos las clases
    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;

    }
}


class Cliente {
    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;

    }
}


const funcionesPersona = {                  //Creamos un objeto que tiene dentro dos funciones

    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}   Email: ${this.email}`);
    },
    mostrarSoloNombre(){

        console.log(`El nombre es ${this.nombre}`);
    }


}


Object.assign(Persona.prototype, funcionesPersona);         //Asignamos a las clases sus propios métodos y a mayores el objeto con fucniones que hemos creado
Object.assign(Cliente.prototype, funcionesPersona);


//Ya podemos instanciar nuestras clases y usar los métodos que les hemos asignado
const persona = new Persona("Harold Persona", "email@email.com");       
persona.mostrarInformacion();
persona.mostrarSoloNombre();


const cliente = new Cliente("Harold Cliente", "email@email.com");
cliente.mostrarInformacion();
cliente.mostrarSoloNombre();


