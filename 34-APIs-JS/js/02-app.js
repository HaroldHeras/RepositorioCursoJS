
/*Creamos un intersectionObserver, que nos sirve para obtener información de un elemento de la página web, como su posición, 
si en ese momento está visible en la pantalla o hay que hacer scroll para verlo, y más cosas.... */


document.addEventListener("DOMContentLoaded", ()=>{                 

    const observer = new IntersectionObserver(entries =>{       //Creamos el Observer y pedimos que nos meta en una variable sus atributos y valores de la posición 0.(Que es la posición de la pantalla cuando está quieta)

        console.log(entries[0]);            //Va a imprimir por consola la info del elemento observado. Cada vez que cambie algo de ese elemento, volverá a imprimir

        if(entries[0].isIntersecting===true){                       //Obtenemos el valor del atributo "isIntersecting" y evaluamos si es true o false
            console.log("El elemento SI está en pantalla");
        }else{
            console.log("El elemento NO está en pantalla");
        }


    });


    observer.observe(document.querySelector(".premium"));           //Decimos que lo que va a observar va a ser este elemento del DOM


});