
//Vemos el concepto de "self". A efectos prácticos, sería igual que "window". Hace referencia a la página o ventana en la que estamos

self.onload = ()=> console.log("Cargado con Self")

window.onload = ()=> console.log("Cargado con Window")

self.color = "blue";

console.log(window.color)
