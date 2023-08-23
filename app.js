
const text = require('./modules_text/functions_text.js')

console.clear( );

console.log(text);

console.log(text.miNombre("jOHANNA", "bOLIVAR"));
console.log(text.nombreMayus("mariana"));
console.log(text.nombreMinus("SEBASTIAN"));
console.log(text.cantidadLetras("Diego","Velez"));


let nombreAprendiz = "Santiago";
let apellidoAprendiz = "Carvajal";

let nombreCompletoAprendiz1 = nombreAprendiz + " " + apellidoAprendiz;

console.log(nombreCompletoAprendiz1);

let i = nombreCompletoAprendiz1.length;
while(i > 0){
   console.log(i + ' ' + nombreCompletoAprendiz1.substring(0,i));
   i--;
}
