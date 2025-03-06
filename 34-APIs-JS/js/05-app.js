

/*Capturamos la acción de cuando tenemos el foco en la ventana o no */


document.addEventListener("visibilitychange", ()=>{             //Capturamos el evento de cuando el foco cambia
    
    if(document.querySelector("div.cartel-foco")){              //Si ya existe un cartel, que se elimine
        
        document.querySelector("div.cartel-foco").remove();
    }

    const cartelFoco = document.createElement("div");           //Creamos un div para meter el aviso
    cartelFoco.classList.add("cartel-foco");
    

    if(document.visibilityState==="visible"){                   //Si tiene el foco, ponemos un texto
        cartelFoco.textContent = "El foco es visible"
        
    }
    if(document.visibilityState==="hidden"){                    //Si no tiene el foco, ponemos otro texto
        cartelFoco.textContent = "El foco ya no es visible"
    }

    document.querySelector("body").appendChild(cartelFoco);        //Añadimos el div al documento
});

