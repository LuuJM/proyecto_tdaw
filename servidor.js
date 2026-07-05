const express = require('express');

const aplicacion = express();

const puerto = 3000;

aplicacion.set('view engine', 'ejs');

aplicacion.set("views", __dirname + "/views");

aplicacion.use(express.static(__dirname + '/public'));

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