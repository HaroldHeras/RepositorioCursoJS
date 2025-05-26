
//Vemos como usar funciones como argumentos


const suma = (a,b)=> a+b;               //Creamos dos funciones dentro de sus constantes(si no ponemos llaves, el return viene implicito)
const multiplica = (a,b)=> a*b;


const sumaOMultiplica = fn => fn(20,10);     //Creamos una tercera función que pide por parámetro una fucnión. Dentro, asigna los parámetros de esa función


console.log(sumaOMultiplica( suma ));           //Según la función que le pasemos, hará una operación u otra con esos parámetros
console.log(sumaOMultiplica( multiplica ));
