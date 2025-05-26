
//Vemos funciones que devuelven otra función. No son muy comunes. Se ven sobretodo en librerias.


const obtenerNombre = ()=> ()=> console.log("Harold de las Heras");         //Metemos una función dentro de otra función

const fn = obtenerNombre();             //Ejecutamso la función padre, por lo que devuelve la función hijo, y esta se almacena en "fn"

fn();           //Ejecutamos "fn" por lo que se ejecuta la función hijo

