


/*Vemos los Maps. Son como una especie de arreglos que se almacenan junto a una llave o indice que nosotros le ponemos */


const cliente = new Map();                  //Creación del Map


cliente.set("nombre", "Karen");             //Introducimos elementos en el Map. El primer es la llave y el segundo el valor
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);



console.log(cliente.size);                  //Vemos el tamaño de ese Map


console.log(cliente.has("nombre"));         //Miramos si dentro del Map hay algo con esa llave(Importante. Busca por la llave, no por el valor)


console.log(cliente.get("nombre"));         //Obtenemos el valor al que hace referencia esa llave



cliente.delete("saldo");                    //Borramos el valor al que hace referencia esa llave




cliente.clear();                            //Limpiamos el Map entero




const paciente = new Map([["nombre", "saldo"], ["Pedro", 100]]);        //Creamos un Map y le introducimos dos llaves y sus valores de una vez. (Observar los corchetes)


paciente.set("Doctor", "LLorente" );                    //Introducimos una llave y un valor nuevo

paciente.set("nombre", "Mario");                        //Si esa llave ya existe, reescribe su valor con el nuevo que le pongamos


console.log(paciente);  





