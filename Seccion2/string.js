var pelicula = "Pel uno";
var serie = 'Serie uno';
var texto = "linea uno\nlinea dos\nlinea 3\nlinea 4";
var programas = "Mis programas son: " + pelicula + " y "
    + serie;
console.log(programas);
//temple string
var programas2 = "\n\nMis programas son: ".concat(pelicula, " y \n").concat(serie, "\n\n");
console.log(programas2);
var edad_act = 27;
var edad_fut = "\nEn unos meses mi edad ser\u00E1 ".concat(edad_act + 1, ".\n");
console.log(edad_fut);
