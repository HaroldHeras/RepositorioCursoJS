

/**Vamos a seleccionar elementos del HTML por su clase. Con el siguiente método, buscamos una clase en el documento que contenga
 *  l oque nosotros le pasamos por parámetro.*/



const header = document.getElementsByClassName("header");

console.log(header);



const hero = document.getElementsByClassName("hero");

console.log(hero);


//Si las clases existen más de 1 vez, te envía un Array con todas las clases que en su nombre contienen esa palabra

const contenedores = document.getElementsByClassName("contenedor");

console.log(contenedores);


//Si una clase no existe, te envía un Array vacío

const noExiste = document.getElementsByClassName("No Existe");      

console.log(noExiste);