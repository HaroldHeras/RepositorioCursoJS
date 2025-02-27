

//Importamos una clase de otro script para crear en este un objeto que erede de esa clase importada

import {Cliente} from "./cliente.js"



export class Empresa extends Cliente{

    constructor(nombre, ahorro, categoria){

        super(nombre, ahorro);
        this.categoria = categoria;
    }


    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoría: ${this.categoria}`;
    }


}