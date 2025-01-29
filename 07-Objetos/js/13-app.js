

const producto = {                                  //Creamos un objeto literal. Ya definido

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
    
}


console.log(producto);                          //Inmprimimos el producto con toda la info

console.log(Object.keys(producto));             //Con ste método imprimimos el nombre de los atributos


console.log(Object.values(producto));           //Con este método imprimimos le valor de los atributos

console.log(Object.entries(producto));          //Con este métdoo imprimimos todo, almacenandolo en Arrays

