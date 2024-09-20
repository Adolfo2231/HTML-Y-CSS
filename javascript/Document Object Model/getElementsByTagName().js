// Accediendo a todos los tag <p></p> y devolviendo un array
const paragraphs = document.getElementsByTagName("p");

// Recorriendo el array de todos los tag <p></p> 
for (let i of paragraphs) {

    // Actualizando contenido de cada tag <p></p> 
    i.textContent = "Updated text"
}