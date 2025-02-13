
/*Almacenamos en localStorage. Esto es almacenar datos en el navegador, para que aunque lo cerremos, cuando lo abramos,
vuelvan a aparecer. POr ejemplo, el carrito de compra de Amazon, que no se vacía cuando recargamos o salimos y volvemos a entrar */

localStorage.setItem("nombre", "Juan");         //Metemos el nombre del valor y el valor


sessionStorage.setItem("nombre", "Juan");       //sessionStorage es lo mismo que localStorage, pero cuando cerramos y abrimos ya no están



/*En localStorage solo se guardan Strings. Aquí vamos a convertir un obejto en String para poder guardarlo */
const producto = {                              //Creamos el objeto
    nombre: "Monitor de 20''",
    precio: 300
};

const productoString = JSON.stringify(producto);            //Hacemos que el objeto sea un String con esté método
localStorage.setItem("producto", productoString);          //Lo introducimos pasandole un nombre y el objetoString


const meses = ["Enero", "Febrero", "Marzo"];                //Con los Arrays se hace lo mismo. Se pasa a String y después se introduce
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);

