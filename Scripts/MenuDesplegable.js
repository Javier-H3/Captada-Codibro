function abrirmenu() {
    document.getElementById("contenido").style.width = "400px";
    document.getElementById("overlay-bg").style.display = "block";
}

function cerrarmenu() {
    document.getElementById("contenido").style.width = "0";
    document.getElementById("overlay-bg").style.display = "none"; 
}

// Cerrar el menú cuando se hace clic fuera del menú
document.addEventListener('click', function(event) {
    const desplegable = document.getElementById("contenido");
    const botonmenu = document.querySelector('.boton-menu');
    const overlayBg = document.getElementById("overlay-bg");

    if (!desplegable.contains(event.target) && !botonmenu.contains(event.target)) {
        cerrarmenu();
    }
});