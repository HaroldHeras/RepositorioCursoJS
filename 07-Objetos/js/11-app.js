
//Creamos una función o método e imprimimos con ella info del objeto

/*Hay que usar la palabra "this" para referirnos a la constante del propio objeto*/

const producto = {                                  

    nombre: "Monitor de 20 pulgadas",          
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);       //Con este caso hay que usar las comillas invertidas
    }
}

producto.mostrarInfo();



const producto2 = {                                  

    nombre: "Monitor de 10 pulgadas",          
    precio: 200,
    disponible: false,
    mostrarInfo: function(){
        console.log("El producto", this.nombre,"tiene un precio de:",this.precio);
    }
}

producto2.mostrarInfo();