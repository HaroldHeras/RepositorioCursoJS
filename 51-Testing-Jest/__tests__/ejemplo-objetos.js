
//Hacemos testing a un objeto


const cliente = {               //Creamos un objeto

    nombre: "Harold",
    balance: 500
}


describe("Testing al cliente", ()=>{                            //Creamos el grupo de pruebas


    test("El cliente es premium(Saldo mayor a 400€)", ()=>{

        expect(cliente.balance).toBeGreaterThan(400);               //Usamos la función que evalua que algo sea mayor que algo

    });


    test("El cliente es Harold", ()=>{

        expect(cliente.nombre).toBe("Harold");                      //usamos al función que evalua que algo sea exactamente lo que se espera

    });



    test("No es otro cliente", ()=>{

        expect(cliente.nombre).not.toBe("Pedro");                   //Usamos la negación del toBe

    })


    test("No tiene 500", ()=>{

                 
        expect(cliente.balance).not.toBe(500);           //Usamos la negación del toBe                 
    })


})