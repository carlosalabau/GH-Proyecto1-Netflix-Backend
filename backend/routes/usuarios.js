var express = require('express');
var router = express.Router();

const Registro = require('../controllers/registro');

router.post('/registro', Registro);

module.exports = router;
