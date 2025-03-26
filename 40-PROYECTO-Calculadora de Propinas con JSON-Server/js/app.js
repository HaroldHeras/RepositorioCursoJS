/*PRIMERO: Tenemos que instalar node y después json-server en le ordenador. Este último es un programa que imita una API, al a que podremos 
    acceder mediante end-points como cualquier API.
  SEGUNDO:  Creamos un archivo .json que usaremos como BBDD y en el que meteremos todos los platos existentes.
  TERCERO: Abrimos la carpeta del proyecto en la terminal desde VSC, pulsando botón derechoi en ella y pulsando en Open in Integrated Terminal
  CUARTO: Escribimos en la terminal este comando para abrir el archivo .json: json-server --watch db.json --port 4000
  QUINTO: Nos da la información y la dirección de donde se encuentra la ejecución. Pulsamos en ella para abrirlo
  */


  let cliente = {
    mesa: "",
    hora: "",
    pedido: []
  };


  const categorias = {
    1:"Comida",
    2: "Bebida",
    3: "Postres"
  };


  
  const btnGuardarCliente = document.querySelector("#guardar-cliente");

  btnGuardarCliente.addEventListener("click", guardarCliente);



  function guardarCliente(){

    const mesa = document.querySelector("#mesa").value;
    const hora = document.querySelector("#hora").value;

    //Validamos los datos del formulario
    const camposVacios = [mesa, hora].some(campo=> campo.trim()==="");

    if(camposVacios){

        const alerta = document.querySelector(".alerta-1");

        if(!alerta){
            const alerta = document.createElement("DIV");
            alerta.classList.add("invalid-feedback", "d-block", "text-center", "alerta-1");
            alerta.textContent = "Todos los campos son obligatorios";
            document.querySelector(".modal-body form").appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            }, 3000);

        }
        
        

    }else{
        //Guardamos los valores del formulario en el objeto "Cliente"
        cliente.mesa = mesa;
        cliente.hora = hora;

        const modalFormulario = document.querySelector("#formulario");
        const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
        modalBootstrap.hide();

        mostrarSecciones();

        obtenerPlatillos();

    }

  }


  function mostrarSecciones(){

    const seccionesOcultas = document.querySelectorAll(".d-none");

    seccionesOcultas.forEach(seccion=> seccion.classList.remove("d-none"));
  }




  function obtenerPlatillos(){

    const url = "http://localhost:4000/platillos";

    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(resultado=> mostrarPlatillos(resultado))
        .catch(error=> console.log(error));


  }


  function mostrarPlatillos(platillos){

    const contenido = document.querySelector(".contenido");

    platillos.forEach(platillo =>{

        const row = document.createElement("DIV");
        row.classList.add("row");

        const nombre = document.createElement("DIV");
        nombre.classList.add("col-md-4");
        nombre.textContent = platillo.nombre;

        const precio = document.createElement("DIV");
        precio.classList.add("col-md-2", "fw-bold");
        precio.textContent = `${platillo.precio}€`;

        const categoria = document.createElement("DIV");
        categoria.classList.add("col-md-3");
        categoria.textContent = categorias[platillo.categoria];

        const agregar = document.createElement("DIV");
        agregar.classList.add("col-md-2");

        const inputCantidad = document.createElement("INPUT");
        inputCantidad.type = "number";
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add("form-control");
        inputCantidad.onchange = function(){
            const cantidad = parseInt( inputCantidad.value );
            agregarPlatillo({...platillo, cantidad});
        };
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);


    });

  }



  function agregarPlatillo(producto){
        let {pedido} = cliente;

        if(producto.cantidad > 0){
            const existe = pedido.some(articulo=> articulo.id=== producto.id);

            if(existe){
                const pedidoActualizado = pedido.map(articulo=>{
                    if(articulo.id===producto.id){
                        articulo.cantidad = producto.cantidad;
                    }
                    return articulo;
                });
                
                cliente.pedido = [...pedidoActualizado];

            }else{
                cliente.pedido = [...pedido, producto];                
            }
        }else{
            const resultado = pedido.filter( articulo => articulo.id !== producto.id);
            cliente.pedido = [...resultado];
        }

        limpiarHTML();

        actualizarResumen();


  }


  function limpiarHTML(){

    const contenidoResumen = document.querySelector("#resumen .contenido");
    while(contenidoResumen.firstChild){
        contenidoResumen.removeChild(contenidoResumen.firstChild);
    };
  }



  function actualizarResumen(){

    const contenido = document.querySelector("#resumen .contenido");
    
    const resumen = document.createElement("DIV");
    resumen.classList.add("col-md-6", "card", "py-5", "px-3", "shadow");

    const mesa = document.createElement("P");
    mesa.classList.add("fw-bold");
    mesa.textContent = "Mesa: ";
    const mesaSpan = document.createElement("SPAN");
    mesaSpan.classList.add("fw-normal");
    mesaSpan.textContent = cliente.mesa;
    mesa.appendChild(mesaSpan);

    const hora = document.createElement("P");
    hora.classList.add("fw-bold");
    hora.textContent = "Hora: ";
    const horaSpan = document.createElement("P");
    horaSpan.classList.add("fw-normal");
    horaSpan.textContent = cliente.hora;
    hora.appendChild(horaSpan);

    const heading = document.createElement("H3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Platos Consumidos:";



    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);


    contenido.appendChild(resumen);

  }