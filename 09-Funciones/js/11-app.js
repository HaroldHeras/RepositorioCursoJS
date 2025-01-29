

/**Diferentes formas de pasar parámetros a una Arrow Function */


const aprendiendo = function(tecnologia) {                          //Así a una función normal

    console.log(`Aprendiendo ${tecnologia}`);

}

aprendiendo("Java Script");

//-----------------------------------------------



const aprendiendo2 = (tecnologia) =>  console.log(`Aprendiendo ${tecnologia}`);          //Aroow function de una sola linea y un parámetro entre apréntesis


aprendiendo2("java Script");


//-------------------------------------------------------



const aprendiendo3 = tecnologia =>  `Aprendiendo ${tecnologia}`;        //Arrow Function: Cuando es solo un parámetro, también se puede poner si nlos paréntesis

console.log(aprendiendo3("java Script"));

//------------------------------------------------------



const aprendiendo4 = (tecnologia, tecnologia2) =>  `Aprendiendo ${tecnologia} y ${tecnologia2}`;        //Arrow Function: Con más de un parámetro, ya es necesario poner paréntesis

console.log(aprendiendo4("java Script", "Node.js"));

