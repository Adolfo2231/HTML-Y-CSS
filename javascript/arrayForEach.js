const array = ["manzana", "pera", "banana"]//*Definimos array

//**Save value input user in fruta */
const fruta = prompt("Que fruta desea comprar ?")
    
array.push(`${fruta}`)//*add element user input in the end of array fruta

// *Confirm para asi poder mostrar al cliente si desea o no continuar
while (confirm('Desea agregar otro elemento al carrito ?')) {
    const fruta = prompt("que fruta desea comprar ?")
    array.push(fruta)
}
console.log("Compraste")

// //**Itera las segun los elementos que tenga el arreglo*/
// array.forEach(fruta => console.log(fruta))

array.forEach((fruta, index) =>{
    console.log(`${index}: ${fruta}`)
})

const arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(element => sum += element);
console.log(sum);
