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

        const alerta = document.querySelector(".alerta");

        if(!alerta){
            const alerta = document.createElement("DIV");
            alerta.classList.add("invalid-feedback", "d-block", "text-center", "alerta");
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

        //Seleccionamos y ocultamos la ventana modal
        const modalFormulario = document.querySelector("#formulario");
        const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
        modalBootstrap.hide();

        mostrarSecciones();

        obtenerPlatillos();

    }

  }


  function mostrarSecciones(){

    //Con un "SelectorAll" seleccionamos todos los elementos del DOM que tienen esa clase y con un for each forramos esa clase de cada uno de ellos
    const seccionesOcultas = document.querySelectorAll(".d-none");

    seccionesOcultas.forEach(seccion=> seccion.classList.remove("d-none"));
  }




  function obtenerPlatillos(){

    const url = "http://localhost:4000/platillos";      //La URL del puerto en el que tenemos el JSON abierto

    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(resultado=> mostrarPlatillos(resultado))    //Con el resultado ejecutamos esta funcion
        .catch(error=> console.log(error));


  }

    //Función para imprimir todos los platos del JSON. Su info y el input para seleccionarlos
  function mostrarPlatillos(platillos){

    const contenido = document.querySelector(".contenido");

    platillos.forEach(platillo =>{                      //De cada plato, obtenemos esta info y creamos las filas

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


  //Función para agregar un producto con su info al array de pedido.
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

        limpiarHTML();                //Limpiamos HTML antes de imprimir

        if(cliente.pedido.length){      //Si el array tiene algo, se imprime
            actualizarResumen();
        }else{                          //Si no tiene nada, se vuelve a poner el mensaje vacio
          mensajePedidoVacio();
        }



  }

  //Funcion para limpiar el HTML en el que imprimimos el pedido
  function limpiarHTML(){

    const contenidoResumen = document.querySelector("#resumen .contenido");
    while(contenidoResumen.firstChild){
        contenidoResumen.removeChild(contenidoResumen.firstChild);
    };
  }


  //Función para imprimir y actualizar el pedido
  function actualizarResumen(){

    const contenido = document.querySelector("#resumen .contenido");
    
    const resumen = document.createElement("DIV");
    resumen.classList.add("col-md-6", "card", "py-3", "px-3", "shadow");

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


    const grupo = document.createElement("UL");
    grupo.classList.add("list-group");
    const {pedido} = cliente;
    pedido.forEach(articulo=>{                            

      const {precio, cantidad, id, nombre} = articulo;      //De cada artículo seleccionado imprimiremos esta info
      const lista = document.createElement("LI");
      lista.classList.add("list-group-item");

      const nombreEl = document.createElement("H4");
      nombreEl.classList.add("my-4");
      nombreEl.textContent = nombre;

      const cantidadEl = document.createElement("P");
      cantidadEl.classList.add("fw-bold");
      cantidadEl.textContent = "Cantidad: ";
      const cantidadValor = document.createElement("SPAN");
      cantidadValor.classList.add("fw-normal");
      cantidadValor.textContent = cantidad;
      cantidadEl.appendChild(cantidadValor);

      const precioEl = document.createElement("P");
      precioEl.classList.add("fw-bold");
      precioEl.textContent = "Precio: ";
      const precioValor = document.createElement("SPAN");
      precioValor.classList.add("fw-normal");
      precioValor.textContent = `${precio}€`;
      precioEl.appendChild(precioValor);

      const subtotalEl = document.createElement("P");
      subtotalEl.classList.add("fw-bold");
      subtotalEl.textContent = "Subtotal: ";
      const subtotalValor = document.createElement("SPAN");
      subtotalValor.classList.add("fw-normal");
      subtotalValor.textContent = calcularSubtotal(precio, cantidad);
      subtotalEl.appendChild(subtotalValor);

      const btnEliminar = document.createElement("BUTTON");     //Creamos el botón para eliminar el producto de la lista
      btnEliminar.classList.add("btn", "btn-danger");
      btnEliminar.textContent = "Eliminar del Pedido";
      btnEliminar.onclick = function(){
        eliminarProducto(id);
      };



      lista.appendChild(nombreEl);
      lista.appendChild(cantidadEl);
      lista.appendChild(precioEl);
      lista.appendChild(subtotalEl);
      lista.appendChild(btnEliminar);

      grupo.appendChild(lista);

    });


    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);


    contenido.appendChild(resumen);


    mostrarFormularioPropinas();          //Una vez impresa la selección, muestra el formulario para seleccionar el % de propina

  }


  //Función para calcular el total de un artículo, para el caso de haberlo seleccionado más de una vez
  function calcularSubtotal(precio, cantidad){

      return `${precio*cantidad}€`;

  };


  //Función para eliminar un producto de la lista de seleccionados y del array
  function eliminarProducto(id){

    const {pedido} = cliente;

    const resultado = pedido.filter( articulo => articulo.id !== id);     //Lo borramos del array
    cliente.pedido = [...resultado];

    limpiarHTML();                //Limpiamos el HTML

    if(cliente.pedido.length){      //Si hay algo en el array, se vuelve a pintar el HTML ya actualizado el array
      actualizarResumen();
    }else{                          //Si ya no hay nada en el array, muestra el mensaje d evacío
      mensajePedidoVacio();
    }

    const elementoEliminar = `#producto-${id}`;                           //Resetea el input de ese producto
    const inputEliminar = document.querySelector(elementoEliminar);
    inputEliminar.value = 0;

  };


  //Función para volver a escribir el mensaje inicial de añadir pedidos, cuando no hay ningun articulo seleccionado
  function mensajePedidoVacio(){

      const contenido = document.querySelector("#resumen .contenido");
      const mensaje = document.createElement("P");
      mensaje.classList.add("text-center");
      mensaje.textContent = "Añade los elementos del pedido";

      contenido.appendChild(mensaje);

  }


  //Función para crear el formulario de selección de propina con los RadioButton
  function mostrarFormularioPropinas(){

    const contenido = document.querySelector("#resumen .contenido");

    const formulario = document.createElement("DIV");
    formulario.classList.add("col-md-6", "formulario");


    const formularioDiv = document.createElement("DIV");
    formularioDiv.classList.add("card", "py-3", "px-3", "shadow");

    const heading = document.createElement("H3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Propina";

    const radioNada = document.createElement("INPUT");
    radioNada.type = "radio";
    radioNada.name = "propina";
    radioNada.value = 0;
    radioNada.classList.add("form-check-input");
    radioNada.onclick = calcularPropina;                          //Añadimos a todos, cuando se les selecciona, que calculen la propina segun el porcentaje seleccionado
    const radioNadaLabel = document.createElement("LABEL");
    radioNadaLabel.textContent = "0%";
    radioNadaLabel.classList.add("form-check-label");
    const radioNadaDiv = document.createElement("DIV");
    radioNadaDiv.classList.add("form-check");

    radioNadaDiv.appendChild(radioNada);
    radioNadaDiv.appendChild(radioNadaLabel);

    const radio10 = document.createElement("INPUT");
    radio10.type = "radio";
    radio10.name = "propina";
    radio10.value = 10;
    radio10.classList.add("form-check-input");
    radio10.onclick = calcularPropina;
    const radio10Label = document.createElement("LABEL");
    radio10Label.textContent = "10%";
    radio10Label.classList.add("form-check-label");
    const radio10Div = document.createElement("DIV");
    radio10Div.classList.add("form-check");

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);


    const radio25 = document.createElement("INPUT");
    radio25.type = "radio";
    radio25.name = "propina";
    radio25.value = 25;
    radio25.classList.add("form-check-input");
    radio25.onclick = calcularPropina;
    const radio25Label = document.createElement("LABEL");
    radio25Label.textContent = "25%";
    radio25Label.classList.add("form-check-label");
    const radio25Div = document.createElement("DIV");
    radio25Div.classList.add("form-check");

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    const radio50 = document.createElement("INPUT");
    radio50.type = "radio";
    radio50.name = "propina";
    radio50.value = 50;
    radio50.classList.add("form-check-input");
    radio50.onclick = calcularPropina;
    const radio50Label = document.createElement("LABEL");
    radio50Label.textContent = "50%";
    radio50Label.classList.add("form-check-label");
    const radio50Div = document.createElement("DIV");
    radio50Div.classList.add("form-check");

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);


    formularioDiv.appendChild(heading);
    formularioDiv.appendChild(radioNadaDiv);
    formularioDiv.appendChild(radio10Div);
    formularioDiv.appendChild(radio25Div);
    formularioDiv.appendChild(radio50Div);

    formulario.appendChild(formularioDiv);

    contenido.appendChild(formulario);

  }


  //Función para calcular la propina segun el % seleccionado y el subtotal de la comida
  function calcularPropina(){

    let subtotal = 0;
    const propinaSeleccionada = document.querySelector("[name='propina']:checked").value;

    const {pedido} = cliente;

    pedido.forEach(articulo=>{
      subtotal += articulo.cantidad * articulo.precio; 
    });

    const propina = (subtotal/100)*parseInt(propinaSeleccionada).toFixed(2);

    const total = subtotal + propina;


    mostrarTotalHTML(subtotal, total, propina);         //Pintamos el HTML con esta información

  }



   //Función para imprimir en el HTML la info del total a pagar, incluyendo la propina
   function mostrarTotalHTML(subtotal, total, propina){


      const formulario = document.querySelector(".formulario div");

      //Para que no se sobreescriba con otros subtotales anteriores, si exite este DIV previamente, se borra antes de crear uno nuevo
      if(document.querySelector(".total-pagar")){
          document.querySelector(".total-pagar").remove();
      }

      const divTotales = document.createElement("DIV");
      divTotales.classList.add("total-pagar");

      const subtotalParrafo = document.createElement("P");            //Creamos el subtotal
      subtotalParrafo.classList.add("fs-3", "fw-bold", "mt-2");
      subtotalParrafo.textContent = "Subtotal consumo: ";
      const subtotalSpan = document.createElement("SPAN");
      subtotalSpan.classList.add("fw-normal");
      subtotalSpan.textContent = `${subtotal}€`;
      subtotalParrafo.appendChild(subtotalSpan);

      const propinaParrafo = document.createElement("P");             //Creamos el de propina
      propinaParrafo.classList.add("fs-3", "fw-bold", "mt-2");
      propinaParrafo.textContent = "Propina: ";
      const propinaSpan = document.createElement("SPAN");
      propinaSpan.classList.add("fw-normal");
      propinaSpan.textContent = `${propina}€`;
      propinaParrafo.appendChild(propinaSpan);

      const totalParrafo = document.createElement("P");               //Creamos el total de juntar el subtotal con la propina
      totalParrafo.classList.add("fs-3", "fw-bold", "mt-2");
      totalParrafo.textContent = "Total: ";
      const totalSpan = document.createElement("SPAN");
      totalSpan.classList.add("fw-normal");
      totalSpan.textContent = `${total}€`;
      totalParrafo.appendChild(totalSpan);

      divTotales.appendChild(subtotalParrafo);
      divTotales.appendChild(propinaParrafo);
      divTotales.appendChild(totalParrafo);

      formulario.appendChild(divTotales);


   }
    