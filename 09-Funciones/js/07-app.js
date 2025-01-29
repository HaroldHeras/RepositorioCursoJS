
/**Comunicacion entre funciones */



iniciarApp();                           //Esta función la podemos ejecutar aqui porque es una Function Declaration
                                        //Aunque la declaremos más abajo, se lee en la primera vuelta y ya la podemos ejecutar en la segunda



function iniciarApp(){                                  //Usamos una segunda función dentro de la primera función

    console.log("Inciando app...");

    segundaFuncion();

}


function segundaFuncion(){                                    //usamos una tercera función dentro de la segunda, pasandole un parámetro
    
        console.log("Desde la segunda función");

        usuarioAutenticado("Harold");

}



function usuarioAutenticado(usuario){

    console.log("Autenticando usuario...espere...");

    console.log("Usario autenticado correctamente: " + usuario);

}



