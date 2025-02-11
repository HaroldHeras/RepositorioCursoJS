
//Le damos un listener al documento en general, para que ponga todo en funcionamiento nada más cargar

document.addEventListener("DOMContentLoaded", function (){

    const email = {                     //Creamos un objeto que almacenará la info de los campos del formulario
        email: "",
        cc:"",
        asunto: "",
        mensaje: ""

    };



    //Obtenemos los elementos con los que vamos a trabajar
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const inputCC = document.querySelector("#CC");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");
    



    //Asignamos eventos a los elementos
    inputEmail.addEventListener("input", validar);              //"input" se activa siempre que escribamos o borremos algo
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);
    inputCC.addEventListener("input", validar);


    formulario.addEventListener("submit", enviarEmail);         //"submit" se activa cuadno pulsemos el botón que tiene la función "submit"

    btnReset.addEventListener("click", function(e){             //"click" se activa cuando pulsamos en algo 

        e.preventDefault();                                     //Prevenimos accion por defecto, ya que resetea el formulario pero no el objeto que contiene la info      

        resetFormulario();

    } );

  
    //Función que se activa al pulsar en el botón de enviar
    function enviarEmail(e){
       
        e.preventDefault();                                 //Prevenimos acciíon por defecto ya que solo resetea el formulario

        spinner.classList.add("flex");                      //Modificamos el spinner para que sea visible
        spinner.classList.remove("hidden");

        setTimeout(()=>{                                    //Decimos que espere 3seg antes de ejecutar el código de su interior

            spinner.classList.add("hidden");                //Modificamos el spinner par aque se oculte
            spinner.classList.remove("flex");

            resetFormulario();                              //Reseteamos formulario


            const alertaExito = document.createElement("P");            //Creamos y añadimos la alerta que avisa del envío satisfactorio
            alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", 
                "font-bold", "text-sm", "uppercase");

            alertaExito.textContent = "Mensaje enviado correctamente";

            formulario.appendChild(alertaExito);

            setTimeout(()=>{                            //Esperamos 3seg antes de ejecutarse este código
                alertaExito.remove();                   //Borra la alerta satisfactoria
            },3000);

        },3000);


        

        
    };


    //Validamos en tiempo real los campos del formulario
    function validar (e) {                  

        if(e.target.value.trim() === ""){                       //Si algún campo está vacío

            if(e.target.id === "CC"){                       //En caso de ser este campo, como no es obligatorio, quitamos la alerta y borramos lo que hay de el en el objeto
                limpiarAlerta(e.target.parentElement);
                email[e.target.name] = "";
                return;
            }else{                                              //Si es cualquiera de los otros
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);        //Mostramos alerta pasandole el mensaje y el elemento en el que tiene que colocarla
                email[e.target.name] = "";                       //Borramos al info de ese campo del objeto
                comprobarEmail();                               //Comprobamos el objeto para que no deje ver el botón
                return;
            }
        };

        if((e.target.id === "email" || e.target.id === "cc") && !validarEmail(e.target.value)){         //Si es el campo email o CC y no cumple con la validación de la dirección email
            
            mostrarAlerta("El email no es válido", e.target.parentElement);         //Muestra alerta
            email[e.target.name] = "";                                              //Borra la info de ese campo en el objeto
            comprobarEmail();                                                       //Comprueba el objeto para que n odeje ver el botón

            return;

        };
                                                                            //Si todo está bien
        limpiarAlerta(e.target.parentElement);                              //Borra la alerta

        email[e.target.name] = e.target.value.trim().toLowerCase();         //Introduce la info en su campo del objeto

        comprobarEmail();                                                   //Comprueba los datos del objeto para dejar ver el boton
    };

    





    function mostrarAlerta(mensaje, referencia) {               //Dibuja las alertas

        
        limpiarAlerta(referencia);                              //Primero limpia la alerta anterior si la hay, para que no se acumulen y solo pueda haber una

        const error = document.createElement("P");              //Crea el elemento HTML

        error.textContent = mensaje;                            //Introduce el mensaje que recibe por parámetro

        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");      //Le da formato a la alerta

        referencia.appendChild(error);                          //Coloca la alerta donde le diga la referencia

        


    };


    function limpiarAlerta(referencia){                                     //Limpia alertas
        const alerta = referencia.querySelector(".bg-red-600");             //Coge dentro del elemento que nos dan por referencia, un otro elemento que tenga entre sus clases esta clase(en nuestro HTML los unicos elementos que tienen esa clase son las alertas)

        if(alerta){                                    //Decimos que si captó una alerta dentro de "alerta", entonces que la borre
            alerta.remove();
        };
    };


    function validarEmail(email){                           //Valida que lo que le pasemos por parámetro, cumpla con un patrón

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;            //El patrón

        const resultado = regex.test(email);                    //Almacenamos el booleano que devuelve el testear el patrón con el parámetro recibido

        return resultado;                                       //Devolvemos el booleano
    };


    function comprobarEmail(){                                                  //Comprobamos el objeto que almacena los datos
        if(email.email==="" || email.asunto==="" || email.mensaje===""){        //Si cualquiera de estos tres está vacío(el campo "cc" si que puede estarlo, por eso aquí no sale)
           
            btnSubmit.classList.add("opacity-50");                          //Modificamos el botón "enviar" para que no se pueda pulsar
            btnSubmit.disabled = true;
            return;

        };
                                                        //Si todos los caompos tienen algo(ya validados), dejará ver y pulsar el boton
        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;

        
    };


    function resetFormulario() {                //Para resetear el formulario y el objeto que almacena sus datos

        email.email = "";                       //Primero vacía el objeto
        email.cc = "";
        email.asunto = "";
        email.mensaje = "";

        formulario.reset();                     //Resetea el formulario
        comprobarEmail();                       //Comprueba para que al estar vacío de nuevo, se oculte de nuev oel botón de enviar

    };

    
});





