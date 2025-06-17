
//Probamos el tetsing con una clase y sus métodos, importando esa clase.
//Usamos los Snapshots para ver lo que hay en el interior de la clase despues de la ejecución del test. Para ello usamos el comando "npx jest -u" para que lo sobreescriba en cada ejecución, sino dará fallo


import {Citas} from "../js/classes/Citas.js";


describe("Probar la clase de Citas", ()=>{

    const citas = new Citas();                  //Creamos un objeto Citas desde fuera de los tests, para poder usarlo en todos

    const id = Date.now();                      //Cramos el id con la fecha en milisegundos desde fuera, para que todos tengan el mismo id


    test("Agregar una nueva cita", ()=>{        //Evaluamos que se cree una cita nueva

        const citaObj = {                       //Creamos un objeto cita
            id,
            mascota: 'Hook',
            propietario: 'Harold',
            telefono: '123456789',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }


        citas.agregarCita(citaObj);             //Usamos el método para agregar la cita al objeto Citas


        expect(citas).toMatchSnapshot();        //la primera vez que se ejecuta, valdrá con hacer "npm t". Crea el Snapshot si se ha ejecutado bien el método. Ahí podremos ver si guarda bien la cita

    })



    test("Actualizar Cita", ()=>{

        const citaActualizada = {                   //Creamos una cita diferente, con el mismo id, para actualizar la que ya hay.
            id,
            mascota: 'Otto',
            propietario: 'Harold',
            telefono: '123456789',
            fecha: '10-12-2020',
            hora:'10:40',
            sintomas: 'Solo duerme'
        }


        citas.editarCita(citaActualizada);          //Usamos el método para editar la cita

        expect(citas).toMatchSnapshot();            //Tendremos que usar el comando "npx jest -u" para que sobreescriba el snapshot y ver lo que hay ahora dentro del objeto Citas

    })



    test("Eliminar Cita", ()=>{

        citas.eliminarCita(id);                     //Usamos el método para eliminar la cita que tenga ese id


        expect(citas).toMatchSnapshot();            //Tendremos que usar el comando "npx jest -u" para que sobreescriba el snapshot y ver lo que hay ahora dentro del objeto Citas


    })


})