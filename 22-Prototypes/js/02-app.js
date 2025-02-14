
/*Vemos lo poco práctico que es crear una función para extraer variables de un objeto sin que pueda ser reutilizado, en vez de 
crear Prototypes*/



function Cliente(nombre, saldo){                    //Creamos un objeto
    this.nombre = nombre;
    this.saldo = saldo;
};

const juan = new Cliente("Juan",500);               //Lo instanciamos


function formatearCliente(cliente){                 //Creamos una función para extraer sus variables

    const {nombre,saldo} = cliente;

    return `El cliente ${nombre} tiene ${saldo}€ en su cuenta`

};

console.log(formatearCliente(juan));                //Imprimimos el resultado de la función



function Empresa(nombre, saldo, categoria){         //Creamos otro objeto casi igual pero con una variable más

    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;

};

const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en linea");            //Instanciamos el objeto

function formatearEmpresa(empresa){                 //Tenemos que crear una función casi igual, pero con una variable más

    const {nombre,saldo, categoria} = empresa;

    return `El cliente ${nombre} tiene ${saldo}€ en su cuenta y su categoría es: ${categoria}`;

};

console.log(formatearEmpresa(CCJ));                 //Imprimimos el resultado de esa función