

/**Trtansformamos las funciones del ejercicio Funciones/09-app.js en Arrow Functions, y creamos getter y setter */


const reproductor = {                                  


    cancion: "",

    reproducir: idCancion =>   console.log(`Reproduciendo canción ${idCancion}`),

    pausar: () => console.log("Pausando..."),

    crearPlayList: nombrePlayList => console.log(`PlayList ${nombrePlayList} creada exitosamente!`),

    reproducirPlayList: nombrePlayList => console.log(`Reproduciendo PlayList ${nombrePlayList}`),

    
    set añadirCancion(cancion){

        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){

        return this.cancion;
    }


}


reproductor.reproducir(30);                             

reproductor.pausar();

reproductor.crearPlayList("Musica Moderna");

reproductor.reproducirPlayList("Musica Moderna");




reproductor.borrar = idCancion =>   console.log(`Borrando cancion numero ${idCancion}`);


reproductor.borrar(45);                                             


reproductor.añadirCancion = "acd";               //En los setter no hay que usar paréntesis. Se usa el operador "=".

console.log(reproductor.obtenerCancion);                     //En los getter tampoco se usa paréntesis. Solo el nombre del método.




