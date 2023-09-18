const text = { };

function miNombre(nombre, apellido) {
   let  nombreCompleto = nombre[0].toUpperCase( ) + nombre.substring(1).toLowerCase( ) + " " + 
   apellido[0].toUpperCase( ) + apellido.substring(1).toLowerCase( )
   return nombreCompleto;
}

function nombreMayus(nombre) {
   return nombre.toUpperCase( );
}

function nombreMinus(nombre1) {
   return nombre1.toLowerCase( );
}

function cantidadLetras(nombre, apellido){
   return nombre.length +  apellido.length;
}



text.miNombre = miNombre;
text.nombreMayus = nombreMayus;
text.nombreMinus = nombreMinus;
text.cantidadLetras = cantidadLetras;



module.exports = text