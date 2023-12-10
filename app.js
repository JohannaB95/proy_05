//Se carga la libreria colors para permitir el uso de estilos de colores en la terminal
require('colors');

//Se carga el código que contiene el archivo functions_text.js en la carpeta modules_text
const text = require('./modules_text/functions_text.js')

//Se limpia la consola
console.clear( );

//Se imprime en la consola el contenido del objeto text
console.log(text);

//Se crea una interfaz con titulo, donde se visualiza el resultado de la función miNombre
console.log(`*********************`.red)
console.log(`*  `.red + `Nombre Completo`.bgRed + `  *`.red);
console.log(`*  `.red + text.miNombre("jOHANNA", "bOLIVAR") + `  *`.red);
console.log(`*********************\n`.red)

//Se crea una interfaz con titulo, donde se visualiza el resultado de la función nombreMayus
console.log(`**************************`.blue)
console.log(`*  `.blue + `Nombre en mayúsculas`.bgBlue + `  *`.blue);
console.log(`*        `.blue + text.nombreMayus("mariana") + `         *`.blue);
console.log(`**************************\n`.blue)

//Se crea una interfaz con titulo, donde se visualiza el resultado de la función nombreMinus
console.log(`**************************`.cyan)
console.log(`*  `.cyan + `Nombre en minúsculas`.bgCyan + `  *`.cyan);
console.log(`*       `.cyan + text.nombreMinus("SEBASTIAN") + `        *`.cyan);
console.log(`**************************\n`.cyan)

//Se crea una interfaz con titulo, donde se visualiza el resultado de la función cantidadLetras
console.log(`**************************`.yellow)
console.log(`*   `.yellow + `Cantidad de letras`.bgYellow + `   *`.yellow);
console.log(`*          `.yellow + text.cantidadLetras("Diego", "Velez") + `            *`.yellow);
console.log(`**************************\n`.yellow)

//Se declara una variable llamada nombreAprendiz, que se inicializa con un string
let nombreAprendiz = "Santiago";
//Se declara una variable llamada apellidoAprendiz, que se inicializa con un string
let apellidoAprendiz = "Carvajal";

/*Se declara una variable llamada nombreCompletoAprendiz1 que contendra el valor de la concatenación de 
nombreAprendiz y apellidoAprendiz*/
let nombreCompletoAprendiz1 = nombreAprendiz + " " + apellidoAprendiz;

//Se crea una interfaz que contendra el resultado de disminuir una por una las letras de un nombre completo
console.log(`****************************`.green)
console.log(`*     `.green + nombreCompletoAprendiz1+ `    *`.green);

//Se declara una variable llamada i que contiene la longitud de la cadena nombreCompletoAprendiz1.
let i = nombreCompletoAprendiz1.length;

//Se usa un bucle while en el que se especifica que i debe ser mayor a 0
while(i > 0){
   /*Se imprime en la consola el número i, seguido de una subcadena de nombreCompletoAprendiz1. La 
   subcadena se obtiene utilizando nombreCompletoAprendiz1.substring(0, i).*/
   console.log(`*    `.green + i + ' ' + nombreCompletoAprendiz1.substring(0,i) + `   *`.green);
   //Se reduce el valor de i en 1 en cada iteración del bucle, hasta que la condición sea falsa y se termine el bucle.
   i--;
}


