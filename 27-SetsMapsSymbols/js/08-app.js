


const ciudades = ["Londres", "New York", "Madrid", "Paris"];


const ordenes = new Set([123,231,131,102]);

const datos = new Map();

datos.set("nombre", "Juan");
datos.set("profesion", "Desarrollador Web");



//DEFAULT ITERATOR: Nos muestra lo que nos devuelve por defecto un iterador.

for(let ciudad of ciudades){            //En un Array normal, devuelve los valores
    console.log(ciudad);
}

for(let orden of ordenes){              //En un Set, devuelve los valores
    console.log(orden); 
}

for(let dato of datos){                 //En un Map, nos devuelve un Array con la llave y el valor
    console.log(dato);
}

console.log("------------------------");


//ENTRIES ITERATOR: Nos muestra lo que devuelve un iterador añadiendole el método ".entries()".

for(let entry of ciudades.entries()){           //En un Array, devuelve Array con el indice y el valor de ese indice
    console.log(entry);
}



for(let entry of ordenes.entries()){            //En un Set, devuelve un array con el valor y la clave(como los Set no tienen clave, será igual que el valor)
    console.log(entry);
}


for(let entry of datos.entries()){              //Con un Map, devuelve array con la clave y su valor
    console.log(entry);
}


console.log("-------------------------------");



//VALUES ITERATOR: Nos muestra lo que devuelve un iterador añadiendole el método ".values()".

for(let value of ciudades.values()){            //En los tres casos, nos va a devolver solo los valores.
    console.log(value);
}


for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}


console.log("-------------------------------");



//Keys Iterator


for(let key of ciudades.keys()){                    //En Arrays, devuelve los indices del Array
    console.log(key);
}

for(let key of ordenes.keys()){                     //En Set, devuelve las claves, que al no tener, serán igual que los valores
    console.log(key);
}

for(let key of datos.keys()){                       //En Map, devuelve los valores
    console.log(key);
}




