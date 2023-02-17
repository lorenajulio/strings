let nombre="Lorena"
let apellido="Julio Babilonia"
let estuiante=`hola,${nombre} ${apellido}`
let estudianteMayus=`${estuiante}`

console.log(estudianteMayus.toUpperCase())

let estudianteMinus=`${estuiante}`

console.log(estudianteMinus.toLocaleLowerCase())

var numeroletrases=`${estuiante}`
console.log(numeroletrases.length)

let primeraLetra=`${nombre}`
console.log(primeraLetra.charAt(0))

let ultimaLetra=`${apellido}`
console.log(ultimaLetra.charAt(14))

let eliminaEspacio=`${estuiante}`
console.log(eliminaEspacio.trim().length)

 let x=`${estuiante}`
 console.log(estuiante.includes(`${nombre}`))