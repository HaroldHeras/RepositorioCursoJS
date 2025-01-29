

/**Creamos un Objeto y sus me´todos desde dentro de él y desde fuera */


const reproductor = {                                   //Creamos objeto


    

    reproducir: function(idCancion) {                               //Creamos sus métodos
        
        console.log(`Reproduciendo canción ${idCancion}`)
    },

    pausar: function() {

        console.log("Pausando...")
    },

    crearPlayList: function(nombrePlayList){

            console.log(`PlayList ${nombrePlayList} creada exitosamente!`);

            
    },

    reproducirPlayList: function(nombrePlayList){

            console.log(`Reproduciendo PlayList ${nombrePlayList}`);
    }

    


}


reproductor.reproducir(30);                             //usamos sus métodos

reproductor.pausar();

reproductor.crearPlayList("Musica Moderna");

reproductor.reproducirPlayList("Musica Moderna");




reproductor.borrar = function(idCancion) {                          //Creamos un método desde fuera para ese objeto

    console.log(`Borrando cancion numero ${idCancion}`);
};


reproductor.borrar(45);                                             //usamos ese método



