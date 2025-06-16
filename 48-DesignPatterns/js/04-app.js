/*Vemos lo que es el Factory. Se trata de crear una clase, que segun una condición, crée instancias de otra clase */



/*Creamos una clase con dos atributos, y después un método para crear un Input usando esos atributos */
class InputHTML{

    constructor(type, nombre){

        this.type = type;
        this.nombre = nombre;

    }

    creaInput(){

        return `<input type="${this.type}" name="${this.nombre}"  id="${this.nombre}">`;

    }

}



/*Creamos una segunda clase que no va a tener constructor pero si un método. Este método recibe dos parámetros, que será para evaluar 
el tipo de InputHTML que vamos a crear*/
class HTMLFactory{

    creaElemento(tipo, nombre){

        switch(tipo){           //Evaluamos el parámetro "tipo", y según sea este, se creará un tipo u otro de "InputHTML"

            case "text":
                return new InputHTML("text", nombre);

            case "tel":
                return new InputHTML("tel", nombre);

            case "email":
                return new InputHTML("email", nombre);

            default:
                return;
        }


    }

}



const elemento = new HTMLFactory();     //Creamos el objeto que hará de evaluador

const inputText = elemento.creaElemento("text", "nombre-cliente");      //Usamos el método que evalua y que devuelve un objeto de tipo "InputHTML"
console.log(inputText.creaInput());         //Con el objeto "InputHTML" creado, ya usamos su método propio para crear el input


const inputTel = elemento.creaElemento("tel", "telefono-cliente");
console.log(inputTel.creaInput());


const inputEmail = elemento.creaElemento("email", "email-cliente");
console.log(inputEmail.creaInput());


