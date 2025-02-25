
/*Vemos los WeakMap. Son como los Map, pero en la llave solo admiten objetos. En el valor si que admite Strings o Number */

const producto = {                  //Creamos un objeto que usaremos de llave
    id: 10
}



const weakmap = new WeakMap();              //Creamos el WeakMap


weakmap.set(producto, "Televisor");             //Introducimos el objeto creado como llave, y un valor.

console.log(weakmap);


console.log(weakmap.has(producto));             //Comprobamos si existe algun registro con esa llave


console.log(weakmap.get(producto));             //Obtenemos un registro con esa llave. Si imprimimos, nos da true o false si lo hay


weakmap.delete(producto);                       //Borramos un registro con esa llave