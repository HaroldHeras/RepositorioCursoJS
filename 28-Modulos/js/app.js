/*Vemos como podemos importar y exportar variables, funciones y clases.
    -Primero, tenemos que ir al archivo HTML y escribir: type="module" en el script que va a importar eleentos
    -Segundo tenemos que agregar en la clase/función/etc... la palabra "export" para indicar que va a poder ser exportada
    -Tercero tenemos que indicar en el script que importa, entre llaves, el elemento que importas y despues la carpeta desde la que lo importas
    -Ya podrás usar esos elementos dentro del script que los importa
*/



//Después de la palabra "import" podemos importar un "export dafault"(solo uno) que irá fuera de las llaves. El resto han de ir dentro de las llaves
import nuevaFuncion, {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from "./cliente.js"

//También se le puede poner un alias al elemento que se importa. En este caso importamos "Empresa" y en este Script se llamará "EmpresaModelo"
import {Empresa as EmpresaModelo} from "./empresa.js";



console.log(nombreCliente);         //Imprimimos las dos variables que importamos
console.log(ahorro);



console.log(mostrarInformacion(nombreCliente, ahorro));         //Imprimimos el resultado de un par de funciones que importamos
tieneSaldo(ahorro)


const cliente = new Cliente(nombreCliente, ahorro);             //Creamos una instancia del objeto que hemos importado y usamos su método
cliente.mostrarInformacion();


const empresaNueva = new EmpresaModelo("Harold", 2000, "Programación");       //Creamos una instancia del objeto importado al que le pusimos un alias
console.log(empresaNueva.mostrarInformacion());


nuevaFuncion();         //Usamos la función que hemos importado, que esta declarada como un "export default"