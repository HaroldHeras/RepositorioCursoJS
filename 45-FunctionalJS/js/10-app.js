//Vemos lo que es el Composition. Esto es usar funciones como si fueran clases. Devuelven informacion que se almacean en variables y las convierte en objetos




/*Creamos una función, que obteniendo por parámetro la información de un objeto(info), devuelve un objeto que en su interior tiene 
otra función(mostrarNombre).
Podemos ver que después de "=>" hay un parentesis. Esto es para indicar que l oque devuelve es un objeto({...}) y que se de por implicito el "return" */
const agregaMostrarNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`)
    }
})



/*Creamos una función que coge los parametros y los almacena en un objeto en su interior(info). Despues devuelve el objeto pero usando
el "Object.assign()" que lo que hace es asignar más parametros a un objeto, en este caso, al objeto "info". Ejecuta la función "agregarMostrarNombre()" 
por lo que, el parametro que le está asignando al objeto "info" es la función que devuelve, en este caso "mostrarNombre()" */
function Cliente(nombre, email, empresa){       

    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        agregaMostrarNombre(info)
    )

}



//Aquí hace lo mismo que la función "Cliente"
function Empleado(nombre,email, puesto){

    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        agregaMostrarNombre(info)
    )

}

//Ejecutamso las funciones y el objeto que devuelven lo almacenamos en constantes
const cliente = Cliente("Juan", "correo@correo.com", "Codigo con Juan");        

const empleado = Empleado("Pedro", "empleado@empleado.com", "Programador");

//Y podemos ver que ya tienen como método integrado, la funcion "mostrarNombre()".
cliente.mostrarNombre();

empleado.mostrarNombre();


