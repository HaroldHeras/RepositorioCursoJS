

//Esto sería un "new Binding". Ya que estamos creando un objeto(en seste caso mediante una funcion) y hacemos binding con los parámetros
function Auto(modelo, color){

    this.modelo = modelo;           
    this.color = color;

}


const auto = new Auto("Camaro", "Negro");

console.log(auto)


/*Esto seria un "Window binding". Es como crear una variable, pero en la ventana global del explorador. Primero busca una constante con ese nombre, 
y si no la hay, la busca entre las variables de la ventana global. */
window.color = "Negro";

function dimeColor(){
    console.log(color)
}

dimeColor();