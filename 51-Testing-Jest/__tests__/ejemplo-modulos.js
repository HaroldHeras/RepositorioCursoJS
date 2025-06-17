
/*Vamos a importar una función que está en otra carpeta, y la vamos a usar para testearla. Pero JEST no admite de forma nativa la 
sintaxis de export/import, por lo que antes hay que instalar una dependecia llamada Babel.
1-Creamos un archivo llamado ".babelrc", en la carpeta principal del proyecto(NO dentro de la carpeta de tests)
2-Instalamos una dependencia a trave´s de la terminal, escribiendo el comando: npm i --save-dev @babel/preset-env
3-En el archivo creado .bablerc, escribimos el codigo que permite que node admita esos export/import
4-Colocamos el prefijo "export" delante de la funció nque queramos importar, y escribimos el import en este script. 
(Ojo!! Si la función que queremos importar, está en un archivo el cual, tiene variables o llamadas a métodos o más cosas que no esten encapsuladas dentro de 
una función, las va a ejecutar al hacer el primer barrido buscando la función que estamos importando, por lo que habrá errores el test.
Hay que asegurarse que en el mismo archivo no haya ese tipo de datos sin encapsular, o trasladar la funcion que queremos importar a un archivo más encapsulado)
5-Ejecutamos npm t
*/



import {suma} from "../js/suma.js";




describe("Test a la función suma, importada", ()=>{


        test("Suma de 10 y 20, tiene que dar 30", ()=>{
            expect(suma(10,20)).toBe(30);
        });
});