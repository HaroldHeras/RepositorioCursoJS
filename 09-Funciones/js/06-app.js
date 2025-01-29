
/**Definicion de funciones con parámetros por defecto */
/*Podemos poner un valor por defecto a los parámetros de la función, para que en caso de no colocarse esos parámetros a la hora 
de llamar a la función, use los que les hemos asignaod por defecto*/


function saludar(nombre = "Desconocido", apellido = "Sin apellido"){        //De esta forma declaramos una función con parámetros por defecto

    console.log(`Hola ${nombre} ${apellido}`);


}

saludar("Harold", " de las Heras");     //Llamamos al a función dandole unos parámetros



saludar();                      //LLamamos a la función si darle unos parámetros, por lo que usará los valores por defecto