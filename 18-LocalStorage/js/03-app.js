
/*Vemos como actualizar y borrar datos del localStorage */


localStorage.removeItem("nombre");              //Para borrar un elemento, usamos este método y el nombre del elemento



/*Para actualizar un elemento, tenemos que traerlo de vuelta, actualizarlo y volver a subirlo */
const mesesArray = JSON.parse(localStorage.getItem("meses"));       //Traemos el elemento parseandolo directamente

mesesArray.push("Nuevo Mes");                                       //Lo actualizamos metiendo u nnuevo valor al array

localStorage.setItem("meses", JSON.stringify(mesesArray));          //Volvemos a meter el elemento con el mismo nombre que tenía dentro del localStorage



//Si queremos borrar todo el localStorage de una, usamos éste método
localStorage.clear();
