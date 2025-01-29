

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;


//El comando "typeof" nos dice que tipo de dato es
console.log(typeof numero1);                //En este caso un string
console.log(typeof numero4);                //En este caso un number


Number.parseInt(numero1);           //Con el metodo de la clase Number, cambiamos momentaneamente el dato de String a Number

Number.parseInt(numero2);           //Lo pasa de string a number, pero en este caso lo pasa  a número entero.

Number.parseFloat(numero2);         //Con este método hacemos lo mismo pero pasandolo a number con decimales



Number.isInteger(numero4);          //Devuelve true si el número es entero o false si es cualquier otra cosa


