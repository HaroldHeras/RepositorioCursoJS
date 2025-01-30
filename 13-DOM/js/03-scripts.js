


/**Buscamos elementos dentro del documento a traves de su Id. Si hay dos con el mismo Id, te devolverá solo el primero qu encuentre 
 * ya que este método solo te devuelve un elemento*/



const formulario = document.getElementById("formulario");

console.log(formulario);


//Si buscas un elemento que no existe por Id, te retornará null

const noExiste = document.getElementById("noExiste");

console.log(noExiste);


