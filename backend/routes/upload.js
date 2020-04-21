var express = require('express');
var router = express.Router();
const multiPartMiddleware = require('../middleware/upload');

const SubirImagenesController = require('../controllers/upload');

router.post('/upload/:id', multiPartMiddleware, SubirImagenesController.SubirImagenes);