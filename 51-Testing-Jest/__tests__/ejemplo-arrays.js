

//hacemos testing de un array de la misma forma

const carrito = ["producto 1", "Producto 2", "producto 3"];             //Creamos el array con 3 elementos



describe("Testing al carrito de compras", ()=>{

    test("Probar que el array tenga 3 elementos", ()=>{             //Comprobamos que tenga 3 elementos

        expect(carrito).toHaveLength(3);


    })


    test("Verificar que el carrito no esté vacío", ()=>{            //Comprobamos que NO tenga 0 elementos

        expect(carrito).not.toHaveLength(0);


    })




})