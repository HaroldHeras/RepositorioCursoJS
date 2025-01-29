

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];


console.log(meses);


meses [0] = "Nuevo mes";                //Modificamos el valor de la posición 0 del array


console.log(meses);

meses[10] = "Ultimo mes";               /*Añadimos una nueva posición. Vemos que añadimos la posición 10 aunque solo había 5.
                                        La crea sin problemas, dejando el espacio entre la posición 5 y la 10*/

console.log(meses);