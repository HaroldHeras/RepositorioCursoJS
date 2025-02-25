/*Vemos los WeakSet. Son como los Set, pero no admiten valores sueltos. Solo objetos. */


const weakset = new WeakSet();              //Creamos un WeakSet


const cliente = {                       //Creamos un objeto
    nombre: "Juan",
    saldo:100
}




weakset.add(cliente);               //Añadimos el objeto



console.log(weakset.has(cliente));          //Imprimimos true o false si ese objeto existe dentro del WeakSet


// console.log(weakset.has(cliente2));      //Si buscamos un objeto que existe, pero no está dentro, dará false. Si no existe ese objeto, dará error.


// console.log(weakset.size);           //No tiene método para averiguar el tamaño


// weakset.forEach(element => {         //No se puede iterar
//     console.log(element)
// });



weakset.delete(cliente);                //Método para borrar un elemento


console.log(weakset);                   //Imprimimos el WeakSet