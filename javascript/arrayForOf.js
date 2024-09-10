const array = []//*Definimos array

//**Save value input user in fruta */
const fruta = prompt("Que fruta desea comprar ?")
    
array.push(`${fruta}`)//*add element user input in the end of array fruta



while (confirm('Desea agregar otro elemento al carrito ?')) {
    const fruta = prompt("que fruta desea comprar ?")
    array.push(fruta)
}

console.log("Compraste")
//**Itera las segun los elementos que tenga el arreglo*/
for (const fruta of array) {
    console.log(`${fruta}`)
    
}