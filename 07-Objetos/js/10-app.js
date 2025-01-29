


const producto = {                                  

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
}



const medidas = {                                  

    peso: "1kg",
    medida: "1m"
}



console.log(producto);
console.log(medidas);



const resultado = Object.assign(producto, medidas);             //Con este método creamos un objeto fusionando en él otros dos

console.log(resultado);


//Spread Operator

const resultado2 = {...producto, ...medidas};                   //Otra forma de hacer lo mismo

console.log(resultado2);