const express = require('express');

const router = express.Router();

router.get('/', (req,resp) => {
    resp.render('index', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/inicio', (req,resp) => {
    resp.render('index', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/login', (req,resp) => {
    resp.render('public/login', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/inicio-sesion', (req,resp) => {
    resp.render('public/login', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/register', (req,resp) => {
    resp.render('public/register', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/registro', (req,resp) => {
    resp.render('public/register', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/cards', (req,resp) => {
    resp.render('public/cards', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/tarjetas', (req,resp) => {
    resp.render('public/cards', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/catalog', (req,resp) => {
    resp.render('public/catalog', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/catalogo', (req,resp) => {
    resp.render('public/catalog', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

// Rutas privadas: mientras no exista sesión real, forzamos
// usuarioAutenticado = true para simular al lector con cuenta.
// Va con la lista explícita de rutas (no un router.use general)
// para que una URL que no coincide con nada no la herede camino al 404.
const rutasPrivadas = [
    '/account', '/cuenta',
    '/favorites', '/favoritos',
    '/fines', '/multas',
    '/loans', '/prestamos',
    '/notifications', '/notificaciones',
    '/profile', '/perfil',
    '/reservations', '/reservas'
];

router.use(rutasPrivadas, (req, resp, next) => {
    resp.locals.usuarioAutenticado = true;
    next();
});

router.get('/account', (req,resp) => {
    resp.render('private/account', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/cuenta', (req,resp) => {
    resp.render('private/account', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/favorites', (req,resp) => {
    resp.render('private/dashboard/favorites', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/favoritos', (req,resp) => {
    resp.render('private/dashboard/favorites', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/fines', (req,resp) => {
    resp.render('private/dashboard/fines', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/multas', (req,resp) => {
    resp.render('private/dashboard/fines', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/loans', (req,resp) => {
    resp.render('private/dashboard/loans', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/prestamos', (req,resp) => {
    resp.render('private/dashboard/loans', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/notifications', (req,resp) => {
    resp.render('private/dashboard/notifications', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/notificaciones', (req,resp) => {
    resp.render('private/dashboard/notifications', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/profile', (req,resp) => {
    resp.render('private/dashboard/profile', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/perfil', (req,resp) => {
    resp.render('private/dashboard/profile', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/reservations', (req,resp) => {
    resp.render('private/dashboard/reservations', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

router.get('/reservas', (req,resp) => {
    resp.render('private/dashboard/reservations', {
        usuario: "Juan",
        apellido: "Cortez"
    })
});

module.exports = router;