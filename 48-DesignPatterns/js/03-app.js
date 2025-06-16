/*Vemos el Singleton. Es una técnica para que no se puedan crear más de una instancia de una clase. Si se intenta, 
dejará crarlo pero saldrá con los mismos que la primera instancia que se creó*/


let instancia = null;


class Persona{

    constructor(nombre, email){

        if(!instancia){                     /*Esto dice que si la variable "instancia" está vacía, se creará el objeto con estos valores y además se le dará nesos valores también a "instancia" */
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;               /*Pero si "instancia" ya tiene algo(porque ya se creó antes otro objeto), entonces devuelve los valores que ya tiene "instancia", por lo que serán los mismos que los del primer objeto */
        }

    }

}


const persona = new Persona("Juan", "correo@correo.com");       //Al ser la primera instancia, se creará con estos valores

console.log(persona);           //Esto dará  "Juan", "correo@correo.com"


const persona2 = new Persona("Karen", "correo2@correo2.com");       //Al ser la segunda instancia, se creará pero con los valores de la primera

console.log(persona2);          //Esto también dará "Juan", "correo@correo.com"