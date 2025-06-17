/*Vamos a usar el JEST de node:
1-Instalamos el package.json, desde terminal y situandonos en la carpeta del proyecto. Escribimos "npm init"
2-Instalamos JEST como dependencia de desarrollador, para que se pueda ejecutar solo en la fase de desarrollo. Para ello con la terminal y desde 
la ruta de la carpeta del proyecto, escribimos "npm i --save-dev jest". 
3-En package.json, en scripts, vamos donde test, borramos lo de dentro y escribimos jest, así ejecutará el archivo "jest" de la carpeta bin que está en 
la carpeta node_modules, que se instaló previamente.
4-Creamos una carpeta llamada __tests__ en la que meteremos los archivos .js que queramos testear. Al llamra a jest, irá a esa carpeta directamente y 
y hará los tests de esos archivos.
5-Para iniciar el test, usamos el método "test()" como el que está escrito aquí abajo, y escribiendo en terminal: "npm run test", "npm test" o "npm t", 
con cualquiera de esos tres comandos, se iniciará el jest.
*/


//Esto es una forma de hacer una prueba jest.
test("Hola mundo en Jest",()=>{});


//Esto es una forma de agrupar pruebas en jest
describe("Grupo de pruebas", ()=>{


    test("Hola mundo en Jest",()=>{});

    test("Otro hola mundo en Jest",()=>{});




});