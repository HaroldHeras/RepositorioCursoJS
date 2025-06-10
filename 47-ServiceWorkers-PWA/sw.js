//Matizar que el programa no fucniona muy bien por un problema del manifiesto que no se especifica bien y tiene que ver con el content-type de la respuesta al manifest.json



//Este archivo será el que configuré el Service Worker. 


const nombreCache = "apv-v2";       //Va a ser el nombre de la memoria caché que creemos

const archivos = [              //Almacenamos en un array la direccion en la que se encunetran los archivos que queremos almacenar en caché
    
    "index.html",
    "error.html",
    "css/bootstrap.css",
    "css/styles.css",
    "js/app.js",
    "js/apv.js"
];

//Recordamos que "self" es lo mismo que "window", pero para trabajar con Service Worker, hay que usar "self".
//Le añadimos un event listener, que salte cuando se esté instalando
self.addEventListener("install", e=>{
    console.log("Instalado el Service Worker");

    e.waitUntil(                                    //Decimos que espere hasta que acabe de hacer lo de dentro

        caches.open(nombreCache)                    //Abrimos un caché con el nombre que le hemos dado. Devuelve un Promise
            .then(cache => {                        
                console.log("Cacheando...");
                return cache.addAll(archivos);      //Devolvemos el resultado de que, una vez creado el cache, se añada el array de archivos
            })
    )

});


//Le añadimos un event listener, que salte cuando se active el SW.
//Vamos a hacer qué, cuando actualicemos nuestra aplicación, borre los caches antiguos y crée uno nuevo con el nombre que le hayamos dado
self.addEventListener("activate", e =>{
    console.log("Service Worker activado");

    e.waitUntil(                            //Decimos que espere hasta que acabe lo de dentro

        caches.keys()                       //Obtenemos el nombre de los caches existentes
            .then( keys=>{

                return Promise.all(         //Devolvemos un Promise unico, que proviene de varios Promises que tiene dentro

                    //Filtramos los caches co nnombre diferente al actual, después con un "map" los borramos.
                    keys.filter(key=> key!==nombreCache).map(key=> caches.delete(key))          

                )

            })

    );
} );




//Añadimos un eventListener que salte cuando se haga cualquier petición al programa
//Con esto hacemos que, cualquier petición, primero veamos si la podemos resolver con lo que tenemos en cache. De esta forma no tendrá que pedirselo al navegador directamente y se ahorrará tiempo y recursos.
self.addEventListener("fetch", e=>{


    e.respondWith(                      //Decimos que el evento responda de la siguiente manera

        

        caches.match(e.request)                 //Buscamos un match entre lo que tenemos en el cahce y lo que busca la petición
            .then( matchEncontrado=>{

                if(matchEncontrado){                //Si la petición se ejecuta bien y hay coincidencia, devuelve lo que coincide de la memoria cache
                    return matchEncontrado
                }else{
                    return caches.match("error.html")           //Si la peticion se ejecuta bien pero no hay coincidencia, carga una página también almacenada en caché que tenemos reservada para que no salga la tipica página "NotFound"
                }
                
            })
            .catch( ()=> caches.match("error.html"))            //Si la petición no se ejecuta bien, también nos llevará a la página que evitará el "Not Found"

    )

})