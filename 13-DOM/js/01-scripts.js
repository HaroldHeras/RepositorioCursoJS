
/*Vemos comadnos para interactuar con los elementos del documento HTML*/


let elemento;


elemento = document;                                //De esta forma, hacemos referencia al documento HTML

elemento = document.querySelectorAll("*");          //Seleccionamos todo l oque hya en el documento

elemento = document.head;                           //Seleccionamos la cabecera

elemento = document.body;                           //Seleccionamos el lcuerpo

elemento = document.location;                       //Nos muestra la ubicación del documento

elemento = document.forms;                          //Muestra los formularios que hay en el documento

elemento = document.forms[0];                       //Podemos tratar a esos formularios como un Array y extraerlos a traves de su indice
elemento = document.forms[0].id;                    //Podemos usar los métodos de cada formulario
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;                          //Vemos todos los links que tiene el documento
elemento = document.links[4];                       //Igual que los formularios, podemos tratarlo como un Array  y usar su métodos
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;                         //Podemos ver todas las imagenes que tiene el documento

elemento = document.scripts;                        //Podemos ver todos los scripts que tiene el documento            
















console.log(elemento);