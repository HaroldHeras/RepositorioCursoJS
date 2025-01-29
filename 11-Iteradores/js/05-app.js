


let i = 0;


do{

    if(i%3==0 && i%5==0){                           //Ejemplo de bucle "do-while" con el ejercicio de "FIZZ-BUZZ"
        console.log(i, "Fizz Buzz");
    }else if(i%3==0){
        console.log(i, "Fizz");
    }else if(i%5==0){
        console.log(i, "Buzz");
    }else{
        console.log(i);
    }

    i++;

}while(i<10);