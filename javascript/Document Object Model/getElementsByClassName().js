
// Accediendo a la clase "highlight"
const highlights = document.getElementsByClassName("highlight");

// for(const (contador) of (variable que almacena la clase)
// .style para acceder a los estilos = " "
for (const highlight of highlights) {
    highlight.style.color = "orange";
    highlight.style.fontWeight = "bold";
    highlight.style.fontSize = "100px" 
}

