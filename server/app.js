var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const databaseName = dotenv.test


mongoose.connect(`mongodb://localhost/${databaseName}`,{useNewUrlParser:true})
mongoose.set('useCreateIndex', true)

var productRouter = require('./routes/product');
var cartRouter = require('./routes/cart');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);

module.exports = app;
