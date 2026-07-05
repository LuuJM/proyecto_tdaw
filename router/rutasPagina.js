const express = require('express');

const router = express.Router();

router.get('/', (req,resp) => {
    resp.send('Pagina de inicio')
})

module.exports = router;