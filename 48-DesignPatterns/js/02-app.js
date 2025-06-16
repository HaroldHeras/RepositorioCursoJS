//Vemos el Constructor Pattern o patrón de constructor


class Persona {
    constructor(nombre, email){

        this.nombre = nombre;
        this.email = email;

    }
}




class Cliente extends Persona{

    constructor(nombre, email, empresa){

        super(nombre, email)
        
        this.empresa = empresa;

    }

}


const persona = new Persona("Juan", "correo@correo.com");


const cliente = new Cliente("Harold", "correo@correo.com", "Harold S.L.")

console.log(cliente)