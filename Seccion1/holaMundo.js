//entre los parentesis se ponen LOS PARÁMETROS DE LA FUNCIÓN.
// entre las llaves se pone EL CUERPO DE LA FUNCIÓN.
//El símbolo ' + ' se usa para concatenar.
function saludar(nombre) {
    return "Hola " + nombre;
}
var mi_nombre = "Juan Tabares";
var resultado = saludar(mi_nombre);
//Aquí esperamos compilar de .ts(TypeScript) a .js(Javascript):
//Se abre la terminal 
// Para compilar de .ts a .js, se usa la expresión 'tsc name_file.ts 
