
/*vemos como validar Strings. Para ello vamos a usar métodos propios de jest */


const password = "123456";          //Creamos una contraseña con 6 caracteres


//usamos el método para crear un grupo de testing
describe("Valida que el password no esté vacío y tenga una extensión de 6 caracteres", ()=>{

    //Con este test, vamos a validar que tenga 6 caracteres
    test("Que el password tenga 6 caracteres", ()=>{

        expect(password).toHaveLength(6);               //usamos el expect().toHaveLength(). Colocamos la contarseña y los carácteres que debería tener


    })


    test("Password no vacío", ()=>{

        expect(password).not.toHaveLength(0);           //Usamos el mismo método pero con la variante de "not". De estaforma podemos corroborar que NO tenga la longitud que le indicamos en el toHaveLength
    })

})