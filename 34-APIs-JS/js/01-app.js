

/*Experimentamos con la appi integrada en Javascript para crear notidficaciones en los navegadores */


const notificarBtn = document.querySelector("#notificar");              //Obtenemos el boton de Notificar



notificarBtn.addEventListener("click", ()=>{                            //Le añadimos un Listener

    Notification.requestPermission()                                    //Usamos el metodo de "Notification" que pide permiso para enviar notificaciones del navegador
        .then(resultado=> console.log("El resultado es", resultado));   //Exige controlarlo con un "then" por lo que capturamos el resultado y lo imprimimos

});


const verNotificacion = document.querySelector("#verNotificacion");     //Obtenemos el botón de Ver Notificaciones

verNotificacion.addEventListener("click", ()=>{                         //Le añadimos un Listener


    if(Notification.permission === "granted"){                          //Si el resultado del permiso de notificaciones es "granted"

        const notificacion = new Notification("Titulo de la notificacion", {    //Creamos una notificacion, la lamacenamos en una variable, le damos un titulo y más características
            icon: "img/ccj.png",                            //Le añadimos un icono, que lo tenemos en la carpeta "img"
            body: "Texto que aparecera a mayores"           //Le añadimos un cuero de notificacion
        });

        notificacion.onclick = function(){              //Le añadimos un handleEvent al hacer click en ella
            window.open("https://www.google.com/");     //Con este método de "window" abrimos otra ventana con la URL que le pongamos
        }
    }


});
