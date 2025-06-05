

//Vemos las prioridades en el Scope. 

const nombre = "Juan";

const login = true;

function mostrarCliente(){

    console.log(nombre);                //Usa la variable de nombre global

    if(login){
        const nombre = "Pedro";     //Al declarar una variable con el mismo nombre, este console.log imprimirá la nueva variable
        console.log(nombre)
    }


}

mostrarCliente();