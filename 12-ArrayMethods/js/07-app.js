


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ["Agosto", "Septiembre"];

const meses3 = ["Octubre", "Noviembre", "Diciembre"];




//Concatenamos Arrays con el método .concat

const resultado = meses.concat(meses2, meses3);

console.log(resultado);

console.log("-------------------------------");


//Concatenamos con spread operator

const resultado2 = [...meses, ...meses2, ...meses3];

console.log(resultado2);


console.log("---------------------------");


//Otras opciones

const resultado3 = meses.concat(meses2, meses3, "Hola");     //Si añadimos algo más al final, lo va a incluir dentro del Array final

console.log(resultado3);


console.log("-------------------------");

const resultado4 = [...meses, ...meses2, ...meses3, ..."Hola"];     //Si lo hacemos con "spread operator", lo que va aconcatenar es letra por letra

console.log(resultado4);


