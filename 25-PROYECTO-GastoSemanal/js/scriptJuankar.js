let contador = 0;



const presupuesto = document.querySelector("#total");
const formulario = document.querySelector("#agregar-gasto");

console.log(contador);

const mensajes = [
    "Introduzca un presupuesto",
    "Venga anda....Pon algo....",
    "Vamos, pon algo en serio jobar.....",
    "Escribe otra vez...que se me ha olvidado lo que habías puesto....",
    "Vamos! Ponme a prueba listillo", 
    "Vamos que te perdono....Escribe tu presupuesto, que quiero ver en qué te lo gastas..."
];

const mensajes2 = [
    "Vaya....tu cara me suena....pero no se de que....",
    "Oye!! No estarás intentando hackearme???",
    "Ahora miro lo que has puesto, pero antes de nada....No fuiste tu el que estuvo sacandome fallos hace poco?",
    "Claaaaaro que eres tuuu!!! Ya decía yo que me sonabas....Pues esta vez no va a ser tan facil....",
    "OOOh....no te funciona el truquito??",
    "Nah....esa cifra no me gusta...hay que aspirar a algo más en la vida....te lo pondré yo...."
];


let contador2 = 0;
const mensajes3 = [
    "Venga, no empieces con tus mierdas y pon algo de verdad....",
    "Su descuento del 50% en el cine ha sido aplicado",
    "Que te lo has creidoooooo JAJAJAJAJAJA",
    "Vas a tener que pedirle ayuda a tus amiguitos hackers de cineees",
    "Hagamos un trato...",
    "Tu te agachas y yo te meto el aparato!!!!! JAJAJAJAJAJAJAJAJA",
    "Me abuuuuuurrooooooooo......",
    "BUUUUUUHHHH!!!!"
    
];




document.addEventListener("DOMContentLoaded", ()=>{


    while(contador<mensajes.length){

        prompt(mensajes[contador]);

        alert(mensajes2[contador]);

        contador++;
    }

    presupuesto.textContent = 9999999999e999999999;

    setTimeout(()=>{
        alert("Esa cifra te gusta más eeeh bribón??!!");
        
        setTimeout(()=>{
            alert("Venga, se acabó la broma...soy toda tuya...examiname minuciosamente.....");
        },1000);
    },2000);



    formulario.addEventListener("submit", broma);






});





function broma(e){

    e.preventDefault();
    
    if(contador2<mensajes3.length){

        if(contador2===1){
            document.querySelector("button[type='submit']").disabled=true;
            creaValida(mensajes3[contador2]);
            contador2++;
            setTimeout(()=>{
                document.querySelector("button[type='submit']").disabled=false;
                creaAlerta(mensajes3[contador2]); 
                contador2++;
            },3000)

            
            return;
        }


        if(contador2===4){
            document.querySelector("button[type='submit']").disabled=true;
            creaValida(mensajes3[contador2]);
            contador2++;
            setTimeout(()=>{
                document.querySelector("button[type='submit']").disabled=false;
                creaAlerta(mensajes3[contador2]); 
                contador2++;
            },3000)

            
            return;
        }

        

        creaAlerta(mensajes3[contador2]);
        

        

        
    }
    

    contador2++;



};




function creaAlerta(mensaje){

    const alerta = document.createElement("div");
           
    alerta.classList.add("text-center", "alert", "alert-danger");
   
    alerta.textContent = mensaje;


    if(contador2===7){
        presupuesto.appendChild(alerta);
    }else{
         formulario.appendChild(alerta);
    }
    formulario.reset();


    setTimeout(()=>{
        alerta.remove();
    },3000);

};


function creaValida(mensaje){
        
    const alerta = document.createElement("div");
    alerta.classList.add("text-center", "alert", "alert-success");
   
    alerta.textContent = mensaje;

    formulario.appendChild(alerta);
    formulario.reset();


    setTimeout(()=>{
        alerta.remove();
    },3000);

};