


const nav = document.querySelector(".navegacion");  //Obtenemos en una variable el elemento con la clase ".navegacion"



//Añadimos EventListener al elemento

nav.addEventListener(                                       //Cuando haces click 
    "click", ()=> {                                 
    console.log("Click en nav")}, 

    
);


nav.addEventListener("mouseenter", ()=> {                   //Cuando el mouse entra
    console.log("Mouse entra en nav");
    nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", ()=> {                     //Cuando el mouse sale
    console.log("Mouse sale de nav");
    nav.style.backgroundColor = "transparent";
});



nav.addEventListener("mousedown", ()=> {                    //Cuando aprietas el boton
    console.log("Bajas el click");
   
});

nav.addEventListener("mouseup", ()=> {                      //Cuando suelats el boton
    console.log("Sueltas el click");
    
});

nav.addEventListener("dbclick", ()=> {                      //Cuando haces doble click
    console.log("Has hecho doble click");
    
});





