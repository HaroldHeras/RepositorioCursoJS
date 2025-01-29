


//-----------EJERCICIO DE FIZZ BUZZZ--------------



/*En una lista de 0 a 100:
-Los multiplos de 3 deberán imprimir: Fizz
-Los multiplos de5 deberán imprimir: Buzz
-Los que sean multiplos de 3 y de 5 deberán imprimir: Fizz Buzz
*/



for(let i=0; i<=100;i++){                                           /*En una lista del 0 al 100, comprobamos cuales son los que
                                                                    divididos entre 3 o 5, el resto es 0*/

    if(i%3==0 && i%5==0){
        console.log(i, "Fizz Buzz");
    }else if(i%3==0){
        console.log(i, "Fizz");
    }else if(i%5==0){
        console.log(i, "Buzz");
    }else{
        console.log(i);
    }

    

}