

/*Eliminar elementos desde ellos mismos*/


const primerEnlace = document.querySelector("a");           //Seleccionamos el primer elemento del documento con ese nombre

console.log(primerEnlace);                                 //Lo imprimimos por consola para ver cual es


primerEnlace.remove();                                      /*Lo borramos del navegador. NOTA: No se borra del documento, sino del visor del 
                                                            navegador. Si comentamos las lineas de código, vuelve a aparecer*/


/*Eliminar elementos desde el padre*/


const navegacion = document.querySelector(".navegacion");           //Buscamos un elemento con ese nombre

console.log(navegacion.children);                                   //Imprimimos sus hijos para saber cuales tiene

navegacion.removeChild(navegacion.children[2]);                     //Borramos el que nos interesa, pasandoselo por parámetro


                                                                    //Si comentamos las lineas de código, vuelve a aparecer






