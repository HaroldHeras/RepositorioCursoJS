


const puntaje = 1000;

const puntaje2 = "1000";


// "if" con simbolo de diferente

if(puntaje != 1000){
     console.log("Si es diferente");

}else{
     console.log("No es diferente");
}


//"if" con comparación extricta

if(puntaje === "1000"){                     //Usando el estricto, no son iguales porque uno es number y el otro es String
    console.log("Si es igual");

}else{
    console.log("No es igual");
}


if(puntaje2 !== "1000"){                    //usando el estricto, no son diferentes, porque los dos son String

    console.log("Son diferentes");

}else{
    console.log("No son diferentes");
}


