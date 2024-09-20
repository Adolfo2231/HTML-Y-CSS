// Creamos variable para obtener el elementoID llamado contenido
const contenido = document.getElementById("contenido");

let nombre = "Adolfo";
let edad = 60

//* Mostramos el valor de nombre en el div contenido
// contenido.innerHTML = "<h1>" + nombre + "</h1>";
anadirContenido(`<h1>${nombre}</h1>
<h2>${edad}</h2>`);

for (let i = 1; i <= edad; i++){
    anadirContenido(`<p>La edad es de: ${i}</p>`);

}

function anadirContenido(nuevoContenido) {
    contenido.innerHTML += nuevoContenido;
}