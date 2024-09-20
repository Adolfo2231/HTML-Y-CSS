
// Creamos variable para obtener el elementoID llamado contenido
const contenido = document.getElementById("contenido");

let nombre = "Adolfo";
let edad = 60

//* Mostramos el valor de nombre en el div contenido
// contenido.innerHTML = "<h1>" + nombre + "</h1>";
contenido.innerHTML =`<h1>${nombre}</h1>
<h2>${edad}</h2>`;

let jubilado = "Deberias estar jubilado"
let laboral = "Debes trabajar"

// Al estar el if omite todo lo superior en html
if (edad > 60) {
    contenido.innerHTML= `<h2>${jubilado}</h2>`
}
else {
    contenido.innerHTML = `<h2>${laboral}</h2>`
}



