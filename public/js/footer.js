function inicializarFooter() {
    var anioActual = document.getElementById('anioActual');
    if (anioActual) {
        anioActual.textContent = new Date().getFullYear();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFooter);
} else {
    inicializarFooter();
}
