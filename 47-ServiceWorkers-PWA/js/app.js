

/*Primero creamos un archivo "manifest.json". Este archivo va a hacer que el navegador lo pueda interpretar como una aplicación nativa,
y podamos instalar la web como si fuera una aplicación(eliminando por ejemplo la barra del explorador etc.)
    1-Creamos el archivo .json
    2- Le damos estos atributos:
        "name": "APV",
        "short_name": "APV",
        "start_url": "/index.html",         **Donde empieza la página
        "display": "standalone",            **Si queremos que se pueda ejecutar como una aplicacion nativa. "standalone" quiere decir que si
        "background_color": "#D41872",
        "theme_color": "#D41872",
        "orientation": "portrait",          **La orientacion de la aplicacion. "portrait" sería en modo retrato
        
    3-Enlazamos con los iconos. En este caso les tenemos en una carpeta. Enlazamos todos para que sea movil responsive, 
    de esta forma usará en cada momento el tamaño que requiera. Habrá que establecer uno de ellos como "any maskable", para decir que lo puede 
    usar en cualquier forma y tamaño.
    4- Se deberá añadir un link en el index.html que haga referencia a este archivo manifest.
        <link rel="manifest"  href="manifest.json">
    */    



//Este método será el primero en ejecutarse. Si el navegador soporta serviceWorker, registrará nuestro sw.js. Sino, nos avisará
if('serviceWorker' in navigator){

    navigator.serviceWorker.register("./sw.js")
        .then( resolve=> console.log("Se registró correctamente", resolve))
        .catch( reject=> console.log("Falló la instalación", reject));

}else{
    console.log("ServiceWorkers no soportados por el navegador")
}