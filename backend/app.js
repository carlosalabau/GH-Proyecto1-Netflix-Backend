const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');

const usuariosRouter = require('./routes/usuarios');
const peliculasRouter = require('./routes/peliculas');
const pedidosRouter = require('./routes/pedidos');
const actoresRouter = require('./routes/actores');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/peliculas', peliculasRouter);
app.use('/pedidos', pedidosRouter);
app.use('/actores', actoresRouter)

module.exports = app;
