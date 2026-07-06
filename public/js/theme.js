function inicializarTema() {
    var btnTema = document.getElementById('btnTema');
    if (!btnTema) return;

    btnTema.addEventListener('click', function () {
        var esOscuro = document.documentElement.getAttribute('data-theme') === 'dark';
        var nuevoTema = esOscuro ? 'light' : 'dark';

        if (nuevoTema === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('tema', nuevoTema);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarTema);
} else {
    inicializarTema();
}
