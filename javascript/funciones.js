// funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(numeroAleatorio(10, 21))

// Funcion expresada
const numAzar = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(numAzar(100, 201))

// Funcion de flecha (Arrow function)
const azarFlecha = (min, max = 100) => Math.floor(Math.random() * (max - min)) + min
console.log(azarFlecha(1, 11))