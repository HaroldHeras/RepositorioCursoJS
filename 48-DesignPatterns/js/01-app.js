//Vemos el Class Pattern o patrón de Clase



class Persona {
    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;

    }
}


const persona = new Persona("Juan", "correo@correo.com");

console.log(persona);