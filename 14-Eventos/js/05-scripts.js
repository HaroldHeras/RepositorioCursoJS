

/*Trabajamos con los eventos de ventana */


window.addEventListener("scroll", ()=> {                    //Añadimos un evento de ventana "scroll" que se activará al hacer scroll


        console.log("Scrolling...");                        //Imrpimimos una frase

        const scrollPX = window.scrollY;                    //Almacenamos los pixeles en los que se encuentra el foco en el eje "Y"

        console.log(scrollPX);                              //Imprimimos los pixeles

});


/*Creamos otro evento Scroll de ventana, para que nos de información al hacer scroll de donde está un elemento */

window.addEventListener("scroll", ()=> {                            

        const premium = document.querySelector(".premium");             //Almacenamos ese elemento en una variable

        const ubicacion = premium.getBoundingClientRect();              //Con este método, obtenemos la información de ubicación de ese elemento

        console.log(ubicacion);                                         //Imprimimos esa información

                                                                    /*Esté listener nos permitiría, al hacer scroll, averiguar donde está 
                                                                    un elemento, y jugar con esa inforación, para saber cuanto le queda para aparecer 
                                                                    en pantalla, y hacer alguna acción cuando salga en pantalla*/
   

});