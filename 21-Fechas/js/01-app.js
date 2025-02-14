

/*Vemos diferenets métodos para obtener y modificar fechas */

//Creamos un objeto fecha que da los datos de la fecha de hoy
const diaHoy = new Date();
let valor = diaHoy;
console.log(valor);


//Creamos una fecha concreta
const otroDia = new Date("4-3-1994");
valor = otroDia;
console.log(valor);


//Obtenemos el año de la fecha creada
valor = otroDia.getFullYear();
console.log(valor);

//Obtenemos el mes de la fecha creada. (Los meses empiezan desde el 0 y hasta el 11)
valor = otroDia.getMonth();
console.log(valor);

//Obtenemos los minutos de la hora actual
valor = diaHoy.getMinutes();
console.log(valor);

//Obtenemos las horas  de la hora actual
valor = diaHoy.getHours();
console.log(valor);

//Obtenemos los milisegundos transcurridos desde el 1-1-1970 hasta la fecha creada
valor = otroDia.getTime(); 
console.log(valor);


//Podemos modificar el año de la fecha creada de esta forma
otroDia.setFullYear(2010);
valor = otroDia;
console.log(valor);

//Podemos obtener el tiempo en milisegundos hasta la fecha de hoy de esta forma
valor = Date.now();
console.log(valor);


