


/*-----Diferencia entre Function Declaration y Function Expresion.------
JavaScript realiza dos vueltas de lectura de código antes de ejecutarlo. La primera vuelta es para leer el código y analizarlo, 
y la segunda ya es para ejecutarlo. 

--Cuando creamos una Function Declaration, estamos declarando la función desde el principio, por lo que podremos llamrla en cualquier
parte del código, incluso antes de declararla, porque esté donde esté, JavaScript la ha leido en la primera vuelta y la reconoce.

--Cuando creamos una Function Expression, almacenamos la función dentro de una variable, y lo que hace JavaScript en la primera vuelta 
es reconocer la variable, pero no lo que hay dentro, por lo que a la hora de llamar a esa función, solo podremos hacerlo escribiendo 
su llamada despues de la declaración de la función. Si lo escribimos antes, como en este caso, nos dará error*/

//Declaración de función / Function declaration

sumar();    //Podemos llamar a la función antes de escribirla

function sumar(){                       

    console.log(2+2);

}




//Expresion de función / Function expresion

sumar2();                       //Aquí nos dará error por llamarla antes de escribirla

const sumar2 = function(){                      
    console.log(3+3);
}

