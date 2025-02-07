

/*Otra forma de evitar que se propaguen los eventos o evitar el event bubbling sería mediante 
la Delegation. Obtenemos la información del evento y según qué información contenag el evento, hará una cosa u otra */


const cardDiv = document.querySelector(".card"); 


cardDiv.addEventListener("click", e => {

    if(e.target.classList.contains("titulo")){              //Si el elemento que pulsamos, contiene en su clase la palabra título
        console.log("Pulsaste en título");
    }
    if(e.target.classList.contains("precio")){              //Si el elemento que pulsamos, contiene en su clase la palabra precio
        console.log("Pulsaste en precio");
    }
    if(e.target.classList.contains("card")){                //Si el elemento que pulsamos, contiene en su clase la palabra card
        console.log("Pulsaste en card");
    }

});