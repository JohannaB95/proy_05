//Se declara un objeto vacío llamado text, para agrupar funciones relacionadas con funciones de texto.
const text = { };

//Se declara una función llamada miNombre que tiene dos parámetros, nombre y apellido
function miNombre(nombre, apellido) {
   /*Se declara una variable llamada nombreCompleto que almacenara el resultado de convertir el primer 
   caracter de el parámetro nombre a mayúscula + el resto de nombre convertido a minúsculas + el primer 
   caracter de apellido en mayúscula*/
   let  nombreCompleto = nombre[0].toUpperCase( ) + nombre.substring(1).toLowerCase( ) + " " + 
   apellido[0].toUpperCase( ) + apellido.substring(1).toLowerCase( )
   //Se retornara el resultado del formateo del nombre completo
   return nombreCompleto;
}

//Se declara una función llamada nombreMayus que tiene un parámetro nombre
function nombreMayus(nombre) {
   //Se retornara el nombre convertido a mayúsculas
   return nombre.toUpperCase( );
}

//Se declara una función llamada nombreMinus que tiene un parámetro nombre1
function nombreMinus(nombre1) {
   //Se retornara el nombre convertido a minúsculas
   return nombre1.toLowerCase( );
}

//Se declara una función llamada cantidadLetras que tiene dos parámetros nombre y apellido
function cantidadLetras(nombre, apellido){
   //Se retornara la cantidad total sumada de caracteres de nombre y apellido
   return nombre.length +  apellido.length;
}

//Se asignan las funciones de texto como propiedades del objeto text. Esto crea métodos asociados con el objeto text.
text.miNombre = miNombre;
text.nombreMayus = nombreMayus;
text.nombreMinus = nombreMinus;
text.cantidadLetras = cantidadLetras;

//Se exporta el objeto text para que pueda ser utilizado en otros archivos. Esto se logra usando module.exports.
module.exports = text