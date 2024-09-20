// Accediendo a la clase item y devolviendo un array
const className = document.getElementsByClassName("item")
console.log(className)
// Loop Through and Manipulate
for (let i = 0; i < className.length; i++) {

    // Guardando el valor del elemento del array en una variable
    const element = className[i];

    // Agregando texto a todos los elemento con clase item
    element.textContent = (i + 1) + '. ' + element.textContent
}