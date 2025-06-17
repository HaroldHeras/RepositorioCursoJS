
/*Vemos como hacer tetsing de un objeto completo. Creamos un objeto y usamos el método ".toMatchSnapshot()". Lo que va a hcer, si no ahy una 
carpeta de Snapshots creada con anterioridad, va a crearla, e introduciendo en ella una copia del cliente, que usará como comparación 
para otros clientes que vayamos a comparar. De esta forma, si una vez hecho el snapshot, introducimos en el expect un cliente que 
no sea igual al de la copia, lanzará el error, indicandonos en qué se diferencian. 
Si después queremos actualizar el snapshot y cambiar el cliente que tenemos como referencia, modificamos el cliente como lo queramos, 
y después en vez de usar "npm t", usaríamos "npx jest -u". De esta forma hace el test pero actualizando el snapshot con los nuevos datos del cliente*/


const cliente = {
    nombre: "Harold",
    balance: 400,
    tipo: "Premium"
}






describe("Testing al cliente", ()=>{

    test("Comprobamos que el cliente sea el mismo que el snapshot", ()=>{

        expect(cliente).toMatchSnapshot();                          //Metodo para crear la carpeta y el snapshot la primera vez, y si se hace más veces, es para comparar el objeto del expected con el que esta en el snapshot

    });


});



//Actualizar snapshot: npx jest -u