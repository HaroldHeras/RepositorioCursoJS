


for(let i = 0; i<10; i++){                  //Bucle for de ejemplo

    console.log(`Numero : ${i}`);

}



for(let i = 0; i<100; i++){                             //Bucle for para detectar los pares y los impares

    if(i%2==0){
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);
    }

}




const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},            //Array de objetos
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700},



];



console.log(carrito.length);                //Bucle for para sacar el nombre de cada objeto del Array

for(let i=0; i<carrito.length; i++){

    console.log(carrito[i].nombre);

}




