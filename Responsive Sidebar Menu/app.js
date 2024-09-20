const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
    
    /* Cerrara el subMenu de estar abierto al cerrar el sideBar*/
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show')/*Para Mostrar el subMenu*/
    button.classList.toggle('rotate')/*! para rotar el icono de flecha*/

        /**! Para saber si la pestana se encuentra cerrada abrirla al seleccionar uno de los item de la sidebar */
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }

}