


function sumar(a,b){                //Creamos dos funciones
    return a+b;
}



function restar(a,b){
    return a-b;
}



describe("Testing a las funciones de suma y resta",()=>{                //Creamos el grupo de testeo

    test("Test suma de 20 y 30", ()=>{

        expect(sumar(20,30)).toBe(50);                  //Testeamos que el resultado de la suma sea el esperado

    })


     test("Test resta de 10 menos 5", ()=>{

        expect(restar(10,5)).toBe(5);                   //Testeamos que el resultado de la resta sea el esperado

    })



    test("Que la suma 10 y 10 n osea 10", ()=>{

        expect(sumar(10,10)).not.toBe(10);              //Testeamos  que el resultado NO sea 10

    })


    test("Que la resta de 10 menos 5 no sea 2", ()=>{

        expect(restar(10,5)).not.toBe(2);               //testeamos que el resultado NO sea 2

    })


})