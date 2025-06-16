
//Otra forma de hacer testing. Explica lo que hay en el interior de los métodos de testing propios de JEST que veremos más adelante 


(async function(){

        function suma(a, b){
            return a + b;
        }



        function resta(a,b){
            return a - b;
        };


        //Ejecuta la función de suma, pero dentro de un promise
        async function sumaAsync(a,b){
            return Promise.resolve( suma(a,b))
        }

        //Ejecuta la función de resta, pero dentro de un promise
        async function restaAsync(a,b){
            return Promise.resolve( resta(a,b))
        }





        //Ejecutamos el test y le pasamos el callback, que será una función que realiza la operación y después ejecuta el expected().toBe()
        await test("Suma 10 + 20 y el resultado esperado es 30", async ()=>{

            const resultado = await sumaAsync(10,20);
            const esperado = 30;

            expected(esperado).toBe(resultado);

        })


        await test("Resta 30 - 10 y el resultado esperado es 20", async ()=>{

            const resultado = await restaAsync(30,10);
            const esperado = 20;

            expected(esperado).toBe(resultado);

        })





        //Con esta función lo que validamos es que el test se haya realizado, independientemente del resultado. En caso de haber algun error al ejecutarse el test, lanzará el catch
        async function test(mensaje, callback){

            try{

                await callback();

                console.log(`El test: ${mensaje} se ejecutó correctamente`);

            }catch(error){
                console.error("Error: ");
                console.error(error);
            }

        }



        function expected(esperado){

            return {

                toBe(resultado){


                    if(resultado!==esperado){
                        console.error(`Resultado no esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
                    }else{
                        console.log("Prueba satisfactoria")
                    }
                },

                toEqual(resultado){

                    if(resultado>esperado){
                        console.error(`El resultado es mayor de lo esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);
                    }else if(resultado===esperado){
                        console.log("El resultado es igual a lo esperado")
                    }else{
                        console.error(`El resultado es menor de lo esperado. No se pasó la prueba. Resultado: ${resultado},  Esperado: ${esperado}`);

                    }

                }
            }

        }


})()


