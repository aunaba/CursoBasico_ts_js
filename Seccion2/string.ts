let pelicula: string="Pel uno"
let serie: string='Serie uno'
let texto: string= `linea uno
linea dos
linea 3
linea 4`

let programas: string= "Mis programas son: "+pelicula+" y "
+ serie
console.log(programas)

//temple string

let programas2: string=`

Mis programas son: ${pelicula} y 
${serie}

`
console.log(programas2)

let edad_act: number=27
let edad_fut: string=`
En unos meses mi edad será ${edad_act +1}.
`
console.log(edad_fut)