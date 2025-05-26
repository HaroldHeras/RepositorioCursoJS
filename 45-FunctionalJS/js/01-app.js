

//Vemos un ejemplo de FIRST-CLASS FUNCTION


const suma = function(a,b){                 //Declaramos una función dentro de una constante
    return a+b;
}

const resultado1 = suma(2,5);               //Podemos usarla así

const resultado2 = suma;

console.log(resultado1)

console.log(resultado2(2,2))                //O así

