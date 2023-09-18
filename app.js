require('colors');

const text = require('./modules_text/functions_text.js')

console.clear( );

console.log(text);

console.log(`*********************`.red)
console.log(`*  `.red + `Nombre Completo`.bgRed + `  *`.red);
console.log(`*  `.red + text.miNombre("jOHANNA", "bOLIVAR") + `  *`.red);
console.log(`*********************\n`.red)

console.log(`**************************`.blue)
console.log(`*  `.blue + `Nombre en mayúsculas`.bgBlue + `  *`.blue);
console.log(`*        `.blue + text.nombreMayus("mariana") + `         *`.blue);
console.log(`**************************\n`.blue)

console.log(`**************************`.cyan)
console.log(`*  `.cyan + `Nombre en minúsculas`.bgCyan + `  *`.cyan);
console.log(`*       `.cyan + text.nombreMinus("SEBASTIAN") + `        *`.cyan);
console.log(`**************************\n`.cyan)

console.log(`**************************`.yellow)
console.log(`*   `.yellow + `Cantidad de letras`.bgYellow + `   *`.yellow);
console.log(`*          `.yellow + text.cantidadLetras("Diego", "Velez") + `            *`.yellow);
console.log(`**************************\n`.yellow)


let nombreAprendiz = "Santiago";
let apellidoAprendiz = "Carvajal";

let nombreCompletoAprendiz1 = nombreAprendiz + " " + apellidoAprendiz;

console.log(`****************************`.green)
console.log(`*     `.green + nombreCompletoAprendiz1+ `    *`.green);

let i = nombreCompletoAprendiz1.length;
while(i > 0){
   console.log(`*    `.green + i + ' ' + nombreCompletoAprendiz1.substring(0,i)+ `   *`.green);
   i--;
}


