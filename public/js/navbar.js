function inicializarNavbar() {
    var btnMenuMovil = document.getElementById('btnMenuMovil');
    var panelMovil = document.getElementById('panelMovil');

    if (btnMenuMovil && panelMovil) {
        btnMenuMovil.addEventListener('click', function () {
            var abierto = panelMovil.classList.toggle('is-open');
            btnMenuMovil.classList.toggle('is-active', abierto);
            btnMenuMovil.setAttribute('aria-expanded', abierto);
        });
    }

    var buscadorNav = document.getElementById('buscadorNav');
    var btnBuscador = document.getElementById('btnBuscador');

    if (buscadorNav && btnBuscador) {
        btnBuscador.addEventListener('click', function (evento) {
            evento.stopPropagation();
            var expandido = buscadorNav.classList.toggle('is-expanded');
            btnBuscador.setAttribute('aria-expanded', expandido);
        });
    }

    var perfilNav = document.getElementById('perfilNav');
    var btnAvatar = document.getElementById('btnAvatar');
    var dropdownPerfil = document.getElementById('dropdownPerfil');

    if (perfilNav && btnAvatar && dropdownPerfil) {
        btnAvatar.addEventListener('click', function (evento) {
            evento.stopPropagation();
            var abierto = dropdownPerfil.classList.toggle('is-open');
            btnAvatar.setAttribute('aria-expanded', abierto);
        });
    }

    // Cierra el buscador expandido y el dropdown de perfil al hacer clic fuera de ellos.
    document.addEventListener('click', function (evento) {
        if (buscadorNav && !buscadorNav.contains(evento.target)) {
            buscadorNav.classList.remove('is-expanded');
            if (btnBuscador) btnBuscador.setAttribute('aria-expanded', 'false');
        }

        if (perfilNav && !perfilNav.contains(evento.target)) {
            dropdownPerfil.classList.remove('is-open');
            if (btnAvatar) btnAvatar.setAttribute('aria-expanded', 'false');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarNavbar);
} else {
    inicializarNavbar();
}
