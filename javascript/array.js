// // Arreglos en JavaScripts
// const numerosArreglo = [12, 19, 0, 0, 62]
// //Accedemos a los valores del arreglo
// for (let i = 0; i < numerosArreglo.length; i++) {
//     console.log(`Valor en el indice[${i}] = ${numerosArreglo[i]}`)
    
// }

const frutas = ["sandia", "pera"]

// frutas.push("manzana")//*add element in the end of array

// frutas.unshift("pina")//*add element in the start of the array

// const frutaEliminada = frutas.pop()//*delete element in the end of array(devuelve el elemento borrado)

const frutaEliminada = frutas.shift()//*delete element in the start of array(devuelve el elemento borrado)

console.log(frutas)
console.log(frutaEliminada)