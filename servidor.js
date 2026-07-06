const express = require('express');

const aplicacion = express();

const puerto = 3000;

aplicacion.set('view engine', 'ejs');

aplicacion.set("views", __dirname + "/views");

aplicacion.use(express.static(__dirname + '/public'));

// Datos disponibles en todas las vistas (header/footer) sin repetirlos en cada render().
// usuarioAutenticado se sobreescribe a true dentro de las rutas privadas (ver rutasPagina.js).
aplicacion.use((req, resp, next) => {
    resp.locals.rutaActual = req.path;
    resp.locals.usuarioAutenticado = false;
    next();
});

aplicacion.use("/", require('./router/rutasPagina'));

aplicacion.get('/', (req, resp) =>{
    resp.send('Pagina de inicio')
});

aplicacion.use((req,resp,next) => {
    resp.status(404).render('404',{
        usuario: "Juan",
        apellido: "Cortez"
    })
});

aplicacion.listen(puerto, () => {
    console.log('Escuchando las peticiones desdel el puerto', puerto)
});