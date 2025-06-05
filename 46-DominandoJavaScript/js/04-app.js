//Ejemplo de Implicit Binding (se trata del uso del "this" al llamar a las variables y funciones dentro de un objeto o clase)


const usuario = {
    nombre: "Harold",
    edad: 31,
    informacion(){
        console.log(`La edad de ${this.nombre} es de ${this.edad} años`)        //Aquí usamos el Implicit Binding
    }
}



