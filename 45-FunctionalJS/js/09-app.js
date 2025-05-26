
/*Vemos el "Curryng" y los "Partials" 
Esto es dividir una función en partes, anidando funciones dentro de funciónes, separando las variables*/



const suma = (a,b,c)=>{             //Creamos una función que suma 3 números
    return a + b + c;
}

const parcial = a => b => c => suma(a,b,c);         //Creamos un partial, dividiendo en funciones la operación, introduciendo un número en cada una

const hijo = parcial(1);        //Ejecutamos el partial pasandole el primer número. Esto devuelve la función hijo

const nieto = hijo(2);          //Ejecutamos la función hijo pasandole el segundo número. Esto devuelve la función nieto.

const resultado = nieto(3);     //Ejecutamos la función nieto pasandole el tercer numero. Esto ejecuta la función que suma los 3 numeros y devuelve el resultado

console.log(resultado);         //imprimimos el resultado final.
